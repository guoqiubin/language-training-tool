(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const form = $("[data-sentence-form]");
  const input = $("[data-sentence-input]");
  const result = $("[data-sentence-result]");
  const playButton = $("[data-sentence-play]");
  const translationToggle = $("[data-sentence-translation-toggle]");
  const translationContent = $("[data-sentence-translation]");
  const translationNote = $("[data-sentence-translation-note]");
  if (!form || !input || !result) return;

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));
  const clean = (value) => String(value).trim().replace(/\s+/g, " ");
  const connectorRules = [
    { pattern: /\b(?:although|even though|though)\b/i, label: "让步状语从句", meaning: "虽然……但是……" },
    { pattern: /\b(?:because|since|as)\b/i, label: "原因状语从句", meaning: "因为……所以……" },
    { pattern: /\b(?:if|unless)\b/i, label: "条件状语从句", meaning: "如果……就……" },
    { pattern: /\b(?:when|while|after|before)\b/i, label: "时间状语从句", meaning: "当……时 / 在……之后" },
    { pattern: /\b(?:which|who|whom|whose)\b/i, label: "定语从句", meaning: "补充说明前面的名词" },
    { pattern: /\b(?:so that|in order that)\b/i, label: "目的状语从句", meaning: "为了达到某个目的" },
    { pattern: /\b(?:more|less)[\s\S]*?\bthan\b/i, label: "比较结构", meaning: "比较两种表现或程度" }
  ];
  const verbHints = new Set("am is are was were be been have has had do does did will would can could should may might must started become want practice use make find give take explain show learn read write build understand improve work help need provide create design represents benefit".split(" "));
  const knownTranslations = new Map([
    ["Although the project started as a small experiment, it has gradually become a useful tool for learners who want to practice English every day.", "虽然这个项目最初只是一个小实验，但它逐渐变成了一个对希望每天练习英语的学习者很有用的工具。"],
    ["This represents a practical evolutionary solution: an animal feeding in unpredictable conditions may benefit more from reasonable performance across several functions than from outstanding performance in only one.", "这代表了一种实用的进化解决方案：在不可预测的环境中进食的动物，相比只在某一项功能上表现出色，更可能从多项功能都保持合理表现中获益。"]
  ]);

  const words = (sentence) => sentence.toLowerCase().replace(/[^a-z's-]/g, " ").split(/\s+/).filter(Boolean);
  const splitChunks = (sentence) => sentence
    .split(/(?<=[,;:])\s+|\s+(?=(?:although|because|since|if|unless|when|while|which|who|whom|whose|but|however|therefore|so that)\b)/gi)
    .map((item) => item.trim())
    .filter(Boolean);
  const getLogic = (sentence) => {
    const labels = connectorRules.filter((rule) => rule.pattern.test(sentence)).map((rule) => rule.label);
    return labels.length ? [...new Set(labels)].join(" · ") : "并列或递进关系";
  };
  const getMeaning = (sentence) => {
    const rule = connectorRules.find((item) => item.pattern.test(sentence));
    return rule ? "先识别“" + rule.meaning + "”的逻辑，再把主句和从句分别理解。" : "先理解句子的核心动作，再把前后修饰信息一层层放回去。";
  };
  const getCore = (sentence) => {
    const main = splitChunks(sentence).find((chunk) => !/^(although|because|since|if|unless|when|while|which|who|whom|whose|but|however|therefore|so that)\b/i.test(chunk)) || sentence;
    const sentenceWords = words(main);
    const verbIndex = sentenceWords.findIndex((word) => verbHints.has(word) || /(?:ed|ing|s)$/.test(word));
    if (verbIndex > 0) return (sentenceWords.slice(0, verbIndex).join(" ") + " + " + sentenceWords[verbIndex] + " + " + sentenceWords.slice(verbIndex + 1).join(" ")).trim();
    return sentenceWords.slice(0, Math.min(5, sentenceWords.length)).join(" ") + " …";
  };
  const getTypes = (sentence) => {
    const types = [];
    if (/(?:more|less)[\s\S]*?\bthan\b/i.test(sentence)) types.push(["比较结构", true]);
    if (/\b(?:although|even though|though|because|since|if|unless|when|while|after|before)\b/i.test(sentence)) types.push(["状语从句", false]);
    if (/\b(?:which|who|whom|whose)\b/i.test(sentence)) types.push(["定语从句", false]);
    if (/\b(?:think|believe|know|say|show|find|hope|expect)\b[^,.!?]*\bthat\b/i.test(sentence)) types.push(["宾语从句", false]);
    if (/\b\w+ing\b/.test(sentence)) types.push(["分词短语", true]);
    if (!types.length) types.push(["主谓结构", false]);
    return [...new Map(types.map((item) => [item[0], item])).values()];
  };
  const node = (label, text, note, children = [], kind = "complement") => ({ label, text, note, children, kind });
  const buildStructure = (sentence) => {
    const colonIndex = sentence.indexOf(":");
    if (colonIndex > 0) {
      const main = sentence.slice(0, colonIndex).trim();
      const explanation = sentence.slice(colonIndex + 1).trim();
      const children = [node("解释 / 同位信息", explanation, "冒号后进一步说明前面的结论。", [], "clause")];
      const ing = explanation.match(/\b[a-z][a-z-]*ing\b[^,]*(?=\s+(?:may|can|will|has|is|are|was|were)\b)/i);
      if (ing) children[0].children.push(node("分词短语", ing[0], "分词短语修饰前面的名词，说明它正在进行的动作。", [], "modifier"));
      if (/\b(?:more|less)[\s\S]*?\bthan\b/i.test(explanation)) {
        const comparison = explanation.match(/\b(?:more|less)[\s\S]*?\bthan\b[\s\S]*$/i);
        if (comparison) children[0].children.push(node("比较结构", comparison[0], "more...than... 比较两种表现或程度。", [], "complement"));
      }
      return node("主句", main, "先抓住主语和核心谓语。", children, "main");
    }
    const objectClause = sentence.match(/^(.*?\b(?:observed|found|showed|said|think|believe|know|hope|expect)\b)\s+(that|whether|if)\s+(.+)$/i);
    if (objectClause) {
      const main = objectClause[1].trim();
      const marker = objectClause[2];
      const clause = objectClause[3].trim();
      const clauseNode = node("宾语从句 · " + marker, marker + " " + clause, "整体作主句谓语的宾语，回答“观察到/认为了什么”。", [], "clause");
      const clauseParts = clause.match(/^(.+?)\s+\b(shifted|moved|changed|was|were|is|are|has|have|had|may|can|will|could|would|should|became|remained|appeared|seemed|increased|decreased|benefit|benefits)\b\s+(.+)$/i);
      if (clauseParts) {
        const subject = clauseParts[1].trim();
        const verb = clauseParts[2];
        let predicate = clauseParts[3].trim();
        const subjectModifier = subject.match(/^(.+?)\s+(of\s+.+)$/i);
        if (subjectModifier) {
          clauseNode.children.push(node("从句主语", subjectModifier[1], "先确认这一层是谁或什么在执行动作。", [node("介词短语", subjectModifier[2], "of 短语补充说明这个名词的范围或所属关系。", [], "modifier")], "main"));
        } else {
          clauseNode.children.push(node("从句主语", subject, "先确认这一层是谁或什么在执行动作。", [], "main"));
        }
        clauseNode.children.push(node("从句谓语", verb, "这是从句内部的核心动作或状态。", [], "main"));
        const complementParts = [];
        const direction = predicate.match(/^(.*?\b(?:towards|to|into|from)\b\s+.+?)(?=\s+\bat\b|\s+\bin\b|$)/i);
        if (direction) {
          complementParts.push(node("方向 / 结果补语", direction[1].trim(), "说明动作朝向哪里或产生什么变化。", [], "complement"));
          predicate = predicate.slice(direction[1].length).trim();
        }
        const time = predicate.match(/\b(?:at|in|on|during)\s+[^,]+$/i);
        if (time) {
          complementParts.push(node("时间 / 地点状语", time[0].trim(), "补充动作发生的时间或地点。", [], "modifier"));
          predicate = predicate.slice(0, predicate.length - time[0].length).trim();
        }
        if (predicate) complementParts.unshift(node("核心补充信息", predicate, "补充说明动作的对象、程度或结果。", [], "complement"));
        clauseNode.children.push(...complementParts);
      } else {
        clauseNode.children.push(node("从句内容", clause, "继续寻找这一层的主语和谓语。", [], "complement"));
      }
      return node("主句", main, "先找出主句的主语和谓语，再向下进入宾语从句。", [clauseNode], "main");
    }
    const clauseMatch = sentence.match(/\b(although|because|since|if|unless|when|while)\b/i);
    if (clauseMatch && clauseMatch.index > 0) {
      const main = sentence.slice(0, clauseMatch.index).trim();
      const clause = sentence.slice(clauseMatch.index).trim();
      return node("主句", main, "主句先说清楚谁做什么。", [node("从句 · " + clauseMatch[1], clause, "连接词标记了这一层原因、条件或时间逻辑。", [], "clause")] , "main");
    }
    const subjectVerb = sentence.match(/^(.+?)\s+\b(am|is|are|was|were|has|have|had|do|does|did|can|could|will|would|should|may|might|must|[a-z]+(?:ed|ing))\b\s+(.+)$/i);
    if (subjectVerb) {
      return node("句子主干", subjectVerb[1] + " + " + subjectVerb[2], "先找主语和谓语，再把后面的信息作为分支读回去。", [node("补充成分", subjectVerb[3], "说明动作的对象、方式、方向或时间。", [], "complement")], "main");
    }
    return node("句子主干", sentence, "先找主语、谓语，再处理修饰成分。", [], "main");
  };
  const renderStructure = (item, depth = 0) => "<div class=\"structure-node is-" + escapeHtml(item.kind) + (depth === 0 ? " is-root" : "") + "\"><div class=\"structure-node-card\"><span class=\"structure-node-label\">" + escapeHtml(item.label) + "</span><strong class=\"structure-node-text\">" + escapeHtml(item.text) + "</strong><span class=\"structure-node-note\">" + escapeHtml(item.note) + "</span></div>" + (item.children.length ? "<div class=\"structure-node-children\">" + item.children.map((child) => renderStructure(child, depth + 1)).join("") + "</div>" : "") + "</div>";
  const chunkNote = (chunk, index, sentence) => {
    const match = connectorRules.find((rule) => rule.pattern.test(chunk));
    if (match) return match.label + "：" + match.meaning + "。";
    if (/\b\w+ing\b/.test(chunk)) return "分词或动作修饰：先确认它修饰哪个名词。";
    if (index === 0 && splitChunks(sentence).length > 1) return "主句候选：先找出谁在做什么。";
    return "补充信息：先确认它修饰的是哪一部分。";
  };
  const fetchTranslation = async (sentence) => {
    if (knownTranslations.has(sentence)) return knownTranslations.get(sentence);
    const url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(sentence) + "&langpair=en|zh-CN";
    const response = await fetch(url);
    if (!response.ok) throw new Error("translation failed");
    const data = await response.json();
    const translated = data && data.responseData && data.responseData.translatedText;
    if (!translated) throw new Error("translation empty");
    return translated;
  };
  const render = (sentence) => {
    const chunks = splitChunks(sentence);
    const original = $("[data-sentence-original]");
    original.textContent = sentence;
    original.dataset.sourceSentence = sentence;
    $("[data-sentence-core]").textContent = getCore(sentence);
    $("[data-sentence-logic]").textContent = getLogic(sentence);
    $("[data-sentence-meaning]").textContent = getMeaning(sentence);
    $("[data-sentence-advice]").textContent = chunks.length > 1 ? "先读主句，再逐层读取从句和补充信息；最后合并成完整意思。" : "先圈出谓语，再确认主语和宾语，最后处理修饰成分。";
    $("[data-sentence-core-note]").textContent = "识别到 " + chunks.length + " 个一级阅读区块；从句会在结构图中继续展开。";
    $("[data-sentence-logic-note]").textContent = "连接词是路标，不要把每个词都当成同等重要。";
    $("[data-sentence-types]").innerHTML = getTypes(sentence).map(([label, structure]) => "<span class=\"sentence-type-tag" + (structure ? " is-structure" : "") + "\">" + escapeHtml(label) + "</span>").join("");
    $("[data-sentence-structure]").innerHTML = renderStructure(buildStructure(sentence));
    $("[data-sentence-chunks]").innerHTML = chunks.map((chunk, index) => {
      const match = connectorRules.find((rule) => rule.pattern.test(chunk));
      const label = match ? match.label : (index === 0 ? "主句候选" : "补充信息");
      return "<article class=\"sentence-chunk\"><span class=\"sentence-chunk-label\">" + String(index + 1).padStart(2, "0") + " · " + escapeHtml(label) + "</span><strong class=\"sentence-chunk-text\">" + escapeHtml(chunk) + "</strong><span class=\"sentence-chunk-note\">" + escapeHtml(chunkNote(chunk, index, sentence)) + "</span></article>";
    }).join("");
    translationContent.hidden = true;
    translationContent.textContent = "";
    translationToggle.textContent = "显示翻译";
    translationNote.textContent = "先自己判断，再点击显示完整翻译。点击后会请求在线翻译服务。";
    translationToggle.dataset.sentence = sentence;
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
    requestAnimationFrame(() => {
      if (original.textContent !== sentence) original.textContent = sentence;
    });
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const sentence = clean(input.value);
    if (sentence.length < 8) {
      input.focus();
      input.setCustomValidity("请先输入一个完整的英文句子。");
      input.reportValidity();
      input.setCustomValidity("");
      return;
    }
    render(sentence);
  });
  translationToggle.addEventListener("click", async () => {
    if (!translationContent.hidden) { translationContent.hidden = true; translationToggle.textContent = "显示翻译"; return; }
    translationContent.hidden = false;
    translationContent.textContent = "正在获取翻译……";
    translationToggle.disabled = true;
    try {
      translationContent.textContent = await fetchTranslation(translationToggle.dataset.sentence || clean(input.value));
      translationNote.textContent = "翻译用于辅助理解；学习时仍建议先按结构自己判断。";
      translationToggle.textContent = "隐藏翻译";
    } catch (error) {
      translationContent.textContent = "暂时没有获取到在线翻译。你可以先按照“句子主干、结构图和意群拆解”完成判断。";
      translationNote.textContent = "网络翻译服务暂时不可用，结构分析仍可正常使用。";
    } finally {
      translationToggle.disabled = false;
    }
  });
  playButton.addEventListener("click", () => {
    const sentence = clean(input.value);
    if (window.playEnglishText && sentence) window.playEnglishText(sentence, { rate: 0.9, onStart: () => { playButton.textContent = "▶ 播放中"; }, onEnd: () => { playButton.textContent = "▶ 常速朗读"; } });
  });
  form.dispatchEvent(new Event("submit", { cancelable: true }));
})();
