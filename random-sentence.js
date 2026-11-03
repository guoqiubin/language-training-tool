const sentences = [
  { length: "short", structure: "祈使句", tags: ["时间"], label: "日常表达 · Everyday", english: "Give me a second.", meaning: "等我一下。", note: "需要一点时间时，可以自然地这样说。" },
  { length: "short", structure: "陈述句", tags: ["出行"], label: "日常表达 · Everyday", english: "I’m on my way.", meaning: "我在路上了。", note: "告诉别人你已经出发，正在过去。" },
  { length: "short", structure: "陈述句", tags: ["回应"], label: "日常表达 · Everyday", english: "That sounds good.", meaning: "听起来不错。", note: "接受一个建议，或者表示你觉得这个想法很好。" },
  { length: "short", structure: "祈使句", tags: ["思考"], label: "日常表达 · Everyday", english: "Let me think.", meaning: "让我想想。", note: "回答问题前，给自己一点思考时间。" },
  { length: "short", structure: "陈述句", tags: ["表达观点"], label: "日常表达 · Everyday", english: "I’m not sure.", meaning: "我不太确定。", note: "不确定答案时，比直接说 I don’t know 更自然。" },
  { length: "short", structure: "陈述句", tags: ["安慰"], label: "日常表达 · Everyday", english: "No worries.", meaning: "没关系。", note: "安慰别人，或者表示小事一桩。" },
  { length: "short", structure: "祈使句", tags: ["日常沟通"], label: "日常表达 · Everyday", english: "Take your time.", meaning: "你慢慢来。", note: "告诉对方不用着急。" },
  { length: "short", structure: "祈使句", tags: ["点餐"], label: "日常表达 · Everyday", english: "Add some ice, please.", meaning: "请加一些冰。", note: "点饮料时，可以这样提出简单要求。" },
  { length: "medium", structure: "陈述句", tags: ["计划"], label: "日常表达 · Everyday", english: "Sounds like a plan.", meaning: "就这么定了。", note: "同意一个计划时，可以这样回应。" },
  { length: "medium", structure: "陈述句", tags: ["工作沟通"], label: "日常表达 · Everyday", english: "I’ll get back to you.", meaning: "我之后回复你。", note: "现在不能马上回答时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["购物"], label: "日常表达 · Everyday", english: "I’m just looking.", meaning: "我只是随便看看。", note: "在商店里暂时不需要帮助时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["出行"], label: "日常表达 · Everyday", english: "I’ll be there in a minute.", meaning: "我马上就到。", note: "告诉别人你很快就会到。" },
  { length: "medium", structure: "疑问句", tags: ["求助"], label: "日常表达 · Everyday", english: "Could you help me with this?", meaning: "你可以帮我一下吗？", note: "需要别人帮忙时，可以礼貌地这样问。" },
  { length: "medium", structure: "祈使句", tags: ["外卖"], label: "日常表达 · Everyday", english: "Please leave it at the door.", meaning: "请把它放在门口。", note: "给外卖员或快递员留言时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["点餐"], label: "日常表达 · Everyday", english: "I’d like a coffee, please.", meaning: "我想要一杯咖啡。", note: "在咖啡店点单时，可以礼貌地这样说。" },
  { length: "medium", structure: "陈述句", tags: ["约见"], label: "日常表达 · Everyday", english: "We can meet after work.", meaning: "我们可以下班后见面。", note: "和别人安排时间时，可以这样表达。" },
  { length: "long", structure: "疑问句", tags: ["沟通"], label: "日常表达 · Everyday", english: "Could you say that one more time?", meaning: "你可以再说一遍吗？", note: "没有听清楚时，礼貌地请对方重复。" },
  { length: "long", structure: "陈述句", tags: ["生活"], label: "日常表达 · Everyday", english: "I’m still getting used to this place.", meaning: "我还在适应这个地方。", note: "刚到一个新环境时，可以这样介绍自己的状态。" },
  { length: "long", structure: "疑问句", tags: ["邀请", "点餐"], label: "日常表达 · Everyday", english: "Do you want to grab something to eat?", meaning: "你想一起吃点东西吗？", note: "邀请朋友一起吃饭时，可以这样说。" },
  { length: "long", structure: "陈述句", tags: ["点餐"], label: "日常表达 · Everyday", english: "I’m not sure what I should order.", meaning: "我不确定该点什么。", note: "在餐厅犹豫点什么时，可以这样说。" },
  { length: "long", structure: "祈使句", tags: ["关心"], label: "日常表达 · Everyday", english: "Please let me know when you get home.", meaning: "你到家后告诉我一声。", note: "关心对方安全时，可以这样说。" },
  { length: "long", structure: "陈述句", tags: ["通勤"], label: "日常表达 · Everyday", english: "I usually take the train to work.", meaning: "我通常坐火车去上班。", note: "介绍日常习惯时，可以这样说。" },
  { length: "long", structure: "疑问句", tags: ["工作沟通"], label: "日常表达 · Everyday", english: "Can we talk about it after the meeting?", meaning: "我们可以会后再聊吗？", note: "工作中需要稍后讨论一件事时，可以这样说。" },
  { length: "long", structure: "陈述句", tags: ["沟通"], label: "日常表达 · Everyday", english: "I was wondering if you could send me the address.", meaning: "不知道你是否可以把地址发给我。", note: "礼貌地向别人索要信息时，可以这样说。" }
];

// Expanded everyday corpus: 18 sentence frames × 60 practical actions = 1,080 variants.
// The frames keep the language simple while varying sentence structure and topic tags.
const actionVariants = [
  ["grab a coffee after class", "下课后喝杯咖啡", "社交"],
  ["check the address", "确认一下地址", "沟通"],
  ["send the details", "发送细节", "工作"],
  ["wait for a minute", "等一分钟", "时间"],
  ["bring some water", "带点水", "生活"],
  ["call you later", "晚一点给你打电话", "沟通"],
  ["practice this sentence", "练习这句话", "学习"],
  ["take the next train", "坐下一班火车", "出行"],
  ["order some food", "点一些吃的", "点餐"],
  ["leave it at the door", "把它放在门口", "外卖"],
  ["save this message", "保存这条消息", "沟通"],
  ["write it down", "把它写下来", "学习"],
  ["speak a little slower", "说得慢一点", "沟通"],
  ["check the time", "看一下时间", "时间"],
  ["look at the menu", "看一下菜单", "点餐"],
  ["try it again", "再试一次", "学习"],
  ["ask the teacher", "问一下老师", "学习"],
  ["book a table", "预订一张桌子", "点餐"],
  ["take a short break", "休息一会儿", "生活"],
  ["go home early", "早点回家", "生活"],
  ["meet my friends for dinner", "和我的朋友吃晚饭", "社交"],
  ["tell the team the truth", "告诉团队实话", "沟通"],
  ["keep the door open", "让门开着", "生活"],
  ["turn down the music", "把音乐调小一点", "生活"],
  ["bring an umbrella", "带一把伞", "出行"],
  ["follow the signs", "跟着指示牌走", "出行"],
  ["send the photo", "把照片发过来", "沟通"],
  ["share the link", "分享这个链接", "工作"],
  ["start with the basics", "从基础开始", "学习"],
  ["finish before dinner", "在晚饭前完成", "时间"],
  ["check the weather", "查看天气", "生活"],
  ["pack my bag", "收拾我的包", "出行"],
  ["charge my phone", "给手机充电", "生活"],
  ["open the app", "打开这个应用", "科技"],
  ["read the instructions", "阅读说明", "学习"],
  ["look for a quiet seat", "找一个安静的座位", "生活"],
  ["pick up the package", "取包裹", "购物"],
  ["leave a note", "留一张便条", "沟通"],
  ["make a reservation", "做一个预订", "生活"],
  ["change the plan", "改变计划", "计划"],
  ["answer the email", "回复邮件", "工作"],
  ["review the list", "检查清单", "工作"],
  ["bring the receipt", "带上收据", "购物"],
  ["take a photo", "拍张照片", "生活"],
  ["close the window", "关上窗户", "生活"],
  ["turn on the light", "打开灯", "生活"],
  ["meet near the station", "在车站附近见面", "出行"],
  ["wait outside", "在外面等", "出行"],
  ["pay by card", "刷卡付款", "购物"],
  ["try the local food", "尝尝当地食物", "点餐"],
  ["visit the market", "逛逛市场", "生活"],
  ["learn a new word", "学一个新单词", "学习"],
  ["repeat the new words", "重复这些新单词", "学习"],
  ["speak with confidence", "自信地说话", "口语"],
  ["keep it simple", "保持简单", "表达观点"],
  ["stay for a while", "待一会儿", "时间"],
  ["come back tomorrow", "明天回来", "计划"],
  ["start after lunch", "午饭后开始", "时间"],
  ["finish the report", "完成报告", "工作"],
  ["check with the team", "和团队确认一下", "工作"]
];

const expansionFrames = [
  { length: "short", structure: "陈述句", tags: ["计划"], makeEnglish: (action) => `I’ll ${action}.`, makeMeaning: (meaning) => `我会${meaning}。`, note: "表达接下来的安排时，可以这样说。" },
  { length: "short", structure: "祈使句", tags: ["日常沟通"], makeEnglish: (action) => `Please ${action}.`, makeMeaning: (meaning) => `请${meaning}。`, note: "提出一个简单、礼貌的要求时，可以这样说。" },
  { length: "short", structure: "疑问句", tags: ["求助"], makeEnglish: (action) => `Could you ${action}?`, makeMeaning: (meaning) => `你可以${meaning}吗？`, note: "需要别人帮忙时，可以礼貌地这样问。" },
  { length: "short", structure: "祈使句", tags: ["邀请"], makeEnglish: (action) => `Let’s ${action}.`, makeMeaning: (meaning) => `我们${meaning}吧。`, note: "邀请别人一起做一件事时，可以这样说。" },
  { length: "short", structure: "陈述句", tags: ["表达观点"], makeEnglish: (action) => `I want to ${action}.`, makeMeaning: (meaning) => `我想${meaning}。`, note: "表达自己的想法或愿望时，可以这样说。" },
  { length: "short", structure: "陈述句", tags: ["日常沟通"], makeEnglish: (action) => `I need to ${action}.`, makeMeaning: (meaning) => `我需要${meaning}。`, note: "说明自己接下来要做什么时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["计划"], makeEnglish: (action) => `I’m going to ${action}.`, makeMeaning: (meaning) => `我打算${meaning}。`, note: "谈论已经决定好的计划时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["学习"], makeEnglish: (action) => `I’m trying to ${action}.`, makeMeaning: (meaning) => `我正在努力${meaning}。`, note: "说明自己正在尝试做某件事时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["习惯"], makeEnglish: (action) => `I usually ${action}.`, makeMeaning: (meaning) => `我通常会${meaning}。`, note: "介绍自己的日常习惯时，可以这样说。" },
  { length: "medium", structure: "疑问句", tags: ["邀请"], makeEnglish: (action) => `Would you like to ${action}?`, makeMeaning: (meaning) => `你想要${meaning}吗？`, note: "礼貌地邀请或询问对方意愿时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["表达观点"], makeEnglish: (action) => `I’d rather ${action}.`, makeMeaning: (meaning) => `我更愿意${meaning}。`, note: "在两个选择中表达偏好时，可以这样说。" },
  { length: "medium", structure: "陈述句", tags: ["计划"], makeEnglish: (action) => `We could ${action}.`, makeMeaning: (meaning) => `我们可以${meaning}。`, note: "提出一个可行的建议时，可以这样说。" },
  { length: "long", structure: "疑问句", tags: ["沟通"], makeEnglish: (action) => `I was wondering if you could ${action}.`, makeMeaning: (meaning) => `不知道你是否可以${meaning}。`, note: "更委婉地提出请求时，可以这样说。" },
  { length: "long", structure: "陈述句", tags: ["生活"], makeEnglish: (action) => `When I have time, I usually ${action}.`, makeMeaning: (meaning) => `有时间的时候，我通常会${meaning}。`, note: "介绍空闲时间里的习惯时，可以这样说。" },
  { length: "long", structure: "疑问句", tags: ["邀请"], makeEnglish: (action) => `If you’re free, can we ${action}?`, makeMeaning: (meaning) => `如果你有空，我们可以${meaning}吗？`, note: "邀请别人，并且给对方留下选择空间时，可以这样说。" },
  { length: "long", structure: "陈述句", tags: ["表达观点"], makeEnglish: (action) => `I think it would be helpful to ${action}.`, makeMeaning: (meaning) => `我觉得${meaning}会有帮助。`, note: "给出一个温和、实用的建议时，可以这样说。" },
  { length: "long", structure: "陈述句", tags: ["方法"], makeEnglish: (action) => `The easiest way is to ${action}.`, makeMeaning: (meaning) => `最简单的方法就是${meaning}。`, note: "说明解决问题的方法时，可以这样说。" },
  { length: "long", structure: "祈使句", tags: ["出行"], makeEnglish: (action) => `Before we leave, let’s ${action}.`, makeMeaning: (meaning) => `我们出发前，先${meaning}吧。`, note: "安排出发前要做的事情时，可以这样说。" }
];

function buildExpandedCorpus() {
  return expansionFrames.flatMap((frame) => actionVariants.map(([englishAction, chineseAction, topic]) => ({
    length: frame.length,
    structure: frame.structure,
    tags: [topic, ...frame.tags],
    label: "日常表达 · Everyday",
    english: frame.makeEnglish(englishAction),
    meaning: frame.makeMeaning(chineseAction),
    note: frame.note,
    keyWords: [{ word: englishAction, meaning: chineseAction }]
  })));
}

const sentenceAnalyses = {
  "Give me a second.": { pronunciation: "second 的重音在第一音节；Give me 可以轻快连读。", keyWords: [{ word: "give me", meaning: "给我" }], grammar: "give me + 名词：用来提出简单请求。" },
  "I’m on my way.": { pronunciation: "I’m on my 可自然连读，way 是句子的重音。", keyWords: [{ word: "on my way", meaning: "在路上" }], grammar: "be on one’s way：表示正在前往某地。" },
  "That sounds good.": { pronunciation: "sounds 末尾的 /z/ 要发出来，good 清晰收尾。", keyWords: [{ word: "sounds good", meaning: "听起来不错" }], grammar: "sound + 形容词：表示‘听起来……’。" },
  "Let me think.": { pronunciation: "Let me 常轻读为 /let mi/，think 的 /θ/ 要咬舌。", keyWords: [{ word: "let me", meaning: "让我……" }], grammar: "let me + 动词：表示‘让我做……’。" },
  "I’m not sure.": { pronunciation: "not 要轻读，sure 是主要重音。", keyWords: [{ word: "not sure", meaning: "不确定" }] },
  "No worries.": { pronunciation: "两个词都短而自然，worries 的 /z/ 要发出来。", keyWords: [{ word: "no worries", meaning: "没关系" }] },
  "Take your time.": { pronunciation: "Take 和 time 的 /t/ 清楚，your 可以轻读。", keyWords: [{ word: "take your time", meaning: "慢慢来" }], grammar: "take your time：固定表达，表示‘不用着急’。" },
  "Add some ice, please.": { pronunciation: "Add some 可以连读，please 的 /pl/ 要连起来。", keyWords: [{ word: "add", meaning: "添加" }, { word: "ice", meaning: "冰" }], grammar: "祈使句：动词原形开头，用来提出要求。" },
  "Could you help me with this?": { pronunciation: "Could you 常自然连读，help 的 /h/ 不要吞掉。", keyWords: [{ word: "help me with", meaning: "帮我处理……" }], grammar: "Could you + 动词：礼貌地提出请求。" },
  "I’d like a coffee, please.": { pronunciation: "I’d like 可以连读，coffee 的第一个音节重读。", keyWords: [{ word: "I’d like", meaning: "我想要" }, { word: "coffee", meaning: "咖啡" }], grammar: "I’d like + 名词：礼貌地点单或表达想要的东西。" },
  "Do you want to grab something to eat?": { pronunciation: "Do you want to 可轻读，grab 和 eat 是主要重音。", keyWords: [{ word: "grab something to eat", meaning: "吃点东西" }], grammar: "want to + 动词：表示‘想要做……’；口语中常读成 wanna。" },
  "I’m still getting used to this place.": { pronunciation: "getting used to 要连贯说，used 的 /d/ 要轻收。", keyWords: [{ word: "get used to", meaning: "适应……" }], grammar: "get used to + 名词/动名词：表示逐渐适应。" },
  "I’m not sure what I should order.": { pronunciation: "what I 可以弱读连读，order 的第一个音节重读。", keyWords: [{ word: "order", meaning: "点餐" }], grammar: "what I should + 动词：表达‘我应该做什么’。" },
  "Please let me know when you get home.": { pronunciation: "let me know 可以连读，home 是句尾重音。", keyWords: [{ word: "let me know", meaning: "告诉我" }], grammar: "let me know：固定表达，表示‘告诉我’。" },
  "I usually take the train to work.": { pronunciation: "usually 的重音在第一个音节，to 可以轻读。", keyWords: [{ word: "usually", meaning: "通常" }, { word: "take the train", meaning: "坐火车" }], grammar: "usually + 动词：用于描述日常习惯。" },
  "Can we talk about it after the meeting?": { pronunciation: "Can we 可轻读，talk 和 meeting 要清晰重读。", keyWords: [{ word: "talk about", meaning: "谈论" }], grammar: "Can we + 动词：提出建议或询问是否可以做某事。" },
  "I was wondering if you could send me the address.": { pronunciation: "I was wondering 可弱读，could send 连贯说更自然。", keyWords: [{ word: "I was wondering if", meaning: "不知道是否可以……" }, { word: "address", meaning: "地址" }], grammar: "I was wondering if...：非常礼貌、委婉的请求句型。" },
  "Sounds like a plan.": { pronunciation: "Sounds 的 /z/ 要发出来，plan 清楚重读。", keyWords: [{ word: "sounds like", meaning: "听起来像……" }], grammar: "Sounds like + 名词：表示‘听起来像一个……’。" },
  "I’ll get back to you.": { pronunciation: "I’ll get 可以自然连读，back 和 you 保持清晰。", keyWords: [{ word: "get back to you", meaning: "回复你" }], grammar: "get back to someone：表示之后回复某人。" },
  "I’m just looking.": { pronunciation: "just 的 /t/ 可以轻收，looking 的第一个音节重读。", keyWords: [{ word: "just looking", meaning: "只是看看" }] },
  "I’ll be there in a minute.": { pronunciation: "I’ll be there 可以连贯说，minute 的第一个音节重读。", keyWords: [{ word: "in a minute", meaning: "马上；一会儿" }], grammar: "in a minute：口语中常表示‘很快’。" },
  "Please leave it at the door.": { pronunciation: "leave it 可以连读，door 是句尾重音。", keyWords: [{ word: "leave it at the door", meaning: "把它放在门口" }], grammar: "Please + 动词原形：礼貌地提出请求。" },
  "We can meet after work.": { pronunciation: "We can 中 can 可以轻读，meet 和 work 清晰重读。", keyWords: [{ word: "after work", meaning: "下班后" }], grammar: "can + 动词：表示可以或能够做某事。" },
};

const richPronunciationByEnglish = {
  "Please tell the team the truth.": "先按照意群来读：Please tell the team / the truth。Please 是礼貌请求的入口，读得轻一些；tell the team 不要逐词停顿，可以连成一个完整动作。tell，/tel/，意思是“告诉、讲述”；team，/tiːm/，意思是“团队”；truth，/truːθ/，意思是“事实、真相”。注意 truth 结尾的 /θ/，舌尖轻轻放在上下齿之间，不要读成 /s/ 或 /t/。这句话的重点不是单独强调 please，而是把 tell、team、truth 这几个实词读清楚，尤其把重音落在 truth 上。最后连起来读：Please tell the team / the truth。",
};

const pronunciationNotes = {
  please: ["/pliːz/", "礼貌地提出请求"],
  tell: ["/tel/", "告诉、讲述"],
  team: ["/tiːm/", "团队"],
  truth: ["/truːθ/", "事实、真相；结尾 /θ/ 要轻轻咬舌"],
  coffee: ["/ˈkɔːfi/", "咖啡；第一个音节重读"],
  address: ["/ˈædres/", "地址；这里按名词读，重音在第一个音节"],
  order: ["/ˈɔːrdər/", "点餐、订购；第一个音节重读"],
  usually: ["/ˈjuːʒuəli/", "通常；开头音节更突出"],
  practice: ["/ˈpræktɪs/", "练习；名词和动词都可表示练习"],
  message: ["/ˈmesɪdʒ/", "消息；结尾是 /dʒ/，不要读成 /ʒ/"],
  meeting: ["/ˈmiːtɪŋ/", "会议；第一个音节重读"],
  minute: ["/ˈmɪnɪt/", "分钟；口语里的“一会儿”"],
  train: ["/treɪn/", "火车；/eɪ/ 要有滑动"],
  food: ["/fuːd/", "食物；元音要拉长"],
  home: ["/hoʊm/", "家；句尾通常承载重音"],
  simple: ["/ˈsɪmpəl/", "简单的；第一个音节重读"],
};

function thoughtGroups(english) {
  return english
    .replace(/,\s*/g, " / ")
    .replace(/\b(if|when|before|after)\b/gi, " / $1")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s*\/\s*/, "")
    .trim();
}

function richPronunciation(sentence, seed) {
  if (richPronunciationByEnglish[sentence.english]) return richPronunciationByEnglish[sentence.english];
  const phrase = sentence.keyWords?.[0]?.word || sentence.english.split(/[,.!?]/)[0];
  const phraseTokens = phrase.toLowerCase().match(/[a-z]+/g) || [];
  const knownWord = phraseTokens.map((token) => pronunciationNotes[token] ? [token, pronunciationNotes[token]] : null).find(Boolean);
  const structureTip = sentence.structure === "疑问句"
    ? "这是疑问句，句尾不要突然压低，先把真正想问的信息读清楚，再自然上扬。"
    : sentence.structure === "祈使句"
      ? "这是请求或建议，please 和其他功能词可以轻读，核心动作要清楚，但不要把每个词都读得很重。"
      : "这是陈述句，功能词轻轻带过，把重音留给真正承载意思的实词，句尾自然收住。";
  const wordTip = knownWord
    ? `${knownWord[0]}，${knownWord[1][0]}，意思是“${knownWord[1][1]}”。先把这个词的核心音读准，再放回短语里。`
    : `${phrase} 是本句的重点表达。不要把它拆成一个个孤立的单词，要把它作为一个完整意群连起来。`;
  const seedTip = seed ? `发音提醒：${seed}` : "";
  return `先按照意群来读：${thoughtGroups(sentence.english)}。先听清句子的核心动作，再把语气词和功能词轻轻带过。${wordTip}${seedTip ? ` ${seedTip}` : ""}${structureTip}最后再完整读一遍：重音落在核心实词上，词与词之间保持连贯，句子的语气跟着句型自然变化。`;
}

const existingEnglish = new Set(sentences.map((sentence) => sentence.english));
sentences.push(...buildExpandedCorpus().filter((sentence) => {
  if (existingEnglish.has(sentence.english)) return false;
  existingEnglish.add(sentence.english);
  return true;
}));

const sentenceQueues = new Map();
let currentLength = "short";
let currentIndex = 0;
const $ = (selector) => document.querySelector(selector);
function getSentenceAnalysis(sentence) {
  const preset = sentenceAnalyses[sentence.english] || {};
  return {
    pronunciation: richPronunciation(sentence, preset.pronunciation),
    keyWords: preset.keyWords || sentence.keyWords || [],
    grammar: preset.grammar || (sentence.structure === "疑问句" ? "疑问句：句首的助动词或情态动词帮助我们提问。" : sentence.structure === "祈使句" ? "祈使句：用动词原形开头，直接表达请求或建议。" : "")
  };
}
function sceneKeyFor(sentence) {
  const tags = [...sentence.tags, sentence.structure];
  if (tags.some((tag) => ["点餐", "外卖"].includes(tag))) return "food";
  if (tags.some((tag) => ["出行", "通勤"].includes(tag))) return "travel";
  if (tags.some((tag) => ["工作", "工作沟通"].includes(tag))) return "work";
  if (tags.includes("购物")) return "shopping";
  if (tags.includes("学习")) return "learning";
  if (tags.some((tag) => ["邀请", "社交"].includes(tag))) return "social";
  if (tags.includes("时间")) return "time";
  if (tags.includes("计划")) return "plan";
  if (tags.some((tag) => ["沟通", "日常沟通", "求助", "回应"].includes(tag))) return "communication";
  return "life";
}
function sceneSvg(key) {
  const common = 'fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"';
  const scenes = {
    communication: '<path ' + common + ' d="M35 170h150a22 22 0 0 0 22-22V70a22 22 0 0 0-22-22H35a22 22 0 0 0-22 22v78a22 22 0 0 0 22 22Z"/><path ' + common + ' d="m55 170-20 32 55-32M72 98h76M72 126h48"/><circle cx="280" cy="116" r="42" ' + common + '/>',
    food: '<path ' + common + ' d="M55 188h280M95 188v30m220-30v30M115 188c0-62 36-96 90-96s90 34 90 96"/><path ' + common + ' d="M158 72V38m24 34V28m24 44V38M210 188v-66a30 30 0 0 1 60 0v66"/>',
    travel: '<circle cx="285" cy="55" r="25" ' + common + '/><path ' + common + ' d="M60 220c30-62 68-104 132-104s102 42 132 104M105 220l-24 38m112-38 0 38m112-38 24 38M78 155h228"/>',
    work: '<rect x="52" y="82" width="235" height="135" rx="12" ' + common + '/><path ' + common + ' d="M170 217v30m-62 0h124M100 112h140v76H100z"/><path ' + common + ' d="M323 112h38v106h-38zM323 135h38M323 160h38"/>',
    shopping: '<path ' + common + ' d="M88 90h210l-20 160H108L88 90Zm42 0c0-45 22-70 63-70s63 25 63 70M135 135h116M145 172h96"/>',
    learning: '<path ' + common + ' d="M42 74c44-18 89-12 128 18v140c-39-30-84-36-128-18V74Zm256 0c-44-18-89-12-128 18v140c39-30 84-36 128-18V74Z"/><path ' + common + ' d="M170 92v140m50-194 35 35-105 105-50 15 15-50L220 38Z"/>',
    social: '<circle cx="115" cy="104" r="48" ' + common + '/><circle cx="260" cy="142" r="48" ' + common + '/><path ' + common + ' d="m78 145-24 38 58-20m112 17-24 38 58-20"/>',
    time: '<circle cx="190" cy="130" r="91" ' + common + '/><path ' + common + ' d="M190 82v53l37 24M190 25v-18m0 246v-18M85 130H67m246 0h-18"/>',
    plan: '<rect x="76" y="42" width="230" height="220" rx="18" ' + common + '/><path ' + common + ' d="M126 22v42m130-42v42M76 98h230M120 145h35m-35 45h35m55-45h35m-35 45h35m-35 45 15 15 34-38"/>',
    life: '<path ' + common + ' d="m42 128 148-104 148 104M75 110v142h230V110M155 252v-78h70v78"/><path ' + common + ' d="M285 58c20 10 35 27 39 48-23 3-43-5-55-20 2-12 7-21 16-28Z"/>'
  };
  return '<svg viewBox="0 0 380 280" role="presentation">' + (scenes[key] || scenes.life) + '</svg>';
}

function renderSentence() {
  const sentence = sentences[currentIndex];
  const analysis = getSentenceAnalysis(sentence);
  const sceneKey = sceneKeyFor(sentence);
  $("#sentence-card").dataset.scene = sceneKey;
  $("#scene-art").innerHTML = sceneSvg(sceneKey);
  $("#sentence-label").textContent = sentence.label;
  $("#sentence-tags").innerHTML = [...sentence.tags, sentence.structure].map((tag) => `<span class="sentence-tag">#${tag}</span>`).join("");
  $("#sentence-title").textContent = sentence.english;
  $("#sentence-meaning").textContent = sentence.meaning;
  $("#sentence-note").textContent = sentence.note;
  $("#card-analysis").innerHTML = `<div class="card-analysis-heading">这句话怎么学 <span>Quick notes</span></div><div class="card-analysis-grid"><article class="analysis-item"><h3>a）发音技巧 · 美式发音</h3><p>${analysis.pronunciation}</p></article><article class="analysis-item"><h3>b）重点单词</h3><div class="analysis-words">${analysis.keyWords.length ? analysis.keyWords.map((item) => `<span><strong>${item.word}</strong><em>${item.meaning}</em></span>`).join("") : "<p>本句没有需要单独强调的重点词。</p>"}</div></article>${analysis.grammar ? `<article class="analysis-item"><h3>c）核心语法 / 固定搭配</h3><p>${analysis.grammar}</p></article>` : ""}</div>`;
}

function sentenceTags(sentence) { return [...sentence.tags, sentence.structure].map((tag) => `#${tag}`).join("   "); }

function refillSentenceQueue() {
  const queue = sentences.map((sentence, index) => index).filter((index) => sentences[index].length === currentLength);
  for (let index = queue.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [queue[index], queue[randomIndex]] = [queue[randomIndex], queue[index]];
  }
  sentenceQueues.set(currentLength, queue);
  return queue;
}

function pickSentence(avoidIndex = -1) {
  let queue = sentenceQueues.get(currentLength);
  if (!queue || queue.length === 0) queue = refillSentenceQueue();
  if (queue.length > 1 && queue[0] === avoidIndex) queue.push(queue.shift());
  return queue.shift();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.includes(" ") ? text.split(" ") : Array.from(text);
  let line = "";
  const lines = [];
  words.forEach((word) => {
    const testLine = text.includes(" ") ? (line ? `${line} ${word}` : word) : `${line}${word}`;
    if (ctx.measureText(testLine).width > maxWidth && line) { lines.push(line); line = word; } else line = testLine;
  });
  if (line) lines.push(line);
  lines.forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
  return lines.length;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}
function drawSceneCanvas(ctx, key) {
  ctx.save();
  ctx.translate(650, 130);
  ctx.scale(1.05, 1.05);
  ctx.strokeStyle = "rgba(255,242,218,.28)";
  ctx.fillStyle = "rgba(255,242,218,.12)";
  ctx.lineWidth = 6;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  if (key === "communication") { ctx.beginPath(); ctx.roundRect(20, 40, 240, 120, 20); ctx.stroke(); ctx.beginPath(); ctx.moveTo(55, 160); ctx.lineTo(20, 205); ctx.lineTo(90, 160); ctx.stroke(); ctx.beginPath(); ctx.arc(310, 130, 55, 0, Math.PI * 2); ctx.stroke(); }
  if (key === "food") { ctx.beginPath(); ctx.arc(170, 170, 80, Math.PI, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(80, 170); ctx.lineTo(260, 170); ctx.stroke(); ctx.beginPath(); ctx.moveTo(130, 85); ctx.lineTo(130, 145); ctx.moveTo(155, 75); ctx.lineTo(155, 145); ctx.moveTo(180, 85); ctx.lineTo(180, 145); ctx.stroke(); }
  if (key === "travel") { ctx.beginPath(); ctx.arc(300, 45, 28, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(20, 230); ctx.bezierCurveTo(100, 80, 220, 80, 340, 230); ctx.stroke(); ctx.beginPath(); ctx.moveTo(55, 155); ctx.lineTo(325, 155); ctx.stroke(); }
  if (key === "work") { ctx.strokeRect(35, 55, 240, 140); ctx.beginPath(); ctx.moveTo(155, 195); ctx.lineTo(155, 235); ctx.moveTo(100, 235); ctx.lineTo(215, 235); ctx.stroke(); ctx.strokeRect(300, 75, 45, 160); }
  if (key === "shopping") { ctx.beginPath(); ctx.moveTo(55, 80); ctx.lineTo(300, 80); ctx.lineTo(275, 245); ctx.lineTo(80, 245); ctx.closePath(); ctx.stroke(); ctx.beginPath(); ctx.arc(177, 80, 68, Math.PI, 0); ctx.stroke(); }
  if (key === "learning") { ctx.beginPath(); ctx.moveTo(25, 80); ctx.quadraticCurveTo(100, 50, 175, 95); ctx.lineTo(175, 245); ctx.quadraticCurveTo(100, 200, 25, 230); ctx.closePath(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(175, 95); ctx.quadraticCurveTo(250, 50, 325, 80); ctx.lineTo(325, 230); ctx.quadraticCurveTo(250, 200, 175, 245); ctx.stroke(); }
  if (key === "social") { ctx.beginPath(); ctx.arc(110, 120, 58, 0, Math.PI * 2); ctx.arc(260, 155, 58, 0, Math.PI * 2); ctx.stroke(); }
  if (key === "time") { ctx.beginPath(); ctx.arc(180, 135, 100, 0, Math.PI * 2); ctx.moveTo(180, 135); ctx.lineTo(180, 75); ctx.moveTo(180, 135); ctx.lineTo(225, 165); ctx.stroke(); }
  if (key === "plan") { ctx.strokeRect(70, 45, 230, 220); ctx.beginPath(); ctx.moveTo(70, 100); ctx.lineTo(300, 100); ctx.moveTo(120, 145); ctx.lineTo(155, 145); ctx.moveTo(120, 190); ctx.lineTo(155, 190); ctx.moveTo(210, 190); ctx.lineTo(260, 190); ctx.stroke(); }
  if (key === "life") { ctx.beginPath(); ctx.moveTo(30, 140); ctx.lineTo(180, 30); ctx.lineTo(330, 140); ctx.moveTo(65, 120); ctx.lineTo(65, 255); ctx.lineTo(295, 255); ctx.lineTo(295, 120); ctx.moveTo(145, 255); ctx.lineTo(145, 180); ctx.lineTo(215, 180); ctx.lineTo(215, 255); ctx.stroke(); }
  ctx.restore();
}

async function exportImage() {
  const sentence = sentences[currentIndex];
  const analysis = getSentenceAnalysis(sentence);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 2100;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 1080, 2100);
  gradient.addColorStop(0, "#b86c47");
  gradient.addColorStop(.55, "#dc9568");
  gradient.addColorStop(1, "#efbd8d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,.08)";
  ctx.beginPath(); ctx.arc(880, 190, 260, 0, Math.PI * 2); ctx.fill();
  drawSceneCanvas(ctx, sceneKeyFor(sentence));
  ctx.fillStyle = "#ffe3a8";
  ctx.beginPath(); ctx.arc(90, 96, 8, 0, Math.PI * 2); ctx.fill();
  ctx.font = "700 22px Arial, sans-serif"; ctx.letterSpacing = "4px"; ctx.fillStyle = "#fffaf5"; ctx.fillText("ENGLISH TRAINING TOOL", 120, 104);
  try {
    const avatar = await loadImage("assets/avatar.jpg");
    ctx.save();
    ctx.beginPath(); ctx.arc(970, 92, 52, 0, Math.PI * 2); ctx.clip();
    ctx.drawImage(avatar, 918, 40, 104, 104);
    ctx.restore();
    ctx.strokeStyle = "rgba(255,255,255,.86)";
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.arc(970, 92, 52, 0, Math.PI * 2); ctx.stroke();
  } catch (error) {
    // The avatar is optional so image export still works if the asset is unavailable.
  }
  ctx.font = "400 24px Arial, sans-serif"; ctx.letterSpacing = "0px"; ctx.fillStyle = "#ffe8ce"; ctx.fillText(sentence.label, 90, 390);
  ctx.font = "600 22px 'Noto Sans SC', sans-serif"; ctx.fillStyle = "#fff4e7"; ctx.fillText(sentenceTags(sentence), 90, 435);
  ctx.font = "700 68px Arial, sans-serif"; ctx.fillStyle = "#ffffff"; const lines = drawWrappedText(ctx, sentence.english, 90, 540, 900, 84);
  const meaningY = 540 + lines * 84 + 40;
  ctx.font = "600 40px 'Noto Sans SC', sans-serif"; ctx.fillStyle = "#fff4e7"; ctx.fillText(sentence.meaning, 90, meaningY);
  const dividerY = meaningY + 60;
  ctx.fillStyle = "#ffe3a8"; ctx.fillRect(90, dividerY, 64, 4);
  ctx.font = "400 25px 'Noto Sans SC', sans-serif"; ctx.fillStyle = "#fff0de"; const noteLines = drawWrappedText(ctx, sentence.note, 90, dividerY + 60, 860, 42);
  let analysisY = dividerY + 60 + noteLines * 42 + 58;
  ctx.font = "700 26px 'Noto Sans SC', sans-serif"; ctx.fillStyle = "#fff8ed"; ctx.fillText("这句话怎么学", 90, analysisY);
  analysisY += 24;
  const drawAnalysisBox = (title, body) => {
    ctx.font = "700 20px 'Noto Sans SC', sans-serif";
    ctx.fillStyle = "rgba(105,58,39,.22)"; ctx.fillRect(90, analysisY, 900, 1);
    ctx.fillStyle = "#fff7e9"; ctx.fillText(title, 90, analysisY + 30);
    ctx.font = "400 20px 'Noto Sans SC', sans-serif"; ctx.fillStyle = "rgba(255,248,236,.84)";
    const lines = drawWrappedText(ctx, body, 90, analysisY + 62, 860, 30);
    analysisY += 62 + lines * 30 + 24;
  };
  drawAnalysisBox("a）发音技巧 · 美式发音", analysis.pronunciation);
  drawAnalysisBox("b）重点单词", analysis.keyWords.length ? analysis.keyWords.map((item) => `${item.word}：${item.meaning}`).join("   ") : "本句没有需要单独强调的重点词。");
  if (analysis.grammar) drawAnalysisBox("c）核心语法 / 固定搭配", analysis.grammar);
  ctx.font = "700 18px Arial, sans-serif"; ctx.fillStyle = "rgba(255,255,255,.72)"; ctx.fillText("SPEAK A LITTLE. EVERY DAY.", 90, 2035);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  const file = new File([blob], "random-sentence.png", { type: "image/png" });
  if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
    try { await navigator.share({ title: sentence.english, text: sentence.meaning, files: [file] }); $("#export-hint").textContent = "已打开分享面板。"; return; } catch (error) { if (error.name === "AbortError") return; }
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); link.href = url; link.download = "random-sentence.png"; link.click();
  URL.revokeObjectURL(url);
  $("#export-hint").textContent = "图片已生成并开始下载。";
}

document.querySelectorAll(".length-option").forEach((button) => button.addEventListener("click", () => {
  currentLength = button.dataset.length;
  document.querySelectorAll(".length-option").forEach((item) => item.classList.toggle("active", item === button));
  currentIndex = pickSentence();
  renderSentence();
}));
$("#new-sentence").addEventListener("click", () => { currentIndex = pickSentence(currentIndex); renderSentence(); });
$("#export-image").addEventListener("click", exportImage);
currentIndex = pickSentence();
renderSentence();
