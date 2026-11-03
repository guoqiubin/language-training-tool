const lessons = [
  { title: "短元音 a", pattern: "a → /æ/", tip: "嘴巴张开，像 cat 里的 a。", words: [{ word: "cat", ipa: "/kæt/", parts: ["c", "a", "t"] }, { word: "map", ipa: "/mæp/", parts: ["m", "a", "p"] }, { word: "bag", ipa: "/bæɡ/", parts: ["b", "a", "g"] }] },
  { title: "短元音 e", pattern: "e → /ɛ/", tip: "嘴巴微微张开，像 bed 里的 e。", words: [{ word: "bed", ipa: "/bɛd/", parts: ["b", "e", "d"] }, { word: "pen", ipa: "/pɛn/", parts: ["p", "e", "n"] }, { word: "red", ipa: "/rɛd/", parts: ["r", "e", "d"] }] },
  { title: "短元音 i", pattern: "i → /ɪ/", tip: "声音短而放松，像 sit 里的 i。", words: [{ word: "sit", ipa: "/sɪt/", parts: ["s", "i", "t"] }, { word: "big", ipa: "/bɪɡ/", parts: ["b", "i", "g"] }, { word: "fish", ipa: "/fɪʃ/", parts: ["f", "i", "sh"] }] },
  { title: "短元音 o", pattern: "o → /ɑ/", tip: "口腔打开，像 hot 里的 o。", words: [{ word: "hot", ipa: "/hɑːt/", parts: ["h", "o", "t"] }, { word: "dog", ipa: "/dɔːɡ/", parts: ["d", "o", "g"] }, { word: "box", ipa: "/bɑːks/", parts: ["b", "o", "x"] }] },
  { title: "短元音 u", pattern: "u → /ʌ/", tip: "声音从口腔中部发出，像 cup 里的 u。", words: [{ word: "cup", ipa: "/kʌp/", parts: ["c", "u", "p"] }, { word: "sun", ipa: "/sʌn/", parts: ["s", "u", "n"] }, { word: "bus", ipa: "/bʌs/", parts: ["b", "u", "s"] }] },
  { title: "辅音组合", pattern: "sh → /ʃ/", tip: "两个字母合在一起，发一个声音。", words: [{ word: "ship", ipa: "/ʃɪp/", parts: ["sh", "i", "p"] }, { word: "shop", ipa: "/ʃɑːp/", parts: ["sh", "o", "p"] }, { word: "fish", ipa: "/fɪʃ/", parts: ["f", "i", "sh"] }] }
];

const steps = ["看规则", "听声音", "拼起来", "读单词"];
let slowSpeech = true;
const progressStorageKey = "phonics-progress";
const oldCompletedStorageKey = "phonics-completed";
const activeLevel = new URLSearchParams(window.location.search).get("level") || "beginner";
const levelProgressStorageKey = `phonics-progress-${activeLevel}`;
const levelOldCompletedStorageKey = `phonics-completed-${activeLevel}`;
const clampIndex = (value, max) => Number.isInteger(value) ? Math.min(Math.max(value, 0), max) : 0;
function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(activeLevel === "beginner" ? progressStorageKey : levelProgressStorageKey) || "null");
    if (saved && typeof saved === "object") return saved;
    const oldCompleted = JSON.parse(localStorage.getItem(activeLevel === "beginner" ? oldCompletedStorageKey : levelOldCompletedStorageKey) || "[]");
    return { completed: Array.isArray(oldCompleted) ? oldCompleted : [], currentLesson: 0, currentStep: 0 };
  } catch (error) {
    return { completed: [], currentLesson: 0, currentStep: 0 };
  }
}
const savedProgress = readProgress();
let lessonIndex = clampIndex(savedProgress.currentLesson, lessons.length - 1);
let stepIndex = clampIndex(savedProgress.currentStep, steps.length - 1);
const completed = new Set(Array.isArray(savedProgress.completed) ? savedProgress.completed.filter((index) => Number.isInteger(index) && index >= 0 && index < lessons.length) : []);
function saveProgress() {
  try {
    localStorage.setItem(activeLevel === "beginner" ? progressStorageKey : levelProgressStorageKey, JSON.stringify({
      completed: [...completed],
      currentLesson: lessonIndex,
      currentStep: stepIndex,
      updatedAt: new Date().toISOString()
    }));
  } catch (error) {
    // 如果浏览器禁用了本地存储，页面仍可正常使用，只是不保存进度。
  }
}
const $ = (selector) => document.querySelector(selector);
const current = () => lessons[lessonIndex];

const phonicsMeanings = {
  cat: "猫", map: "地图", bag: "包", bed: "床", pen: "笔", red: "红色的",
  sit: "坐", big: "大的", fish: "鱼", hot: "热的", dog: "狗", box: "盒子",
  cup: "杯子", sun: "太阳", bus: "公交车", ship: "船", shop: "商店"
};

function speak(text, button) {
  document.querySelectorAll("[data-speak].speaking").forEach((item) => item.classList.remove("speaking"));
  window.playEnglishText?.(text, { rate: slowSpeech ? .62 : .9, onStart: () => button?.classList.add("speaking"), onEnd: () => button?.classList.remove("speaking"), onError: () => button?.classList.remove("speaking") });
}

