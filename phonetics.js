const phonemes = [
  { symbol: "/æ/", word: "cat", type: "vowel", description: "嘴巴张开，嘴角向两边拉，声音短而有力。", mouth: ["张开", "靠前", "震动"], words: ["cat", "map", "bad"], sentence: "The cat is black." },
  { symbol: "/ʌ/", word: "cup", type: "vowel", description: "嘴巴自然打开，声音从口腔中部发出。", mouth: ["自然", "中部", "震动"], words: ["cup", "sun", "love"], sentence: "I love this cup." },
  { symbol: "/ɑ/", word: "father", type: "vowel", description: "下巴下沉，口腔打开，声音低而放松。", mouth: ["打开", "靠后", "震动"], words: ["father", "hot", "car"], sentence: "My father has a car." },
  { symbol: "/i/", word: "see", type: "vowel", description: "嘴角向两边拉，声音拉长，像微笑一样。", mouth: ["微笑", "靠前", "震动"], words: ["see", "green", "be"], sentence: "I see green trees." },
  { symbol: "/ɪ/", word: "sit", type: "vowel", description: "嘴巴比 /i/ 放松，声音短一些。", mouth: ["放松", "靠前", "震动"], words: ["sit", "big", "fish"], sentence: "The fish is big." },
  { symbol: "/ɛ/", word: "bed", type: "vowel", description: "嘴巴微微张开，舌头在口腔前部。", mouth: ["微张", "靠前", "震动"], words: ["bed", "red", "head"], sentence: "The red bed is new." },
  { symbol: "/u/", word: "food", type: "vowel", description: "嘴唇收圆，声音拉长。", mouth: ["收圆", "靠后", "震动"], words: ["food", "blue", "move"], sentence: "The food is good." },
  { symbol: "/ʊ/", word: "book", type: "vowel", description: "嘴唇轻轻收圆，声音短而放松。", mouth: ["微圆", "靠后", "震动"], words: ["book", "good", "look"], sentence: "Look at the book." },
  { symbol: "/θ/", word: "think", type: "consonant", description: "舌尖轻放在上下齿之间，送出气流。", mouth: ["舌尖露出", "中间", "不震动"], words: ["think", "three", "bath"], sentence: "I think it is three." },
  { symbol: "/ð/", word: "this", type: "consonant", description: "口型和 /θ/ 相似，但声带需要震动。", mouth: ["舌尖露出", "中间", "震动"], words: ["this", "that", "mother"], sentence: "This is my mother." },
  { symbol: "/r/", word: "red", type: "consonant", description: "舌头向后卷但不碰到上颚，声音持续。", mouth: ["舌头后卷", "口腔中部", "震动"], words: ["red", "right", "around"], sentence: "The red car is right." },
  { symbol: "/l/", word: "like", type: "consonant", description: "舌尖接触上齿龈，气流从舌头两侧通过。", mouth: ["舌尖接触", "两侧出气", "震动"], words: ["like", "light", "feel"], sentence: "I like the light." },
  { symbol: "/ɔ/", word: "thought", type: "vowel", description: "嘴唇略微收圆，舌头靠后。部分美式口音会把它和 /ɑ/ 合并。", mouth: ["微圆", "靠后", "震动"], words: ["thought", "bought", "talk"], sentence: "I thought about it." },
  { symbol: "/ə/", word: "about", type: "vowel", description: "嘴巴放松，声音短而轻，常出现在非重读音节。", mouth: ["放松", "中部", "震动"], words: ["about", "ago", "sofa"], sentence: "It is about a mile." },
  { symbol: "/eɪ/", word: "day", type: "vowel", description: "从 /ɛ/ 滑向 /ɪ/，嘴角逐渐向两边拉。", mouth: ["微张到微笑", "向前滑动", "震动"], words: ["day", "make", "late"], sentence: "Have a nice day." },
  { symbol: "/oʊ/", word: "go", type: "vowel", description: "从中后部元音滑向 /ʊ/，嘴唇逐渐收圆。", mouth: ["放松到收圆", "向后滑动", "震动"], words: ["go", "home", "phone"], sentence: "I want to go home." },
  { symbol: "/aɪ/", word: "time", type: "vowel", description: "从张口的 /ɑ/ 滑向 /ɪ/，口型变化明显。", mouth: ["张开到微笑", "前后移动", "震动"], words: ["time", "my", "right"], sentence: "Take your time." },
  { symbol: "/aʊ/", word: "house", type: "vowel", description: "从张口的 /ɑ/ 滑向 /ʊ/，嘴唇最后收圆。", mouth: ["张开到收圆", "前后移动", "震动"], words: ["house", "out", "now"], sentence: "The house is out there." },
  { symbol: "/ɔɪ/", word: "boy", type: "vowel", description: "从 /ɔ/ 滑向 /ɪ/，先圆唇，再向微笑口型移动。", mouth: ["收圆到微笑", "向前滑动", "震动"], words: ["boy", "choice", "voice"], sentence: "The boy has a choice." },
  { symbol: "/ɝ/", word: "bird", type: "vowel", description: "美式卷舌元音，舌头向后卷但不碰到上颚。", mouth: ["放松", "舌头后卷", "震动"], words: ["bird", "learn", "work"], sentence: "The bird can learn." },
  { symbol: "/ɚ/", word: "teacher", type: "vowel", description: "轻读的卷舌元音，常出现在单词结尾的 -er。", mouth: ["放松", "舌头后卷", "震动"], words: ["teacher", "water", "better"], sentence: "The water is better." },
  { symbol: "/p/", word: "pen", type: "consonant", description: "双唇闭合后突然打开，送出一小股气流。", mouth: ["双唇闭合", "唇部", "不震动"], words: ["pen", "paper", "stop"], sentence: "Put the pen here." },
  { symbol: "/b/", word: "bat", type: "consonant", description: "双唇闭合后打开，声带同步震动。", mouth: ["双唇闭合", "唇部", "震动"], words: ["bat", "baby", "cab"], sentence: "The baby has a bat." },
  { symbol: "/t/", word: "top", type: "consonant", description: "舌尖接触上齿龈后释放气流。美式口语中间位置常会变轻。", mouth: ["舌尖接触", "上齿龈", "不震动"], words: ["top", "water", "cat"], sentence: "Put it on top." },
  { symbol: "/d/", word: "dog", type: "consonant", description: "舌尖接触上齿龈后释放，声带需要震动。", mouth: ["舌尖接触", "上齿龈", "震动"], words: ["dog", "day", "bed"], sentence: "The dog is in bed." },
  { symbol: "/k/", word: "key", type: "consonant", description: "舌后部接触软腭后释放气流。", mouth: ["舌后部接触", "口腔后部", "不震动"], words: ["key", "car", "back"], sentence: "The key is in the car." },
  { symbol: "/g/", word: "go", type: "consonant", description: "舌后部接触软腭后释放，声带需要震动。", mouth: ["舌后部接触", "口腔后部", "震动"], words: ["go", "give", "bag"], sentence: "Go and get the bag." },
  { symbol: "/f/", word: "fan", type: "consonant", description: "上齿轻触下唇，气流从缝隙中通过。", mouth: ["齿唇接触", "前部", "不震动"], words: ["fan", "fine", "coffee"], sentence: "The fan is fine." },
  { symbol: "/v/", word: "van", type: "consonant", description: "口型和 /f/ 相似，但声带需要震动。", mouth: ["齿唇接触", "前部", "震动"], words: ["van", "very", "save"], sentence: "The van is very fast." },
  { symbol: "/s/", word: "sun", type: "consonant", description: "舌尖靠近上齿龈，送出细而连续的气流。", mouth: ["舌尖靠近", "上齿龈", "不震动"], words: ["sun", "see", "bus"], sentence: "The sun is up." },
  { symbol: "/z/", word: "zoo", type: "consonant", description: "口型和 /s/ 相似，但声带需要震动。", mouth: ["舌尖靠近", "上齿龈", "震动"], words: ["zoo", "zero", "please"], sentence: "Please visit the zoo." },
  { symbol: "/ʃ/", word: "she", type: "consonant", description: "嘴唇略微收圆，舌头抬起，送出安静的摩擦音。", mouth: ["略微收圆", "舌头抬起", "不震动"], words: ["she", "shop", "fish"], sentence: "She is at the shop." },
  { symbol: "/ʒ/", word: "vision", type: "consonant", description: "口型和 /ʃ/ 相似，但声带需要震动，常出现在单词中间。", mouth: ["略微收圆", "舌头抬起", "震动"], words: ["vision", "usual", "measure"], sentence: "The vision is clear." },
  { symbol: "/h/", word: "hat", type: "consonant", description: "声门打开，像轻轻哈气一样送出气流。", mouth: ["自然打开", "声门", "不震动"], words: ["hat", "help", "ahead"], sentence: "Put on your hat." },
  { symbol: "/m/", word: "man", type: "consonant", description: "双唇闭合，气流从鼻腔通过，声带震动。", mouth: ["双唇闭合", "鼻腔", "震动"], words: ["man", "make", "time"], sentence: "The man can make it." },
  { symbol: "/n/", word: "no", type: "consonant", description: "舌尖接触上齿龈，气流从鼻腔通过。", mouth: ["舌尖接触", "鼻腔", "震动"], words: ["no", "nice", "dinner"], sentence: "No, it is nice." },
  { symbol: "/ŋ/", word: "sing", type: "consonant", description: "舌后部接触软腭，气流从鼻腔通过，不要额外加 /g/。", mouth: ["舌后部接触", "鼻腔", "震动"], words: ["sing", "long", "thinking"], sentence: "I like singing." },
  { symbol: "/tʃ/", word: "chair", type: "consonant", description: "先短暂阻挡气流，再释放成 /ʃ/ 的摩擦音。", mouth: ["舌尖接触", "前部释放", "不震动"], words: ["chair", "choose", "watch"], sentence: "Choose a chair." },
  { symbol: "/dʒ/", word: "job", type: "consonant", description: "先阻挡气流，再释放成带震动的摩擦音。", mouth: ["舌尖接触", "前部释放", "震动"], words: ["job", "June", "bridge"], sentence: "I like my job." },
  { symbol: "/w/", word: "we", type: "consonant", description: "双唇快速收圆再打开，声音滑向后面的元音。", mouth: ["双唇收圆", "唇部滑动", "震动"], words: ["we", "wait", "away"], sentence: "We can wait." },
  { symbol: "/j/", word: "yes", type: "consonant", description: "舌面靠近硬腭，快速滑向后面的元音。", mouth: ["舌面抬起", "靠前滑动", "震动"], words: ["yes", "you", "yellow"], sentence: "Yes, you can." }
];

