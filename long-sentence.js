(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const form = $("[data-sentence-form]");
  const input = $("[data-sentence-input]");
  const result = $("[data-sentence-result]");
  const playButton = $("[data-sentence-play]");
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
  const connectorRules = [
    { pattern: /\balthough\b|\beven though\b|\bthough\b/i, label: "让步关系", meaning: "虽然……但是……" },
    { pattern: /\bbecause\b|\bsince\b|\bas\b/i, label: "原因关系", meaning: "因为……所以……" },
    { pattern: /\bif\b|\bunless\b/i, label: "条件关系", meaning: "如果……就……" },
    { pattern: /\bwhen\b|\bwhile\b|\bafter\b|\bbefore\b/i, label: "时间关系", meaning: "当……时 / 在……之后" },
    { pattern: /\bwhich\b|\bwho\b|\bthat\b/i, label: "定语从句", meaning: "补充说明前面的名词" },
    { pattern: /\bso that\b|\bso\b|\btherefore\b/i, label: "结果或目的", meaning: "因此…… / 为了……" },
    { pattern: /\bbut\b|\bhowever\b|\balthough\b/i, label: "转折关系", meaning: "前后信息形成对比" }
  ];
  const verbHints = new Set("am is are was were be been have has had do does did will would can could should may might must started become want practice use make find give take explain show learn read write build understand improve work help need provide create design".split(" "));

  const clean = (value) => value.trim().replace(/\s+/g, " ");
  const splitChunks = (sentence) => sentence.split(/(?<=[,;:])\s+|\s+(?=(?:although|because|since|if|unless|when|while|which|who|that|but|however|therefore|so that)\b)/gi).map((text) => text.trim()).filter(Boolean);
  const sentenceWords = (sentence) => sentence.toLowerCase().replace(/[^a-z'\s-]/g, " ").split(/\s+/).filter(Boolean);
  const getLogic = (sentence) => {
    const matches = connectorRules.filter((rule) => rule.pattern.test(sentence));
    return matches.length ? matches.map((item) => item.label).filter((item, index, list) => list.indexOf(item) === index).join(" · ") : "并列或递进关系";
  };
  const getMeaning = (sentence) => {
    const rule = connectorRules.find((item) => item.pattern.test(sentence));
    if (rule) return "先识别“" + rule.meaning + "”的逻辑，再把主句和补充信息分别理解。";
    return "先理解句子的核心动作，再把前后修饰信息一层层放回去。";
  };
  const getCore = (sentence) => {
    const chunks = splitChunks(sentence);
    const main = chunks.find((chunk) => !/^(although|because|since|if|unless|when|while|which|who|that|but|however|therefore|so that)\b/i.test(chunk)) || chunks[0] || sentence;
    const words = sentenceWords(main);
    const verbIndex = words.findIndex((word) => verbHints.has(word) || /(?:ed|ing|s)$/.test(word));
    if (verbIndex > 0) return (words.slice(0, verbIndex).join(" ") + " + " + words[verbIndex] + " + " + words.slice(verbIndex + 1).join(" ")).replace(/ \+ $/, "");
    return words.slice(0, Math.min(4, words.length)).join(" ") + " …";
  };
  const chunkNote = (chunk, index, sentence) => {
    const match = connectorRules.find((rule) => rule.pattern.test(chunk));
    if (match) return match.label + "：" + match.meaning + "。";
    if (index === 0 && splitChunks(sentence).length > 1) return "主句候选：先找出谁在做什么。";
    return "补充信息：先不急着逐词翻译，确认它修饰的是哪一部分。";
  };
  const render = (sentence) => {
    const chunks = splitChunks(sentence);
    $("[data-sentence-original]").textContent = sentence;
    $("[data-sentence-core]").textContent = getCore(sentence);
    $("[data-sentence-logic]").textContent = getLogic(sentence);
    $("[data-sentence-meaning]").textContent = getMeaning(sentence);
    $("[data-sentence-advice]").textContent = chunks.length > 1 ? "先读主句，再读每个逗号后的补充信息；最后合并成完整意思。" : "先圈出谓语，再确认主语和宾语，最后处理修饰成分。";
    $("[data-sentence-core-note]").textContent = "识别到 " + chunks.length + " 个阅读区块。先抓主干，再回看从句。";
    $("[data-sentence-logic-note]").textContent = "连接词是路标，不要把每个词都当成同等重要。";
    $("[data-sentence-chunks]").innerHTML = chunks.map((chunk, index) => {
      const match = connectorRules.find((rule) => rule.pattern.test(chunk));
      const label = match ? match.label : (index === 0 ? "主句候选" : "补充信息");
      return "<article class=\"sentence-chunk\"><span class=\"sentence-chunk-label\">" + String(index + 1).padStart(2, "0") + " · " + escapeHtml(label) + "</span><strong class=\"sentence-chunk-text\">" + escapeHtml(chunk) + "</strong><span class=\"sentence-chunk-note\">" + escapeHtml(chunkNote(chunk, index, sentence)) + "</span></article>";
    }).join("");
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const sentence = clean(input.value);
    if (sentence.length < 8) { input.focus(); input.setCustomValidity("请先输入一个完整的英文句子。"); input.reportValidity(); input.setCustomValidity(""); return; }
    render(sentence);
  });
  playButton.addEventListener("click", () => {
    const sentence = clean(input.value);
    if (window.playEnglishText && sentence) window.playEnglishText(sentence, { rate: 0.9, onStart: () => { playButton.textContent = "▶ 播放中"; }, onEnd: () => { playButton.textContent = "▶ 常速朗读"; } });
  });
  form.dispatchEvent(new Event("submit", { cancelable: true }));
})();
