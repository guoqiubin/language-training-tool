const lessons = [
  { title: "短元音 a", pattern: "a → /æ/", tip: "嘴巴张开，像 cat 里的 a。", words: [{ word: "cat", ipa: "/kæt/", parts: ["c", "a", "t"] }, { word: "map", ipa: "/mæp/", parts: ["m", "a", "p"] }, { word: "bag", ipa: "/bæɡ/", parts: ["b", "a", "g"] }, { word: "hat", ipa: "/hæt/", parts: ["h", "a", "t"] }, { word: "man", ipa: "/mæn/", parts: ["m", "a", "n"] }, { word: "jam", ipa: "/dʒæm/", parts: ["j", "a", "m"] }] },
  { title: "短元音 e", pattern: "e → /ɛ/", tip: "嘴巴微微张开，像 bed 里的 e。", words: [{ word: "bed", ipa: "/bɛd/", parts: ["b", "e", "d"] }, { word: "pen", ipa: "/pɛn/", parts: ["p", "e", "n"] }, { word: "red", ipa: "/rɛd/", parts: ["r", "e", "d"] }, { word: "hen", ipa: "/hɛn/", parts: ["h", "e", "n"] }, { word: "leg", ipa: "/lɛɡ/", parts: ["l", "e", "g"] }, { word: "ten", ipa: "/tɛn/", parts: ["t", "e", "n"] }] },
  { title: "短元音 i", pattern: "i → /ɪ/", tip: "声音短而放松，像 sit 里的 i。", words: [{ word: "sit", ipa: "/sɪt/", parts: ["s", "i", "t"] }, { word: "big", ipa: "/bɪɡ/", parts: ["b", "i", "g"] }, { word: "fish", ipa: "/fɪʃ/", parts: ["f", "i", "sh"] }, { word: "pig", ipa: "/pɪɡ/", parts: ["p", "i", "g"] }, { word: "milk", ipa: "/mɪlk/", parts: ["m", "i", "l", "k"] }, { word: "six", ipa: "/sɪks/", parts: ["s", "i", "x"] }] },
  { title: "短元音 o", pattern: "o → /ɑ/", tip: "口腔打开，像 hot 里的 o。", words: [{ word: "hot", ipa: "/hɑːt/", parts: ["h", "o", "t"] }, { word: "dog", ipa: "/dɔːɡ/", parts: ["d", "o", "g"] }, { word: "box", ipa: "/bɑːks/", parts: ["b", "o", "x"] }, { word: "top", ipa: "/tɑːp/", parts: ["t", "o", "p"] }, { word: "log", ipa: "/lɔːɡ/", parts: ["l", "o", "g"] }, { word: "fox", ipa: "/fɑːks/", parts: ["f", "o", "x"] }] },
  { title: "短元音 u", pattern: "u → /ʌ/", tip: "声音从口腔中部发出，像 cup 里的 u。", words: [{ word: "cup", ipa: "/kʌp/", parts: ["c", "u", "p"] }, { word: "sun", ipa: "/sʌn/", parts: ["s", "u", "n"] }, { word: "bus", ipa: "/bʌs/", parts: ["b", "u", "s"] }, { word: "run", ipa: "/rʌn/", parts: ["r", "u", "n"] }, { word: "fun", ipa: "/fʌn/", parts: ["f", "u", "n"] }, { word: "mud", ipa: "/mʌd/", parts: ["m", "u", "d"] }] },
  { title: "辅音组合 sh", pattern: "sh → /ʃ/", tip: "两个字母合在一起，发一个声音。", words: [{ word: "ship", ipa: "/ʃɪp/", parts: ["sh", "i", "p"] }, { word: "shop", ipa: "/ʃɑːp/", parts: ["sh", "o", "p"] }, { word: "fish", ipa: "/fɪʃ/", parts: ["f", "i", "sh"] }, { word: "shell", ipa: "/ʃɛl/", parts: ["sh", "e", "ll"] }, { word: "shut", ipa: "/ʃʌt/", parts: ["sh", "u", "t"] }, { word: "wish", ipa: "/wɪʃ/", parts: ["w", "i", "sh"] }] },
  { title: "辅音组合 ch", pattern: "ch → /tʃ/", tip: "ch 是一个整体声音，像 chair 开头的声音。", words: [{ word: "chip", ipa: "/tʃɪp/", parts: ["ch", "i", "p"] }, { word: "chat", ipa: "/tʃæt/", parts: ["ch", "a", "t"] }, { word: "lunch", ipa: "/lʌntʃ/", parts: ["l", "u", "n", "ch"] }, { word: "chop", ipa: "/tʃɑːp/", parts: ["ch", "o", "p"] }, { word: "chest", ipa: "/tʃɛst/", parts: ["ch", "e", "st"] }, { word: "bench", ipa: "/bɛntʃ/", parts: ["b", "e", "n", "ch"] }] },
  { title: "辅音组合 th", pattern: "th → /θ/", tip: "舌尖轻触上下齿之间，送出气流，声带不振动。", words: [{ word: "thin", ipa: "/θɪn/", parts: ["th", "i", "n"] }, { word: "bath", ipa: "/bæθ/", parts: ["b", "a", "th"] }, { word: "three", ipa: "/θriː/", parts: ["th", "r", "ee"] }, { word: "thick", ipa: "/θɪk/", parts: ["th", "i", "ck"] }, { word: "thumb", ipa: "/θʌm/", parts: ["th", "u", "mb"] }, { word: "teeth", ipa: "/tiːθ/", parts: ["t", "ee", "th"] }] },
  { title: "结尾组合", pattern: "ck / ng → /k/ /ŋ/", tip: "词尾的字母组合常常一起完成收音。", words: [{ word: "back", ipa: "/bæk/", parts: ["b", "a", "ck"] }, { word: "duck", ipa: "/dʌk/", parts: ["d", "u", "ck"] }, { word: "sing", ipa: "/sɪŋ/", parts: ["s", "i", "ng"] }, { word: "neck", ipa: "/nɛk/", parts: ["n", "e", "ck"] }, { word: "rock", ipa: "/rɑːk/", parts: ["r", "o", "ck"] }, { word: "long", ipa: "/lɔːŋ/", parts: ["l", "o", "ng"] }] },
  { title: "辅音连缀", pattern: "bl / st / cr", tip: "两个辅音都保留自己的声音，但要快速连读。", words: [{ word: "black", ipa: "/blæk/", parts: ["bl", "a", "ck"] }, { word: "stop", ipa: "/stɑːp/", parts: ["st", "o", "p"] }, { word: "crab", ipa: "/kræb/", parts: ["cr", "a", "b"] }, { word: "blue", ipa: "/bluː/", parts: ["bl", "u_e"] }, { word: "star", ipa: "/stɑːr/", parts: ["st", "a", "r"] }, { word: "frog", ipa: "/frɑːɡ/", parts: ["fr", "o", "g"] }] },
  { title: "magic e · a_e", pattern: "a_e → /eɪ/", tip: "词尾 e 通常不发音，但会让前面的元音读成长音。", words: [{ word: "cake", ipa: "/keɪk/", parts: ["c", "a_e", "k"] }, { word: "name", ipa: "/neɪm/", parts: ["n", "a_e", "m"] }, { word: "game", ipa: "/ɡeɪm/", parts: ["g", "a_e", "m"] }, { word: "late", ipa: "/leɪt/", parts: ["l", "a_e", "t"] }, { word: "plane", ipa: "/pleɪn/", parts: ["pl", "a_e", "n"] }, { word: "gate", ipa: "/ɡeɪt/", parts: ["g", "a_e", "t"] }] },
  { title: "magic e · i_e", pattern: "i_e → /aɪ/", tip: "i_e 常把短 i 变成长 i，听起来像字母 I。", words: [{ word: "bike", ipa: "/baɪk/", parts: ["b", "i_e", "k"] }, { word: "time", ipa: "/taɪm/", parts: ["t", "i_e", "m"] }, { word: "five", ipa: "/faɪv/", parts: ["f", "i_e", "v"] }, { word: "like", ipa: "/laɪk/", parts: ["l", "i_e", "k"] }, { word: "kite", ipa: "/kaɪt/", parts: ["k", "i_e", "t"] }, { word: "ride", ipa: "/raɪd/", parts: ["r", "i_e", "d"] }] },
  { title: "magic e · o_e", pattern: "o_e → /oʊ/", tip: "o_e 通常读成长 o，口形从圆到收。", words: [{ word: "home", ipa: "/hoʊm/", parts: ["h", "o_e", "m"] }, { word: "hope", ipa: "/hoʊp/", parts: ["h", "o_e", "p"] }, { word: "rose", ipa: "/roʊz/", parts: ["r", "o_e", "s"] }, { word: "note", ipa: "/noʊt/", parts: ["n", "o_e", "t"] }, { word: "rope", ipa: "/roʊp/", parts: ["r", "o_e", "p"] }, { word: "bone", ipa: "/boʊn/", parts: ["b", "o_e", "n"] }] },
  { title: "元音组合 ai", pattern: "ai → /eɪ/", tip: "两个元音字母一起工作，常出现在词中。", words: [{ word: "rain", ipa: "/reɪn/", parts: ["r", "ai", "n"] }, { word: "mail", ipa: "/meɪl/", parts: ["m", "ai", "l"] }, { word: "train", ipa: "/treɪn/", parts: ["tr", "ai", "n"] }, { word: "paint", ipa: "/peɪnt/", parts: ["p", "ai", "nt"] }, { word: "wait", ipa: "/weɪt/", parts: ["w", "ai", "t"] }, { word: "tail", ipa: "/teɪl/", parts: ["t", "ai", "l"] }] },
  { title: "元音组合 ee", pattern: "ee → /iː/", tip: "ee 常表示拉长的 /iː/，嘴角展开，声音保持稳定。", words: [{ word: "see", ipa: "/siː/", parts: ["s", "ee"] }, { word: "green", ipa: "/ɡriːn/", parts: ["gr", "ee", "n"] }, { word: "feet", ipa: "/fiːt/", parts: ["f", "ee", "t"] }, { word: "tree", ipa: "/triː/", parts: ["tr", "ee"] }, { word: "sleep", ipa: "/sliːp/", parts: ["sl", "ee", "p"] }, { word: "week", ipa: "/wiːk/", parts: ["w", "ee", "k"] }] },
  { title: "元音组合 oa", pattern: "oa → /oʊ/", tip: "oa 常出现在词中，读成长 o。", words: [{ word: "boat", ipa: "/boʊt/", parts: ["b", "oa", "t"] }, { word: "road", ipa: "/roʊd/", parts: ["r", "oa", "d"] }, { word: "soap", ipa: "/soʊp/", parts: ["s", "oa", "p"] }, { word: "coat", ipa: "/koʊt/", parts: ["c", "oa", "t"] }, { word: "goat", ipa: "/ɡoʊt/", parts: ["g", "oa", "t"] }, { word: "toast", ipa: "/toʊst/", parts: ["t", "oa", "st"] }] }
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
$("#total-count").textContent = String(lessons.length);

const phonicsMeanings = {
  cat: "猫", map: "地图", bag: "包", bed: "床", pen: "笔", red: "红色的",
  sit: "坐", big: "大的", fish: "鱼", hot: "热的", dog: "狗", box: "盒子",
  cup: "杯子", sun: "太阳", bus: "公交车", ship: "船", shop: "商店",
  chip: "薯片", chat: "聊天", lunch: "午餐", thin: "瘦的", bath: "洗澡", three: "三",
  back: "后面", duck: "鸭子", sing: "唱歌", black: "黑色的", stop: "停止", crab: "螃蟹",
  cake: "蛋糕", name: "名字", game: "游戏", bike: "自行车", time: "时间", five: "五",
  home: "家", hope: "希望", rose: "玫瑰", rain: "雨", mail: "邮件", train: "火车",
  see: "看见", green: "绿色的", feet: "脚", boat: "船", road: "道路", soap: "肥皂",
  hat: "帽子", man: "男人", jam: "果酱", hen: "母鸡", leg: "腿", ten: "十",
  pig: "猪", milk: "牛奶", six: "六", top: "顶部", log: "木头；原木", fox: "狐狸",
  run: "跑", fun: "有趣的", mud: "泥巴", shell: "贝壳", shut: "关闭", wish: "希望",
  chop: "砍；切", chest: "胸部；箱子", bench: "长椅", thick: "厚的", thumb: "拇指",
  teeth: "牙齿", neck: "脖子", rock: "岩石", long: "长的", blue: "蓝色的", star: "星星",
  frog: "青蛙", late: "迟的；晚的", plane: "飞机", gate: "大门", like: "喜欢；像",
  kite: "风筝", ride: "骑；乘坐", note: "笔记；注意", rope: "绳子", bone: "骨头",
  paint: "油漆；绘画", wait: "等待", tail: "尾巴", tree: "树", sleep: "睡觉", week: "星期",
  coat: "外套", goat: "山羊", toast: "烤面包"
};

function speak(text, button) {
  document.querySelectorAll("[data-speak].speaking").forEach((item) => item.classList.remove("speaking"));
  window.playEnglishText?.(text, { rate: slowSpeech ? .62 : .9, onStart: () => button?.classList.add("speaking"), onEnd: () => button?.classList.remove("speaking"), onError: () => button?.classList.remove("speaking") });
}

function wordCard(item, showParts = false) {
  return `<button class="word-card" data-speak="${item.word}" type="button"><span class="word-card-top"><strong>${item.word}</strong><span>▶</span></span><small>${item.ipa}</small><span class="word-card-meaning">${phonicsMeanings[item.word] || "中文释义待补充"}</span>${showParts ? `<span class="word-parts">${item.parts.map((part) => `<i>${part}</i>`).join(" + ")}</span>` : ""}</button>`;
}

function renderMap() {
  $("#lesson-grid").innerHTML = lessons.map((item, index) => `<button class="lesson-tile ${index === lessonIndex ? "active" : ""} ${completed.has(index) ? "done" : ""}" data-lesson="${index}" type="button"><span>${String(index + 1).padStart(2, "0")}</span><strong>${item.title}</strong><small>${item.pattern}</small>${completed.has(index) ? "<em>✓</em>" : ""}</button>`).join("");
  document.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => { lessonIndex = Number(button.dataset.lesson); stepIndex = 0; saveProgress(); renderAll(); }));
  $("#completed-count").textContent = completed.size;
}

function contentMarkup() {
  const item = current();
  if (stepIndex === 0) return `<div class="rule-display"><span class="rule-letter">${item.pattern.split(" ")[0]}</span><div><strong>${item.pattern}</strong><p>${item.tip}</p></div></div><h2>先认识这个声音</h2><p>点击示范词，听一听目标声音在哪里。</p><div class="word-grid">${item.words.map((word) => wordCard(word)).join("")}</div>`;
  if (stepIndex === 1) { const focusSound = item.pattern.includes(" → ") ? item.pattern.split(" → ")[1] : item.pattern; return `<h2>听声音，找规律</h2><p>先听慢速示范，再注意中间的元音或字母组合。</p><div class="focus-card"><span class="focus-symbol">${focusSound}</span><strong>${item.title}</strong><button class="sound-button" data-speak="${item.words[0].word}" type="button">▶ 慢速播放示范</button></div>`; }
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