const steps = ["认识声音", "看口型", "跟读录音", "听音辨别", "练习单词", "练习短句"];
const wordIpa = {
  about: "/əˈbaʊt/", ago: "/əˈɡoʊ/", sofa: "/ˈsoʊfə/", ahead: "/əˈhɛd/", around: "/əˈraʊnd/",
  baby: "/ˈbeɪbi/", bad: "/bæd/", bag: "/bæɡ/", back: "/bæk/", bath: "/bæθ/", be: "/biː/",
  bed: "/bɛd/", better: "/ˈbɛtər/", bird: "/bɝːd/", big: "/bɪɡ/", blue: "/bluː/", bought: "/bɔːt/",
  bus: "/bʌs/", car: "/kɑːr/", cat: "/kæt/", chair: "/tʃɛr/", choice: "/tʃɔɪs/", choose: "/tʃuːz/",
  coffee: "/ˈkɔːfi/", cup: "/kʌp/", day: "/deɪ/", dinner: "/ˈdɪnər/", dog: "/dɔːɡ/", down: "/daʊn/",
  father: "/ˈfɑːðər/", fan: "/fæn/", fast: "/fæst/", feel: "/fiːl/", fine: "/faɪn/", fish: "/fɪʃ/",
  food: "/fuːd/", get: "/ɡɛt/", give: "/ɡɪv/", go: "/ɡoʊ/", good: "/ɡʊd/", green: "/ɡriːn/",
  hat: "/hæt/", head: "/hɛd/", home: "/hoʊm/", hot: "/hɑːt/", house: "/haʊs/", it: "/ɪt/",
  June: "/dʒuːn/", key: "/kiː/", late: "/leɪt/", learn: "/lɝːn/", light: "/laɪt/", like: "/laɪk/",
  long: "/lɔːŋ/", look: "/lʊk/", love: "/lʌv/", make: "/meɪk/", man: "/mæn/", map: "/mæp/",
  measure: "/ˈmɛʒər/", mother: "/ˈmʌðər/", move: "/muːv/", my: "/maɪ/", nice: "/naɪs/", no: "/noʊ/",
  now: "/naʊ/", out: "/aʊt/", paper: "/ˈpeɪpər/", pen: "/pɛn/", phone: "/foʊn/", please: "/pliːz/",
  red: "/rɛd/", right: "/raɪt/", save: "/seɪv/", see: "/siː/", she: "/ʃiː/", sing: "/sɪŋ/",
  sit: "/sɪt/", stop: "/stɑːp/", sun: "/sʌn/", talk: "/tɔːk/", teacher: "/ˈtiːtʃər/", that: "/ðæt/",
  the: "/ðə/", this: "/ðɪs/", thinking: "/ˈθɪŋkɪŋ/", three: "/θriː/", thought: "/θɔːt/", time: "/taɪm/",
  top: "/tɑːp/", usual: "/ˈjuːʒuəl/", van: "/væn/", very: "/ˈvɛri/", vision: "/ˈvɪʒən/", voice: "/vɔɪs/",
  wait: "/weɪt/", water: "/ˈwɔːtər/", we: "/wiː/", yellow: "/ˈjɛloʊ/", yes: "/jɛs/", you: "/juː/",
  zero: "/ˈzɪroʊ/", zoo: "/zuː/", can: "/kæn/", has: "/hæz/", is: "/ɪz/", in: "/ɪn/", a: "/ə/",
  and: "/ænd/", I: "/aɪ/", have: "/hæv/", your: "/jʊr/", on: "/ɑːn/", here: "/hɪr/", put: "/pʊt/",
  at: "/æt/", clear: "/klɪr/", bridge: "/brɪdʒ/", watch: "/wɑːtʃ/", singing: "/ˈsɪŋɪŋ/", water: "/ˈwɔːtər/",
  book: "/bʊk/", think: "/θɪŋk/", boy: "/bɔɪ/", work: "/wɝːk/", bat: "/bæt/", cab: "/kæb/",
  shop: "/ʃɑːp/", help: "/hɛlp/", job: "/dʒɑːb/", away: "/əˈweɪ/"
};
const wordMeanings = {
  about: "关于；大约", ago: "以前", sofa: "沙发", ahead: "在前面", around: "在周围；大约", away: "离开；在远处",
  baby: "婴儿", bad: "坏的", bag: "包", back: "后面；回来", bat: "蝙蝠", bath: "洗澡", be: "是；存在", bed: "床", better: "更好的",
  big: "大的", bird: "鸟", blue: "蓝色的", book: "书", bought: "买了", boy: "男孩", bridge: "桥", bus: "公交车",
  cab: "出租车", car: "汽车", cat: "猫", chair: "椅子", choice: "选择", choose: "选择", coffee: "咖啡", cup: "杯子",
  day: "一天；白天", dinner: "晚餐", dog: "狗", fan: "风扇；粉丝", father: "父亲", feel: "感觉", fine: "好的；不错",
  fish: "鱼", food: "食物", give: "给", go: "去", good: "好的", green: "绿色的", hat: "帽子", head: "头",
  help: "帮助", home: "家", hot: "热的", house: "房子", job: "工作", key: "钥匙", late: "晚的；迟到的",
  learn: "学习", light: "光；轻的", like: "喜欢；像", long: "长的", look: "看", love: "爱；喜欢", make: "制作；使",
  man: "男人", map: "地图", measure: "衡量；措施", mother: "母亲", move: "移动", my: "我的", nice: "好的；友好的",
  no: "不；没有", now: "现在", out: "出去；在外面", paper: "纸", pen: "笔", phone: "电话", please: "请",
  red: "红色的", right: "右边；正确的", save: "保存；节省", see: "看见", she: "她", shop: "商店", sing: "唱歌",
  sit: "坐", stop: "停止", sun: "太阳", talk: "说话", teacher: "老师", that: "那个", think: "思考；认为",
  thinking: "思考中的", this: "这个", thought: "想过；认为", three: "三", time: "时间", top: "顶部", usual: "通常的",
  van: "面包车", very: "非常", vision: "视力；愿景", voice: "声音", wait: "等待", watch: "观看；手表", water: "水",
  we: "我们", work: "工作", yellow: "黄色的", yes: "是的", you: "你；你们", zero: "零", zoo: "动物园",
  the: "这；那（定冠词）", is: "是", it: "它", I: "我", has: "有", a: "一个", and: "和；并且", in: "在……里面",
  can: "能；可以", have: "有", your: "你的；你们的", on: "在……上面", here: "这里", put: "放", up: "向上",
  mile: "英里", trees: "树", want: "想要", take: "拿；花费", should: "应该", there: "那里", one: "一；一个",
  more: "更多", get: "得到；到达", visit: "参观", clear: "清楚的", June: "六月"
};
const sentenceMeanings = {
  "The cat is black.": "这只猫是黑色的。", "I love this cup.": "我喜欢这个杯子。", "My father has a car.": "我爸爸有一辆车。",
  "I see green trees.": "我看见绿色的树。", "The fish is big.": "这条鱼很大。", "The red bed is new.": "这张红色的床是新的。",
  "The food is good.": "食物很好吃。", "Look at the book.": "看看这本书。", "I think it is three.": "我觉得是三个。",
  "This is my mother.": "这是我的妈妈。", "The red car is right.": "那辆红色的车在右边。", "I like the light.": "我喜欢这盏灯。",
  "I thought about it.": "我想过这件事。", "It is about a mile.": "大约有一英里。", "Have a nice day.": "祝你今天愉快。",
  "I want to go home.": "我想回家。", "Take your time.": "你慢慢来。", "The house is out there.": "那栋房子就在那边。",
  "The boy has a choice.": "这个男孩有一个选择。", "The bird can learn.": "这只鸟可以学习。", "The water is better.": "这个水更好。",
  "Put the pen here.": "把笔放在这里。", "The baby has a bat.": "这个宝宝有一根球棒。", "Put it on top.": "把它放在上面。",
  "The dog is in bed.": "这只狗在床上。", "The key is in the car.": "钥匙在车里。", "Go and get the bag.": "去把包拿来。",
  "The fan is fine.": "这个风扇很好。", "The van is very fast.": "这辆面包车非常快。", "The sun is up.": "太阳升起来了。",
  "Please visit the zoo.": "请参观动物园。", "She is at the shop.": "她在商店。", "The vision is clear.": "视野很清楚。",
  "Put on your hat.": "戴上你的帽子。", "The man can make it.": "这个男人可以做到。", "No, it is nice.": "不，这很好。",
  "I like singing.": "我喜欢唱歌。", "Choose a chair.": "选一把椅子。", "I like my job.": "我喜欢我的工作。",
  "We can wait.": "我们可以等。", "Yes, you can.": "是的，你可以。"
};
const phoneticsQuiz = [
  { question: "哪一组更能帮助你区分 /i/ 和 /ɪ/？", options: ["sheep / ship", "cat / cut", "think / this"], answer: 0, explanation: "sheep /ʃiːp/ 和 ship /ʃɪp/ 只差元音长度与口型，是经典对比。" },
  { question: "发 /θ/ 时，最重要的动作是什么？", options: ["双唇完全闭合", "舌尖轻放在上下齿之间", "舌后部顶住软腭"], answer: 1, explanation: "/θ/ 是清辅音，舌尖轻触齿间并送出气流，声带不震动。" },
  { question: "schwa /ə/ 通常有什么特点？", options: ["只出现在重读音节", "嘴巴放松、声音短而轻", "一定要把嘴唇收得很圆"], answer: 1, explanation: "/ə/ 常出现在非重读音节，口腔放松，学习弱读时非常重要。" },
  { question: "在句子 I NEED coffee. 中，通常哪个词承载主要信息？", options: ["I", "NEED", "coffee"], answer: 1, explanation: "这里 NEED 是核心动作，重读时会更响、更长、更清楚。" },
  { question: "/θ/ 和 /ð/ 最主要的区别是什么？", options: ["/ð/ 需要声带震动", "/θ/ 需要声带震动", "两者口型完全不同"], answer: 0, explanation: "两者口型接近，/θ/ 不震动，/ð/ 震动；可以把手放在喉咙上感受区别。" }
];
let quizAnswers = Array(phoneticsQuiz.length).fill(null);
let selectedIndex = 0;
let stepIndex = 0;
let recorder;
let recordingChunks = [];
let recordingUrl;
let availableVoices = [];
let slowSpeechEnabled = true;
const activeLevel = new URLSearchParams(window.location.search).get("level") || "beginner";
const completedStorageKey = `phonetics-completed-${activeLevel}`;
const legacyCompletedStorageKey = "phonetics-completed";
const completed = new Set(JSON.parse(localStorage.getItem(activeLevel === "beginner" ? legacyCompletedStorageKey : completedStorageKey) || "[]"));
const reviewStorageKey = `phonetics-review-${activeLevel}`;
let reviewPlan = JSON.parse(localStorage.getItem(reviewStorageKey) || "{}");

