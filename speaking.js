const scenes = [
  { id: "intro", title: "自我介绍", description: "先介绍自己", sentences: [
    ["Hi, I’m Alex.", "你好，我是 Alex。", "第一次认识别人时，可以先简单介绍自己的名字。", "Hi, I’m / Alex.", [{ w: "hi", ipa: "/haɪ/", m: "你好" }, { w: "name", ipa: "/neɪm/", m: "名字" }], ["I’m Jamie.", "I’m from China."]],
    ["What’s your name?", "你叫什么名字？", "想知道对方姓名时，可以用这个简单问题。", "What’s your / name?", [{ w: "what", ipa: "/wʌt/", m: "什么" }, { w: "name", ipa: "/neɪm/", m: "名字" }], ["What’s your job?", "What’s your number?"]],
    ["Nice to meet you.", "很高兴认识你。", "第一次见面时，用来表达礼貌和友好。", "Nice to / meet you.", [{ w: "nice", ipa: "/naɪs/", m: "好的；愉快的" }, { w: "meet", ipa: "/miːt/", m: "见面" }], ["Nice to see you.", "Nice to talk with you."]],
    ["Where are you from?", "你来自哪里？", "和别人聊天时，询问对方来自哪里。", "Where are you / from?", [{ w: "where", ipa: "/wer/", m: "哪里" }, { w: "from", ipa: "/frəm/", m: "来自" }], ["Where are you now?", "Where is the station?"]],
    ["I’m from China.", "我来自中国。", "回答来自哪里时，直接说 I’m from 加地点。", "I’m from / China.", [{ w: "from", ipa: "/frəm/", m: "来自" }, { w: "China", ipa: "/ˈtʃaɪnə/", m: "中国" }], ["I’m from Bangkok.", "I’m from Thailand."]],
    ["I live in Bangkok.", "我住在曼谷。", "介绍现在居住的城市时，可以这样说。", "I live in / Bangkok.", [{ w: "live", ipa: "/lɪv/", m: "居住" }, { w: "city", ipa: "/ˈsɪti/", m: "城市" }], ["I live in Chiang Mai.", "I live near the station."]],
    ["I’m learning English.", "我正在学英语。", "介绍自己正在学习的事情。", "I’m learning / English.", [{ w: "learn", ipa: "/lɝːn/", m: "学习" }, { w: "English", ipa: "/ˈɪŋɡlɪʃ/", m: "英语" }], ["I’m learning Thai.", "I’m learning to speak."]],
    ["I’m a beginner.", "我是初学者。", "说明自己的英语基础时，可以坦诚地这样说。", "I’m a / beginner.", [{ w: "beginner", ipa: "/bɪˈɡɪnər/", m: "初学者" }, { w: "speak", ipa: "/spiːk/", m: "说话" }], ["I’m a student.", "I’m a teacher."]],
    ["I’m here for work.", "我是来工作的。", "说明来这里的原因。", "I’m here / for work.", [{ w: "here", ipa: "/hɪr/", m: "这里" }, { w: "work", ipa: "/wɝːk/", m: "工作" }], ["I’m here for school.", "I’m here for a meeting."]],
    ["See you soon.", "很快再见。", "结束聊天时，可以自然地和对方告别。", "See you / soon.", [{ w: "see", ipa: "/siː/", m: "看见" }, { w: "soon", ipa: "/suːn/", m: "很快" }], ["See you tomorrow.", "See you later."]]
  ]},
  { id: "needs", title: "表达需求", description: "说出我想要什么", sentences: [
    ["I’d like some water.", "我想要一些水。", "表达自己想要的东西，语气礼貌自然。", "I’d like / some water.", [{ w: "I’d like", ipa: "/aɪd laɪk/", m: "我想要" }, { w: "water", ipa: "/ˈwɔːtər/", m: "水" }], ["I’d like some coffee.", "I’d like some tea."]],
    ["I need a little help.", "我需要一点帮助。", "遇到问题时，可以直接表达需要帮助。", "I need / a little help.", [{ w: "need", ipa: "/niːd/", m: "需要" }, { w: "help", ipa: "/help/", m: "帮助" }], ["I need some time.", "I need a little water."]],
    ["Can I sit here?", "我可以坐这里吗？", "询问自己是否可以做某件事。", "Can I / sit here?", [{ w: "sit", ipa: "/sɪt/", m: "坐" }, { w: "here", ipa: "/hɪr/", m: "这里" }], ["Can I wait here?", "Can I use this?"]],
    ["Could you say that again?", "你可以再说一遍吗？", "没有听清楚时，礼貌地请对方重复。", "Could you / say that again?", [{ w: "say", ipa: "/seɪ/", m: "说" }, { w: "again", ipa: "/əˈɡen/", m: "再一次" }], ["Could you speak slowly?", "Could you write that down?"]],
    ["Please speak slowly.", "请说慢一点。", "听不清楚时，可以礼貌地提出请求。", "Please / speak slowly.", [{ w: "speak", ipa: "/spiːk/", m: "说话" }, { w: "slowly", ipa: "/ˈsloʊli/", m: "慢慢地" }], ["Please wait slowly.", "Please say it again."]],
    ["I don’t understand.", "我不明白。", "没有听懂时，可以直接但礼貌地说明。", "I don’t / understand.", [{ w: "understand", ipa: "/ˌʌndərˈstænd/", m: "理解" }, { w: "again", ipa: "/əˈɡen/", m: "再一次" }], ["I don’t remember.", "I don’t know."]],
    ["Can you show me?", "你可以给我看一下吗？", "需要别人示范或指给你看时，可以这样问。", "Can you / show me?", [{ w: "show", ipa: "/ʃoʊ/", m: "展示" }, { w: "me", ipa: "/miː/", m: "我" }], ["Can you tell me?", "Can you help me?"]],
    ["I’m looking for this.", "我正在找这个。", "在商店或生活中寻找某个东西时使用。", "I’m looking for / this.", [{ w: "look for", ipa: "/lʊk fɔːr/", m: "寻找" }, { w: "this", ipa: "/ðɪs/", m: "这个" }], ["I’m looking for a taxi.", "I’m looking for the exit."]],
    ["I want to try it.", "我想试试它。", "表达想尝试某件事。", "I want to / try it.", [{ w: "want", ipa: "/wɑːnt/", m: "想要" }, { w: "try", ipa: "/traɪ/", m: "尝试" }], ["I want to buy it.", "I want to learn."]],
    ["That’s enough for me.", "对我来说够了。", "表示数量已经足够。", "That’s enough / for me.", [{ w: "enough", ipa: "/ɪˈnʌf/", m: "足够的" }, { w: "for", ipa: "/fər/", m: "对；为了" }], ["That’s good for me.", "That’s too much for me."]]
  ]},
  { id: "response", title: "日常回应", description: "听懂后自然回应", sentences: [
    ["That sounds good.", "听起来不错。", "接受一个建议时，可以自然地这样回应。", "That sounds / good.", [{ w: "sound", ipa: "/saʊnd/", m: "听起来" }, { w: "good", ipa: "/ɡʊd/", m: "好的" }], ["That sounds great.", "That sounds interesting."]],
    ["No worries.", "没关系。", "安慰别人，或者表示这不是问题。", "No / worries.", [{ w: "worry", ipa: "/ˈwɝːi/", m: "担心" }, { w: "no", ipa: "/noʊ/", m: "不；没有" }], ["No problem.", "No rush."]],
    ["I’m not sure.", "我不太确定。", "不确定答案时，比直接说 I don’t know 更柔和。", "I’m not / sure.", [{ w: "sure", ipa: "/ʃʊr/", m: "确定的" }, { w: "not", ipa: "/nɑːt/", m: "不" }], ["I’m not ready.", "I’m not busy."]],
    ["Give me a second.", "等我一下。", "需要一点时间时，可以这样说。", "Give me / a second.", [{ w: "give", ipa: "/ɡɪv/", m: "给" }, { w: "second", ipa: "/ˈsekənd/", m: "秒；一会儿" }], ["Give me a minute.", "Give me a chance."]],
    ["Take your time.", "你慢慢来。", "告诉对方不用着急。", "Take your / time.", [{ w: "take", ipa: "/teɪk/", m: "拿；花费" }, { w: "time", ipa: "/taɪm/", m: "时间" }], ["Take your seat.", "Take your bag."]],
    ["I agree with you.", "我同意你的看法。", "表达同意时，可以使用这个完整句子。", "I agree / with you.", [{ w: "agree", ipa: "/əˈɡriː/", m: "同意" }, { w: "with", ipa: "/wɪð/", m: "和；与" }], ["I agree with that.", "I agree with him."]],
    ["That’s a good idea.", "这是个好主意。", "认可别人提出的想法。", "That’s a good / idea.", [{ w: "idea", ipa: "/aɪˈdiːə/", m: "想法" }, { w: "good", ipa: "/ɡʊd/", m: "好的" }], ["That’s a great idea.", "That’s an interesting idea."]],
    ["I’ll think about it.", "我会考虑一下。", "暂时不能马上决定时，可以这样回应。", "I’ll think / about it.", [{ w: "think", ipa: "/θɪŋk/", m: "思考" }, { w: "about", ipa: "/əˈbaʊt/", m: "关于" }], ["I’ll ask about it.", "I’ll talk about it."]],
    ["Let me check.", "让我确认一下。", "需要查看信息或确认情况时使用。", "Let me / check.", [{ w: "let", ipa: "/let/", m: "让" }, { w: "check", ipa: "/tʃek/", m: "检查；确认" }], ["Let me think.", "Let me ask."]],
    ["I’ll get back to you.", "我之后回复你。", "现在不能马上回答时，可以这样说。", "I’ll get back / to you.", [{ w: "get back", ipa: "/ɡet bæk/", m: "回复；回来" }, { w: "later", ipa: "/ˈleɪtər/", m: "稍后" }], ["I’ll call you later.", "I’ll text you later."]]
  ]},
  { id: "food", title: "点餐购物", description: "在店里说清楚", sentences: [
    ["I’d like a coffee, please.", "我想要一杯咖啡。", "在咖啡店点单时，可以礼貌地这样说。", "I’d like a coffee / please.", [{ w: "coffee", ipa: "/ˈkɔːfi/", m: "咖啡" }, { w: "please", ipa: "/pliːz/", m: "请" }], ["I’d like a tea, please.", "I’d like some water, please."]],
    ["Can I have the menu?", "可以给我菜单吗？", "在餐厅需要菜单时使用。", "Can I have / the menu?", [{ w: "menu", ipa: "/ˈmenjuː/", m: "菜单" }, { w: "have", ipa: "/hæv/", m: "有；拿到" }], ["Can I have some water?", "Can I have the bill?"]],
    ["Please add some ice.", "请加一些冰。", "点饮料时提出简单要求。", "Please add / some ice.", [{ w: "add", ipa: "/æd/", m: "添加" }, { w: "ice", ipa: "/aɪs/", m: "冰" }], ["Please add some milk.", "Please add less sugar."]],
    ["I’m just looking.", "我只是随便看看。", "店员询问时，如果暂时不需要帮助，可以这样说。", "I’m just / looking.", [{ w: "just", ipa: "/dʒʌst/", m: "只是" }, { w: "look", ipa: "/lʊk/", m: "看" }], ["I’m just checking.", "I’m just browsing."]],
    ["How much is this?", "这个多少钱？", "询问价格时最实用的句子之一。", "How much / is this?", [{ w: "how much", ipa: "/haʊ mʌtʃ/", m: "多少钱；多少" }, { w: "price", ipa: "/praɪs/", m: "价格" }], ["How much is that?", "How much are these?"]],
    ["Do you have a smaller size?", "你们有小一点的尺码吗？", "买衣服或鞋子时询问尺码。", "Do you have / a smaller size?", [{ w: "smaller", ipa: "/ˈsmɔːlər/", m: "更小的" }, { w: "size", ipa: "/saɪz/", m: "尺码；大小" }], ["Do you have a larger size?", "Do you have another color?"]],
    ["I’ll take this one.", "我就要这个。", "决定购买某个东西时，可以这样说。", "I’ll take / this one.", [{ w: "take", ipa: "/teɪk/", m: "买下；拿" }, { w: "one", ipa: "/wʌn/", m: "一个" }], ["I’ll take two.", "I’ll take the blue one."]],
    ["That’s all, thank you.", "就这些，谢谢。", "点完餐或购物结束时使用。", "That’s all / thank you.", [{ w: "all", ipa: "/ɔːl/", m: "全部" }, { w: "thank", ipa: "/θæŋk/", m: "感谢" }], ["That’s enough, thank you.", "No more, thank you."]],
    ["Can we get the bill?", "我们可以结账吗？", "在餐厅想要结账时，可以这样问。", "Can we get / the bill?", [{ w: "bill", ipa: "/bɪl/", m: "账单" }, { w: "get", ipa: "/ɡet/", m: "得到；拿到" }], ["Can we get some water?", "Can we get a table?"]],
    ["Can I pay by card?", "我可以刷卡吗？", "结账时询问付款方式。", "Can I pay / by card?", [{ w: "pay", ipa: "/peɪ/", m: "付款" }, { w: "card", ipa: "/kɑːrd/", m: "卡" }], ["Can I pay in cash?", "Can I pay now?"]]
  ]},
  { id: "travel", title: "出行问路", description: "在路上解决问题", sentences: [
    ["Where is the station?", "车站在哪里？", "需要寻找车站时，直接提出问题。", "Where is / the station?", [{ w: "where", ipa: "/wer/", m: "哪里" }, { w: "station", ipa: "/ˈsteɪʃən/", m: "车站" }], ["Where is the exit?", "Where is the restroom?"]],
    ["How can I get there?", "我怎么去那里？", "询问到达某地的方法。", "How can I / get there?", [{ w: "get", ipa: "/ɡet/", m: "到达" }, { w: "there", ipa: "/ðer/", m: "那里" }], ["How can I get downtown?", "How can I get home?"]],
    ["Is it far from here?", "离这里远吗？", "询问距离时使用。", "Is it far / from here?", [{ w: "far", ipa: "/fɑːr/", m: "远的" }, { w: "here", ipa: "/hɪr/", m: "这里" }], ["Is it near here?", "Is it far from the hotel?"]],
    ["I’m on my way.", "我在路上了。", "告诉别人你已经出发，正在过去。", "I’m on / my way.", [{ w: "on my way", ipa: "/ɑːn maɪ weɪ/", m: "在路上" }, { w: "way", ipa: "/weɪ/", m: "路；方式" }], ["I’m on my way home.", "I’m on my way there."]],
    ["I’ll be there soon.", "我很快就到。", "告诉别人你马上到达。", "I’ll be there / soon.", [{ w: "soon", ipa: "/suːn/", m: "很快" }, { w: "there", ipa: "/ðer/", m: "那里" }], ["I’ll be there in ten minutes.", "I’ll be home soon."]],
    ["Please leave it at the door.", "请把它放在门口。", "给外卖员或快递员留言时使用。", "Please leave it / at the door.", [{ w: "leave", ipa: "/liːv/", m: "留下；放置" }, { w: "door", ipa: "/dɔːr/", m: "门" }], ["Please leave it outside.", "Please leave it here."]],
    ["I need a taxi.", "我需要一辆出租车。", "需要打车时直接表达需求。", "I need / a taxi.", [{ w: "need", ipa: "/niːd/", m: "需要" }, { w: "taxi", ipa: "/ˈtæksi/", m: "出租车" }], ["I need a ride.", "I need a bus."]],
    ["Please stop here.", "请在这里停。", "告诉司机在某个位置停车。", "Please stop / here.", [{ w: "stop", ipa: "/stɑːp/", m: "停止；停车" }, { w: "here", ipa: "/hɪr/", m: "这里" }], ["Please stop at the corner.", "Please stop there."]],
    ["Which way is the hotel?", "酒店往哪边走？", "询问方向时，可以用 which way。", "Which way / is the hotel?", [{ w: "which way", ipa: "/wɪtʃ weɪ/", m: "哪条路；哪个方向" }, { w: "hotel", ipa: "/hoʊˈtel/", m: "酒店" }], ["Which way is the market?", "Which way is the beach?"]],
    ["I think I’m lost.", "我觉得我迷路了。", "不确定方向时，可以这样说明。", "I think / I’m lost.", [{ w: "think", ipa: "/θɪŋk/", m: "觉得；思考" }, { w: "lost", ipa: "/lɔːst/", m: "迷路的" }], ["I think I’m early.", "I think I’m late."]]
  ]},
  { id: "social", title: "简单社交", description: "和别人聊几句", sentences: [
    ["How was your day?", "你今天过得怎么样？", "和熟人聊天时，可以这样关心对方。", "How was / your day?", [{ w: "how", ipa: "/haʊ/", m: "怎么样" }, { w: "day", ipa: "/deɪ/", m: "一天" }], ["How was your trip?", "How was your weekend?"]],
    ["What do you do?", "你是做什么工作的？", "自然地询问对方的工作。", "What do you / do?", [{ w: "do", ipa: "/duː/", m: "做" }, { w: "job", ipa: "/dʒɑːb/", m: "工作" }], ["What do you like?", "What do you need?"]],
    ["I work from home.", "我在家工作。", "介绍自己的工作状态或习惯。", "I work / from home.", [{ w: "work", ipa: "/wɝːk/", m: "工作" }, { w: "home", ipa: "/hoʊm/", m: "家" }], ["I study from home.", "I work near here."]],
    ["I’m free this evening.", "我今晚有空。", "表达某个时间段有空。", "I’m free / this evening.", [{ w: "free", ipa: "/friː/", m: "有空的；自由的" }, { w: "evening", ipa: "/ˈiːvnɪŋ/", m: "晚上" }], ["I’m free tomorrow.", "I’m free after work."]],
    ["Do you want to grab coffee?", "你想一起喝咖啡吗？", "邀请朋友一起做一件简单的事。", "Do you want to / grab coffee?", [{ w: "want", ipa: "/wɑːnt/", m: "想要" }, { w: "grab", ipa: "/ɡræb/", m: "快速拿；一起去" }], ["Do you want to grab lunch?", "Do you want to go out?"]],
    ["That sounds fun.", "听起来很有趣。", "接受一个活动或邀请时，可以这样回应。", "That sounds / fun.", [{ w: "sound", ipa: "/saʊnd/", m: "听起来" }, { w: "fun", ipa: "/fʌn/", m: "有趣" }], ["That sounds great.", "That sounds relaxing."]],
    ["I’m tired today.", "我今天很累。", "表达今天的身体或精神状态。", "I’m tired / today.", [{ w: "tired", ipa: "/ˈtaɪərd/", m: "疲惫的" }, { w: "today", ipa: "/təˈdeɪ/", m: "今天" }], ["I’m busy today.", "I’m happy today."]],
    ["I had a good time.", "我玩得很开心。", "活动结束后表达愉快感受。", "I had / a good time.", [{ w: "have a good time", ipa: "/hæv ə ɡʊd taɪm/", m: "玩得开心" }, { w: "good", ipa: "/ɡʊd/", m: "好的" }], ["I had a great time.", "We had a good time."]],
    ["Let’s meet after work.", "我们下班后见吧。", "和别人约一个简单的时间。", "Let’s meet / after work.", [{ w: "meet", ipa: "/miːt/", m: "见面" }, { w: "after", ipa: "/ˈæftər/", m: "在……之后" }], ["Let’s meet tomorrow.", "Let’s meet at seven."]],
    ["Have a nice day.", "祝你今天愉快。", "结束对话时的友好祝福。", "Have a nice / day.", [{ w: "nice", ipa: "/naɪs/", m: "愉快的" }, { w: "day", ipa: "/deɪ/", m: "一天" }], ["Have a nice evening.", "Have a safe trip."]]
  ]}
];

