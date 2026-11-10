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
  const clean = (value) => value.trim().replace(/s+/g, " ");
  const connectorRules = [
    { pattern: /although|even though|though/i, label: "让步状语从句", meaning: "虽然……但是……" },
    { pattern: /because|since|as/i, label: "原因状语从句", meaning: "因为……所以……" },
    { pattern: /if|unless/i, label: "条件状语从句", meaning: "如果……就……" },
    { pattern: /when|while|after|before/i, label: "时间状语从句", meaning: "当……时 / 在……之后" },
    { pattern: /which|who|whom|whose/i, label: "定语从句", meaning: "补充说明前面的名词" },
    { pattern: /so that|in order that/i, label: "目的状语从句", meaning: "为了达到某个目的" },
    { pattern: /more[sS]*than|less[sS]*than/i, label: "比较结构", meaning: "比较两种表现或程度" }
  ];
  const verbHints = new Set("am is are was were be been have has had do does did will would can could should may might must started become want practice use make find give take explain show learn read write build understand improve work help need provide create design represents benefit".split(" "));
  const knownTranslations = new Map([
    ["Although the project started as a small experiment, it has gradually become a useful tool for learners who want to practice English every day.", "虽然这个项目最初只是一个小实验，但它逐渐变成了一个对希望每天练习英语的学习者很有用的工具。"],
    ["This represents a practical evolutionary solution: an animal feeding in unpredictable conditions may benefit more from reasonable performance across several functions than from outstanding performance in only one.", "这代表了一种实用的进化解决方案：在不可预测的环境中进食的动物，相比只在某一项功能上表现出色，更可能从多项功能都保持合理表现中获益。"]
  ]);

  const words = (sentence) => sentence.toLowerCase().replace(/[^a-z's-]/g, " ").split(/s+/).filter(Boolean);
  const splitChunks = (sentence) => sentence.split(/(?<=[,;:])s+|s+(?=(?:although|because|since|if|unless|when|while|which|who|whom|whose|but|however|therefore|so that))/gi).map((item) => item.trim()).filter(Boolean);
  const getLogic = (sentence) => {
    const labels = connectorRules.filter((rule) => rule.pattern.test(sentence)).map((rule) => rule.label);
    return labels.length ? [...new Set(labels)].join(" · ") : "并列或递进关系";
  };
  const getMeaning = (sentence) => {
    const rule = connectorRules.find((item) => item.pattern.test(sentence));
    return rule ? "先识别“" + rule.meaning + "”的逻辑，再把主句和从句分别理解。" : "先理解句子的核心动作，再把前后修饰信息一层层放回去。";
  };
  const getCore = (sentence) => {
    const main = splitChunks(sentence).find((chunk) => !/^(although|because|since|if|unless|when|while|which|who|whom|whose|but|however|therefore|so that)/i.test(chunk)) || sentence;
    const sentenceWords = words(main);
    const verbIndex = sentenceWords.findIndex((word) => verbHints.has(word) || /(?:ed|ing|s)$/.test(word));
    if (verbIndex > 0) return (sentenceWords.slice(0, verbIndex).join(" ") + " + " + sentenceWords[verbIndex] + " + " + sentenceWords.slice(verbIndex + 1).join(" ")).replace(/ + $/, "");
    return sentenceWords.slice(0, Math.min(5, sentenceWords.length)).join(" ") + " …";
  };
  const getTypes = (sentence) => {
    const types = [];
    if (/more[sS]*than|less[sS]*than/i.test(sentence)) types.push(["比较结构", true]);
    if (/(although|even though|though|because|since|if|unless|when|while|after|before)/i.test(sentence)) types.push(["状语从句", false]);
    if (/(which|who|whom|whose)/i.test(sentence)) types.push(["定语从句", false]);
    if (/(think|believe|know|say|show|find|hope|expect)[^,.!?]*that/i.test(sentence)) types.push(["宾语从句", false]);
    if (/w+ing/.test(sentence)) types.push(["分词短语", true]);
    if (!types.length) types.push(["主谓结构", false]);
    return [...new Map(types.map((item) => [item[0], item])).values()];
  };
  const node = (label, text, note, children = []) => ({ label, text, note, children });
  const buildStructure = (sentence) => {
    const colonIndex = sentence.indexOf(":");
    if (colonIndex > 0) {
      const main = sentence.slice(0, colonIndex).trim();
      const explanation = sentence.slice(colonIndex + 1).trim();
      const children = [node("解释 / 同位信息", explanation, "冒号后进一步说明前面的结论。")];
      const ing = explanation.match(/[a-z][a-z-]*ing[^,]*(?=s+(?:may|can|will|has|is|are|was|were))/i);
      if (ing) children[0].children.push(node("分词短语", ing[0], "feeding... 修饰前面的 animal，说明它正在进行的动作。"));
      if (/more[sS]*than/i.test(explanation)) children[0].children.push(node("比较结构", explanation.match(/more[sS]*$/i)[0], "more...than... 比较多项功能表现和单项突出表现。"));
      return node("主句", main, "先抓住主语和核心谓语。", children);
    }
    const clauseMatch = sentence.match(/(although|because|since|if|unless|when|while)/i);
    if (clauseMatch && clauseMatch.index > 0) {
      const main = sentence.slice(0, clauseMatch.index).trim();
      const clause = sentence.slice(clauseMatch.index).trim();
      return node("主句", main, "主句先说清楚谁做什么。", [node("从句 · " + clauseMatch[1], clause, "连接词标记了这层补充逻辑。")]);
    }
    return node("句子主干", sentence, "先找主语、谓语，再处理修饰成分。");
  };
  const renderStructure = (item) => "<div class=\"structure-node\"><span class=\"structure-node-label\">" + escapeHtml(item.label) + "</span><strong class=\"structure-node-text\">" + escapeHtml(item.text) + "</strong><span class=\"structure-node-note\">" + escapeHtml(item.note) + "</span>" + (item.children.length ? "<div class=\"structure-node-children\">" + item.children.map(renderStructure).join("") + "</div>" : "") + "</div>";
  const chunkNote = (chunk, index, sentence) => {
    const match = connectorRules.find((rule) => rule.pattern.test(chunk));
    if (match) return match.label + "：" + match.meaning + "。";
    if (/w+ing/.test(chunk)) return "分词或动作修饰：先确认它修饰哪个名词。";
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
    $("[data-sentence-original]").textContent = sentence;
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
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const sentence = clean(input.value);
    if (sentence.length < 8) { input.focus(); input.setCustomValidity("请先输入一个完整的英文句子。"); input.reportValidity(); input.setCustomValidity(""); return; }
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