const $ = (selector) => document.querySelector(selector);
const selected = () => phonemes[selectedIndex];

function loadVoices() {
  availableVoices = window.speechSynthesis?.getVoices?.() || [];
}

function preferredVoice() {
  const usVoices = availableVoices.filter((voice) => /^en-US$/i.test(voice.lang) || /^en_US$/i.test(voice.lang));
  const preferredNames = ["Google US English", "Samantha", "Microsoft Aria Online (Natural) - English (United States)", "Alex"];
  return preferredNames.map((name) => usVoices.find((voice) => voice.name === name)).find(Boolean) || usVoices[0] || null;
}

function updateSpeakingButton(button, speaking) {
  if (!button) return;
  button.classList.toggle("speaking", speaking);
  button.setAttribute("aria-busy", speaking ? "true" : "false");
  if (speaking) {
    button.dataset.originalLabel = button.textContent;
    if (button.classList.contains("word-practice")) button.querySelector(".word-play").textContent = "■";
    else button.textContent = "■ 播放中…";
  } else if (button.dataset.originalLabel) {
    if (button.classList.contains("word-practice")) button.querySelector(".word-play").textContent = "▶";
    else button.textContent = button.dataset.originalLabel;
    delete button.dataset.originalLabel;
  }
}

function speak(text, button) {
  document.querySelectorAll("[data-speak].speaking").forEach((item) => updateSpeakingButton(item, false));
  window.playEnglishText?.(text, { rate: slowSpeechEnabled ? .62 : .9, onStart: () => updateSpeakingButton(button, true), onEnd: () => updateSpeakingButton(button, false), onError: () => updateSpeakingButton(button, false) });
}

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

