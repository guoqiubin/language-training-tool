(() => {
  "use strict";

  const packs = [
    { id: "people", title: "人与身份", description: "先学会介绍自己", words: [["I", "/aɪ/", "我", "I am a student.", "我是一名学生。", "I 是第一人称，表示“我”。"], ["you", "/juː/", "你；你们", "You are my friend.", "你是我的朋友。", "you 可以表示一个人，也可以表示多个人。"], ["name", "/neɪm/", "名字", "My name is Anna.", "我的名字是 Anna。", "My name is… 是最基础的自我介绍句型。"], ["friend", "/frend/", "朋友", "She is my friend.", "她是我的朋友。", "friend 前面可以用 my、your、a 等词。"], ["teacher", "/ˈtiːtʃər/", "老师", "My teacher is kind.", "我的老师很友善。", "teacher 指教别人学习的人。"], ["he", "/hiː/", "他", "He is my friend.", "他是我的朋友。", "he 用来指一个男性。"], ["she", "/ʃiː/", "她", "She is my teacher.", "她是我的老师。", "she 用来指一个女性。"], ["we", "/wiː/", "我们", "We are ready.", "我们准备好了。", "we 表示包括说话人在内的多个人。"], ["they", "/ðeɪ/", "他们；她们；它们", "They are here.", "他们在这里。", "they 指两个或更多的人或事物。"], ["student", "/ˈstuːdənt/", "学生", "I am a student.", "我是一名学生。", "student 指正在学习的人。"]] },
    { id: "actions", title: "日常动作", description: "把词放进请求里", words: [["want", "/wɑːnt/", "想要", "I want water.", "我想要水。", "want + 名词表示“想要某物”。"], ["need", "/niːd/", "需要", "I need help.", "我需要帮助。", "need 可以表达真实、直接的需要。"], ["have", "/hæv/", "有；拥有", "I have a book.", "我有一本书。", "have 表示拥有，也常用于说明自己带着什么。"], ["like", "/laɪk/", "喜欢", "I like coffee.", "我喜欢咖啡。", "like + 名词表示喜欢某物。"], ["help", "/help/", "帮助", "Can you help me?", "你可以帮我吗？", "help me 是非常高频的求助表达。"], ["go", "/ɡoʊ/", "去", "I go to school.", "我去上学。", "go to + 地点表示去某处。"], ["come", "/kʌm/", "来", "Please come here.", "请来这里。", "come here 表示到说话人所在的位置来。"], ["see", "/siː/", "看见；查看", "I see your point.", "我明白你的观点。", "I see 也可以表示“我明白了”。"], ["say", "/seɪ/", "说", "Please say it again.", "请再说一遍。", "say 后面可以接说出的内容。"], ["know", "/noʊ/", "知道", "I know the answer.", "我知道答案。", "know 表示知道事实或了解某人。"]] },
    { id: "things", title: "身边物品", description: "认识每天会遇到的东西", words: [["book", "/bʊk/", "书", "This is my book.", "这是我的书。", "this is… 用来介绍眼前的东西。"], ["phone", "/foʊn/", "手机；电话", "My phone is here.", "我的手机在这里。", "phone 既可以指手机，也可以指电话。"], ["card", "/kɑːrd/", "卡片；银行卡", "I have my card.", "我带着我的卡。", "在银行场景中，card 常指银行卡。"], ["bag", "/bæɡ/", "包；袋子", "My bag is blue.", "我的包是蓝色的。", "bag 是生活中非常高频的具体名词。"], ["water", "/ˈwɔːtər/", "水", "I need some water.", "我需要一些水。", "water 通常是不可数名词，可以用 some 表示一些。"], ["food", "/fuːd/", "食物", "The food is good.", "食物很好吃。", "food 通常是不可数名词。"], ["coffee", "/ˈkɔːfi/", "咖啡", "I like coffee.", "我喜欢咖啡。", "coffee 通常作为不可数名词使用。"], ["clothes", "/kloʊðz/", "衣服", "My clothes are clean.", "我的衣服是干净的。", "clothes 通常用复数形式。"], ["key", "/kiː/", "钥匙", "Where is my key?", "我的钥匙在哪里？", "key 常用于询问物品位置。"], ["door", "/dɔːr/", "门", "Please open the door.", "请打开门。", "open the door 是常见的请求。"]] },
    { id: "time", title: "时间表达", description: "从现在和今天开始", words: [["today", "/təˈdeɪ/", "今天", "I am busy today.", "我今天很忙。", "today 可以放在句子开头或结尾。"], ["now", "/naʊ/", "现在", "I am ready now.", "我现在准备好了。", "now 指说话的这一刻。"], ["morning", "/ˈmɔːrnɪŋ/", "早上", "Good morning!", "早上好！", "Good morning 是每天都可以使用的问候语。"], ["day", "/deɪ/", "天；日子", "Have a good day.", "祝你今天愉快。", "Have a good day 是自然的道别表达。"], ["time", "/taɪm/", "时间", "What time is it?", "现在几点？", "What time… 用来询问时间。"], ["yesterday", "/ˈjestərdeɪ/", "昨天", "I was busy yesterday.", "我昨天很忙。", "yesterday 指今天之前的那一天。"], ["tomorrow", "/təˈmɑːroʊ/", "明天", "See you tomorrow.", "明天见。", "tomorrow 指今天之后的那一天。"], ["afternoon", "/ˌæftərˈnuːn/", "下午", "Good afternoon.", "下午好。", "afternoon 通常指中午到傍晚。"], ["evening", "/ˈiːvnɪŋ/", "晚上", "Good evening.", "晚上好。", "evening 常用于傍晚和晚上的问候。"], ["week", "/wiːk/", "星期；一周", "See you next week.", "下周见。", "week 表示连续七天。"]] },
    { id: "places", title: "地点方向", description: "说清楚你在哪里", words: [["home", "/hoʊm/", "家；家里", "I am at home.", "我在家。", "at home 表示“在家”，是固定搭配。"], ["school", "/skuːl/", "学校", "I go to school.", "我去上学。", "go to + 地点表示去某个地方。"], ["bank", "/bæŋk/", "银行", "The bank is near here.", "银行就在这附近。", "bank 是后续银行场景的重要基础词。"], ["here", "/hɪr/", "这里", "Please wait here.", "请在这里等。", "here 表示靠近说话人的位置。"], ["there", "/ðer/", "那里", "Your bag is over there.", "你的包在那里。", "there 表示距离说话人稍远的位置。"], ["store", "/stɔːr/", "商店", "The store is open.", "商店开门了。", "store 指商店，也可以表示储存。"], ["room", "/ruːm/", "房间", "The room is clean.", "房间很干净。", "room 可以指房间，也可以指空间。"], ["office", "/ˈɔːfɪs/", "办公室", "I am in the office.", "我在办公室。", "in the office 表示在办公室里。"], ["street", "/striːt/", "街道", "The bank is on this street.", "银行就在这条街上。", "street 常用于说明地点。"], ["near", "/nɪr/", "附近的；靠近", "The school is near here.", "学校就在这附近。", "near 表示距离不远。"]] },
    { id: "states", title: "基础状态", description: "描述你现在的状态", words: [["good", "/ɡʊd/", "好的", "I feel good today.", "我今天感觉很好。", "good 是最常用的正面评价词之一。"], ["bad", "/bæd/", "坏的；糟糕的", "The weather is bad.", "天气很糟糕。", "bad 是 good 的反义词。"], ["ready", "/ˈredi/", "准备好的", "I am ready.", "我准备好了。", "be ready 表示已经准备好做某事。"], ["busy", "/ˈbɪzi/", "忙的", "I am busy now.", "我现在很忙。", "busy 描述一个人当前没有空。"], ["tired", "/ˈtaɪərd/", "累的", "I am tired.", "我累了。", "tired 常和 be 动词一起使用。"], ["happy", "/ˈhæpi/", "开心的", "I am happy today.", "我今天很开心。", "happy 描述积极、愉快的情绪。"], ["okay", "/ˌoʊˈkeɪ/", "好的；没问题", "I am okay now.", "我现在没问题。", "okay 可以表示同意，也可以表示状态还好。"], ["hungry", "/ˈhʌŋɡri/", "饿的", "I am hungry.", "我饿了。", "hungry 常和 be 动词一起使用。"], ["sick", "/sɪk/", "生病的", "I feel sick.", "我感觉不舒服。", "feel sick 表示感觉不舒服。"], ["free", "/friː/", "有空的；免费的", "Are you free today?", "你今天有空吗？", "free 可以表示有空，也可以表示免费。"]] }
  ];

  const meta = {
    I: ["代词", "The first-person pronoun used by a speaker to refer to himself or herself.", [["I am a student.", "我是一名学生。"], ["I am ready.", "我准备好了。"], ["I am busy today.", "我今天很忙。"], ["I am at home.", "我在家。"], ["I am your friend.", "我是你的朋友。"]], ["you", "me", "we"]],
    you: ["代词", "The pronoun used to refer to the person or people being spoken to.", [["You are my friend.", "你是我的朋友。"], ["You are ready.", "你准备好了。"], ["You are here.", "你在这里。"], ["You are busy today.", "你今天很忙。"], ["You are welcome.", "不用客气。"]], ["I", "we", "they"]],
    name: ["名词", "The word or words by which a person, place, or thing is known.", [["My name is Anna.", "我的名字是 Anna。"], ["Her name is Mia.", "她的名字是 Mia。"], ["His name is Leo.", "他的名字是 Leo。"], ["What is your name?", "你叫什么名字？"], ["Please write your name.", "请写下你的名字。"]], ["word", "title", "address"]],
    friend: ["名词", "A person whom you know well and like, usually someone you trust.", [["She is my friend.", "她是我的朋友。"], ["He is your friend.", "他是你的朋友。"], ["My friend is here.", "我的朋友在这里。"], ["I have a good friend.", "我有一个好朋友。"], ["Please help your friend.", "请帮助你的朋友。"]], ["teacher", "student", "person"]],
    teacher: ["名词", "A person who helps students learn a subject or skill.", [["My teacher is kind.", "我的老师很友善。"], ["The teacher is here.", "老师在这里。"], ["I like my teacher.", "我喜欢我的老师。"], ["Please ask your teacher.", "请询问你的老师。"], ["Our teacher is ready.", "我们的老师准备好了。"]], ["student", "coach", "guide"]],
    want: ["动词", "To have a strong feeling that you would like to have or do something.", [["I want water.", "我想要水。"], ["I want coffee.", "我想要咖啡。"], ["I want a book.", "我想要一本书。"], ["I want some help.", "我想要一些帮助。"], ["I want to go home.", "我想回家。"]], ["need", "like", "choose"]],
    need: ["动词", "To require something because it is necessary or useful.", [["I need help.", "我需要帮助。"], ["I need water.", "我需要水。"], ["I need my phone.", "我需要我的手机。"], ["I need a card.", "我需要一张卡。"], ["You need more time.", "你需要更多时间。"]], ["want", "require", "use"]],
    have: ["动词", "To own, hold, or experience something.", [["I have a book.", "我有一本书。"], ["I have my card.", "我带着我的卡。"], ["You have time.", "你有时间。"], ["We have a teacher.", "我们有一位老师。"], ["I have some water.", "我有一些水。"]], ["own", "hold", "keep"]],
    like: ["动词", "To enjoy something or feel that something is pleasant or interesting.", [["I like coffee.", "我喜欢咖啡。"], ["I like this book.", "我喜欢这本书。"], ["I like your bag.", "我喜欢你的包。"], ["You like this place.", "你喜欢这个地方。"], ["We like English.", "我们喜欢英语。"]], ["love", "enjoy", "prefer"]],
    help: ["动词", "To make it easier for someone to do something or solve a problem.", [["Can you help me?", "你可以帮我吗？"], ["Please help your friend.", "请帮助你的朋友。"], ["I can help you.", "我可以帮助你。"], ["This can help me.", "这可以帮助我。"], ["I need your help.", "我需要你的帮助。"]], ["support", "assist", "guide"]],
    book: ["名词", "A set of written or printed pages joined together in a cover.", [["This is my book.", "这是我的书。"], ["I have a book.", "我有一本书。"], ["Your book is here.", "你的书在这里。"], ["Please open the book.", "请打开这本书。"], ["I like this book.", "我喜欢这本书。"]], ["page", "story", "text"]],
    phone: ["名词", "A device used for speaking to someone in another place.", [["My phone is here.", "我的手机在这里。"], ["I need my phone.", "我需要我的手机。"], ["Your phone is new.", "你的手机是新的。"], ["Please call my phone.", "请打我的电话。"], ["I have a phone.", "我有一部手机。"]], ["mobile", "call", "message"]],
    card: ["名词", "A small piece of plastic or paper used for identification or payment.", [["I have my card.", "我带着我的卡。"], ["Please show your card.", "请出示你的卡。"], ["My card is here.", "我的卡在这里。"], ["I need a new card.", "我需要一张新卡。"], ["Your card is ready.", "你的卡准备好了。"]], ["ticket", "pass", "badge"]]
  };
  const fallbackInfo = {
    bag: ["名词", "A container used for carrying personal things.", "noun", ["book", "phone", "card"]],
    water: ["名词", "The clear liquid that people drink and use every day.", "uncountable", ["coffee", "drink", "food"]],
    school: ["名词", "A place where students learn from teachers.", "place", ["bank", "home", "store"]],
    bank: ["名词", "A place where people keep money and use financial services.", "place", ["school", "store", "home"]],
    home: ["名词", "The place where a person lives.", "home", ["school", "bank", "place"]],
    here: ["副词", "In, at, or to this place.", "location", ["there", "home", "near"]],
    there: ["副词", "In, at, or to that place.", "location", ["here", "home", "near"]],
    today: ["副词", "On this day; during the day that is happening now.", "time", ["now", "morning", "day"]],
    now: ["副词", "At the present time or at this moment.", "time", ["today", "time", "morning"]],
    morning: ["名词", "The early part of the day, before noon.", "morning", ["today", "day", "time"]],
    day: ["名词", "A period of twenty-four hours or the time between sunrise and sunset.", "day", ["today", "morning", "time"]],
    time: ["名词", "A measured period during which something happens.", "time", ["day", "today", "now"]],
    good: ["形容词", "Having a positive quality or giving a pleasant feeling.", "state", ["ready", "okay", "kind"]],
    bad: ["形容词", "Not good; unpleasant or of poor quality.", "state", ["good", "tired", "busy"]],
    ready: ["形容词", "Prepared and able to do something.", "state", ["busy", "tired", "okay"]],
    busy: ["形容词", "Having a lot to do and not having much free time.", "state", ["ready", "tired", "good"]],
    tired: ["形容词", "Needing rest because of work or activity.", "state", ["busy", "ready", "good"]]
  };
  const stateKey = "vocabulary-library-beginner";
  let library = [];
  let currentPack = 0;
  let currentWord = 0;
  try { library = JSON.parse(localStorage.getItem(stateKey) || "[]"); if (!Array.isArray(library)) library = []; } catch { library = []; }
  const save = () => { localStorage.setItem(stateKey, JSON.stringify(library)); localStorage.setItem("vocabulary-progress-beginner", JSON.stringify({ library })); };
  const current = () => packs[currentPack].words[currentWord];
  const play = (text, rate = .9) => window.playEnglishText?.(text, { rate });
  const topicList = document.querySelector("#vocabulary-topic-list");
  const card = document.querySelector("#vocabulary-card");
  const position = document.querySelector("#vocabulary-position");
  const topicLabel = document.querySelector("#vocabulary-topic-label");
  const total = packs.reduce((sum, pack) => sum + pack.words.length, 0);

  function getMeta(word, meaning, baseExample, baseExampleZh, tip) {
    const item = meta[word];
    if (item) return { pos: item[0], definition: item[1], examples: item[2], related: item[3] };
    const fallback = fallbackInfo[word] || ["基础词", `A common English word used to talk about ${meaning}.`, "generic", ["good", "useful", "simple"]];
    const group = fallback[2];
    const examples = group === "state"
      ? [[`I am ${word}.`, `我${meaning}。`], [`You are ${word}.`, `你${meaning}。`], [`I feel ${word} today.`, `我今天感觉${meaning}。`], [`She is ${word} now.`, `她现在${meaning}。`], [`We are ${word}.`, `我们${meaning}。`]]
      : group === "place"
        ? [[`I am at the ${word}.`, `我在${meaning}。`], [`I go to the ${word}.`, `我去${meaning}。`], [`The ${word} is near here.`, `${meaning}就在这附近。`], [`Please wait at the ${word}.`, `请在${meaning}等。`], [`Your friend is at the ${word}.`, `你的朋友在${meaning}。`]]
        : group === "home"
          ? [["I am at home.", "我在家。"], ["I go home now.", "我现在回家。"], ["My home is here.", "我的家在这里。"], ["Please come home.", "请回家。"], ["I feel good at home.", "我在家感觉很好。"]]
          : group === "time"
            ? [[`I am busy ${word}.`, `我${meaning}很忙。`], [`I am ready ${word}.`, `我${meaning}准备好了。`], [`Please call me ${word}.`, `请${meaning}给我打电话。`], [`We can meet ${word}.`, `我们可以${meaning}见面。`], [`I have time ${word}.`, `我${meaning}有时间。`]]
            : group === "location"
              ? [[`I am ${word}.`, `我在${meaning}。`], [`Please wait ${word}.`, `请在${meaning}等。`], [`Your book is ${word}.`, `你的书在${meaning}。`], [`Come ${word}.`, `到${meaning}来。`], [`We can meet ${word}.`, `我们可以在${meaning}见面。`]]
              : group === "uncountable"
                ? [[`I need some ${word}.`, `我需要一些${meaning}。`], [`I have some ${word}.`, `我有一些${meaning}。`], [`Please bring some ${word}.`, `请带一些${meaning}。`], [`This ${word} is good.`, `这个${meaning}很好。`], [`I like cold ${word}.`, `我喜欢冷的${meaning}。`]]
                : [[baseExample, baseExampleZh], [`I use ${word} every day.`, `我每天使用“${meaning}”。`], [`I need ${word}.`, `我需要“${meaning}”。`], [`This is ${word}.`, `这是“${meaning}”。`], [`Please say ${word}.`, `请说出“${meaning}”。`]];
    return { pos: fallback[0], definition: fallback[1], examples, related: fallback[3] };
  }
  function renderTopics() { topicList.innerHTML = packs.map((pack, index) => `<button class="vocabulary-topic ${index === currentPack ? "active" : ""}" data-pack="${index}" type="button"><strong>${pack.title}</strong><small>${pack.description} · ${pack.words.length} 词</small></button>`).join(""); }
  function renderLibrary() {
    const list = document.querySelector("#vocabulary-library-list");
    list.innerHTML = library.length ? library.map((word) => { const item = packs.flatMap((pack) => pack.words).find((entry) => entry[0] === word); return item ? `<div class="vocabulary-library-item"><button type="button" class="vocabulary-library-word" data-library-word="${item[0]}"><strong>${item[0]}</strong><small>${item[2]}</small></button><button type="button" class="vocabulary-library-delete" data-delete-word="${item[0]}" aria-label="从词库删除 ${item[0]}">删除</button></div>` : ""; }).join("") : `<div class="vocabulary-library-empty">词库还是空的。点击卡片上的“加入词库”，以后刷新页面也可以继续复习。</div>`;
    document.querySelector("#vocabulary-library-count").textContent = library.length;
    document.querySelector("#vocabulary-total").textContent = total;
  }
  function renderCard() {
    const [word, ipa, meaning, baseExample, baseExampleZh, tip] = current();
    const info = getMeta(word, meaning, baseExample, baseExampleZh, tip);
    const pack = packs[currentPack];
    const examples = info.examples.slice(0, 5);
    const inLibrary = library.includes(word);
    topicLabel.textContent = pack.title;
    position.textContent = `${currentWord + 1} / ${pack.words.length}`;
    card.innerHTML = `<div class="vocabulary-card-top"><div><div class="vocabulary-card-label">${info.pos}</div><h3>${word}</h3><p class="vocabulary-ipa">${ipa}</p></div><button class="vocabulary-play vocabulary-play-primary" type="button" data-play-word>▶ 朗读单词</button></div><div class="vocabulary-meaning-row"><div><p class="vocabulary-section-label">中文释义</p><p class="vocabulary-meaning">${meaning}</p></div><div><p class="vocabulary-section-label">词类</p><p class="vocabulary-pos">${info.pos}</p></div></div><section class="vocabulary-definition"><div class="vocabulary-definition-heading"><p class="vocabulary-section-label">ENGLISH DEFINITION · 英英解释</p><button class="vocabulary-play" type="button" data-play-definition>▶ 常速朗读</button></div><p>${info.definition}</p></section><section class="vocabulary-example-list"><div class="vocabulary-definition-heading"><p class="vocabulary-section-label">PUT IT IN SENTENCES · 5 个同结构例句</p><button class="vocabulary-play" type="button" data-play-slow>🐢 慢速朗读例句</button></div>${examples.map(([en, zh], index) => `<div class="vocabulary-example-row"><div><p class="vocabulary-example-en">${en}</p><p class="vocabulary-example-zh">${zh}</p></div><button class="vocabulary-example-play" type="button" data-example-index="${index}">▶ 跟读</button></div>`).join("")}</section><section class="vocabulary-related"><p class="vocabulary-section-label">RELATED WORDS · 3 个同类词</p><div>${info.related.map((related) => `<button type="button" class="vocabulary-related-word" data-related-word="${related}">${related}</button>`).join("")}</div></section><p class="vocabulary-tip"><strong>使用提示：</strong>${tip}</p><button type="button" class="vocabulary-add-button ${inLibrary ? "is-added" : ""}" data-add-library>${inLibrary ? "✓ 已在我的词库" : "＋ 加入词库"}</button>`;
    document.querySelector("#vocabulary-prev").disabled = currentWord === 0;
    document.querySelector("#vocabulary-next").disabled = currentWord === pack.words.length - 1;
    renderTopics();
  }
  function findWord(word) { const packIndex = packs.findIndex((pack) => pack.words.some((entry) => entry[0].toLowerCase() === word.toLowerCase())); if (packIndex < 0) return; currentPack = packIndex; currentWord = packs[packIndex].words.findIndex((entry) => entry[0].toLowerCase() === word.toLowerCase()); renderCard(); }

  topicList.addEventListener("click", (event) => { const button = event.target.closest("[data-pack]"); if (!button) return; currentPack = Number(button.dataset.pack); currentWord = 0; renderCard(); });
  card.addEventListener("click", (event) => {
    const word = current();
    const info = getMeta(word[0], word[2], word[3], word[4], word[5]);
    if (event.target.closest("[data-play-word]")) play(word[0]);
    if (event.target.closest("[data-play-definition]")) play(info.definition);
    if (event.target.closest("[data-play-slow]")) play(info.examples[0][0], .58);
    const exampleButton = event.target.closest("[data-example-index]");
    if (exampleButton) play(info.examples[Number(exampleButton.dataset.exampleIndex)][0], .82);
    const relatedButton = event.target.closest("[data-related-word]");
    if (relatedButton) findWord(relatedButton.dataset.relatedWord);
    const addButton = event.target.closest("[data-add-library]");
    if (addButton && !library.includes(word[0])) { library.push(word[0]); save(); renderLibrary(); renderCard(); }
  });
  document.querySelector("#vocabulary-prev").addEventListener("click", () => { if (currentWord > 0) { currentWord -= 1; renderCard(); } });
  document.querySelector("#vocabulary-next").addEventListener("click", () => { if (currentWord < packs[currentPack].words.length - 1) { currentWord += 1; renderCard(); } });
  document.querySelector("#vocabulary-library-list").addEventListener("click", (event) => { const deleteButton = event.target.closest("[data-delete-word]"); if (deleteButton) { library = library.filter((word) => word !== deleteButton.dataset.deleteWord); save(); renderLibrary(); renderCard(); return; } const wordButton = event.target.closest("[data-library-word]"); if (wordButton) { findWord(wordButton.dataset.libraryWord); window.scrollTo({ top: document.querySelector(".vocabulary-workspace").offsetTop - 95, behavior: "smooth" }); } });
  renderLibrary();
  renderCard();
})();