const proficientScenes = [
  { id: "opinions", title: "观点表达", description: "说清楚我的看法", goal: "提出观点、补充理由、回应不同意见", skills: ["提出观点", "补充理由", "回应异议"], pathStep: "01", sentences: [
    ["I prefer working in the morning.", "我更喜欢早上工作。", "表达个人偏好时，先说出选择，再让对方知道你的倾向。", "I prefer / working in the morning.", [{ w: "prefer", ipa: "/prɪˈfɝː/", m: "更喜欢" }, { w: "working", ipa: "/ˈwɝːkɪŋ/", m: "工作" }, { w: "morning", ipa: "/ˈmɔːrnɪŋ/", m: "早上" }], ["I prefer studying in the morning.", "I prefer meeting in the morning."]],
    ["I think this option is more practical.", "我觉得这个选项更实用。", "用 I think 引出观点，再用 more practical 做出判断。", "I think / this option / is more practical.", [{ w: "option", ipa: "/ˈɑːpʃən/", m: "选项" }, { w: "practical", ipa: "/ˈpræktɪkəl/", m: "实用的" }, { w: "more", ipa: "/mɔːr/", m: "更加" }], ["I think this plan is more practical.", "I think this way is more practical."]],
    ["The main reason is that it saves time.", "主要原因是它能节省时间。", "回答“为什么”时，不只给结论，还要补充一个清楚的原因。", "The main reason / is that / it saves time.", [{ w: "main", ipa: "/meɪn/", m: "主要的" }, { w: "reason", ipa: "/ˈriːzən/", m: "原因" }, { w: "save", ipa: "/seɪv/", m: "节省" }], ["The main reason is that it costs less.", "The main reason is that it feels easier."]],
    ["I see your point, but I have a different view.", "我明白你的观点，但我的看法不同。", "先承认对方的观点，再礼貌地表达不同意见。", "I see your point / but / I have a different view.", [{ w: "point", ipa: "/pɔɪnt/", m: "观点；要点" }, { w: "different", ipa: "/ˈdɪfərənt/", m: "不同的" }, { w: "view", ipa: "/vjuː/", m: "看法" }], ["I see your point, but I need more time.", "I see your point, but I disagree."]],
    ["Overall, I think it is worth trying.", "总的来说，我觉得值得试一试。", "用 Overall 做总结，让一段观点听起来更完整。", "Overall / I think / it is worth trying.", [{ w: "overall", ipa: "/ˌoʊvərˈɔːl/", m: "总的来说" }, { w: "worth", ipa: "/wɝːθ/", m: "值得" }, { w: "trying", ipa: "/ˈtraɪɪŋ/", m: "尝试" }], ["Overall, I think it is worth keeping.", "Overall, I think it is worth discussing."]]
  ]},
  { id: "stories", title: "经历叙述", description: "把一件事说完整", goal: "按顺序讲清经过、结果和个人收获", skills: ["交代背景", "推进经过", "总结收获"], pathStep: "02", sentences: [
    ["I had a small problem on my way here.", "我来这里的路上遇到了一点小问题。", "用过去时开始讲经历，再补充时间或地点背景。", "I had a small problem / on my way here.", [{ w: "problem", ipa: "/ˈprɑːbləm/", m: "问题" }, { w: "on my way", ipa: "/ɑːn maɪ weɪ/", m: "在路上" }, { w: "here", ipa: "/hɪr/", m: "这里" }], ["I had a small problem at work.", "I had a small problem this morning."]],
    ["At first, I did not know what to do.", "一开始，我不知道该怎么办。", "At first 用来推进故事，did not know 描述当时的状态。", "At first / I did not know / what to do.", [{ w: "at first", ipa: "/ət fɝːst/", m: "一开始" }, { w: "know", ipa: "/noʊ/", m: "知道" }, { w: "what to do", ipa: "/wʌt tə duː/", m: "该做什么" }], ["At first, I did not know where to go.", "At first, I did not know who to ask."]],
    ["Then I asked a friend for help.", "然后我向一个朋友寻求帮助。", "Then 把前后动作连接起来，ask someone for help 是常用搭配。", "Then / I asked a friend / for help.", [{ w: "then", ipa: "/ðen/", m: "然后" }, { w: "ask", ipa: "/æsk/", m: "询问；请求" }, { w: "for help", ipa: "/fər help/", m: "寻求帮助" }], ["Then I asked my manager for help.", "Then I asked a neighbor for help."]],
    ["Luckily, everything worked out in the end.", "幸运的是，最后一切都顺利解决了。", "Luckily 表达结果，work out 表示事情最终得到解决。", "Luckily / everything worked out / in the end.", [{ w: "luckily", ipa: "/ˈlʌkəli/", m: "幸运的是" }, { w: "work out", ipa: "/wɝːk aʊt/", m: "顺利解决" }, { w: "in the end", ipa: "/ɪn ði end/", m: "最后" }], ["Luckily, the plan worked out in the end.", "Luckily, we worked it out in the end."]],
    ["It taught me to ask for help sooner.", "这件事让我学会更早寻求帮助。", "用 It taught me 总结经历带来的收获。", "It taught me / to ask for help / sooner.", [{ w: "teach", ipa: "/tiːtʃ/", m: "教会" }, { w: "ask for help", ipa: "/æsk fər help/", m: "寻求帮助" }, { w: "sooner", ipa: "/ˈsuːnər/", m: "更早地" }], ["It taught me to plan ahead.", "It taught me to speak up sooner."]]
  ]},
  { id: "compare", title: "比较选择", description: "比较两个不同方案", goal: "比较优缺点，并说明自己的取舍", skills: ["比较差异", "表达优先级", "说明决定"], pathStep: "03", sentences: [
    ["Both options have advantages, but they suit different people.", "两个选项都有优点，但适合不同的人。", "先承认两边都有优点，再指出适用人群不同。", "Both options have advantages / but / they suit different people.", [{ w: "both", ipa: "/boʊθ/", m: "两者都" }, { w: "advantage", ipa: "/ədˈvæntɪdʒ/", m: "优点" }, { w: "suit", ipa: "/suːt/", m: "适合" }], ["Both plans have advantages, but they suit different teams.", "Both choices have advantages, but they suit different needs."]],
    ["The first one is cheaper, while the second one is more convenient.", "第一个更便宜，而第二个更方便。", "用 while 连接对比，让两个特点放在同一句里。", "The first one is cheaper / while / the second one is more convenient.", [{ w: "first", ipa: "/fɝːst/", m: "第一个" }, { w: "cheaper", ipa: "/ˈtʃiːpər/", m: "更便宜的" }, { w: "convenient", ipa: "/kənˈviːniənt/", m: "方便的" }], ["The first one is faster, while the second one is safer.", "The first one is simpler, while the second one is more flexible."]],
    ["For me, convenience matters more than price.", "对我来说，方便比价格更重要。", "For me 表明个人立场，matters more than 用来表达优先级。", "For me / convenience matters more than price.", [{ w: "convenience", ipa: "/kənˈviːniəns/", m: "便利" }, { w: "matter", ipa: "/ˈmætər/", m: "重要；要紧" }, { w: "price", ipa: "/praɪs/", m: "价格" }], ["For me, quality matters more than speed.", "For me, time matters more than money."]],
    ["I would choose the second option in this situation.", "在这种情况下，我会选择第二个选项。", "I would choose 比 I choose 更适合表达一个经过判断后的选择。", "I would choose / the second option / in this situation.", [{ w: "choose", ipa: "/tʃuːz/", m: "选择" }, { w: "second", ipa: "/ˈsekənd/", m: "第二个" }, { w: "situation", ipa: "/ˌsɪtʃuˈeɪʃən/", m: "情况" }], ["I would choose the first option in this situation.", "I would choose the simpler option in this situation."]],
    ["It depends on what you need right now.", "这取决于你现在需要什么。", "It depends on 是一个非常实用的开放式回答。", "It depends on / what you need / right now.", [{ w: "depend on", ipa: "/dɪˈpend ɑːn/", m: "取决于" }, { w: "need", ipa: "/niːd/", m: "需要" }, { w: "right now", ipa: "/raɪt naʊ/", m: "现在" }], ["It depends on what you want right now.", "It depends on what we can do right now."]]
  ]},
  { id: "problem", title: "问题解决", description: "描述问题并提出方案", goal: "解释问题、提出建议、推进下一步", skills: ["定位问题", "提出方案", "推进执行"], pathStep: "04", sentences: [
    ["The main issue is that we do not have enough time.", "主要问题是我们没有足够的时间。", "用 The main issue is that 清楚指出当前最大的困难。", "The main issue / is that / we do not have enough time.", [{ w: "issue", ipa: "/ˈɪʃuː/", m: "问题" }, { w: "enough", ipa: "/ɪˈnʌf/", m: "足够的" }, { w: "time", ipa: "/taɪm/", m: "时间" }], ["The main issue is that we do not have enough information.", "The main issue is that we do not have enough people."]],
    ["We could simplify the plan and focus on the most important part.", "我们可以简化计划，把重点放在最重要的部分。", "could 表示一个比较柔和的建议，不会听起来像命令。", "We could simplify the plan / and focus on / the most important part.", [{ w: "simplify", ipa: "/ˈsɪmpləfaɪ/", m: "简化" }, { w: "focus on", ipa: "/ˈfoʊkəs ɑːn/", m: "专注于" }, { w: "important", ipa: "/ɪmˈpɔːrtənt/", m: "重要的" }], ["We could simplify the process and focus on the main goal.", "We could change the plan and focus on the first step."]],
    ["That would give us more time to check the details.", "这样我们就会有更多时间检查细节。", "That would 把前面的建议和可能带来的结果连接起来。", "That would give us / more time / to check the details.", [{ w: "give us", ipa: "/ɡɪv ʌs/", m: "给我们" }, { w: "details", ipa: "/ˈdiːteɪlz/", m: "细节" }, { w: "check", ipa: "/tʃek/", m: "检查" }], ["That would give us more time to prepare.", "That would give us more time to decide."]],
    ["I agree, but we should also consider the cost.", "我同意，但我们也应该考虑成本。", "先表示认同，再补充一个需要考虑的因素。", "I agree / but / we should also consider the cost.", [{ w: "agree", ipa: "/əˈɡriː/", m: "同意" }, { w: "consider", ipa: "/kənˈsɪdər/", m: "考虑" }, { w: "cost", ipa: "/kɔːst/", m: "成本" }], ["I agree, but we should also consider the timing.", "I agree, but we should also consider the risk."]],
    ["Let us try this approach and review the result tomorrow.", "我们试试这个方法，明天再检查结果。", "用 Let us 提出行动，再用 and review 安排下一步。", "Let us try this approach / and review the result / tomorrow.", [{ w: "approach", ipa: "/əˈproʊtʃ/", m: "方法" }, { w: "review", ipa: "/rɪˈvjuː/", m: "复查；回顾" }, { w: "result", ipa: "/rɪˈzʌlt/", m: "结果" }], ["Let us try this approach and review the result next week.", "Let us try this approach and review the result together."]]
  ]},
  { id: "meetings", title: "会议协作", description: "在讨论中推进事情", goal: "提出议程、澄清分工、确认下一步", skills: ["组织议程", "澄清责任", "确认行动"], pathStep: "05", sentences: [
    ["Before we begin, let me briefly outline the main agenda.", "开始之前，我先简要介绍一下主要议程。", "在会议开头先交代结构，让大家知道接下来要讨论什么。", "Before we begin / let me briefly outline / the main agenda.", [{ w: "begin", ipa: "/bɪˈɡɪn/", m: "开始" }, { w: "briefly", ipa: "/ˈbriːfli/", m: "简要地" }, { w: "agenda", ipa: "/əˈdʒendə/", m: "议程" }], ["Before we begin, let me briefly outline the main goals.", "Before we begin, let me briefly outline the next steps."]],
    ["Could we come back to that point after we clarify the requirements?", "我们先把需求说明清楚，再回到那个问题，可以吗？", "用 Could we 提出有礼貌的会议安排，避免讨论过早发散。", "Could we come back to that point / after we clarify / the requirements?", [{ w: "come back to", ipa: "/kʌm bæk tə/", m: "回到；重新讨论" }, { w: "clarify", ipa: "/ˈklærəfaɪ/", m: "澄清" }, { w: "requirement", ipa: "/rɪˈkwaɪərmənt/", m: "要求；需求" }], ["Could we come back to that point after we clarify the timeline?", "Could we come back to that point after we clarify the budget?"]],
    ["I can take responsibility for the first draft.", "我可以负责第一版草稿。", "在协作中主动说明自己承担的任务，表达清楚又不夸张。", "I can take responsibility / for the first draft.", [{ w: "take responsibility for", ipa: "/teɪk rɪˌspɑːnsəˈbɪləti fɔːr/", m: "负责" }, { w: "draft", ipa: "/dræft/", m: "草稿；初稿" }, { w: "first", ipa: "/fɝːst/", m: "第一版的" }], ["I can take responsibility for the final review.", "I can take responsibility for the client update."]],
    ["To make sure we are aligned, could you confirm the deadline?", "为了确保我们的理解一致，你可以确认一下截止时间吗？", "To make sure we are aligned 用来检查双方是否对目标和时间有相同理解。", "To make sure we are aligned / could you confirm / the deadline?", [{ w: "aligned", ipa: "/əˈlaɪnd/", m: "保持一致的" }, { w: "confirm", ipa: "/kənˈfɝːm/", m: "确认" }, { w: "deadline", ipa: "/ˈdedlaɪn/", m: "截止时间" }], ["To make sure we are aligned, could you confirm the budget?", "To make sure we are aligned, could you confirm the final scope?"]],
    ["I will send a short summary so everyone knows what happens next.", "我会发一份简短总结，让大家知道下一步做什么。", "用 so 说明行动的目的，把会议结论自然地落到执行上。", "I will send a short summary / so everyone knows / what happens next.", [{ w: "summary", ipa: "/ˈsʌməri/", m: "总结" }, { w: "everyone", ipa: "/ˈevriwʌn/", m: "每个人" }, { w: "happen next", ipa: "/ˈhæpən nekst/", m: "接下来发生什么" }], ["I will send a short summary so everyone knows the key decisions.", "I will send a short summary so everyone knows the next deadline."]]
  ]},
  { id: "feedback", title: "反馈沟通", description: "给出具体而有分寸的反馈", goal: "先肯定事实，再提出可执行的改进方向", skills: ["描述表现", "提出建议", "保持分寸"], pathStep: "06", sentences: [
    ["The overall direction is strong, especially the way you organized the information.", "整体方向很好，尤其是你组织信息的方式。", "先指出具体做得好的地方，让反馈听起来真实而不是客套。", "The overall direction is strong / especially the way / you organized the information.", [{ w: "overall", ipa: "/ˌoʊvərˈɔːl/", m: "整体的；总的来说" }, { w: "direction", ipa: "/dəˈrekʃən/", m: "方向" }, { w: "organize", ipa: "/ˈɔːrɡənaɪz/", m: "组织" }], ["The overall direction is strong, especially the way you explained the problem.", "The overall direction is strong, especially the way you presented the data."]],
    ["One thing we could improve is the transition between these two sections.", "有一点可以改进，就是这两部分之间的衔接。", "One thing we could improve is... 比直接说问题更有建设性，也方便对方接受。", "One thing we could improve / is the transition / between these two sections.", [{ w: "improve", ipa: "/ɪmˈpruːv/", m: "改进" }, { w: "transition", ipa: "/trænˈzɪʃən/", m: "过渡；衔接" }, { w: "section", ipa: "/ˈsekʃən/", m: "部分" }], ["One thing we could improve is the transition between these two ideas.", "One thing we could improve is the transition between the opening and the conclusion."]],
    ["It might be clearer if we gave the reader a concrete example.", "如果我们给读者一个具体例子，可能会更清楚。", "It might be clearer if... 是提出改进建议时很自然的条件表达。", "It might be clearer / if we gave the reader / a concrete example.", [{ w: "clearer", ipa: "/ˈklɪrər/", m: "更清楚的" }, { w: "concrete", ipa: "/ˈkɑːnkriːt/", m: "具体的" }, { w: "example", ipa: "/ɪɡˈzæmpəl/", m: "例子" }], ["It might be clearer if we gave the reader a shorter summary.", "It might be clearer if we gave the team a concrete timeline."]],
    ["I would keep the main idea, but I would simplify the wording.", "我会保留核心想法，但会简化措辞。", "用 but 平衡保留和修改，表达不同意见时不会显得全盘否定。", "I would keep the main idea / but / I would simplify the wording.", [{ w: "keep", ipa: "/kiːp/", m: "保留" }, { w: "main idea", ipa: "/meɪn aɪˈdiːə/", m: "核心想法" }, { w: "wording", ipa: "/ˈwɝːdɪŋ/", m: "措辞" }], ["I would keep the main structure, but I would simplify the examples.", "I would keep the main message, but I would simplify the introduction."]],
    ["Once we make those changes, the final version should be ready to share.", "我们完成这些修改后，最终版本应该就可以分享了。", "Once 引出完成条件，should be ready 表示有把握但保留合理余地。", "Once we make those changes / the final version should be ready / to share.", [{ w: "once", ipa: "/wʌns/", m: "一旦；当……之后" }, { w: "final version", ipa: "/ˈfaɪnəl ˈvɝːʒən/", m: "最终版本" }, { w: "ready", ipa: "/ˈredi/", m: "准备好的" }], ["Once we make those changes, the final version should be ready to publish.", "Once we make those changes, the final version should be ready for review."]]
  ]},
  { id: "planning", title: "计划安排", description: "把计划说得具体可执行", goal: "说明优先级、时间安排和备选方案", skills: ["安排优先级", "说明时间", "准备备选"], pathStep: "07", sentences: [
    ["Our first priority should be to resolve the issue affecting current users.", "我们的第一优先级应该是解决影响当前用户的问题。", "用 first priority 明确先做什么，避免计划只停留在愿望层面。", "Our first priority / should be to resolve / the issue affecting current users.", [{ w: "priority", ipa: "/praɪˈɔːrəti/", m: "优先事项" }, { w: "resolve", ipa: "/rɪˈzɑːlv/", m: "解决" }, { w: "affect", ipa: "/əˈfekt/", m: "影响" }], ["Our first priority should be to resolve the issue affecting new users.", "Our first priority should be to resolve the problem affecting the whole team."]],
    ["If everything stays on schedule, we can launch the update next Friday.", "如果一切按计划进行，我们下周五就能发布更新。", "If 条件句让时间计划更准确，表达预期时也不会过度承诺。", "If everything stays on schedule / we can launch the update / next Friday.", [{ w: "stay on schedule", ipa: "/steɪ ɑːn ˈskedʒuːl/", m: "按计划进行" }, { w: "launch", ipa: "/lɔːntʃ/", m: "发布；启动" }, { w: "update", ipa: "/ˈʌpdeɪt/", m: "更新" }], ["If everything stays on schedule, we can launch the course next month.", "If everything stays on schedule, we can launch the new version on Monday."]],
    ["We may need to adjust the timeline if testing takes longer than expected.", "如果测试时间超过预期，我们可能需要调整时间表。", "may need to 表达可能发生的调整，语气比直接宣布延期更稳妥。", "We may need to adjust the timeline / if testing takes longer / than expected.", [{ w: "adjust", ipa: "/əˈdʒʌst/", m: "调整" }, { w: "timeline", ipa: "/ˈtaɪmlaɪn/", m: "时间表" }, { w: "expected", ipa: "/ɪkˈspektɪd/", m: "预期的" }], ["We may need to adjust the budget if costs rise higher than expected.", "We may need to adjust the plan if demand grows faster than expected."]],
    ["I suggest we leave some room for unexpected changes.", "我建议我们为意外变化留出一些空间。", "I suggest 后面接具体行动，适合在讨论计划时提出柔和但清楚的建议。", "I suggest / we leave some room / for unexpected changes.", [{ w: "suggest", ipa: "/səˈdʒest/", m: "建议" }, { w: "leave room for", ipa: "/liːv ruːm fɔːr/", m: "为……留出空间" }, { w: "unexpected", ipa: "/ˌʌnɪkˈspektɪd/", m: "意外的" }], ["I suggest we leave some room for extra questions.", "I suggest we leave some room for a final review."]],
    ["Let us agree on the next checkpoint before we move on.", "我们继续之前，先确定下一次检查节点吧。", "agree on 用来达成具体共识，让讨论自然进入下一步。", "Let us agree on / the next checkpoint / before we move on.", [{ w: "agree on", ipa: "/əˈɡriː ɑːn/", m: "就……达成一致" }, { w: "checkpoint", ipa: "/ˈtʃekpɔɪnt/", m: "检查节点" }, { w: "move on", ipa: "/muːv ɑːn/", m: "继续进行" }], ["Let us agree on the next checkpoint before we start testing.", "Let us agree on the next checkpoint before we contact the client."]]
  ]},
  { id: "negotiation", title: "协商取舍", description: "在不同条件之间做决定", goal: "说明限制、提出交换、达成可接受的方案", skills: ["说明限制", "提出交换", "确认共识"], pathStep: "08", sentences: [
    ["I understand the goal, but we need to be realistic about the budget.", "我理解这个目标，但我们需要现实地考虑预算。", "先承认共同目标，再说明现实限制，适合开启有分寸的协商。", "I understand the goal / but we need to be realistic / about the budget.", [{ w: "realistic", ipa: "/ˌriːəˈlɪstɪk/", m: "现实的" }, { w: "budget", ipa: "/ˈbʌdʒɪt/", m: "预算" }, { w: "goal", ipa: "/ɡoʊl/", m: "目标" }], ["I understand the goal, but we need to be realistic about the timeline.", "I understand the goal, but we need to be realistic about the resources."]],
    ["If we add this feature, we may have to delay the release.", "如果我们增加这个功能，可能就必须推迟发布。", "If 条件句把选择和代价放在一起，让对方清楚取舍关系。", "If we add this feature / we may have to delay / the release.", [{ w: "feature", ipa: "/ˈfiːtʃər/", m: "功能" }, { w: "delay", ipa: "/dɪˈleɪ/", m: "推迟" }, { w: "release", ipa: "/rɪˈliːs/", m: "发布" }], ["If we add this feature, we may have to reduce the testing time.", "If we add this feature, we may have to change the launch plan."]],
    ["Would you be open to starting with a smaller version?", "你愿意先从一个小一点的版本开始吗？", "Would you be open to... 是礼貌地提出替代方案，不会直接否定对方。", "Would you be open to / starting with / a smaller version?", [{ w: "be open to", ipa: "/bi oʊpən tu/", m: "愿意考虑" }, { w: "smaller version", ipa: "/ˈsmɔːlər ˈvɝːʒən/", m: "较小版本" }, { w: "start with", ipa: "/stɑːrt wɪð/", m: "从……开始" }], ["Would you be open to starting with a shorter meeting?", "Would you be open to starting with a limited trial?"]],
    ["That seems like a reasonable compromise.", "这看起来是一个合理的折中方案。", "用 reasonable compromise 表示双方都做了一点调整后的结果。", "That seems like / a reasonable compromise.", [{ w: "reasonable", ipa: "/ˈriːzənəbəl/", m: "合理的" }, { w: "compromise", ipa: "/ˈkɑːmprəmaɪz/", m: "折中；妥协" }, { w: "seem like", ipa: "/siːm laɪk/", m: "看起来像" }], ["That seems like a reasonable compromise for both sides.", "That seems like a reasonable compromise given the time limit."]],
    ["As long as we document the decision, I am comfortable moving forward.", "只要我们把决定记录下来，我就可以放心继续推进。", "As long as 表示接受方案的条件，moving forward 表示继续推进。", "As long as we document the decision / I am comfortable / moving forward.", [{ w: "as long as", ipa: "/æz lɔːŋ æz/", m: "只要" }, { w: "document", ipa: "/ˈdɑːkjument/", m: "记录；文档化" }, { w: "move forward", ipa: "/muːv ˈfɔːrwərd/", m: "向前推进" }], ["As long as we document the decision, I am comfortable moving forward with the plan.", "As long as we document the decision, I am comfortable moving forward today."]]
  ]}
];