function ipaFor(word) {
  return wordIpa[word] || wordIpa[word.toLowerCase()] || "";
}

function meaningFor(word) {
  return wordMeanings[word] || wordMeanings[word.toLowerCase()] || "中文释义待补充";
}

function wordButton(word, extraClass = "") {
  const ipa = ipaFor(word);
  return `<button class="word-practice ${extraClass}" data-speak="${word}" type="button"><span class="word-text">${word}</span>${ipa ? `<span class="word-ipa">${ipa}</span>` : ""}<span class="word-meaning">${meaningFor(word)}</span><span class="word-play" aria-hidden="true">▶</span></button>`;
}

function sentenceWordButtons(sentence) {
  return sentence.split(/(\s+)/).map((part) => {
    if (/^\s+$/.test(part)) return part;
    const word = part.replace(/[^A-Za-z]/g, "");
    return word ? wordButton(word, "sentence-word") : part;
  }).join("");
}

function renderMap() {
  const renderGroup = (type) => phonemes.map((item, index) => item.type === type ? `<button class="phoneme-button ${index === selectedIndex ? "active" : ""} ${completed.has(item.symbol) ? "done" : ""}" data-index="${index}" type="button"><span class="phoneme-symbol">${item.symbol}</span><span class="phoneme-word">${item.word}</span><span class="phoneme-word-ipa">${ipaFor(item.word)}</span><span class="phoneme-word-meaning">${meaningFor(item.word)}</span></button>` : "").join("");
  $("#vowel-grid").innerHTML = renderGroup("vowel");
  $("#consonant-grid").innerHTML = renderGroup("consonant");
  document.querySelectorAll(".phoneme-button").forEach((button) => button.addEventListener("click", () => { selectedIndex = Number(button.dataset.index); stepIndex = 0; renderAll(); }));
  $("#completed-count").textContent = completed.size;
  $("#total-count").textContent = phonemes.length;
}

