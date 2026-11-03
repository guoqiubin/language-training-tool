const quests = [
  { id: "letter", type: "LETTER · 书信", title: "A note from a friend", context: "读一张朋友留下的便签，找出见面的时间。", text: "Hi Mia, I will meet you at the coffee shop at 3 p.m. Please bring the blue book. See you soon, Anna.", translation: "嗨，Mia。我会在下午 3 点和你在咖啡店见面。请带上那本蓝色的书。待会儿见，Anna。", question: "What should Mia bring?", questionMeaning: "Mia 应该带什么？", options: ["A blue book", "A cup of coffee", "A new bag"], answer: "A blue book", explanation: "bring the blue book 表示“带上那本蓝色的书”。bring 是带来，blue book 是蓝色的书。", words: [["meet", "/miːt/", "见面"], ["bring", "/brɪŋ/", "带来"], ["soon", "/suːn/", "很快；待会儿"]] },
  { id: "ad", type: "ADVERTISEMENT · 广告", title: "A weekend sale", context: "读一则商店广告，找出折扣适用的商品。", text: "Weekend Sale! Get 20% off all shoes this Saturday and Sunday. Visit us before 8 p.m. and bring this ad.", translation: "周末促销！本周六和周日所有鞋子打八折。请在晚上 8 点前到店，并带上这则广告。", question: "What is 20% off?", questionMeaning: "什么商品打八折？", options: ["All shoes", "All bags", "All drinks"], answer: "All shoes", explanation: "all shoes 表示“所有鞋子”。广告中 20% off all shoes 是关键信息。", words: [["sale", "/seɪl/", "促销"], ["shoes", "/ʃuːz/", "鞋子"], ["before", "/bɪˈfɔːr/", "在……之前"]] },
  { id: "game", type: "GAME · 游戏说明", title: "How to start the game", context: "读游戏开始提示，找出玩家需要先做的事。", text: "Welcome to Star Island! Choose a character, collect three keys, and open the old door. You can save your game at any time.", translation: "欢迎来到星星岛！选择一个角色，收集三把钥匙，然后打开那扇旧门。你可以随时保存游戏。", question: "What should the player do first?", questionMeaning: "玩家首先应该做什么？", options: ["Choose a character", "Open the old door", "Save the game"], answer: "Choose a character", explanation: "choose a character 位于说明的第一步，表示“选择一个角色”。first 在题目中提示我们寻找第一步。", words: [["choose", "/tʃuːz/", "选择"], ["collect", "/kəˈlekt/", "收集"], ["save", "/seɪv/", "保存"]] },
  { id: "update", type: "UPDATE · 更新说明", title: "A small app update", context: "读产品更新说明，找出这次更新增加的功能。", text: "Version 2.1 is here. You can now turn on dark mode and share a note with a friend. We also fixed a small login problem.", translation: "2.1 版本来了。现在你可以打开深色模式，也可以和朋友分享笔记。我们还修复了一个小小的登录问题。", question: "What is new in version 2.1?", questionMeaning: "2.1 版本新增了什么？", options: ["Dark mode and note sharing", "A new game", "A new password"], answer: "Dark mode and note sharing", explanation: "You can now 后面接的是新功能：turn on dark mode 和 share a note。fixed a problem 表示“修复了一个问题”，不是新增功能。", words: [["version", "/ˈvɝːʒən/", "版本"], ["share", "/ʃer/", "分享"], ["fixed", "/fɪkst/", "修复了"]] },
  { id: "manual", type: "PRODUCT GUIDE · 产品说明", title: "Before using the bottle", context: "读一段产品使用说明，找出使用前需要做的事。", text: "Before first use, wash the bottle with warm water. Do not put it in the microwave. The bottle keeps drinks warm for six hours.", translation: "第一次使用前，请用温水清洗这个瓶子。不要把它放进微波炉。这个瓶子可以让饮料保温六小时。", question: "What should you do before first use?", questionMeaning: "第一次使用前应该做什么？", options: ["Wash the bottle", "Put it in the microwave", "Freeze the drink"], answer: "Wash the bottle", explanation: "Before first use 表示“第一次使用前”，后面的 wash the bottle 就是使用前的要求。Do not 表示禁止做某事。", words: [["warm", "/wɔːrm/", "温暖的"], ["microwave", "/ˈmaɪkroʊweɪv/", "微波炉"], ["keep", "/kiːp/", "保持"]] }
];
const completedKey = "reading-rewards-completed";
let currentIndex = 0;
const $ = (selector) => document.querySelector(selector);
const loadCompleted = () => { try { return JSON.parse(localStorage.getItem(completedKey) || "[]"); } catch { return []; } };
const saveCompleted = (items) => localStorage.setItem(completedKey, JSON.stringify(items));
let cachedEnglishVoice = null;
const findEnglishVoice = () => {
  if (cachedEnglishVoice) return cachedEnglishVoice;
  const voices = window.speechSynthesis?.getVoices?.() || [];
  cachedEnglishVoice = voices.find((voice) => voice.name === "Google US English") || voices.find((voice) => /^en-US$/i.test(voice.lang)) || null;
  return cachedEnglishVoice;
};
const speak = (text, rate = 1) => window.playEnglishText?.(text, { rate });
if (window.speechSynthesis) window.speechSynthesis.addEventListener("voiceschanged", () => { cachedEnglishVoice = null; findEnglishVoice(); }, { once: true });

