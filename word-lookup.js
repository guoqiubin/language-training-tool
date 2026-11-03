(() => {
  "use strict";

  const dictionary = {
    a: ["/ə/", "一个；一件"], about: ["/əˈbaʊt/", "关于；大约"], add: ["/æd/", "添加"], after: ["/ˈæftər/", "在……之后"], again: ["/əˈɡen/", "再次"], all: ["/ɔːl/", "全部的"], an: ["/ən/", "一个；一件"], and: ["/ænd/", "和；以及"], answer: ["/ˈænsər/", "回答；答案"], any: ["/ˈeni/", "任何的"], app: ["/æp/", "应用程序"], at: ["/æt/", "在；向"], audio: ["/ˈɔːdioʊ/", "音频"], address: ["/ˈædres/", "地址"],
    be: ["/biː/", "是；成为"], before: ["/bɪˈfɔːr/", "在……之前"], better: ["/ˈbetər/", "更好的"], blue: ["/bluː/", "蓝色的"], book: ["/bʊk/", "书"], bring: ["/brɪŋ/", "带来"], but: ["/bʌt/", "但是"],
    can: ["/kæn/", "可以；能够"], card: ["/kɑːrd/", "卡片"], character: ["/ˈkærəktər/", "角色"], choose: ["/tʃuːz/", "选择"], coffee: ["/ˈkɔːfi/", "咖啡"], collect: ["/kəˈlekt/", "收集"], complete: ["/kəmˈpliːt/", "完成"], could: ["/kʊd/", "可以；能够"],
    day: ["/deɪ/", "天；日子"], do: ["/duː/", "做"], door: ["/dɔːr/", "门"], drink: ["/drɪŋk/", "饮料；喝"], dark: ["/dɑːrk/", "深色的；黑暗的"],
    eat: ["/iːt/", "吃"], english: ["/ˈɪŋɡlɪʃ/", "英语"], example: ["/ɪɡˈzæmpəl/", "例子"],
    first: ["/fɝːst/", "第一的；首先"], fixed: ["/fɪkst/", "修复了"], for: ["/fɔːr/", "为了；给"], from: ["/frəm/", "从；来自"],
    game: ["/ɡeɪm/", "游戏"], get: ["/ɡet/", "得到；变得"], give: ["/ɡɪv/", "给"], good: ["/ɡʊd/", "好的"], grab: ["/ɡræb/", "拿；吃点"], friend: ["/frend/", "朋友"],
    happy: ["/ˈhæpi/", "开心的"], have: ["/hæv/", "有"], help: ["/help/", "帮助"], here: ["/hɪr/", "这里"], how: ["/haʊ/", "怎样；如何"],
    i: ["/aɪ/", "我"], if: ["/ɪf/", "如果；是否"], in: ["/ɪn/", "在……里面"], is: ["/ɪz/", "是"], it: ["/ɪt/", "它；这件事"],
    just: ["/dʒʌst/", "只是；刚刚"], keep: ["/kiːp/", "保持"], know: ["/noʊ/", "知道"], learn: ["/lɝːn/", "学习"], leave: ["/liːv/", "离开；留下"], let: ["/let/", "让"], like: ["/laɪk/", "喜欢；像"], little: ["/ˈlɪtəl/", "少量的；小的"], look: ["/lʊk/", "看"],
    make: ["/meɪk/", "制作；使"], meet: ["/miːt/", "见面"], me: ["/miː/", "我；我（宾格）"], message: ["/ˈmesɪdʒ/", "消息"], microwave: ["/ˈmaɪkroʊweɪv/", "微波炉"], mode: ["/moʊd/", "模式"], morning: ["/ˈmɔːrnɪŋ/", "早上"], my: ["/maɪ/", "我的"],
    name: ["/neɪm/", "名字"], need: ["/niːd/", "需要"], new: ["/nuː/", "新的"], not: ["/nɑːt/", "不；不是"], now: ["/naʊ/", "现在"], note: ["/noʊt/", "便签；笔记"],
    of: ["/əv/", "……的"], on: ["/ɑːn/", "在……上；关于"], one: ["/wʌn/", "一个"], open: ["/ˈoʊpən/", "打开"], order: ["/ˈɔːrdər/", "点餐；订购"], our: ["/aʊər/", "我们的"],
    pack: ["/pæk/", "打包；装"], please: ["/pliːz/", "请"], practice: ["/ˈpræktɪs/", "练习"], prefer: ["/prɪˈfɝː/", "更喜欢"], problem: ["/ˈprɑːbləm/", "问题"], product: ["/ˈprɑːdʌkt/", "产品"],
    read: ["/riːd/", "阅读"], reply: ["/rɪˈplaɪ/", "回复"], request: ["/rɪˈkwest/", "请求"],
    sale: ["/seɪl/", "促销"], save: ["/seɪv/", "保存"], say: ["/seɪ/", "说"], see: ["/siː/", "看见"], sentence: ["/ˈsentəns/", "句子"], share: ["/ʃer/", "分享"], shoes: ["/ʃuːz/", "鞋子"], should: ["/ʃʊd/", "应该"], simple: ["/ˈsɪmpəl/", "简单的"], soon: ["/suːn/", "很快；待会儿"], speak: ["/spiːk/", "说；讲"], saturday: ["/ˈsætərdeɪ/", "星期六"], sunday: ["/ˈsʌndeɪ/", "星期日"],
    take: ["/teɪk/", "拿；带；花费"], team: ["/tiːm/", "团队"], tell: ["/tel/", "告诉"], than: ["/ðæn/", "比"], that: ["/ðæt/", "那个；引导词"], the: ["/ðə/", "这；那（定冠词）"], think: ["/θɪŋk/", "想；认为"], three: ["/θriː/", "三"], time: ["/taɪm/", "时间"], to: ["/tə/", "到；向；去"], truth: ["/truːθ/", "事实；真相"],
    update: ["/ˈʌpdeɪt/", "更新"], version: ["/ˈvɝːʒən/", "版本"], visit: ["/ˈvɪzɪt/", "访问；到店"], wash: ["/wɑːʃ/", "清洗"], warm: ["/wɔːrm/", "温暖的"], want: ["/wɑːnt/", "想要"], water: ["/ˈwɔːtər/", "水"], way: ["/weɪ/", "方式；道路"], what: ["/wʌt/", "什么"], when: ["/wen/", "什么时候；当……时"], where: ["/wer/", "哪里"], will: ["/wɪl/", "将要"], with: ["/wɪð/", "和；用"], word: ["/wɝːd/", "单词"], work: ["/wɝːk/", "工作"], your: ["/jʊr/", "你的"], you: ["/juː/", "你；你们"]
  };

  // 这是全站共用的本地词典；游戏台词词汇只是其中一组内容，不绑定任何单一页面。
  Object.assign(dictionary, {
    school: ["/skuːl/", "学校", "school 表示学校；go to school 是“去上学”的常用表达。"],
    phone: ["/foʊn/", "手机；电话", "phone 既可以表示手机，也可以表示电话。"],
    bag: ["/bæɡ/", "包；袋子", "bag 是生活中常见的具体名词。"],
    today: ["/təˈdeɪ/", "今天", "today 可以放在句子开头或结尾，表示今天。"],
    home: ["/hoʊm/", "家；家里", "at home 是“在家”的固定搭配。"],
    ready: ["/ˈredi/", "准备好的", "be ready 表示“准备好了”。"],
    busy: ["/ˈbɪzi/", "忙的", "busy 描述一个人当前没有空。"],
    tired: ["/ˈtaɪərd/", "累的", "tired 常和 be 动词一起使用。"],
    teacher: ["/ˈtiːtʃər/", "老师", "teacher 指教别人学习的人。"],
    store: ["/stɔr/", "商店", "store 指商店，也可以表示储存。"],
    okay: ["/ˌoʊˈkeɪ/", "好的；没问题", "okay 可以表示同意、接受，也可以表示状态还不错。"],
    morning: ["/ˈmɔrnɪŋ/", "早上", "Good morning 是日常问候语“早上好”。"],
    day: ["/deɪ/", "天；日子", "Have a good day 是自然的道别表达。"],
    water: ["/ˈwɔtər/", "水", "water 通常是不可数名词，可以用 some 表示一些。"],
    hammer: ["/ˈhæmər/", "锤子；锤击", "hammer time 表示“挥锤的时刻到了”，这里是带有战斗号召感的表达。"],
    time: ["/taɪm/", "时间；时刻", "It's ... time! 表示“到了做某事的时候”，常用于宣布一个行动即将开始。"],
    want: ["/wɑːnt/", "想要", "want to + 动词原形表示“想做某事”；I want to be... 表示“我想成为……”。"],
    sledge: ["/sledʒ/", "大锤；雪橇", "sledge hammer 是“大锤”。sledge 在这里修饰 hammer，组成一个名词短语。"],
    touch: ["/tʌtʃ/", "触碰；碰", "Touch me not 是古风否定祈使句，日常英语更自然的说法是 Don't touch me。"],
    chaste: ["/tʃeɪst/", "贞洁的；纯洁的", "chaste 是较正式、带有文学色彩的形容词，表示保持纯洁或贞洁。"],
    final: ["/ˈfaɪnəl/", "最终的", "final answer 表示“最终答案”，常用于确认对方是否已经不打算改变决定。"],
    bad: ["/bæd/", "坏的；糟糕的", "bad 是常见形容词，放在名词前面描述人或事物的状态。"],
    brethren: ["/ˈbrɛðrən/", "兄弟们", "brethren 是 brother 的正式或古老复数形式，游戏台词中常用来营造史诗感。"],
    sword: ["/sɔrd/", "剑", "sword 是名词“剑”；Is that a sword? 是一个用于确认物品的疑问句。"],
    luxury: ["/ˈlʌɡʒəri/", "奢侈；奢侈品", "luxury 既可以表示“奢侈”，也可以表示“奢侈品”，这里是对物品的评价。"],
    horse: ["/hɔrs/", "马", "horse 是名词“马”；Is that a horse? 的结构是 Is that + 名词？。"],
    sloth: ["/slɑθ/", "懒惰", "sloth 表示“懒惰”，也可以指树懒；这里和 luxury、vanity 一样是带评价色彩的名词。"],
    helmet: ["/ˈhɛlmət/", "头盔", "helmet 是保护头部的装备；Is that a helmet? 用来确认看到的物品。"],
    vanity: ["/ˈvænəti/", "虚荣；自负", "vanity 表示过度在意外表或自我形象，语气通常带有批评意味。"],
    live: ["/lɪv/", "生活；活着", "live to + 动词表示“活着就是为了做某事”，常用来表达使命或人生目标。"],
    serve: ["/sɝv/", "服务；效忠", "serve 可以表示提供服务，也可以表示效忠某人或某种信念。"],
    believers: ["/bɪˈlivərz/", "信徒们；相信的人", "believer 来自 believe，指相信某种信仰或理念的人；believers 是复数。"],
    name: ["/neɪm/", "名字；名义；名誉", "in someone's name 表示“以某人的名义”；defend someone's name 表示“维护某人的名誉”。"],
    have: ["/hæv/", "有；拥有", "have at thee 是古风挑战表达，意思接近“接招吧”，不是日常的“拥有”。"],
    thee: ["/ði/", "你（古英语宾格）", "thee 是古英语中的“你”，现在主要出现在文学、宗教或游戏中的古风表达里。"],
    would: ["/wʊd/", "会；愿意", "would 让请求听起来更委婉；What would you ask of me? 比 What do you want? 更礼貌。"],
    ask: ["/æsk/", "询问；请求", "ask something of someone 表示“向某人请求某事”，比直接使用 want 更委婉。"],
    afraid: ["/əˈfreɪd/", "害怕的", "be afraid 是固定搭配，not 放在 be 动词后面构成否定：I am not afraid。"],
    let: ["/let/", "让", "Let me + 动词原形表示“让我做……”，可以用于请求，也可以表示主动承担任务。"],
    face: ["/feɪs/", "面对；脸", "face a problem 或 face the peril 表示“面对问题或危险”，这里的 face 是动词。"],
    peril: ["/ˈpɛrəl/", "危险", "peril 是较正式、文学化的“危险”，比常见的 danger 更有史诗或冒险故事的感觉。"],
    call: ["/kɔl/", "呼唤；召唤；电话", "at your call 是对指令的简短回应，意思接近“听候你的召唤”。"],
    wish: ["/wɪʃ/", "希望；愿望", "As you wish 表示“如你所愿”，是自然而礼貌的服从表达。"],
    honor: ["/ˈɑnər/", "荣誉；尊敬", "for honor 用 for 表达行动的目的或信念，意思是“为了荣誉”。"],
    people: ["/ˈpipəl/", "人民；人们", "for my people 是口号式表达，用 for 说明行动是为了谁或为了什么。"],
    shall: ["/ʃæl/", "将；应当", "shall be done 表示“将被完成”，语气比 will be done 更正式、更坚定。"],
    done: ["/dʌn/", "完成的；做完的", "be done 是被动结构，It shall be done 的意思是“这件事将被完成”。"],
    justice: ["/ˈdʒʌstɪs/", "正义；公正", "justice will be served 是被动表达，字面是“正义将得到实现”，常译为“正义终将伸张”。"],
    served: ["/sɝvd/", "得到服务；被实现", "will be served 是一般将来时的被动结构，justice will be served 表示“正义将被伸张”。"],
    defending: ["/dɪˈfɛndɪŋ/", "捍卫；防守", "Defending your name 是现在分词短语，省略了主语和 be 动词，适合用作战斗口号。"],
    strike: ["/straɪk/", "出击；击打", "Strike with... 表示“带着某种力量或情绪出击”，这里是命令式表达。"],
    great: ["/ɡreɪt/", "巨大的；强烈的", "great 可以表示“伟大的、巨大的或强烈的”，great vengeance 中强调复仇的力度。"],
    vengeance: ["/ˈvɛndʒəns/", "复仇；报复", "vengeance 是较正式的“复仇”，比 revenge 更有史诗和文学色彩。"]
  });

  // 训练中心、口语、音标、自然拼读和阅读悬赏共用的基础学习词汇。
  Object.assign(dictionary, {
    level: ["/ˈlevəl/", "等级；水平", "level 表示学习阶段或能力水平，常见搭配是 learning level。"],
    beginner: ["/bɪˈɡɪnər/", "入门者；初学者", "beginner 指刚开始学习某项技能的人。"],
    intermediate: ["/ˌɪntərˈmiːdiət/", "中级的", "intermediate 表示处于入门和高级之间的阶段。"],
    proficient: ["/prəˈfɪʃənt/", "熟练的", "proficient 表示已经能够熟练使用某项技能。"],
    advanced: ["/ədˈvænst/", "高级的；进阶的", "advanced 表示难度或能力已经达到较高阶段。"],
    natural: ["/ˈnætʃərəl/", "自然的", "natural expression 指符合英语习惯、听起来不生硬的表达。"],
    pronunciation: ["/prəˌnʌnsiˈeɪʃən/", "发音", "pronunciation 指一个词或句子的发音方式。"],
    sound: ["/saʊnd/", "声音；听起来", "sound 可以表示“声音”，也可以表示“听起来”，需要结合上下文判断。"],
    listen: ["/ˈlɪsən/", "听", "listen to + 名词表示“听某人或某物”，to 不能省略。"],
    record: ["/rɪˈkɔrd/", "录音；记录", "record 作动词时表示录下声音或保存信息。"],
    slow: ["/sloʊ/", "慢的；慢速地", "slow reading 表示慢速朗读，适合先听清楚每个词。"],
    meaning: ["/ˈmiːnɪŋ/", "意思；含义", "meaning 指单词、句子或表达所传达的意思。"],
    explain: ["/ɪkˈspleɪn/", "解释", "explain something to someone 表示“向某人解释某事”。"],
    explanation: ["/ˌekspləˈneɪʃən/", "解释；说明", "explanation 是 explain 的名词形式，指对答案或用法的说明。"],
    question: ["/ˈkwestʃən/", "问题；提问", "question 可以指需要回答的问题，也可以指提问这个动作。"],
    answer: ["/ˈænsər/", "回答；答案", "answer a question 表示“回答问题”，answer 既可以作名词也可以作动词。"],
    expression: ["/ɪkˈspreʃən/", "表达；说法", "expression 指表达想法的方式，也可以表示一个固定说法。"],
    phrase: ["/freɪz/", "短语；表达", "phrase 通常指由几个词组成、但不一定是完整句子的表达。"],
    grammar: ["/ˈɡræmər/", "语法", "grammar 指词语组成句子时遵循的规则。"],
    scene: ["/siːn/", "场景", "scene 指故事、对话或现实生活中的具体场景。"],
    practice: ["/ˈpræktɪs/", "练习", "practice 作名词时表示练习；practice speaking 表示练习口语。"],
    progress: ["/ˈprɑɡres/", "进度；进步", "progress 可以指学习完成的进度，也可以指能力取得的进步。"],
    complete: ["/kəmˈpliːt/", "完成；完整的", "complete 作动词表示完成，作形容词表示完整的。"],
    choose: ["/tʃuːz/", "选择", "choose between A and B 表示在两个选项之间做选择。"],
    daily: ["/ˈdeɪli/", "每天的；日常的", "daily speaking 指日常口语练习，daily 也可以表示“每天”。"],
    reward: ["/rɪˈwɔrd/", "奖励；悬赏", "reward 可以指完成任务后的奖励，也可以表示悬赏任务。"],
    reading: ["/ˈriːdɪŋ/", "阅读", "reading 是 read 的现在分词，也可以泛指阅读活动。"],
    passage: ["/ˈpæsɪdʒ/", "短文；段落", "passage 在学习场景中通常指一段需要阅读或朗读的短文。"],
    task: ["/tæsk/", "任务", "task 指需要完成的一项具体工作或练习。"],
    useful: ["/ˈjuːsfəl/", "有用的", "useful 表示能够带来帮助或实际用途的。"],
    practical: ["/ˈpræktɪkəl/", "实用的", "practical 表示适合现实使用、能够解决实际问题的。"]
  });

  const normalizeLookupKey = (value) => String(value || "").replace(/[’‘]/g, "'").replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, "").toLowerCase();
  const registerDictionaryEntry = (key, entry) => {
    const normalized = normalizeLookupKey(key);
    if (normalized) dictionary[normalized] = entry;
  };

  const collectSceneWords = (sceneGroups) => {
    Object.values(sceneGroups || {}).flat().forEach((sceneGroup) => {
      sceneGroup.sentences?.forEach((sentence) => {
        sentence[4]?.forEach((word) => {
          const key = normalizeLookupKey(word.w);
          if (key && !dictionary[key]) registerDictionaryEntry(key, [word.ipa, word.m, `${word.w} 是当前句子中的重点词，可以结合上下文理解为“${word.m}”。`]);
        });
      });
    });
  };
  collectSceneWords(window.bankScenesByLevel);

  // 专项英语概念页也接入同一套全局双击查词，不让新模块形成孤岛。
  Object.values(window.specialEnglishConcepts || {}).forEach((field) => (field.concepts || []).forEach((concept) => {
    const [english, chinese, ipa, category] = concept;
    const phrase = String(english).trim();
    const phraseEntry = [ipa, chinese, `${phrase} 属于“${category}”，可以结合当前页面理解为“${chinese}”。`];
    registerDictionaryEntry(phrase, phraseEntry);
    phrase.split(/\s+/).forEach((token) => {
      const key = normalizeLookupKey(token);
      if (key && !dictionary[key]) registerDictionaryEntry(key, ["/暂未收录/", `${chinese}相关术语`, `${key} 出现在“${phrase}”这一专业概念中，可以先结合上下文理解。`]);
    });
  }));

  Object.assign(dictionary, {
    account: ["/əˈkaʊnt/", "账户", "account 指银行账户；open an account 表示“开户”。"],
    declined: ["/dɪˈklaɪnd/", "被拒付；被拒绝", "card was declined 表示银行卡交易被拒付，常用于描述刷卡或付款失败。"],
    decline: ["/dɪˈklaɪn/", "拒绝；拒付", "decline 作动词时可以表示拒绝，也可以表示银行卡交易被拒付。"],
    funds: ["/fʌndz/", "资金；余额", "funds 通常指可用资金；enough funds 表示“足够的余额”。"],
    balance: ["/ˈbæləns/", "余额", "account balance 表示账户余额。"],
    fee: ["/fiː/", "费用；手续费", "service fee 或 transfer fee 表示服务费或转账手续费。"],
    bank: ["/bæŋk/", "银行", "bank 是提供账户、存取款和支付服务的机构。"],
    transaction: ["/trænˈzækʃən/", "交易；交易记录", "transaction 指账户中发生的一笔交易。"],
    statement: ["/ˈsteɪtmənt/", "账单；对账单", "bank statement 指银行对账单，用来核对账户记录。"],
    restriction: ["/rɪˈstrɪkʃən/", "限制", "restriction 指账户或银行卡受到的使用限制。"],
    resolve: ["/rɪˈzɑːlv/", "解决", "resolve an issue 表示解决一个问题。"],
    security: ["/sɪˈkjʊrəti/", "安全；安全措施", "security concern 指安全方面的顾虑。"],
    technical: ["/ˈteknɪkəl/", "技术上的", "technical issue 指技术问题。"],
    available: ["/əˈveɪləbəl/", "可用的；可获得的", "available 表示某物现在可以使用或获得。"],
    consider: ["/kənˈsɪdər/", "考虑", "consider another option 表示考虑其他方案。"],
    usually: ["/ˈjuːʒuəli/", "通常", "usually 表示大多数时候或一般情况下。"]
  });

  const usageNotes = {
    touch: "这是动词“触碰”，在 Touch me not 中用于古风否定祈使句。",
    at: "at your call 是固定表达，表示“听候你的召唤”。",
    for: "for + 名词可以表示行动的目的、对象或信念。",
    be: "be afraid 是固定搭配；be done 则表示“被完成”。",
    your: "your 是形容词性物主代词，表示“你的”，后面通常接名词。"
  };

  // 让动态页面也能复用同一套查词数据，而不是由某个业务页面单独维护。
  window.EnglishTrainingWordLookup = { dictionary, add: registerDictionaryEntry };

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const normalizeWord = normalizeLookupKey;
  const isExcluded = (target) => target.closest("button, a, input, textarea, select, option, [contenteditable], .word-lookup-card, code, pre, script, style");

  const card = document.createElement("aside");
  card.className = "word-lookup-card";
  card.hidden = true;
  card.setAttribute("aria-live", "polite");
  card.innerHTML = `<button class="word-lookup-close" type="button" aria-label="关闭查词卡片">×</button><p class="word-lookup-kicker">WORD LOOKUP · 美式英语</p><h2 class="word-lookup-word"></h2><span class="word-lookup-ipa"></span><p class="word-lookup-meaning"></p><p class="word-lookup-explanation"></p><p class="word-lookup-source" hidden><a target="_blank" rel="noreferrer">线上词典来源</a></p><button class="word-lookup-play" type="button">▶ 跟读</button>`;
  document.body.append(card);

  const wordEl = card.querySelector(".word-lookup-word");
  const ipaEl = card.querySelector(".word-lookup-ipa");
  const meaningEl = card.querySelector(".word-lookup-meaning");
  const explanationEl = card.querySelector(".word-lookup-explanation");
  const sourceEl = card.querySelector(".word-lookup-source");
  const sourceLink = sourceEl.querySelector("a");
  const playButton = card.querySelector(".word-lookup-play");
  let currentWord = "";
  let lookupRequestId = 0;
  const remoteCache = new Map();

  const fetchJson = async (url) => {
    const response = await fetch(url, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`dictionary_${response.status}`);
    return response.json();
  };

  const getRemoteDefinition = (data) => {
    const entries = Array.isArray(data) ? data : data?.entries || [];
    const entry = entries.find((item) => item.language?.code === "en") || entries[0];
    const meanings = Array.isArray(entry?.meanings) ? entry.meanings : [];
    const senses = Array.isArray(entry?.senses) ? entry.senses : meanings.flatMap((meaning) => (
      (meaning.definitions || []).map((definition) => ({
        ...definition,
        partOfSpeech: meaning.partOfSpeech || meaning.partOfSpeech?.name
      }))
    ));
    const sense = senses.find((item) => item.definition) || {};
    const pronunciationList = [
      ...(entry?.pronunciations || []),
      ...(data?.phonetics || [])
    ];
    const pronunciation = pronunciationList.find((item) => item.type === "ipa" && item.tags?.some((tag) => /american|general american/i.test(tag)))
      || pronunciationList.find((item) => item.text?.startsWith("/"))
      || pronunciationList.find((item) => item.ipa);
    const ipa = pronunciation?.text || pronunciation?.ipa || "";
    const partOfSpeech = entry?.partOfSpeech || sense.partOfSpeech || "";
    if (!entry || !sense.definition) return null;
    return {
      definition: sense.definition,
      ipa,
      partOfSpeech,
      sourceUrl: data.source?.url || `https://en.wiktionary.org/wiki/${encodeURIComponent(data.word || entry.word || "")}`
    };
  };

  const fetchChineseMeaning = async (word) => {
    const data = await fetchJson(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|zh-CN`);
    const translated = data.responseData?.translatedText?.trim();
    if (!translated || /^\[?translation unavailable/i.test(translated)) throw new Error("translation_empty");
    return translated;
  };

  const lookupCandidates = (word) => {
    const candidates = [word];
    if (word.endsWith("ies") && word.length > 4) candidates.push(`${word.slice(0, -3)}y`);
    if (word.endsWith("es") && word.length > 4) candidates.push(word.slice(0, -2));
    if (word.endsWith("s") && word.length > 3) candidates.push(word.slice(0, -1));
    if (word.endsWith("ied") && word.length > 5) candidates.push(`${word.slice(0, -3)}y`);
    if (word.endsWith("ed") && word.length > 4) candidates.push(word.slice(0, -2));
    if (word.endsWith("ing") && word.length > 5) candidates.push(word.slice(0, -3), word.slice(0, -4));
    return [...new Set(candidates)];
  };

  const fetchRemoteEntry = async (word) => {
    if (remoteCache.has(word)) return remoteCache.get(word);
    let definition = null;
    let resolvedWord = word;
    for (const candidate of lookupCandidates(word)) {
      try {
        definition = getRemoteDefinition(await fetchJson(`https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(candidate)}?translations=true`));
        if (definition) { resolvedWord = candidate; break; }
      } catch (_) { /* try the next word form or the second provider */ }
    }
    if (!definition) {
      for (const candidate of lookupCandidates(word)) {
        try {
          definition = getRemoteDefinition(await fetchJson(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(candidate)}`));
          if (definition) { resolvedWord = candidate; break; }
        } catch (_) { /* keep the user-facing fallback below */ }
      }
    }
    if (!definition) throw new Error("dictionary_empty");
    let translation = "";
    try { translation = await fetchChineseMeaning(resolvedWord); } catch (_) { /* English definition is still useful */ }
    const result = {
      entry: [definition.ipa || "/线上词典未提供音标/", translation || "线上词典未提供中文释义", `英文释义：${definition.definition}${definition.partOfSpeech ? `（${definition.partOfSpeech}）` : ""}`],
      sourceUrl: definition.sourceUrl
    };
    remoteCache.set(word, result);
    return result;
  };

  const closeCard = () => { card.classList.remove("is-visible"); window.setTimeout(() => { if (!card.classList.contains("is-visible")) card.hidden = true; }, 160); };
  const positionCard = (x, y) => {
    const gap = 14;
    const width = card.offsetWidth;
    const height = card.offsetHeight;
    const left = Math.max(16, Math.min(x, window.innerWidth - width - 16));
    const top = y + height + gap <= window.innerHeight ? y + gap : Math.max(16, y - height - gap);
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
  };
  const showCard = (word, x, y) => {
    const normalizedWord = normalizeWord(word);
    const entry = dictionary[normalizedWord];
    const fallback = ["/暂未收录/", "当前页面中的英语词汇", `${normalizedWord} 已识别。当前本地词典还没有收录它的中文释义，但你仍然可以点击下方按钮听发音。`];
    const resolvedEntry = entry || fallback;
    currentWord = normalizedWord;
    wordEl.textContent = normalizedWord;
    ipaEl.textContent = resolvedEntry[0];
    meaningEl.textContent = resolvedEntry[1];
    explanationEl.textContent = resolvedEntry[2] || usageNotes[normalizedWord] || `${normalizedWord} 是当前页面中的英语词汇，可以结合上下文理解。`;
    sourceEl.hidden = !entry;
    sourceLink.removeAttribute("href");
    if (entry) sourceLink.textContent = "本地课程词典";
    else sourceEl.hidden = true;
    playButton.textContent = `▶ 跟读 ${normalizedWord}`;
    card.hidden = false;
    positionCard(x, y);
    requestAnimationFrame(() => card.classList.add("is-visible"));
    const requestId = ++lookupRequestId;
    if (!entry) {
      sourceEl.hidden = false;
      sourceLink.textContent = "正在查询线上词典…";
      fetchRemoteEntry(normalizedWord).then((remote) => {
        if (requestId !== lookupRequestId || currentWord !== normalizedWord) return;
        registerDictionaryEntry(normalizedWord, remote.entry);
        ipaEl.textContent = remote.entry[0];
        meaningEl.textContent = remote.entry[1];
        explanationEl.textContent = remote.entry[2];
        sourceLink.textContent = "线上词典来源 · FreeDictionaryAPI / Wiktionary";
        sourceLink.href = remote.sourceUrl;
      }).catch(() => {
        if (requestId !== lookupRequestId || currentWord !== normalizedWord) return;
        sourceEl.hidden = false;
        sourceLink.textContent = "线上词典暂时无法查询，请稍后重试";
        sourceLink.removeAttribute("href");
      });
    }
  };

  document.addEventListener("dblclick", (event) => {
    if (isExcluded(event.target)) return;
    const selection = window.getSelection?.()?.toString().trim() || "";
    const selectedText = selection || event.target.textContent || "";
    const selectedPhrase = normalizeWord(selectedText);
    const selectedWord = dictionary[selectedPhrase] ? selectedPhrase : normalizeWord(selectedText.split(/\s+/)[0]);
    if (!selectedWord || selectedWord.length < 1 || !/[a-z]/i.test(selectedWord)) return;
    showCard(selectedWord, event.clientX, event.clientY);
  });
  let lastTouch = { target: null, time: 0 };
  document.addEventListener("touchend", (event) => {
    if (isExcluded(event.target)) return;
    const now = Date.now();
    const touch = event.changedTouches?.[0];
    if (!touch || lastTouch.target !== event.target || now - lastTouch.time > 420) {
      lastTouch = { target: event.target, time: now };
      return;
    }
    lastTouch = { target: null, time: 0 };
    const rawText = event.target.textContent || "";
    const selectedText = rawText.trim().replace(/\s+/g, " ");
    const phraseKey = normalizeWord(selectedText);
    const selectedWord = dictionary[phraseKey] ? phraseKey : normalizeWord(selectedText.split(" ")[0]);
    if (!selectedWord || !/[a-z]/i.test(selectedWord)) return;
    showCard(selectedWord, touch.clientX, touch.clientY);
  }, { passive: true });
  document.addEventListener("click", (event) => { if (!event.target.closest(".word-lookup-card")) closeCard(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeCard(); });
  card.querySelector(".word-lookup-close").addEventListener("click", closeCard);
  playButton.addEventListener("click", () => {
    if (window.playEnglishText) window.playEnglishText(currentWord, { rate: .72 });
    else if (window.speechSynthesis) { window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(currentWord); utterance.lang = "en-US"; utterance.rate = .72; window.speechSynthesis.speak(utterance); }
  });
})();