function renderReviewStrip() {
  const strip = $("#review-strip");
  if (!strip) return;
  const entries = Object.entries(reviewPlan).filter(([, review]) => review?.nextAt).sort((a, b) => a[1].nextAt - b[1].nextAt);
  if (!entries.length) { strip.innerHTML = ""; return; }
  const now = Date.now();
  const due = entries.filter(([, review]) => review.nextAt <= now);
  const [symbol, first] = entries[0];
  strip.innerHTML = `<div class="phonetics-review-card"><p>${due.length ? `<strong>有 ${due.length} 个声音到了复习时间。</strong> 现在回听一次，比重新从头学更容易记住。` : `<strong>下一次复习：</strong> ${symbol} · ${new Date(first.nextAt).toLocaleDateString("zh-CN", { month: "numeric", day: "numeric" })}。系统会按间隔帮你对抗遗忘。`}</p><button type="button" id="review-due-button">${due.length ? "开始复习" : "查看复习计划"}</button></div>`;
  $("#review-due-button").addEventListener("click", () => { const target = due[0]?.[0] || symbol; const index = phonemes.findIndex((item) => item.symbol === target); if (index >= 0) { selectedIndex = index; stepIndex = 3; renderAll(); } });
}

function scheduleReview(symbol) {
  const previous = reviewPlan[symbol] || { cycle: 0 };
  const cycle = previous.cycle + 1;
  const days = [1, 3, 7][Math.min(cycle - 1, 2)];
  reviewPlan[symbol] = { cycle, nextAt: Date.now() + days * 86400000 };
  localStorage.setItem(reviewStorageKey, JSON.stringify(reviewPlan));
}

