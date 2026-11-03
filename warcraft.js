const paladinLines = [
  { id: "paladin-01", category: "REPEATEDLY CLICKED · 反复点击", sourceFile: "01_its-hammer-time.mp3", english: "It's hammer time!", ipa: "/ɪts ˈhæmər taɪm/", meaning: "锤子时间到了！", note: "It's ... time! 表示“到了做某事的时候”，语气有号召感。" },
  { id: "paladin-02", category: "REPEATEDLY CLICKED · 反复点击", sourceFile: "02_i-want-to-be-your-sledge.mp3", english: "I want to be your sledge hammer.", ipa: "/aɪ wɑnt tə bi jər slɛd ˈhæmər/", meaning: "我想成为你的大锤。", note: "I want to be... 用来表达“我想成为……”，也可以替换成 I want to be your guide。" },
  { id: "paladin-03", category: "REPEATEDLY CLICKED · 反复点击", sourceFile: "03_touch-me-not-i-am-chaste.mp3", english: "Touch me not. I am chaste.", ipa: "/tʌtʃ mi nɑt. aɪ æm tʃeɪst/", meaning: "别碰我，我是贞洁的。", note: "Touch me not 是带有古风色彩的否定祈使句，日常英语更常说 Don't touch me。" },
  { id: "paladin-04", category: "REPEATEDLY CLICKED · 反复点击", sourceFile: "04_no-is-that-your-final-answer.mp3", english: "No? Is that your final answer?", ipa: "/noʊ? ɪz ðæt jər ˈfaɪnəl ˈænsər/", meaning: "不？这就是你的最终答案吗？", note: "Is that your final answer? 常用于确认对方是否已经做出最终决定。" },
  { id: "paladin-05", category: "REPEATEDLY CLICKED · 反复点击", sourceFile: "05_i-have-bad-brethren.mp3", english: "I have bad brethren.", ipa: "/aɪ hæv bæd ˈbrɛðrən/", meaning: "我有一些糟糕的兄弟。", note: "brethren 是 brother 的较正式或古老复数形式，游戏台词中带有史诗感。" },
  { id: "paladin-06", category: "REPEATEDLY CLICKED · 反复点击", sourceFile: "06_is-that-a-sword-luxury-is.mp3", english: "Is that a sword? Luxury! Is that a horse? Sloth! Is that a helmet? Vanity!", ipa: "/ɪz ðæt ə sɔrd? ˈlʌɡʒəri! ɪz ðæt ə hɔrs? slɑθ! ɪz ðæt ə ˈhɛlmət? ˈvænəti!/", meaning: "那是一把剑吗？奢侈！那是一匹马吗？懒惰！那是一顶头盔吗？虚荣！", note: "连续的 Is that...? 用来快速确认物品，再用单词给出带判断色彩的评价。" },
  { id: "paladin-07", category: "READY / TRAINED · 待命", sourceFile: "07_i-live-to-serve-all-believers.mp3", english: "I live to serve all believers.", ipa: "/aɪ lɪv tə sɝv ɔl bɪˈlivərz/", meaning: "我为服务所有信徒而活。", note: "live to + 动词表示“活着就是为了做某事”，常用来表达使命感。" },
  { id: "paladin-08", category: "ABILITIES · 技能台词", sourceFile: "08_in-lightbringers-name-have-at-thee.mp3", english: "In Lightbringer's name, have at thee!", ipa: "/ɪn ˈlaɪtˌbrɪŋərz neɪm, hæv æt ði/", meaning: "以光明使者之名，接招吧！", note: "In someone's name 表示“以某人的名义”；have at thee 是古风的挑战表达。" },
  { id: "paladin-09", category: "SELECTED · 被选中", sourceFile: "09_what-would-you-ask-of-me.mp3", english: "What would you ask of me?", ipa: "/wʌt wʊd ju æsk əv mi/", meaning: "你想让我做什么？", note: "What would you ask of me? 比 What do you want? 更委婉，也更有礼貌。" },
  { id: "paladin-10", category: "SELECTED · 被选中", sourceFile: "10_i-am-not-afraid.mp3", english: "I am not afraid.", ipa: "/aɪ æm nɑt əˈfreɪd/", meaning: "我不害怕。", note: "be afraid 是“害怕”的固定搭配，not 放在 be 动词后面构成否定。" },
  { id: "paladin-11", category: "SELECTED · 被选中", sourceFile: "11_let-me-face-the-peril.mp3", english: "Let me face the peril.", ipa: "/lɛt mi feɪs ðə ˈpɛrəl/", meaning: "让我面对危险。", note: "Let me + 动词原形表示“让我做……”，是请求或主动承担任务的常用结构。" },
  { id: "paladin-12", category: "SELECTED · 被选中", sourceFile: "12_at-your-call.mp3", english: "At your call.", ipa: "/æt jər kɔl/", meaning: "听候你的召唤。", note: "at your call 是对指令的简短回应，语气坚定而礼貌。" },
  { id: "paladin-13", category: "MOVE ORDER · 移动指令", sourceFile: "13_as-you-wish.mp3", english: "As you wish.", ipa: "/æz ju wɪʃ/", meaning: "如你所愿。", note: "这是自然的服从表达，表示“好的，就按你的意思”。" },
  { id: "paladin-14", category: "MOVE ORDER · 移动指令", sourceFile: "14_for-honor.mp3", english: "For honor.", ipa: "/fər ˈɑnər/", meaning: "为了荣誉。", note: "for + 名词可以表达行动的目的、信念或立场。" },
  { id: "paladin-15", category: "MOVE ORDER · 移动指令", sourceFile: "15_for-my-people.mp3", english: "For my people.", ipa: "/fər maɪ ˈpipəl/", meaning: "为了我的人民。", note: "For my people 是用 for 表达行动目的的简短口号式表达。" },
  { id: "paladin-16", category: "MOVE ORDER · 移动指令", sourceFile: "16_it-shall-be-done.mp3", english: "It shall be done.", ipa: "/ɪt ʃæl bi dʌn/", meaning: "这就办。", note: "shall be done 表示事情将被完成，语气比 It will be done 更正式、更坚定。" },
  { id: "paladin-17", category: "ATTACK ORDER · 攻击指令", sourceFile: "17_justice-will-be-served.mp3", english: "Justice will be served!", ipa: "/ˈdʒʌstɪs wɪl bi sɝvd/", meaning: "正义终将得到伸张！", note: "justice will be served 是被动语态，字面是“正义将被实现/伸张”。" },
  { id: "paladin-18", category: "ATTACK ORDER · 攻击指令", sourceFile: "18_defending-your-name.mp3", english: "Defending your name!", ipa: "/dɪˈfɛndɪŋ jər neɪm/", meaning: "捍卫你的名誉！", note: "Defending... 是现在分词短语，省略了主语和 be 动词，适合战斗口号。" },
  { id: "paladin-19", category: "ATTACK ORDER · 攻击指令", sourceFile: "19_strike-with-great-vengeance.mp3", english: "Strike with great vengeance!", ipa: "/straɪk wɪð greɪt ˈvɛndʒəns/", meaning: "以强烈的复仇之心出击！", note: "Strike with... 表示“带着……出击”，with 后面接行动时的状态或力量。" }
];
const dbName = "english-training-warcraft-v2";
const storeName = "local-audio";
const $ = (selector) => document.querySelector(selector);
const audioUrls = new Map();
const audioElements = new Map();

function openAudioDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 2);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(storeName)) request.result.createObjectStore(storeName);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function saveFolderHandle(handle) {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => { const request = db.transaction(storeName, "readwrite").objectStore(storeName).put(handle, "__folder__"); request.onsuccess = resolve; request.onerror = () => reject(request.error); });
}
async function readFolderHandle() {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => { const request = db.transaction(storeName, "readonly").objectStore(storeName).get("__folder__"); request.onsuccess = () => resolve(request.result || null); request.onerror = () => reject(request.error); });
}
async function readAudio(id) {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => { const request = db.transaction(storeName, "readonly").objectStore(storeName).get(id); request.onsuccess = () => resolve(request.result || null); request.onerror = () => reject(request.error); });
}
async function saveAudio(id, file) {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => { const request = db.transaction(storeName, "readwrite").objectStore(storeName).put(file, id); request.onsuccess = resolve; request.onerror = () => reject(request.error); });
}
async function clearAudio() {
  const db = await openAudioDb();
  return new Promise((resolve, reject) => { const request = db.transaction(storeName, "readwrite").objectStore(storeName).clear(); request.onsuccess = resolve; request.onerror = () => reject(request.error); });
}
function matchId(fileName) {
  const normalized = fileName.toLowerCase();
  const numbered = normalized.match(/(?:^|paladin[-_ ]*)0?([1-9]|1[0-9])(?:[_ .-]|$)/);
  if (numbered) return `paladin-${String(Number(numbered[1])).padStart(2, "0")}`;
  const exact = paladinLines.find((line) => normalized.includes(line.sourceFile.replace(/\.mp3$/i, "")));
  if (exact) return exact.id;
  return null;
}
function fallbackId(index) { return paladinLines[index]?.id || null; }
function nextUnusedId(used) { return paladinLines.map((line) => line.id).find((id) => !used.has(id)) || null; }
function revokeUrls() { audioUrls.forEach((url) => URL.revokeObjectURL(url)); audioUrls.clear(); }
function renderLines() {
  $("#line-grid").innerHTML = paladinLines.map((line) => `<article class="line-card" data-line-id="${line.id}"><div class="line-card-top"><span class="line-category">${line.category}</span><span class="line-audio-state" data-state>未导入原声</span></div><h3>${line.english}</h3><p class="line-ipa">${line.ipa}</p><p class="line-meaning">${line.meaning}</p><p class="line-note">${line.note}</p><div class="line-actions"><button class="play-original" type="button" data-play-original="${line.id}" disabled>▶ 原声播放</button><button class="play-slow" type="button" data-play-slow="${line.english}">▶ 慢速朗读</button></div></article>`).join("");
}
async function refreshAudioState() {
  revokeUrls();
  audioElements.clear();
  let imported = 0;
  for (const line of paladinLines) {
    const blob = await readAudio(line.id);
    const card = document.querySelector(`[data-line-id="${line.id}"]`);
    card?.classList.remove("has-audio");
    card?.querySelector("[data-state]")?.replaceChildren(document.createTextNode("未导入原声"));
    const button = card?.querySelector(`[data-play-original="${line.id}"]`);
    if (button) button.disabled = true;
    if (!blob) continue;
    const url = URL.createObjectURL(blob);
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = url;
    audio.load();
    audioUrls.set(line.id, url);
    audioElements.set(line.id, audio);
    imported += 1;
    card?.classList.add("has-audio");
    card?.querySelector("[data-state]")?.replaceChildren(document.createTextNode("已导入原声"));
    if (button) button.disabled = false;
  }
  $("#audio-status").textContent = imported ? `已导入 ${imported} / ${paladinLines.length} 条原声` : "尚未导入原声";
}
async function importFiles(files, preferredId = null) {
  const list = [...files].filter((file) => file.type.startsWith("audio/") || /\.(mp3|wav|m4a|ogg|webm)$/i.test(file.name));
  const used = new Set();
  const pending = [];
  for (let index = 0; index < list.length; index += 1) {
    const file = list[index];
    const id = preferredId && index === 0 ? preferredId : matchId(file.name);
    if (id && !used.has(id)) { await saveAudio(id, file); used.add(id); } else pending.push(file);
  }
  for (const file of pending) { const id = nextUnusedId(used); if (!id) break; await saveAudio(id, file); used.add(id); }
  await refreshAudioState();
}
async function scanFolder(handle) {
  const files = [];
  for await (const [name, entry] of handle.entries()) {
    if (entry.kind !== "file" || !/\.(mp3|wav|m4a|ogg|webm|aac)$/i.test(name)) continue;
    files.push({ name, file: await entry.getFile() });
  }
  files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
  const used = new Set();
  let fallbackIndex = 0;
  for (const item of files) {
    let id = matchId(item.name);
    if (!id || used.has(id)) { id = nextUnusedId(used) || fallbackId(fallbackIndex); fallbackIndex += 1; }
    if (id) { await saveAudio(id, item.file); used.add(id); }
  }
  await saveFolderHandle(handle);
  await refreshAudioState();
  $("#audio-status").textContent = used.size ? `已扫描并匹配 ${used.size} 条原声` : "文件夹中没有匹配到音频";
}
async function chooseFolder() {
  if (!window.showDirectoryPicker) { $("#audio-input").click(); return; }
  try { const handle = await window.showDirectoryPicker({ mode: "read" }); await scanFolder(handle); } catch (error) { if (error?.name !== "AbortError") $("#audio-status").textContent = "无法读取该文件夹，请重新选择"; }
}
async function playOriginal(id) {
  const audio = audioElements.get(id);
  if (!audio) { $("#audio-status").textContent = "这句话还没有匹配到本地原声，请重新扫描文件夹"; return; }
  try {
    audio.pause();
    audio.currentTime = 0;
    await audio.play();
  } catch (error) {
    $("#audio-status").textContent = `原声播放失败：${error?.message || "请检查音频格式"}`;
  }
}
function speakSlow(text) { if (window.playEnglishText) window.playEnglishText(text, { rate: .58 }); }

$("#folder-input-button").addEventListener("click", chooseFolder);
$("#file-input-button").addEventListener("click", () => $("#audio-input").click());
$("#audio-input").addEventListener("change", (event) => importFiles(event.target.files));
$("#clear-audio").addEventListener("click", async () => { if (!window.confirm("确定清除本地保存的圣骑士原声吗？清除后需要重新导入。")) return; await clearAudio(); await refreshAudioState(); });
$("#line-grid").addEventListener("click", (event) => { const original = event.target.closest("[data-play-original]"); if (original) playOriginal(original.dataset.playOriginal); const slow = event.target.closest("[data-play-slow]"); if (slow) speakSlow(slow.dataset.playSlow); });
$("#paladin-avatar")?.addEventListener("error", () => $(".paladin-avatar-frame")?.classList.add("is-fallback"));
renderLines();
refreshAudioState().catch(() => { $("#audio-status").textContent = "当前浏览器无法保存本地音频"; });