const speakingParams = new URLSearchParams(window.location.search);
const activeLevel = speakingParams.get("level") || "beginner";
const requestedScene = speakingParams.get("scene");
const bankScenes = window.bankScenesByLevel?.[activeLevel];
const activeScenes = requestedScene === "bank" && bankScenes ? bankScenes : activeLevel === "proficient" ? proficientScenes : scenes;
const allSentences = activeScenes.flatMap((scene) => scene.sentences.map((item, index) => ({ scene: scene.id, index, item })));

function reply(english, meaning, ipa, role) { return { english, meaning, ipa, role }; }

// 每个场景按交流功能准备回复池，而不是给整个场景固定三句话。
// repliesFor() 会根据当前主句稳定选出三种不同功能，刷新或来回切换时不会随机抖动。
const replyProfiles = {
  intro: {
    answer: [
      reply("I'm Alex.", "我是 Alex。", "/aɪm ˈælɪks/", "直接回答"),
      reply("My name is Alex.", "我叫 Alex。", "/maɪ neɪm ɪz ˈælɪks/", "直接回答")
    ],
    detail: [
      reply("I'm Alex, but most people call me Al.", "我是 Alex，不过大多数人叫我 Al。", "/aɪm ˈælɪks bət moʊst ˈpiːpəl kɔl mi æl/", "补充细节"),
      reply("I'm Alex. It's nice to meet you.", "我是 Alex。很高兴认识你。", "/aɪm ˈælɪks ɪts naɪs tə miːt ju/", "补充细节")
    ],
    return: [
      reply("What should I call you?", "我应该怎么称呼你？", "/wʌt ʃʊd aɪ kɔl ju/", "把话题交回去"),
      reply("And you?", "你呢？", "/ænd ju/", "把话题交回去")
    ]
  },
  needs: {
    accept: [
      reply("Sure, I'll take care of it.", "好的，我来处理。", "/ʃʊr aɪl teɪk ker əv ɪt/", "接受请求"),
      reply("Of course. Let me help you.", "当然可以。我来帮你。", "/əv kɔrs let mi help ju/", "接受请求")
    ],
    negotiate: [
      reply("I can help, but I need a minute first.", "我可以帮忙，但需要先花一分钟。", "/aɪ kən help bət aɪ niːd ə ˈmɪnət fɝːst/", "协商条件"),
      reply("I can do that after lunch.", "我午饭后可以做。", "/aɪ kən du ðæt ˈæftər lʌntʃ/", "协商条件")
    ],
    alternative: [
      reply("Could you show me what you mean?", "你可以给我示范一下你的意思吗？", "/kʊd ju ʃoʊ mi wʌt ju miːn/", "提出替代动作"),
      reply("Maybe we can try it together.", "也许我们可以一起试试。", "/ˈmeɪbi wi kən traɪ ɪt təˈɡeðər/", "提出替代动作")
    ]
  },
  response: {
    acknowledge: [
      reply("Got it. Thanks for explaining.", "明白了。谢谢你的解释。", "/ɡɑt ɪt θæŋks fər ɪkˈspleɪnɪŋ/", "确认理解"),
      reply("Okay, that makes sense now.", "好的，这下说得通了。", "/oʊˈkeɪ ðæt meɪks sens naʊ/", "确认理解")
    ],
    stance: [
      reply("I agree with you on that.", "在这一点上我同意你的看法。", "/aɪ əˈɡriː wɪð ju ɑn ðæt/", "表达态度"),
      reply("I'm not completely sure yet.", "我现在还不是完全确定。", "/aɪm nɑt kəmˈpliːtli ʃʊr jet/", "表达态度")
    ],
    continue: [
      reply("I'll think about it and let you know.", "我会考虑一下，再告诉你。", "/aɪl θɪŋk əˈbaʊt ɪt ænd let ju noʊ/", "推进对话"),
      reply("What would you do in my situation?", "如果是你，你会怎么做？", "/wʌt wʊd ju du ɪn maɪ ˌsɪtʃuˈeɪʃən/", "推进对话")
    ]
  },
  food: {
    confirm: [
      reply("That sounds perfect, thank you.", "听起来正好，谢谢。", "/ðæt saʊndz ˈpɝːfɪkt θæŋk ju/", "确认选择"),
      reply("Yes, that's exactly what I need.", "对，这正是我需要的。", "/jes ðæts ɪɡˈzæktli wʌt aɪ niːd/", "确认选择")
    ],
    customize: [
      reply("Could I get that with less sugar?", "可以少放一点糖吗？", "/kʊd aɪ ɡet ðæt wɪð les ˈʃʊɡər/", "提出调整"),
      reply("Could you make it to go, please?", "可以帮我做成外带吗？", "/kʊd ju meɪk ɪt tə ɡoʊ pliz/", "提出调整")
    ],
    close: [
      reply("That's all for now, thanks.", "暂时就这些，谢谢。", "/ðæts ɔl fər naʊ θæŋks/", "结束点单"),
      reply("Could we have the bill when you have a moment?", "你方便的时候可以给我们账单吗？", "/kʊd wi hæv ðə bɪl wen ju hæv ə ˈmoʊmənt/", "结束点单")
    ]
  },
  travel: {
    direction: [
      reply("Go straight, then turn left at the corner.", "直走，然后在拐角处左转。", "/ɡoʊ streɪt ðen tɝːn left æt ðə ˈkɔrnər/", "给出方向"),
      reply("It's just past the hotel on your right.", "就在酒店前方一点，你的右手边。", "/ɪts dʒʌst pæst ðə hoʊˈtel ɑn jər raɪt/", "给出方向")
    ],
    clarify: [
      reply("Do you need the fastest way or the easiest way?", "你需要最快的路线，还是最简单的路线？", "/du ju niːd ðə ˈfæstəst weɪ ɔr ði ˈiːziəst weɪ/", "确认需求"),
      reply("Are you going there on foot?", "你是要步行去那里吗？", "/ɑr ju ˈɡoʊɪŋ ðer ɑn fʊt/", "确认需求")
    ],
    offer: [
      reply("I can point it out on the map.", "我可以在地图上指给你看。", "/aɪ kən pɔɪnt ɪt aʊt ɑn ðə mæp/", "主动帮忙"),
      reply("I'll walk with you as far as the station.", "我可以陪你走到车站。", "/aɪl wɔk wɪð ju æz fɑr æz ðə ˈsteɪʃən/", "主动帮忙")
    ]
  },
  social: {
    share: [
      reply("It was busy, but I had a good time.", "虽然很忙，但我过得很愉快。", "/ɪt wəz ˈbɪzi bət aɪ hæd ə ɡʊd taɪm/", "分享近况"),
      reply("Pretty good. I finally got some rest.", "挺不错的，我终于休息了一下。", "/ˈprɪti ɡʊd aɪ ˈfaɪnəli ɡɑt səm rest/", "分享近况")
    ],
    expand: [
      reply("The best part was having lunch with a friend.", "最开心的是和朋友一起吃了午饭。", "/ðə best pɑrt wəz ˈhævɪŋ lʌntʃ wɪð ə frend/", "补充细节"),
      reply("I spent most of the day catching up on work.", "我大部分时间都在补工作。", "/aɪ spent moʊst əv ðə deɪ ˈkætʃɪŋ ʌp ɑn wɝːk/", "补充细节")
    ],
    ask: [
      reply("How about you?", "你呢？", "/haʊ əˈbaʊt ju/", "反问对方"),
      reply("What have you been up to lately?", "你最近都在忙些什么？", "/wʌt hæv ju bɪn ʌp tə ˈleɪtli/", "反问对方")
    ]
  },
  opinions: {
    agree: [
      reply("I can see why you feel that way.", "我能理解你为什么这么想。", "/aɪ kən si waɪ ju fiːl ðæt weɪ/", "先回应态度"),
      reply("I agree with that choice.", "我同意这个选择。", "/aɪ əˈɡriː wɪð ðæt tʃɔɪs/", "先回应态度")
    ],
    reason: [
      reply("For me, the biggest advantage is the time it saves.", "对我来说，最大的优点是它能节省时间。", "/fər mi ðə ˈbɪɡəst ədˈvæntɪdʒ ɪz ðə taɪm ɪt seɪvz/", "补充理由"),
      reply("I’m leaning the same way because it seems easier to manage.", "我也倾向于这个选择，因为它似乎更容易处理。", "/aɪm ˈliːnɪŋ ðə seɪm weɪ bɪˈkɔz ɪt siːmz ˈiːziər tə ˈmænɪdʒ/", "补充理由")
    ],
    challenge: [
      reply("I’m not fully convinced yet.", "我现在还没有完全被说服。", "/aɪm nɑt ˈfʊli kənˈvɪnst jet/", "保留或质疑"),
      reply("That could work, but I’d like to compare one more option.", "这可能行得通，但我想再比较一个选项。", "/ðæt kəd wɝːk bət aɪd laɪk tə kəmˈper wʌn mɔr ˈɑpʃən/", "保留或质疑")
    ]
  },
  stories: {
    empathize: [
      reply("That sounds stressful. Were you okay?", "听起来压力很大。你还好吗？", "/ðæt saʊndz ˈstresfəl wɝ ju oʊˈkeɪ/", "表达共鸣"),
      reply("I’m sorry you had to deal with that.", "很抱歉你不得不处理那件事。", "/aɪm ˈsɑri ju hæd tə diːl wɪð ðæt/", "表达共鸣")
    ],
    ask: [
      reply("What happened after that?", "那之后发生了什么？", "/wʌt ˈhæpənd ˈæftər ðæt/", "追问细节"),
      reply("How did you handle it?", "你是怎么处理的？", "/haʊ dɪd ju ˈhændəl ɪt/", "追问细节")
    ],
    reflect: [
      reply("I’m glad it worked out in the end.", "我很高兴最后顺利解决了。", "/aɪm ɡlæd ɪt wɝːkt aʊt ɪn ði end/", "回应结果"),
      reply("That must have taught you something useful.", "那件事一定让你学到了有用的东西。", "/ðæt məst hæv tɔt ju ˈsʌmθɪŋ ˈjuːsfəl/", "回应结果")
    ]
  },
  compare: {
    preference: [
      reply("I’d probably choose the first one.", "我可能会选第一个。", "/aɪd ˈprɑbəbli tʃuːz ðə fɝːst wʌn/", "表达选择"),
      reply("The second option fits my situation better.", "第二个选项更适合我的情况。", "/ðə ˈsekənd ˈɑpʃən fɪts maɪ ˌsɪtʃuˈeɪʃən ˈbetər/", "表达选择")
    ],
    tradeoff: [
      reply("The first is cheaper, but the second seems more convenient.", "第一个更便宜，但第二个似乎更方便。", "/ðə fɝːst ɪz ˈtʃiːpər bət ðə ˈsekənd siːmz mɔr kənˈviːniənt/", "说明取舍"),
      reply("It depends on whether we care more about time or cost.", "这取决于我们更在意时间还是成本。", "/ɪt dɪˈpendz ɑn ˈwɛðər wi ker mɔr əˈbaʊt taɪm ɔr kɔst/", "说明取舍")
    ],
    ask: [
      reply("Which factor matters most to you?", "哪个因素对你最重要？", "/wɪtʃ ˈfæktər ˈmætərz moʊst tə ju/", "邀请对方判断"),
      reply("What would you prioritize here?", "在这里你会优先考虑什么？", "/wʌt wʊd ju praɪˈɔrətaɪz hɪr/", "邀请对方判断")
    ]
  },
  problem: {
    empathize: [
      reply("That sounds frustrating. Let’s look at it together.", "听起来很让人沮丧。我们一起看看。", "/ðæt saʊndz ˈfrʌstreɪtɪŋ lets lʊk æt ɪt təˈɡeðər/", "先表示理解"),
      reply("I can see why that’s a problem.", "我能理解为什么这是个问题。", "/aɪ kən si waɪ ðæts ə ˈprɑbləm/", "先表示理解")
    ],
    diagnose: [
      reply("What do you think caused it?", "你觉得是什么导致了这个问题？", "/wʌt də ju θɪŋk kɔzd ɪt/", "确认原因"),
      reply("When did you first notice the problem?", "你第一次注意到这个问题是什么时候？", "/wen dɪd ju fɝːst ˈnoʊtɪs ðə ˈprɑbləm/", "确认原因")
    ],
    action: [
      reply("Let’s try the simplest solution first.", "我们先试试最简单的解决办法。", "/lets traɪ ðə ˈsɪmpləst səˈluːʃən fɝːst/", "提出行动"),
      reply("We could pause here and review the next step.", "我们可以先停一下，看看下一步。", "/wi kəd pɔz hɪr ænd rɪˈvju ðə nekst step/", "提出行动")
    ]
  }
};