function wordCard(item, showParts = false) {
  return `<button class="word-card" data-speak="${item.word}" type="button"><span class="word-card-top"><strong>${item.word}</strong><span>▶</span></span><small>${item.ipa}</small><span class="word-card-meaning">${phonicsMeanings[item.word] || "中文释义待补充"}</span>${showParts ? `<span class="word-parts">${item.parts.map((part) => `<i>${part}</i>`).join(" + ")}</span>` : ""}</button>`;
}

function renderMap() {
  $("#lesson-grid").innerHTML = lessons.map((item, index) => `<button class="lesson-tile ${index === lessonIndex ? "active" : ""} ${completed.has(index) ? "done" : ""}" data-lesson="${index}" type="button"><span>0${index + 1}</span><strong>${item.title}</strong><small>${item.pattern}</small>${completed.has(index) ? "<em>✓</em>" : ""}</button>`).join("");
  document.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => { lessonIndex = Number(button.dataset.lesson); stepIndex = 0; saveProgress(); renderAll(); }));
  $("#completed-count").textContent = completed.size;
}

function contentMarkup() {
  const item = current();
  if (stepIndex === 0) return `<div class="rule-display"><span class="rule-letter">${item.pattern.split(" ")[0]}</span><div><strong>${item.pattern}</strong><p>${item.tip}</p></div></div><h2>先认识这个声音</h2><p>点击示范词，听一听目标声音在哪里。</p><div class="word-grid">${item.words.map((word) => wordCard(word)).join("")}</div>`;
  if (stepIndex === 1) return `<h2>听声音，找规律</h2><p>先听慢速示范，再注意中间的元音或字母组合。</p><div class="focus-card"><span class="focus-symbol">${item.pattern.split(" → ")[1]}</span><strong>${item.title}</strong><button class="sound-button" data-speak="${item.words[0].word}" type="button">▶ 慢速播放示范</button></div>`;
  if (stepIndex === 2) return `<h2>把声音拼起来</h2><p>按顺序点击每个部分，最后把它们连成一个词。</p><div class="blend-list">${item.words.map((word) => `<div class="blend-row"><span class="blend-word">${word.word}</span><div class="blend-parts">${word.parts.map((part) => `<button class="part-button" data-speak="${part}" type="button">${part}</button>`).join("<b>+</b>")}</div><button class="mini-play" data-speak="${word.word}" type="button">▶ 合起来</button></div>`).join("")}</div>`;
  return `<h2>轮到你读单词</h2><p>先看音标，再点击单词听一遍，最后自己读出来。</p><div class="word-grid practice-grid">${item.words.map((word) => wordCard(word, true)).join("")}</div><div class="finish-tip">读完这 3 个词，再点击“完成本练习”。</div>`;
}

function renderLesson() {
  const item = current();
  $("#lesson-label").textContent = `STEP ${stepIndex + 1} OF ${steps.length}`;
  $("#practice-content").innerHTML = contentMarkup();
  $("#prev-button").disabled = stepIndex === 0;
  const done = completed.has(lessonIndex);
  $("#next-button").textContent = stepIndex === steps.length - 1 ? (done ? "已完成本练习 ✓" : "完成本练习 ✓") : "下一步 →";
  $("#next-button").classList.toggle("completed-action", stepIndex === steps.length - 1 && done);
  document.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.speak, button)));
}

function renderSteps() {
  $("#practice-steps").innerHTML = steps.map((step, index) => `<button class="practice-step ${index === stepIndex ? "active" : ""}" data-step="${index}" type="button"><span>${index + 1}</span>${step}</button>`).join("");
  document.querySelectorAll("[data-step]").forEach((button) => button.addEventListener("click", () => { stepIndex = Number(button.dataset.step); saveProgress(); renderLesson(); }));
}

function renderAll() { renderMap(); renderSteps(); renderLesson(); }

$("#poster-button").addEventListener("click", () => {
  const item = current();
  openPoster({
    kicker: "READ WORDS · BEGINNER",
    english: item.pattern,
    meaning: item.title,
    ipa: item.pattern,
    note: item.tip,
    details: [{ title: steps[stepIndex], body: "先听示范，再把字母声音连起来，最后自己读出单词。", accent: "#bd704b" }],
    words: item.words.map((word) => ({ word: word.word, ipa: word.ipa, meaning: phonicsMeanings[word.word] || "中文释义待补充" }))
  });
});

$("#prev-button").addEventListener("click", () => { if (stepIndex > 0) { stepIndex -= 1; saveProgress(); renderLesson(); } });
$("#next-button").addEventListener("click", () => { if (stepIndex < steps.length - 1) stepIndex += 1; else completed.add(lessonIndex); saveProgress(); renderAll(); });
$("#slow-toggle").addEventListener("click", () => { slowSpeech = !slowSpeech; $("#slow-toggle").textContent = slowSpeech ? "🐢 慢速朗读：开启" : "▶ 普通语速：开启"; $("#slow-toggle").classList.toggle("enabled", slowSpeech); window.speechSynthesis?.cancel(); });
renderAll();