function stepMarkup() {
  const item = selected();
  if (stepIndex === 0) return `<div class="sound-display"><span class="sound-symbol">${item.symbol}</span><span class="sound-name"><strong>${item.word}</strong><span>${ipaFor(item.word)} · 像 ${item.word} 里的声音</span></span></div><p>${item.description}</p><div class="example-row">${item.words.map((word) => wordButton(word)).join("")}</div><button class="sound-button" data-speak="${item.word}" type="button">▶ 播放示范音</button>`;
  if (stepIndex === 1) return `<h2>让嘴巴记住这个动作</h2><p>先观察，再慢慢模仿。不要急着追求速度，清楚比快更重要。</p><div class="mouth-grid">${[["嘴巴", item.mouth[0]], ["舌头", item.mouth[1]], ["声带", item.mouth[2]]].map(([label, value]) => `<div class="mouth-tip"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div><div class="example-row">${wordButton(item.word)}</div><button class="sound-button" data-speak="${item.word}" type="button">▶ 边听边看口型</button>`;
  if (stepIndex === 2) return `<h2>轮到你开口</h2><p>先听示范，再按顺序读这 3 个词。录完后可以反复回放。</p><div class="practice-box"><p><strong>跟读 3 个示范词</strong></p><div class="example-row practice-word-row">${item.words.map((word) => wordButton(word)).join("")}</div><button class="record-button" id="record-button" type="button">🎙 开始录音</button><div class="record-status" id="record-status">还没有录音</div><audio class="audio-preview" id="audio-preview" controls hidden></audio></div>`;
  if (stepIndex === 3) return `<h2>听一听，选出正确的音</h2><p>先不要看答案，点击播放后，选择你听到的音标。</p><button class="sound-button" data-speak="${item.word}" type="button">▶ 播放 ${item.word}</button><div class="choice-grid">${[item.symbol, phonemes[(selectedIndex + 1) % phonemes.length].symbol, phonemes[(selectedIndex + 2) % phonemes.length].symbol].map((symbol) => `<button class="choice-button" data-correct="${symbol === item.symbol}" type="button">${symbol}</button>`).join("")}</div><p class="choice-feedback" id="choice-feedback"></p>`;
  if (stepIndex === 4) return `<h2>把声音放进单词</h2><p>逐个读出这些词。先慢读，再尝试自然速度。</p><div class="example-row practice-word-row">${item.words.map((word) => wordButton(word)).join("")}</div>`;
  return `<h2>试着说完整句子</h2><p>先听一遍，再逐词练习，最后自己说。能听懂、能说出，就是进步。</p><div class="practice-box"><div class="sentence-words">${sentenceWordButtons(item.sentence)}</div><p class="sentence-meaning-inline">${sentenceMeanings[item.sentence] || "中文释义待补充"}</p><button class="sound-button" data-speak="${item.sentence}" type="button">▶ 播放句子</button><button class="record-button" id="record-button" type="button">🎙 录下句子</button><div class="record-status" id="record-status">录音只保存在当前浏览器</div><audio class="audio-preview" id="audio-preview" controls hidden></audio></div>`;
}

function renderLesson() {
  const item = selected();
  $("#lesson-step-label").textContent = `STEP ${stepIndex + 1} OF ${steps.length}`;
  $("#lesson-type").textContent = steps[stepIndex];
  $("#lesson-content").innerHTML = stepMarkup();
  $("#prev-button").disabled = stepIndex === 0;
  const lessonCompleted = completed.has(item.symbol);
  $("#next-button").textContent = stepIndex === steps.length - 1 ? (lessonCompleted ? "已完成本音标 ✓" : "完成本音标 ✓") : "下一步 →";
  $("#next-button").classList.toggle("completed-action", stepIndex === steps.length - 1 && lessonCompleted);
  document.querySelectorAll(".step-item").forEach((button, index) => { button.classList.toggle("active", index === stepIndex); button.classList.toggle("completed", completed.has(item.symbol) && index === steps.length - 1); });
  document.querySelectorAll("[data-speak]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.speak, button)));
  document.querySelectorAll(".choice-button").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("selected", "correct", "wrong")); button.classList.add("selected"); const feedback = $("#choice-feedback"); const correct = button.dataset.correct === "true"; button.classList.add(correct ? "correct" : "wrong"); if (feedback) feedback.textContent = correct ? "听对了。现在再跟读一次，让耳朵和嘴巴建立连接。" : `还可以再听一次。这个音是 ${selected().symbol}，先注意 ${selected().mouth[0]}。`; }));
  const recordButton = $("#record-button");
  if (recordButton) recordButton.addEventListener("click", toggleRecording);
  void item;
}

function renderSteps() {
  $("#step-list").innerHTML = steps.map((step, index) => `<button class="step-item ${index === stepIndex ? "active" : ""}" data-step="${index}" type="button"><span class="step-dot">${index + 1}</span><span>${step}</span></button>`).join("");
  document.querySelectorAll(".step-item").forEach((button) => button.addEventListener("click", () => { stepIndex = Number(button.dataset.step); renderLesson(); }));
}

async function toggleRecording() {
  const button = $("#record-button");
  const status = $("#record-status");
  if (recorder && recorder.state === "recording") { recorder.stop(); button.textContent = "🎙 开始录音"; button.classList.remove("recording"); return; }
  if (!(navigator.mediaDevices && window.MediaRecorder)) { status.textContent = "当前浏览器不支持录音，请使用新版 Chrome 或 Safari。"; return; }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordingChunks = [];
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => { if (event.data.size) recordingChunks.push(event.data); };
    recorder.onstop = () => { stream.getTracks().forEach((track) => track.stop()); recordingUrl = URL.createObjectURL(new Blob(recordingChunks, { type: "audio/webm" })); $("#audio-preview").src = recordingUrl; $("#audio-preview").hidden = false; status.textContent = "录音完成，可以回放。"; };
    recorder.start();
    button.textContent = "■ 停止录音";
    button.classList.add("recording");
    status.textContent = "正在录音……说完后点击停止。";
  } catch (error) { status.textContent = "没有获得麦克风权限，也可以先听示范音练习。"; }
}

function renderAll() { renderMap(); renderSteps(); renderLesson(); renderReviewStrip(); }

function renderQuiz() {
  const list = document.querySelector("#phonetics-quiz-list");
  const score = document.querySelector("#quiz-score");
  if (!list || !score) return;
  const correctCount = quizAnswers.reduce((total, answer, index) => total + (answer === phoneticsQuiz[index].answer ? 1 : 0), 0);
  score.textContent = `${correctCount} / ${phoneticsQuiz.length}`;
  list.innerHTML = phoneticsQuiz.map((item, index) => {
    const chosen = quizAnswers[index];
    return `<article class="quiz-card ${chosen !== null ? "answered" : ""}"><div class="quiz-question"><span>${String(index + 1).padStart(2, "0")}</span><h3>${item.question}</h3></div><div class="quiz-options">${item.options.map((option, optionIndex) => `<button type="button" class="quiz-option ${chosen === optionIndex ? (optionIndex === item.answer ? "correct" : "wrong") : ""} ${chosen !== null && optionIndex === item.answer ? "answer-key" : ""}" data-quiz-index="${index}" data-option-index="${optionIndex}">${option}</button>`).join("")}</div>${chosen !== null ? `<p class="quiz-feedback ${chosen === item.answer ? "is-correct" : "is-wrong"}">${chosen === item.answer ? "答对了。" : "再想一想。"} ${item.explanation}</p>` : ""}</article>`;
  }).join("");
  list.querySelectorAll("[data-quiz-index]").forEach((button) => button.addEventListener("click", () => { const questionIndex = Number(button.dataset.quizIndex); if (quizAnswers[questionIndex] === null) { quizAnswers[questionIndex] = Number(button.dataset.optionIndex); renderQuiz(); } }));
}

function renderSpeechToggle() {
  const toggle = $("#slow-speech-toggle");
  if (!toggle) return;
  toggle.textContent = slowSpeechEnabled ? "🐢 慢速朗读：开启" : "▶ 普通语速：开启";
  toggle.setAttribute("aria-pressed", String(slowSpeechEnabled));
  toggle.classList.toggle("enabled", slowSpeechEnabled);
}

$("#poster-button").addEventListener("click", () => {
  const item = selected();
  openPoster({
    kicker: "AMERICAN ENGLISH · PHONETICS",
    english: `${item.word}  ${item.symbol}`,
    meaning: wordMeanings[item.word] || "中文释义待补充",
    ipa: item.symbol,
    note: item.description,
    details: [
      { title: "发音提示", body: `${item.mouth.join(" · ")}。示范句：${item.sentence}`, accent: "#548464" },
      { title: "当前训练", body: steps[stepIndex], accent: "#bd704b" }
    ],
    words: item.words.map((word) => ({ word, ipa: ipaFor(word), meaning: meaningFor(word) }))
  });
});

$("#prev-button").addEventListener("click", () => { if (stepIndex > 0) { stepIndex -= 1; renderLesson(); } });
$("#next-button").addEventListener("click", () => { if (stepIndex < steps.length - 1) { stepIndex += 1; renderLesson(); } else { completed.add(selected().symbol); localStorage.setItem(activeLevel === "beginner" ? legacyCompletedStorageKey : completedStorageKey, JSON.stringify([...completed])); scheduleReview(selected().symbol); renderAll(); } });
$("#slow-speech-toggle").addEventListener("click", () => { slowSpeechEnabled = !slowSpeechEnabled; window.speechSynthesis?.cancel(); document.querySelectorAll("[data-speak].speaking").forEach((item) => updateSpeakingButton(item, false)); renderSpeechToggle(); });
renderAll();
renderSpeechToggle();
renderQuiz();
$("#quiz-reset")?.addEventListener("click", () => { quizAnswers = Array(phoneticsQuiz.length).fill(null); renderQuiz(); });