const replyOverrides = {
  "What's your name?": [
    reply("I'm Alex.", "我是 Alex。", "/aɪm ˈælɪks/", "直接回答"),
    reply("I'm Alex. It's nice to meet you.", "我是 Alex。很高兴认识你。", "/aɪm ˈælɪks ɪts naɪs tə miːt ju/", "补充细节"),
    reply("And you?", "你呢？", "/ænd ju/", "把话题交回去")
  ],
  "What’s your name?": [
    reply("I'm Alex.", "我是 Alex。", "/aɪm ˈælɪks/", "直接回答"),
    reply("I'm Alex. It's nice to meet you.", "我是 Alex。很高兴认识你。", "/aɪm ˈælɪks ɪts naɪs tə miːt ju/", "补充细节"),
    reply("And you?", "你呢？", "/ænd ju/", "把话题交回去")
  ],
  "Where are you from?": [
    reply("I'm from China.", "我来自中国。", "/aɪm frəm ˈtʃaɪnə/", "直接回答"),
    reply("I’m originally from Bangkok.", "我原本来自曼谷。", "/aɪm əˈrɪdʒənəli frəm bæŋˈkɑk/", "补充细节"),
    reply("How about you?", "你呢？", "/haʊ əˈbaʊt ju/", "把话题交回去"),
  ],
};

