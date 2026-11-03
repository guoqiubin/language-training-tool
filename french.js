(() => {
  "use strict";
  const topics = [
    { id: "greetings", title: "打招呼", description: "先会自然问候", items: [
      ["Bonjour !", "/bɔ̃.ʒuʁ/", "你好！", "最基础、最常用的法语问候语，白天见面时可以使用。", "Bonjour, comment ça va ?", "你好，你最近怎么样？"],
      ["Bonsoir !", "/bɔ̃.swaʁ/", "晚上好！", "傍晚或晚上见面时，使用 bonsoir。", "Bonsoir, Madame.", "晚上好，女士。"],
      ["Comment ça va ?", "/kɔ.mɑ̃ sa va/", "你好吗？", "字面意思是“事情进展得怎么样”，是很自然的问候。", "Comment ça va aujourd'hui ?", "你今天好吗？"],
      ["Ça va bien, merci.", "/sa va bjɛ̃ mɛʁ.si/", "我很好，谢谢。", "回答问候时，可以用 ça va bien 表示状态很好。", "Ça va bien, merci. Et toi ?", "我很好，谢谢。你呢？"],
      ["À bientôt !", "/a bjɛ̃.to/", "回头见！", "à bientôt 表示希望不久后再次见面。", "À bientôt, mon ami !", "回头见，我的朋友！"],
      ["Au revoir !", "/o ʁə.vwaʁ/", "再见！", "最常见的正式道别表达。", "Au revoir et bonne journée !", "再见，祝你今天愉快！"]
    ] },
    { id: "self", title: "自我介绍", description: "说出你的名字", items: [
      ["Je m'appelle Anna.", "/ʒə ma.pɛl a.na/", "我叫 Anna。", "Je m'appelle… 是最基础的自我介绍句型。", "Je m'appelle David.", "我叫 David。"],
      ["Je suis étudiant.", "/ʒə sɥi e.ty.djɑ̃/", "我是学生。", "男性说 étudiant，女性可以说 étudiante。", "Je suis étudiant en français.", "我是法语学生。"],
      ["Je viens de Chine.", "/ʒə vjɛ̃ də ʃin/", "我来自中国。", "venir de 表示来自某地。", "Je viens de Bangkok.", "我来自曼谷。"],
      ["J'habite à Bangkok.", "/ʒa.bit a baŋ.kɔk/", "我住在曼谷。", "habiter à 表示居住在某地。", "J'habite à Paris.", "我住在巴黎。"],
      ["Enchanté !", "/ɑ̃.ʃɑ̃.te/", "很高兴认识你！", "男性通常说 enchanté，女性可以说 enchantée，发音相同。", "Enchanté de faire votre connaissance.", "很高兴认识您。"],
      ["Je parle un peu français.", "/ʒə paʁl œ̃ pø fʁɑ̃.sɛ/", "我会说一点法语。", "un peu 表示“一点”，可以降低开口压力。", "Je parle un peu français, mais j'apprends encore.", "我会说一点法语，但我还在学习。"]
    ] }
  ];
  const stateKey = "french-training-progress";
  const state = JSON.parse(localStorage.getItem(stateKey) || "{}");
  let topicIndex = 0;
  let itemIndex = 0;
  const $ = (selector) => document.querySelector(selector);
  const currentTopic = () => topics[topicIndex];
  const currentItem = () => currentTopic().items[itemIndex];
  function renderTopics() {
    $("#french-topics").innerHTML = topics.map((topic, index) => `<button class="french-topic-button ${index === topicIndex ? "active" : ""}" type="button" data-topic="${index}"><span>0${index + 1}</span><strong>${topic.title}</strong><small>${topic.description} · ${topic.items.length} 句</small></button>`).join("");
    document.querySelectorAll(".french-topic-button").forEach((button) => button.addEventListener("click", () => { topicIndex = Number(button.dataset.topic); itemIndex = 0; renderAll(); }));
  }
  function renderLesson() {
    const topic = currentTopic();
    const item = currentItem();
    const key = `${topic.id}-${itemIndex}`;
    $("#french-topic-label").textContent = topic.title;
    $("#french-position").textContent = `${itemIndex + 1} / ${topic.items.length}`;
    $("#french-card").innerHTML = `<article class="french-lesson"><p class="section-kicker">LISTEN & REPEAT · 先听再说</p><h2>${item[0]}</h2><p class="ipa">${item[1]}</p><p class="meaning">${item[2]}</p><p class="note">${item[3]}</p><div class="french-actions"><button class="french-action primary" id="french-normal" type="button">▶ 常速朗读</button><button class="french-action" id="french-slow" type="button">🐢 慢速朗读</button><button class="french-action" id="french-done" type="button">${state[key] ? "✓ 已练习" : "标记为已练习"}</button></div><div class="french-sentence"><p>放进一个小句子</p><strong>${item[4]}</strong><p>${item[5]}</p></div></article>`;
    $("#french-normal").addEventListener("click", () => window.playFrenchText?.(item[0], { rate: .86 }));
    $("#french-slow").addEventListener("click", () => window.playFrenchText?.(item[0], { rate: .58 }));
    $("#french-done").addEventListener("click", () => { state[key] = true; localStorage.setItem(stateKey, JSON.stringify(state)); renderLesson(); });
  }
  function renderAll() { renderTopics(); renderLesson(); }
  $("#french-prev").addEventListener("click", () => { itemIndex = (itemIndex - 1 + currentTopic().items.length) % currentTopic().items.length; renderLesson(); });
  $("#french-next").addEventListener("click", () => { itemIndex = (itemIndex + 1) % currentTopic().items.length; renderLesson(); });
  renderAll();
})();