function showFireworks() {
  const layer = document.createElement("div");
  layer.className = "fireworks";
  const colors = ["#548464", "#bd704b", "#aa812e", "#6d8fb9", "#d9779b"];
  for (let index = 0; index < 48; index += 1) {
    const particle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 48;
    const distance = 120 + Math.random() * 210;
    particle.className = "firework-particle";
    particle.style.setProperty("--particle-color", colors[index % colors.length]);
    particle.style.setProperty("--particle-x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--particle-y", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--particle-rotate", `${Math.round(Math.random() * 180)}deg`);
    layer.appendChild(particle);
  }
  document.body.appendChild(layer);
  window.setTimeout(() => layer.remove(), 1050);
}

function renderList() {
  const completed = loadCompleted();
  $("#completed-count").textContent = completed.length;
  $("#quest-list").innerHTML = quests.map((quest, index) => `<button class="quest-item${index === currentIndex ? " active" : ""}" type="button" data-index="${index}"><span class="quest-number">${String(index + 1).padStart(2, "0")}</span><span><strong>${quest.title}</strong><small>${quest.type.split(" · ")[1]} · ${completed.includes(quest.id) ? "已完成" : "待完成"}</small></span></button>`).join("");
}

function renderQuest() {
  const quest = quests[currentIndex];
  const completed = loadCompleted().includes(quest.id);
  $("#quest-content").innerHTML = `<article class="quest-card"><div class="quest-card-top"><span class="quest-type">${quest.type}</span><span class="quest-status">${completed ? "已完成" : "阅读中"}</span></div><h2>${quest.title}</h2><p class="quest-context">${quest.context}</p><section class="reading-text"><h3>先读短文</h3><p class="english-text">${quest.text}</p><button class="translation-toggle" type="button" id="translation-toggle" aria-expanded="false">显示中文释义＋</button><p class="translation" id="translation" hidden>${quest.translation}</p><button class="audio-button" type="button" data-speak="passage">▶ 跟读短文</button></section><section class="question-block"><h3>阅读问题</h3><div class="question-card"><p>${quest.question}</p><p class="question-meaning">${quest.questionMeaning}</p><div class="options">${quest.options.map((option) => `<button class="option" type="button" data-option="${option}">${option}</button>`).join("")}</div></div></section><div class="answer-area"><button class="answer-button" type="button" id="show-answer">查看答案＋解析</button><div class="answer-panel" id="answer-panel" hidden><div class="answer-item"><strong>答案：${quest.answer}</strong><p>${quest.explanation}</p></div></div></div><section class="vocab-section"><h3>重点词 · 音标与释义</h3><div class="vocab-list">${quest.words.map(([word, ipa, meaning]) => `<div class="vocab-card"><strong>${word}</strong><span>${ipa} · ${meaning}</span><button type="button" data-word="${word}">▶ 跟读</button></div>`).join("")}</div></section><button class="complete-button${completed ? " completed" : ""}" type="button" id="complete-task">${completed ? "已完成本任务 ✓" : "完成本任务"}</button></article>`;
}

$("#quest-list").addEventListener("click", (event) => { const item = event.target.closest("[data-index]"); if (!item) return; currentIndex = Number(item.dataset.index); renderList(); renderQuest(); });
$("#quest-content").addEventListener("click", (event) => {
  const quest = quests[currentIndex];
  const option = event.target.closest("[data-option]");
  if (option) { $("#quest-content").querySelectorAll(".option").forEach((button) => button.classList.toggle("selected", button === option)); }
  if (event.target.closest("[data-speak=passage]")) speak(quest.text, .82);
  const word = event.target.closest("[data-word]");
  if (word) speak(word.dataset.word, .82);
  if (event.target.closest("#translation-toggle")) { const toggle = event.target.closest("#translation-toggle"); const translation = $("#translation"); const expanded = toggle.getAttribute("aria-expanded") === "true"; translation.hidden = expanded; toggle.setAttribute("aria-expanded", String(!expanded)); toggle.textContent = expanded ? "显示中文释义＋" : "隐藏中文释义－"; }
  if (event.target.closest("#show-answer")) { $("#answer-panel").hidden = false; event.target.closest("#show-answer").textContent = "答案已公布"; }
  if (event.target.closest("#complete-task")) { const completed = loadCompleted(); const isNew = !completed.includes(quest.id); if (isNew) { completed.push(quest.id); saveCompleted(completed); showFireworks(); } renderList(); renderQuest(); }
});
renderList();
renderQuest();