function repliesFor(scene, english) {
  if (replyOverrides[english]) return replyOverrides[english];
  const profile = replyProfiles[scene] || replyProfiles.response;
  const roles = Object.keys(profile);
  const hash = [...english].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return roles.map((role, roleIndex) => profile[role][(hash + roleIndex) % profile[role].length]);
}

const theoryLessons = [
  { title: "先听，再说", label: "输入优先", summary: "先听清楚声音，再模仿出口型和节奏。", explanation: "零基础时，不要一开始就要求自己说得很快。先听一遍，注意句子的重音，再跟着示范读一遍。", example: ["Listen first, then speak.", "先听清楚，再开口。", "/ˈlɪsən fɝst ðen spiːk/"] },
  { title: "嘴巴要放松", label: "美式发音", summary: "口语不是用力喊，而是让声音自然流动。", explanation: "美式口语里，很多声音不是每个都用同样的力气。先放松下巴和舌头，让声音从一个词自然走到下一个词。", example: ["Take your time.", "你慢慢来。", "/teɪk jər taɪm/"] },
  { title: "词和词会连起来", label: "连读", summary: "不要把每个词切得太开。", explanation: "当一个词以辅音结尾、下一个词以元音开头时，英语里常常会自然连在一起。先模仿整体声音，不必逐词停顿。", example: ["Pick it up.", "把它捡起来。", "/pɪk ɪt ʌp/"] },
  { title: "一句话要分块", label: "意群", summary: "长句按意思分成小块，更容易听懂和表达。", explanation: "你不需要一次记住整句话。先找到每一小块的意思，再把小块连接起来，语气会更自然。", example: ["I’d like a coffee / please.", "我想要一杯咖啡，请。", "/aɪd laɪk ə ˈkɔːfi pliz/"] },
  { title: "重要的词要重读", label: "重音", summary: "名词、动词和关键信息通常更清楚。", explanation: "一句话里不需要每个词都一样响。先把真正传递信息的词读清楚，其他小词轻轻带过。", example: ["I need a little help.", "我需要一点帮助。", "/aɪ niːd ə ˈlɪtəl help/"] },
  { title: "先说清楚语气", label: "表达意图", summary: "请求、回应和邀请，要用不同的语气。", explanation: "口语不只是把单词读对，还要让对方听出你的意图。先判断你是在请求、回应，还是邀请别人。", example: ["Could you say that again?", "你可以再说一遍吗？", "/kʊd ju seɪ ðæt əˈɡen/"] },
];
let theoryIndex = Number(localStorage.getItem("speaking-theory-index") || 0);
if (!Number.isInteger(theoryIndex) || theoryIndex < 0 || theoryIndex >= theoryLessons.length) theoryIndex = 0;

function renderTheory() {
  const currentTheory = theoryLessons[theoryIndex];
  $("#theory-list").innerHTML = theoryLessons.map((lesson, index) => `<button class="theory-item ${index === theoryIndex ? "active" : ""}" data-theory-index="${index}" type="button"><span>0${index + 1}</span><strong>${lesson.title}</strong><small>${lesson.label}</small></button>`).join("");
  $("#theory-detail").innerHTML = `<p class="section-kicker">${currentTheory.label}</p><h3>${currentTheory.title}</h3><p class="theory-summary">${currentTheory.summary}</p><p class="theory-explanation">${currentTheory.explanation}</p><div class="theory-example"><strong>${currentTheory.example[0]}</strong><span>${currentTheory.example[2]}</span><em>${currentTheory.example[1]}</em><button class="theory-play" id="theory-play" type="button">▶ 跟读</button></div>`;
  document.querySelectorAll("[data-theory-index]").forEach((button) => button.addEventListener("click", () => { theoryIndex = Number(button.dataset.theoryIndex); localStorage.setItem("speaking-theory-index", String(theoryIndex)); renderTheory(); }));
  $("#theory-play").addEventListener("click", () => speak(currentTheory.example[0], .62));
}

const $ = (selector) => document.querySelector(selector);
const storageKey = activeLevel === "beginner" ? "speaking-progress" : `speaking-progress-${activeLevel}`;
let state = { sceneIndex: 0, sentenceIndex: 0, completed: [] };
let recorder = null;
let recordingChunks = [];
let recordingUrl = "";

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  if (saved) state = { ...state, ...saved, completed: Array.isArray(saved.completed) ? saved.completed : [] };
} catch (error) {}
const requestedSceneIndex = requestedScene ? activeScenes.findIndex((scene) => scene.id === requestedScene) : -1;
if (requestedSceneIndex >= 0) { state.sceneIndex = requestedSceneIndex; state.sentenceIndex = 0; }
state.sceneIndex = Math.min(Math.max(Number(state.sceneIndex) || 0, 0), activeScenes.length - 1);
const currentScene = () => activeScenes[state.sceneIndex];
state.sentenceIndex = Math.min(Math.max(Number(state.sentenceIndex) || 0, 0), currentScene().sentences.length - 1);
const currentItem = () => currentScene().sentences[state.sentenceIndex];
const totalSentences = activeScenes.reduce((sum, scene) => sum + scene.sentences.length, 0);
function saveState() { localStorage.setItem(storageKey, JSON.stringify({ ...state, updatedAt: new Date().toISOString() })); }
function sentenceId() { return `${state.sceneIndex}-${state.sentenceIndex}`; }
function isCompleted() { return state.completed.includes(sentenceId()); }
function speak(text, rate = 0.9) {
  window.playEnglishText?.(text, { rate });
}
function renderDialogue() {
  const scene = currentScene();
  const [english, meaning] = currentItem();
  const dialogueTemplates = {
    "bank-account": [
      ["客户", english, meaning],
      ["银行工作人员", "Certainly. What kind of account are you looking for?", "当然可以。你想办理哪种账户？"],
      ["客户", "I’m looking for an account that works well for my everyday needs.", "我想找一个适合日常使用的账户。"],
      ["银行工作人员", "I can walk you through the options and the main fees.", "我可以带你了解不同选项和主要费用。"],
      ["客户", "That would be helpful. What documents should I bring?", "那很有帮助。我需要带哪些材料？"]
    ],
    "bank-cash": [
      ["客户", english, meaning],
      ["银行工作人员", "How much would you like to withdraw today?", "你今天想取多少钱？"],
      ["客户", "I’d like to withdraw the amount in cash, please.", "我想把这笔钱取成现金。"],
      ["银行工作人员", "We may need to check the daily withdrawal limit first.", "我们可能需要先确认每日取款上限。"],
      ["客户", "That’s fine. What alternatives do I have if I reach the limit?", "没问题。如果达到上限，我还有哪些选择？"]
    ],
    "bank-balance": [
      ["客户", english, meaning],
      ["银行工作人员", "I’ll take a closer look at the account record.", "我来仔细核对一下账户记录。"],
      ["客户", "Could you explain which transaction caused the difference?", "可以解释一下是哪笔交易造成了差异吗？"],
      ["银行工作人员", "I can see the entry here, and I’ll explain what it means.", "我在这里看到了这条记录，我来解释它的含义。"],
      ["客户", "I’d appreciate it if you could let me know what happens next.", "如果你能告诉我接下来会怎样，我会很感谢。"]
    ],
    "bank-fees": [
      ["客户", english, meaning],
      ["银行工作人员", "The fee depends on the service and the type of account.", "费用取决于服务和账户类型。"],
      ["客户", "Could you clarify which fees apply to my account?", "可以说明一下我的账户适用哪些费用吗？"],
      ["银行工作人员", "There may be a way to waive it if you meet the minimum balance.", "如果你满足最低余额要求，可能可以免除这笔费用。"],
      ["客户", "That’s useful to know. Which option would you recommend?", "了解这一点很有用。你会推荐哪种方案？"]
    ],
    "bank-card": [
      ["客户", english, meaning],
      ["银行工作人员", "I’m sorry about that. Let me check whether there is a security hold.", "很抱歉。让我查一下是否有安全限制。"],
      ["客户", "I believe the account has enough funds. Could you look into it?", "我认为账户里有足够余额。可以帮我查一下吗？"],
      ["银行工作人员", "I’ll verify the transaction and tell you what needs to happen next.", "我会验证这笔交易，并告诉你下一步需要做什么。"],
      ["客户", "Thank you. I’d like to avoid this problem next time.", "谢谢。我希望下次可以避免这个问题。"]
    ]
  };
  const lines = dialogueTemplates[scene.id] || [
    ["你", english, meaning],
    ["对方", "That makes sense. Could you tell me a little more?", "有道理。你可以再多说一点吗？"],
    ["你", "Sure. Let me explain what I mean.", "当然。我来解释一下我的意思。"]
  ];
  $("#dialogue-intro").textContent = `当前主题：${scene.title}。先读懂双方的目的，再尝试不看提示完成一轮对话。`;
  $("#dialogue-list").innerHTML = lines.map(([role, lineText, lineMeaning]) => `<article class="dialogue-line"><span class="dialogue-role">${role}</span><div class="dialogue-copy"><strong class="dialogue-english">${lineText}</strong><span class="dialogue-meaning">${lineMeaning}</span></div><button class="dialogue-play" data-dialogue-play="${lineText}" type="button">▶ 跟读</button></article>`).join("");
  document.querySelectorAll("[data-dialogue-play]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.dialoguePlay, .62)));
}
function renderScenarios() {
  $("#scenario-list").innerHTML = activeScenes.map((scene, index) => {
    const done = scene.sentences.filter((_, sentenceIndex) => state.completed.includes(`${index}-${sentenceIndex}`)).length;
    return `<button class="scenario-button ${index === state.sceneIndex ? "active" : ""}" data-scene-index="${index}" type="button"><span>0${index + 1}</span><strong>${scene.title}</strong><small>${scene.goal || `${done} / ${scene.sentences.length}`}</small>${scene.skills ? `<em class="scenario-skills">${scene.skills.join(" · ")}</em>` : ""}${done === scene.sentences.length ? "<em class=\"scenario-complete\">✓</em>" : ""}</button>`;
  }).join("");
  document.querySelectorAll("[data-scene-index]").forEach((button) => button.addEventListener("click", () => { state.sceneIndex = Number(button.dataset.sceneIndex); state.sentenceIndex = 0; saveState(); renderAll(); }));
}
const wordClassLabels = { noun: "名词", verb: "动词", adverb: "副词", adjective: "形容词" };
const verbWords = new Set("agree add adjust affect ask begin be believe bring call change check choose clarify consider cost create depend do document explain feel focus get give go grab have help improve keep know launch learn leave like live look meet need organize outline pay prefer prepare read remember resolve review save say see seem simplify sit speak start stop suggest take teach text think try understand use wait want work write".split(" "));
const adverbWords = new Set("again almost also especially briefly clearly finally here just later luckily more now overall perhaps really slowly soon then today together tomorrow usually well".split(" "));
const adjectiveWords = new Set("aligned available blue busy concrete convenient different early enough expected final free good happy important interesting large late lost main natural new practical ready reasonable smaller strong tired".split(" "));
function wordClass(word) {
  const explicit = word.pos || word.partOfSpeech;
  if (explicit && wordClassLabels[explicit]) return explicit;
  const normalized = String(word.w || "").toLowerCase().replace(/[’']/g, "").trim();
  const firstWord = normalized.split(/\s+/)[0];
  if (verbWords.has(normalized) || verbWords.has(firstWord)) return "verb";
  if (adverbWords.has(normalized) || adverbWords.has(firstWord) || /ly$/.test(normalized)) return "adverb";
  if (adjectiveWords.has(normalized)) return "adjective";
  return "noun";
}
function escapeSentenceHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function renderColoredSentence(sentence) {
  return String(sentence).match(/[A-Za-z]+(?:[’'][A-Za-z]+)?|[^A-Za-z]+/g).map((token) => {
    if (!/^[A-Za-z]/.test(token)) return escapeSentenceHtml(token);
    const pos = wordClass({ w: token });
    return '<span class="sentence-word sentence-word-' + pos + '" data-word-class="' + pos + '">' + escapeSentenceHtml(token) + '</span>';
  }).join("");
}
function renderLesson() {
  const scene = currentScene(); const [english, meaning, note, chunks, words, substitutions] = currentItem();
  const replies = repliesFor(scene.id, english);
  const done = isCompleted();
  $("#lesson-label").textContent = `SCENE ${String(state.sceneIndex + 1).padStart(2, "0")} · SENTENCE ${state.sentenceIndex + 1} / ${scene.sentences.length}`;
  $("#lesson-status").textContent = done ? "已完成" : "进行中";
  $("#lesson-content").innerHTML = `<p class="section-kicker">${scene.title} · ${scene.description}</p><h2>先听，再开口</h2><p>先听示范，再按意群跟读，最后用自己的声音说一遍。</p><div class="sentence-display"><h3>${english}</h3><p class="sentence-ipa">句子意群：${chunks}</p><p class="sentence-meaning">${meaning}</p><p class="sentence-note">${note}</p><div class="chunk-line">${chunks.split(" / ").map((chunk) => `<span>${chunk}</span>`).join("")}</div><div class="audio-actions"><button class="audio-button" id="slow-audio" type="button">▶ 慢速示范</button><button class="audio-button secondary" id="normal-audio" type="button">▶ 正常语速</button><button class="record-button" id="record-button" type="button">🎙 开始录音</button></div><p class="record-status" id="record-status">录音只保存在当前浏览器。</p><button class="reply-toggle" id="reply-toggle" type="button" aria-expanded="false">查看回复 <span>＋</span></button><div class="reply-panel" id="reply-panel" hidden><p class="reply-panel-intro">同一句话，会根据语境给出 3 种不同的自然回应：先回应，再展开，继续互动。</p>${replies.map((item, index) => `<article class="reply-card"><span class="reply-label">回复 ${index + 1}</span><strong>${item.english}</strong><span class="reply-role">${item.role}</span><span class="reply-ipa">${item.ipa}</span><em>${item.meaning}</em><button class="reply-play" data-reply="${item.english}" type="button">▶ 跟读</button></article>`).join("")}</div></div><section class="word-section"><h4>重点单词 · 音标与释义</h4><div class="word-grid">${words.map((word) => `<div class="word-card"><strong>${word.w}</strong><span>${word.ipa}</span><em>${word.m}</em><button class="word-play" data-word="${word.w}" type="button">▶ 跟读</button></div>`).join("")}</div></section><section class="practice-section"><h4>替换练习 · 试着换一个词</h4><div class="substitution">${substitutions.map((item) => `<span>${item}</span>`).join("")}</div></section>`;
  document.querySelector(".sentence-display h3").innerHTML = renderColoredSentence(english);
  document.querySelectorAll(".word-card").forEach((card, index) => {
    const pos = wordClass(words[index]);
    card.classList.add("word-class-" + pos);
    card.dataset.wordClass = pos;
    const badge = document.createElement("span");
    badge.className = "word-pos";
    badge.textContent = wordClassLabels[pos];
    card.insertBefore(badge, card.querySelector("span"));
  });
  const wordHeading = document.querySelector(".word-section h4");
  wordHeading.insertAdjacentHTML("beforeend", '<span class="word-class-legend" aria-label="词类颜色提示"><i class="legend-verb">动词</i><i class="legend-adverb">副词</i></span>');
  if (scene.goal) {
    const goalBlock = document.createElement("div");
    goalBlock.className = "lesson-goal";
    goalBlock.innerHTML = `<span>本组训练目标</span><strong>${scene.goal}</strong><div>${scene.skills.map((skill) => `<em>${skill}</em>`).join("")}</div>`;
    $("#lesson-content").insertBefore(goalBlock, $("#lesson-content").querySelector("h2"));
  }
  $("#prev-button").disabled = state.sentenceIndex === 0 && state.sceneIndex === 0;
  $("#next-button").textContent = state.sentenceIndex === scene.sentences.length - 1 && state.sceneIndex === activeScenes.length - 1 ? "完成训练 ✓" : "下一句 →";
  $("#next-button").classList.toggle("completed-action", done);
  $("#slow-audio").addEventListener("click", () => speak(english, .58));
  $("#normal-audio").addEventListener("click", () => speak(english, .9));
  document.querySelectorAll("[data-word]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.word, .62)));
  document.querySelectorAll("[data-reply]").forEach((button) => button.addEventListener("click", () => speak(button.dataset.reply, .62)));
  $("#reply-toggle").addEventListener("click", () => {
    const panel = $("#reply-panel"); const expanded = $("#reply-toggle").getAttribute("aria-expanded") === "true";
    $("#reply-toggle").setAttribute("aria-expanded", String(!expanded)); panel.hidden = expanded; $("#reply-toggle").querySelector("span").textContent = expanded ? "＋" : "－";
  });
  $("#record-button").addEventListener("click", toggleRecording);
}
function toggleRecording() {
  const button = $("#record-button"); const status = $("#record-status");
  if (recorder?.state === "recording") { recorder.stop(); button.textContent = "🎙 开始录音"; button.classList.remove("recording"); return; }
  if (!(navigator.mediaDevices && window.MediaRecorder)) { status.textContent = "当前浏览器不支持录音，可以先听示范音练习。"; return; }
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    recordingChunks = []; recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => { if (event.data.size) recordingChunks.push(event.data); };
    recorder.onstop = () => { stream.getTracks().forEach((track) => track.stop()); recordingUrl = URL.createObjectURL(new Blob(recordingChunks, { type: "audio/webm" })); status.textContent = "录音完成，可以再次点击播放控件回放。"; const audio = document.createElement("audio"); audio.controls = true; audio.src = recordingUrl; status.after(audio); };
    recorder.start(); button.textContent = "■ 停止录音"; button.classList.add("recording"); status.textContent = "正在录音……说完后点击停止。";
  }).catch(() => { status.textContent = "没有获得麦克风权限，也可以先听示范音练习。"; });
}
function renderTrackMeta() {
  const levelMeta = {
    beginner: ["BEGINNER", "先听懂，再开口", "每次只练一句。先听、再跟读，最后用自己的声音说出来。"],
    intermediate: ["INTERMEDIATE", "先回应，再展开", "把一句需求说完整，再补充必要的信息，让对话继续下去。"],
    proficient: ["PROFICIENT", "先组织，再表达", "每次围绕一个真实问题练习。先听示范，再按意群跟读，最后用自己的话说完整。"],
    advanced: ["ADVANCED", "先判断，再处理", "练习解释复杂情况、比较方案，并清楚地推进下一步。"],
    natural: ["NATURAL EXPRESSION", "先理解，再自然表达", "关注语气、搭配和沟通分寸，让表达更接近真实交流。"]
  }[activeLevel] || ["BEGINNER", "先听懂，再开口", "每次只练一句。先听、再跟读，最后用自己的声音说出来。"];
  $("#speaking-path-kicker").textContent = `SPEAK OUT · ${levelMeta[0]}`;
  $("#speaking-subtitle").textContent = activeLevel === "beginner" ? "先学会一句，再慢慢说成一段。" : "从一句表达，走向更完整、更自然的沟通。";
  $("#speaking-intro-kicker").textContent = `${levelMeta[0]} PATH`;
  $("#speaking-intro-title").textContent = levelMeta[1];
  $("#speaking-intro-copy").textContent = levelMeta[2];
  $("#total-count").textContent = totalSentences;
}
function setupSectionNav() {
  const links = [...document.querySelectorAll("[data-section-link]")];
  const sections = links.map((link) => document.getElementById(link.dataset.sectionLink)).filter(Boolean);
  const setActive = (id) => links.forEach((link) => link.classList.toggle("active", link.dataset.sectionLink === id));
  links.forEach((link) => link.addEventListener("click", () => setActive(link.dataset.sectionLink)));
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  }, { rootMargin: "-90px 0px -58% 0px", threshold: [0.1, 0.35, 0.6] });
  sections.forEach((section) => observer.observe(section));
}
function renderAll() { renderScenarios(); renderLesson(); renderDialogue(); $("#completed-count").textContent = state.completed.length; }
$("#poster-button").addEventListener("click", () => {
  const scene = currentScene();
  const [english, meaning, note, chunks, words] = currentItem();
  const posterLevelLabels = {
    beginner: "入门口语",
    intermediate: "进阶口语",
    proficient: "熟练口语",
    advanced: "精通口语",
    natural: "地道表达"
  };
  openPoster({
    kicker: `${scene.title} · ${posterLevelLabels[activeLevel] || "口语练习"}`,
    english,
    meaning,
    chunks,
    note,
    words: words.map((word) => ({ word: word.w, ipa: word.ipa, meaning: word.m })),
    replies: repliesFor(scene.id, english).map((reply) => ({ english: reply.english, meaning: reply.meaning, ipa: reply.ipa }))
  });
});
$("#prev-button").addEventListener("click", () => { if (state.sentenceIndex > 0) state.sentenceIndex -= 1; else if (state.sceneIndex > 0) { state.sceneIndex -= 1; state.sentenceIndex = currentScene().sentences.length - 1; } saveState(); renderAll(); });
$("#next-button").addEventListener("click", () => { const scene = currentScene(); if (!isCompleted()) state.completed.push(sentenceId()); if (state.sentenceIndex < scene.sentences.length - 1) state.sentenceIndex += 1; else if (state.sceneIndex < activeScenes.length - 1) { state.sceneIndex += 1; state.sentenceIndex = 0; } saveState(); renderAll(); });
renderTrackMeta();
renderTheory();
renderAll();
setupSectionNav();
