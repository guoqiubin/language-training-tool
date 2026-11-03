(() => {
  "use strict";

  const term = (word, ipa, meaning) => ({ w: word, ipa, m: meaning });
  const line = (english, meaning, note, chunks, words, substitutions) => [english, meaning, note, chunks, words.map(([word, ipa, wordMeaning]) => term(word, ipa, wordMeaning)), substitutions];
  const scene = (id, title, description, sentences) => ({ id, title, description, sentences });

  const beginner = [
    scene("bank-account", "开户", "开始办理账户", [
      line("I want to open an account.", "我想开一个账户。", "表达最基本的开户需求。", "I want to / open an account.", [["open", "/ˈoʊpən/", "开；打开"], ["account", "/əˈkaʊnt/", "账户"]], ["I want to open a bank account.", "I want to open an account for my son."]),
      line("What documents do I need?", "我需要什么材料？", "办理业务时，用 What documents 询问所需材料。", "What documents / do I need?", [["document", "/ˈdɑːkjəmənt/", "文件；材料"], ["need", "/niːd/", "需要"]], ["What information do I need?", "What form do I need?"]),
      line("Here is my passport.", "这是我的护照。", "提交证件时，可以直接说明这是什么。", "Here is / my passport.", [["passport", "/ˈpæspɔːrt/", "护照"], ["here", "/hɪr/", "这里；这是"]], ["Here is my ID.", "Here is my address."])
    ]),
    scene("bank-cash", "取款", "取出现金", [
      line("I’d like to withdraw some cash.", "我想取一些现金。", "withdraw cash 是银行里常见的“取现金”表达。", "I’d like to / withdraw some cash.", [["withdraw", "/wɪðˈdrɔː/", "取出；提款"], ["cash", "/kæʃ/", "现金"]], ["I’d like to withdraw one hundred dollars.", "I’d like to withdraw some money."]),
      line("I’d like one hundred dollars, please.", "我想取 100 美元。", "在柜台直接说明取款金额。", "I’d like / one hundred dollars / please.", [["hundred", "/ˈhʌndrəd/", "一百"], ["dollar", "/ˈdɑːlər/", "美元"]], ["I’d like fifty dollars, please.", "I’d like two hundred dollars, please."]),
      line("Can I get smaller bills?", "可以给我小面额的钞票吗？", "取款后想要不同面额时，可以这样询问。", "Can I get / smaller bills?", [["smaller", "/ˈsmɔːlər/", "更小的"], ["bill", "/bɪl/", "钞票；账单"]], ["Can I get larger bills?", "Can I get some coins?"])
    ]),
    scene("bank-balance", "查询余额", "确认账户里有多少钱", [
      line("What is my account balance?", "我的账户余额是多少？", "account balance 表示账户余额。", "What is / my account balance?", [["balance", "/ˈbæləns/", "余额"], ["account", "/əˈkaʊnt/", "账户"]], ["What is my current balance?", "Can you check my balance?"]),
      line("Can you check my balance?", "你可以帮我查一下余额吗？", "Can you check 是礼貌请求对方查询。", "Can you check / my balance?", [["check", "/tʃek/", "检查；查询"], ["balance", "/ˈbæləns/", "余额"]], ["Can you check my account?", "Can you check the payment?"]),
      line("I made a deposit today.", "我今天存了一笔钱。", "说明刚刚发生的存款行为。", "I made a deposit / today.", [["deposit", "/dɪˈpɑːzɪt/", "存款"], ["today", "/təˈdeɪ/", "今天"]], ["I made a payment today.", "I made a withdrawal today."])
    ]),
    scene("bank-fees", "手续费", "询问费用", [
      line("Is there a service fee?", "有服务费吗？", "询问是否收费时，Is there 是最直接的开头。", "Is there / a service fee?", [["service", "/ˈsɝːvɪs/", "服务"], ["fee", "/fiː/", "费用；手续费"]], ["Is there a monthly fee?", "Is there an extra fee?"]),
      line("How much is the fee?", "手续费是多少？", "How much is 用来询问具体金额。", "How much / is the fee?", [["how much", "/haʊ mʌtʃ/", "多少"], ["fee", "/fiː/", "手续费"]], ["How much is the transfer fee?", "How much is the monthly fee?"]),
      line("Do I have to pay for this?", "这个需要付费吗？", "确认某项服务是否需要额外付费。", "Do I have to / pay for this?", [["pay", "/peɪ/", "付款"], ["for", "/fər/", "为；关于"]], ["Do I have to pay a fee?", "Do I have to pay today?"])
    ]),
    scene("bank-card", "银行卡异常", "银行卡不能正常使用", [
      line("My card does not work.", "我的卡不能用了。", "遇到刷卡失败时，先清楚说明问题。", "My card / does not work.", [["card", "/kɑːrd/", "卡"], ["work", "/wɝːk/", "工作；起作用"]], ["My card is blocked.", "My card was declined."]),
      line("Could you help me?", "你可以帮帮我吗？", "遇到问题时，用 Could you 礼貌地请求帮助。", "Could you / help me?", [["could", "/kʊd/", "可以；能否"], ["help", "/help/", "帮助"]], ["Could you check it?", "Could you explain this?"]),
      line("I do not understand.", "我不明白。", "没有听懂时，直接告诉工作人员。", "I do not / understand.", [["understand", "/ˌʌndərˈstænd/", "理解"], ["not", "/nɑːt/", "不"]], ["I do not know what to do.", "I do not understand the fee."])
    ])
  ];

  const intermediate = [
    scene("bank-account", "开户", "完成账户申请", [
      line("I’d like to open a checking account.", "我想开一个支票账户。", "checking account 是美国银行常见的日常账户。", "I’d like to open / a checking account.", [["checking", "/ˈtʃekɪŋ/", "支票账户的"], ["account", "/əˈkaʊnt/", "账户"]], ["I’d like to open a savings account.", "I’d like to open a joint account."]),
      line("What identification do you accept?", "你们接受哪些身份证明？", "比 documents 更具体地询问可接受的身份证明。", "What identification / do you accept?", [["identification", "/aɪˌdentɪfɪˈkeɪʃən/", "身份证明"], ["accept", "/əkˈsept/", "接受"]], ["What documents do you accept?", "What forms of ID do you accept?"]),
      line("How long will the application take?", "申请需要多长时间？", "询问办理流程所需时间。", "How long / will the application take?", [["application", "/ˌæpləˈkeɪʃən/", "申请"], ["take", "/teɪk/", "花费时间"]], ["How long will the transfer take?", "How long will approval take?"])
    ]),
    scene("bank-cash", "取款", "处理取款细节", [
      line("I’d like to withdraw three hundred dollars from my account.", "我想从账户里取 300 美元。", "完整说明动作、金额和来源账户。", "I’d like to withdraw / three hundred dollars / from my account.", [["withdraw", "/wɪðˈdrɔː/", "取款"], ["account", "/əˈkaʊnt/", "账户"]], ["I’d like to withdraw two hundred dollars from my account.", "I’d like to withdraw cash from my savings account."]),
      line("Could you give me a receipt?", "可以给我一张收据吗？", "完成取款后，可以礼貌地索要凭证。", "Could you give me / a receipt?", [["receipt", "/rɪˈsiːt/", "收据"], ["give", "/ɡɪv/", "给"]], ["Could you email me a receipt?", "Could you print the receipt?"]),
      line("Is there a daily withdrawal limit?", "每天有取款上限吗？", "询问银行规则，而不是只询问今天能取多少。", "Is there / a daily withdrawal limit?", [["daily", "/ˈdeɪli/", "每日的"], ["limit", "/ˈlɪmɪt/", "上限"]], ["Is there a daily transfer limit?", "Is there a cash limit?"])
    ]),
    scene("bank-balance", "查询余额", "核对账户记录", [
      line("Could you tell me my current balance?", "可以告诉我当前余额吗？", "用 tell me 让询问听起来更完整、礼貌。", "Could you tell me / my current balance?", [["current", "/ˈkɝːənt/", "当前的"], ["balance", "/ˈbæləns/", "余额"]], ["Could you tell me my available balance?", "Could you tell me my account balance?"]),
      line("I think a payment is missing from my account.", "我觉得有一笔付款没有显示在账户里。", "说明发现的问题，并用 I think 保留一定余地。", "I think / a payment is missing / from my account.", [["payment", "/ˈpeɪmənt/", "付款"], ["missing", "/ˈmɪsɪŋ/", "缺失的"]], ["I think a deposit is missing from my account.", "I think a charge is missing from my account."]),
      line("Could you print my recent transactions?", "可以打印我最近的交易记录吗？", "transactions 指账户交易记录。", "Could you print / my recent transactions?", [["recent", "/ˈriːsənt/", "最近的"], ["transaction", "/trænˈzækʃən/", "交易记录"]], ["Could you email my recent transactions?", "Could you print my monthly transactions?"])
    ]),
    scene("bank-fees", "手续费", "比较不同费用", [
      line("Are there any fees for this service?", "这项服务有任何费用吗？", "any fees 比单数 fee 更适合询问可能存在的多项费用。", "Are there any fees / for this service?", [["fee", "/fiː/", "费用"], ["service", "/ˈsɝːvɪs/", "服务"]], ["Are there any fees for international transfers?", "Are there any fees for this account?"]),
      line("Would the fee be waived if I set up direct deposit?", "如果我设置直接存款，这笔费用可以免掉吗？", "用 if 引出条件，询问是否可以免除费用。", "Would the fee be waived / if I set up direct deposit?", [["waive", "/weɪv/", "免除"], ["direct deposit", "/dəˈrekt dɪˈpɑːzɪt/", "直接存款"]], ["Would the fee be waived if I keep a minimum balance?", "Would the fee be waived for students?"]),
      line("Is there a cheaper option?", "有没有更便宜的选择？", "在了解费用后继续询问替代方案。", "Is there / a cheaper option?", [["cheaper", "/ˈtʃiːpər/", "更便宜的"], ["option", "/ˈɑːpʃən/", "选择"]], ["Is there a fee-free option?", "Is there a better option?"])
    ]),
    scene("bank-card", "银行卡异常", "解释卡片问题", [
      line("My card was declined at the store.", "我的卡在商店被拒付了。", "补充发生地点，让问题更容易被定位。", "My card was declined / at the store.", [["decline", "/dɪˈklaɪn/", "拒绝；拒付"], ["store", "/stɔːr/", "商店"]], ["My card was declined at the restaurant.", "My card was declined online."]),
      line("Could you check whether my card is blocked?", "可以帮我查一下我的卡是否被冻结了吗？", "whether 引出需要确认的两种可能。", "Could you check / whether my card is blocked?", [["whether", "/ˈweðər/", "是否"], ["blocked", "/blɑːkt/", "被阻止；被冻结"]], ["Could you check whether my account is blocked?", "Could you check whether my PIN is locked?"]),
      line("What should I do next?", "我下一步应该怎么做？", "解决问题时，主动询问下一步。", "What should I do / next?", [["should", "/ʃʊd/", "应该"], ["next", "/nekst/", "下一步；接下来"]], ["What should I bring next?", "What should I check next?"])
    ])
  ];

  const proficient = [
    scene("bank-account", "开户", "选择适合自己的账户", [
      line("I’m comparing your checking and savings accounts.", "我正在比较你们的支票账户和储蓄账户。", "用 comparing 表明自己正在做选择，而不是简单询价。", "I’m comparing / your checking and savings accounts.", [["compare", "/kəmˈper/", "比较"], ["savings", "/ˈseɪvɪŋz/", "储蓄的"]], ["I’m comparing your basic and premium accounts.", "I’m comparing the two account options."]),
      line("Which account would be better for regular payments?", "哪种账户更适合日常付款？", "用 would be better 进行相对委婉的比较。", "Which account / would be better / for regular payments?", [["regular", "/ˈreɡjələr/", "日常的；定期的"], ["payment", "/ˈpeɪmənt/", "付款"]], ["Which account would be better for saving money?", "Which account would be better for travel?"]),
      line("Could you walk me through the application process?", "可以带我完整了解一下申请流程吗？", "walk me through 表示一步一步讲解。", "Could you walk me through / the application process?", [["walk me through", "/wɔːk mi θruː/", "带我逐步了解"], ["process", "/ˈprɑːses/", "流程"]], ["Could you walk me through the fees?", "Could you walk me through the requirements?"])
    ]),
    scene("bank-cash", "取款", "处理现金与限额", [
      line("I need to withdraw a larger amount than usual.", "我需要取一笔比平时大一些的金额。", "用 than usual 说明这次金额超出平常。", "I need to withdraw / a larger amount / than usual.", [["larger", "/ˈlɑːrdʒər/", "更大的"], ["usual", "/ˈjuːʒuəl/", "平常的"]], ["I need to transfer a larger amount than usual.", "I need to withdraw a smaller amount today."]),
      line("Do I need to notify the bank in advance?", "我需要提前通知银行吗？", "询问大额操作是否需要提前沟通。", "Do I need to notify the bank / in advance?", [["notify", "/ˈnoʊtɪfaɪ/", "通知"], ["in advance", "/ɪn ədˈvæns/", "提前"]], ["Do I need to notify the bank before I come?", "Do I need to notify the bank by phone?"]),
      line("What alternatives do I have if I reach the limit?", "如果达到上限，我还有哪些选择？", "用 if 说明条件，再询问替代方案。", "What alternatives do I have / if I reach the limit?", [["alternative", "/ɔːlˈtɝːnətɪv/", "替代方案"], ["reach", "/riːtʃ/", "达到"]], ["What alternatives do I have if the card fails?", "What alternatives do I have if the branch is closed?"])
    ]),
    scene("bank-balance", "查询余额", "核对异常记录", [
      line("There is a transaction on my statement that I do not recognize.", "我的账单上有一笔我不认识的交易。", "明确指出异常交易，并说明自己无法识别。", "There is a transaction / on my statement / that I do not recognize.", [["statement", "/ˈsteɪtmənt/", "账单；对账单"], ["recognize", "/ˈrekəɡnaɪz/", "认出；识别"]], ["There is a charge on my statement that I do not recognize.", "There is a withdrawal that I do not recognize."]),
      line("Could you explain how this amount was calculated?", "可以解释一下这个金额是怎么算出来的吗？", "适合对费用或扣款金额提出有礼貌的追问。", "Could you explain / how this amount was calculated?", [["calculate", "/ˈkælkjəleɪt/", "计算"], ["amount", "/əˈmaʊnt/", "金额"]], ["Could you explain how this fee was calculated?", "Could you explain how the interest was calculated?"]),
      line("I’d like to make sure the record is corrected.", "我想确认这条记录已经被更正。", "make sure 表示确认结果，而不是只提出请求。", "I’d like to make sure / the record is corrected.", [["record", "/ˈrekərd/", "记录"], ["correct", "/kəˈrekt/", "更正"]], ["I’d like to make sure the payment is reversed.", "I’d like to make sure the balance is updated."])
    ]),
    scene("bank-fees", "手续费", "理解并比较费用", [
      line("Could you clarify which fees apply to this account?", "可以说明一下这个账户适用哪些费用吗？", "clarify 比 ask 更强调把规则解释清楚。", "Could you clarify / which fees apply / to this account?", [["clarify", "/ˈklærəfaɪ/", "澄清；说明"], ["apply", "/əˈplaɪ/", "适用"]], ["Could you clarify which fees apply to international transfers?", "Could you clarify which rules apply to this account?"]),
      line("I’d like to avoid unnecessary monthly charges.", "我想避免不必要的月度收费。", "用 avoid 表达自己的关注点，比直接说不想付钱更自然。", "I’d like to avoid / unnecessary monthly charges.", [["avoid", "/əˈvɔɪd/", "避免"], ["charge", "/tʃɑːrdʒ/", "收费；费用"]], ["I’d like to avoid foreign transaction charges.", "I’d like to avoid unnecessary transfer fees."]),
      line("What would you recommend based on my usual activity?", "根据我平常的使用情况，你会推荐什么？", "请工作人员结合自己的实际使用情况给建议。", "What would you recommend / based on my usual activity?", [["recommend", "/ˌrekəˈmend/", "推荐"], ["activity", "/ækˈtɪvəti/", "使用活动"]], ["What would you recommend based on my income?", "What would you recommend based on my needs?"])
    ]),
    scene("bank-card", "银行卡异常", "处理卡片被拒付", [
      line("My card was declined, but I believe the account has enough funds.", "我的卡被拒付了，但我认为账户里有足够余额。", "先陈述事实，再补充自己的判断。", "My card was declined / but / I believe the account has enough funds.", [["believe", "/bɪˈliːv/", "认为"], ["funds", "/fʌndz/", "资金；余额"]], ["My card was declined, but I believe the payment was valid.", "My card was declined, but I believe the account is active."]),
      line("Could you tell me what triggered the restriction?", "可以告诉我是什么触发了这项限制吗？", "trigger 表示触发某个系统限制或安全措施。", "Could you tell me / what triggered the restriction?", [["trigger", "/ˈtrɪɡər/", "触发"], ["restriction", "/rɪˈstrɪkʃən/", "限制"]], ["Could you tell me what triggered the alert?", "Could you tell me what triggered the block?"]),
      line("What steps are required to restore access?", "恢复使用权限需要哪些步骤？", "用 restore access 表达恢复账户或卡片使用权限。", "What steps are required / to restore access?", [["restore", "/rɪˈstɔːr/", "恢复"], ["access", "/ˈækses/", "使用权限"]], ["What steps are required to replace the card?", "What steps are required to unlock the account?"])
    ])
  ];

  const advanced = [
    scene("bank-account", "开户", "评估账户方案", [
      line("I’m looking for an account that fits my income and spending pattern.", "我在寻找适合我的收入和消费模式的账户。", "用 fits 表达“适合”，并补充选择依据。", "I’m looking for an account / that fits my income and spending pattern.", [["fit", "/fɪt/", "适合"], ["pattern", "/ˈpætərn/", "模式"]], ["I’m looking for an account that fits my business needs.", "I’m looking for an account that fits my travel pattern."]),
      line("What are the trade-offs between these two account types?", "这两种账户之间的取舍是什么？", "trade-offs 适合讨论不同方案的优缺点。", "What are the trade-offs / between these two account types?", [["trade-off", "/ˈtreɪd ɔːf/", "取舍"], ["type", "/taɪp/", "类型"]], ["What are the trade-offs between these two cards?", "What are the trade-offs between the plans?"]),
      line("Before I apply, I’d like to understand the long-term conditions.", "在申请之前，我想了解长期条件。", "先表达前置需求，再说明想了解的内容。", "Before I apply / I’d like to understand / the long-term conditions.", [["apply", "/əˈplaɪ/", "申请"], ["condition", "/kənˈdɪʃən/", "条件"]], ["Before I apply, I’d like to understand the total cost.", "Before I apply, I’d like to understand the requirements."])
    ]),
    scene("bank-cash", "取款", "处理大额现金安排", [
      line("I need to arrange a large cash withdrawal for tomorrow.", "我需要安排明天的大额现金取款。", "arrange 表示提前安排，而不是临时取钱。", "I need to arrange / a large cash withdrawal / for tomorrow.", [["arrange", "/əˈreɪndʒ/", "安排"], ["withdrawal", "/wɪðˈdrɔːəl/", "取款"]], ["I need to arrange a large transfer for tomorrow.", "I need to arrange a cash withdrawal for Friday."]),
      line("What verification will be required when I collect it?", "我领取时需要进行什么验证？", "询问领取大额现金时的身份验证要求。", "What verification will be required / when I collect it?", [["verification", "/ˌverəfɪˈkeɪʃən/", "验证"], ["collect", "/kəˈlekt/", "领取"]], ["What identification will be required when I collect it?", "What verification will be required for the transfer?"]),
      line("If the funds are not ready, what is the safest alternative?", "如果资金还没准备好，最安全的替代方案是什么？", "用条件句处理计划不确定的情况。", "If the funds are not ready / what is the safest alternative?", [["funds", "/fʌndz/", "资金"], ["safest", "/ˈseɪfəst/", "最安全的"]], ["If the funds are delayed, what is the safest alternative?", "If the branch is closed, what is the safest alternative?"])
    ]),
    scene("bank-balance", "查询余额", "处理对账差异", [
      line("The balance shown online does not match the balance on my statement.", "网上显示的余额和我的对账单余额不一致。", "清楚比较两个来源，说明存在差异。", "The balance shown online / does not match / the balance on my statement.", [["match", "/mætʃ/", "匹配；一致"], ["statement", "/ˈsteɪtmənt/", "对账单"]], ["The amount shown online does not match my receipt.", "The balance shown online does not match the app."]),
      line("Could we review the timeline of these transactions together?", "我们可以一起核对这些交易的时间线吗？", "邀请工作人员共同核查，语气合作而不是指责。", "Could we review / the timeline of these transactions / together?", [["timeline", "/ˈtaɪmlaɪn/", "时间线"], ["review", "/rɪˈvjuː/", "复查"]], ["Could we review the timeline of these payments together?", "Could we review the account history together?"]),
      line("I’d appreciate a written explanation of the adjustment.", "如果能提供这次调整的书面解释，我会很感谢。", "I’d appreciate 比直接要求更正式、礼貌。", "I’d appreciate / a written explanation / of the adjustment.", [["appreciate", "/əˈpriːʃieɪt/", "感谢；重视"], ["adjustment", "/əˈdʒʌstmənt/", "调整"]], ["I’d appreciate a written explanation of the charge.", "I’d appreciate a copy of the investigation."])
    ]),
    scene("bank-fees", "手续费", "谈清费用条件", [
      line("Could you break down the total cost, including any recurring charges?", "可以拆解一下总费用，包括任何周期性收费吗？", "break down 要求把总费用拆开解释。", "Could you break down / the total cost / including any recurring charges?", [["break down", "/breɪk daʊn/", "分解说明"], ["recurring", "/rɪˈkɝːɪŋ/", "周期性发生的"]], ["Could you break down the transfer cost?", "Could you break down the total cost including taxes?"]),
      line("Is there a way to reduce the fee without changing my account?", "有没有不更换账户就能降低费用的办法？", "明确自己的限制，再询问可行方案。", "Is there a way / to reduce the fee / without changing my account?", [["reduce", "/rɪˈduːs/", "降低"], ["without", "/wɪˈðaʊt/", "不；没有"]], ["Is there a way to reduce the fee without closing the account?", "Is there a way to reduce the fee without adding a service?"]),
      line("Could you compare the cost of these options over a year?", "可以比较一下这些方案一年的成本吗？", "把费用问题放到更长时间范围内比较。", "Could you compare / the cost of these options / over a year?", [["over", "/ˈoʊvər/", "在……期间"], ["option", "/ˈɑːpʃən/", "方案"]], ["Could you compare the benefits over a year?", "Could you compare the cost over three years?"])
    ]),
    scene("bank-card", "银行卡异常", "处理安全限制", [
      line("I understand the security concern, but I need access restored today.", "我理解安全方面的担忧，但我今天需要恢复使用权限。", "先承认对方的顾虑，再表达自己的紧迫需求。", "I understand the security concern / but / I need access restored today.", [["security", "/sɪˈkjʊrəti/", "安全"], ["restore", "/rɪˈstɔːr/", "恢复"]], ["I understand the security concern, but I need the payment processed today.", "I understand the security concern, but I need access restored before noon."]),
      line("What information can I provide to verify the transaction?", "我可以提供什么信息来验证这笔交易？", "主动询问可提供的材料，推动问题解决。", "What information can I provide / to verify the transaction?", [["provide", "/prəˈvaɪd/", "提供"], ["verify", "/ˈverəfaɪ/", "验证"]], ["What information can I provide to verify my identity?", "What information can I provide to verify the payment?"]),
      line("If this cannot be resolved here, who should I speak with next?", "如果这里无法解决，我下一步应该找谁？", "礼貌地升级问题，而不是停留在原地。", "If this cannot be resolved here / who should I speak with next?", [["resolve", "/rɪˈzɑːlv/", "解决"], ["next", "/nekst/", "接下来"]], ["If this cannot be resolved today, who should I contact next?", "If this cannot be resolved here, what should I do next?"])
    ])
  ];

  const natural = [
    scene("bank-account", "开户", "自然讨论账户选择", [
      line("I’m hoping to find an account that works well for the way I manage my money.", "我希望找到一个适合我管理资金方式的账户。", "I’m hoping to 比 I want to 更柔和，也更像真实咨询。", "I’m hoping to find an account / that works well / for the way I manage my money.", [["hoping", "/ˈhoʊpɪŋ/", "希望"], ["manage", "/ˈmænɪdʒ/", "管理"]], ["I’m hoping to find an account that works well for my family.", "I’m hoping to find an account that works well for frequent travel."]),
      line("Could you give me a quick sense of which option people in my situation usually choose?", "可以简单说说像我这种情况的人通常会选哪种吗？", "give me a quick sense of 是很自然的咨询表达。", "Could you give me a quick sense / of which option people in my situation / usually choose?", [["sense", "/sens/", "大致了解"], ["usually", "/ˈjuːʒuəli/", "通常"]], ["Could you give me a quick sense of the total cost?", "Could you give me a quick sense of the difference?"]),
      line("I’d rather understand the fine print before I make a decision.", "我更希望在做决定前先弄清楚细节条款。", "I’d rather 表达偏好，fine print 指容易被忽略的细节条款。", "I’d rather understand / the fine print / before I make a decision.", [["rather", "/ˈræðər/", "宁愿；更希望"], ["fine print", "/faɪn prɪnt/", "细节条款"]], ["I’d rather understand the fees before I make a decision.", "I’d rather compare the options before I decide."])
    ]),
    scene("bank-cash", "取款", "自然安排大额取款", [
      line("I’m planning to take out a fairly large amount tomorrow.", "我计划明天取一笔比较大的金额。", "take out 是取款的自然口语说法，fairly large 表示相当大。", "I’m planning to take out / a fairly large amount / tomorrow.", [["plan", "/plæn/", "计划"], ["fairly", "/ˈferli/", "相当；比较"]], ["I’m planning to transfer a fairly large amount tomorrow.", "I’m planning to take out a smaller amount tomorrow."]),
      line("Is there anything I should arrange ahead of time?", "我需要提前安排什么吗？", "anything I should 是自然地询问准备事项。", "Is there anything / I should arrange / ahead of time?", [["arrange", "/əˈreɪndʒ/", "安排"], ["ahead of time", "/əˌhed əv ˈtaɪm/", "提前"]], ["Is there anything I should bring ahead of time?", "Is there anything I should complete ahead of time?"]),
      line("If cash is not available today, I’m happy to consider another option.", "如果今天没有现金，我也愿意考虑其他方案。", "先说明备选态度，让沟通更顺畅。", "If cash is not available today / I’m happy to consider / another option.", [["available", "/əˈveɪləbəl/", "可用的"], ["consider", "/kənˈsɪdər/", "考虑"]], ["If cash is not available today, I’m happy to come back tomorrow.", "If cash is not available today, I’m happy to use a transfer."])
    ]),
    scene("bank-balance", "查询余额", "自然核对账户记录", [
      line("I noticed a difference between the balance in the app and the statement.", "我注意到应用里的余额和对账单之间有差异。", "I noticed a difference 是自然、克制地指出问题。", "I noticed a difference / between the balance in the app / and the statement.", [["notice", "/ˈnoʊtɪs/", "注意到"], ["difference", "/ˈdɪfərəns/", "差异"]], ["I noticed a difference between the payment and the receipt.", "I noticed a difference between the app and the website."]),
      line("Would you mind taking a closer look at these two entries?", "你介意仔细看一下这两条记录吗？", "Would you mind 是更礼貌的请求方式。", "Would you mind / taking a closer look / at these two entries?", [["closer", "/ˈkloʊsər/", "更仔细的"], ["entry", "/ˈentri/", "记录；条目"]], ["Would you mind taking a closer look at this charge?", "Would you mind taking a closer look at the date?"]),
      line("I’d appreciate it if you could let me know what happens next.", "如果你能告诉我接下来会怎样，我会很感谢。", "I’d appreciate it if 是正式但自然的请求结尾。", "I’d appreciate it / if you could let me know / what happens next.", [["appreciate", "/əˈpriːʃieɪt/", "感谢"], ["happen", "/ˈhæpən/", "发生"]], ["I’d appreciate it if you could email me the details.", "I’d appreciate it if you could update me tomorrow."])
    ]),
    scene("bank-fees", "手续费", "自然讨论费用与价值", [
      line("I’m trying to understand what I’d actually pay over the course of a year.", "我想弄清楚一年下来我实际要支付多少。", "what I’d actually pay 关注真实总成本。", "I’m trying to understand / what I’d actually pay / over the course of a year.", [["actually", "/ˈæktʃuəli/", "实际上"], ["course", "/kɔːrs/", "过程；期间"]], ["I’m trying to understand what I’d actually save over a year.", "I’m trying to understand what I’d actually pay each month."]),
      line("Are there any ways to keep the fee from being charged?", "有没有办法避免被收取这笔费用？", "keep something from being charged 是自然的“避免被收取”。", "Are there any ways / to keep the fee / from being charged?", [["keep from", "/kiːp frəm/", "避免"], ["charged", "/tʃɑːrdʒd/", "被收费"]], ["Are there any ways to keep the monthly fee from being charged?", "Are there any ways to keep this fee from being charged?"]),
      line("Given how I use the account, which option would you lean toward?", "按照我使用账户的方式，你会更倾向于哪种方案？", "lean toward 表示在多个选择中更倾向某一个。", "Given how I use the account / which option would you lean toward?", [["given", "/ˈɡɪvən/", "考虑到"], ["lean toward", "/liːn təˈwɔːrd/", "倾向于"]], ["Given my travel needs, which option would you lean toward?", "Given the fees, which option would you lean toward?"])
    ]),
    scene("bank-card", "银行卡异常", "自然处理卡片限制", [
      line("The card was declined even though I was expecting the payment to go through.", "虽然我以为付款会成功，但这张卡还是被拒付了。", "even though 连接预期和实际结果，适合解释异常。", "The card was declined / even though I was expecting / the payment to go through.", [["even though", "/ˈiːvən ðoʊ/", "尽管"], ["go through", "/ɡoʊ θruː/", "成功完成"]], ["The transfer failed even though I was expecting it to go through.", "The card was declined even though the account was active."]),
      line("Could you help me figure out whether this is a security hold or a technical issue?", "可以帮我弄清楚这是安全限制还是技术问题吗？", "figure out 是很自然的“弄清楚”。", "Could you help me figure out / whether this is a security hold / or a technical issue?", [["figure out", "/ˈfɪɡjər aʊt/", "弄清楚"], ["technical", "/ˈteknɪkəl/", "技术上的"]], ["Could you help me figure out whether this is a card issue or an account issue?", "Could you help me figure out what happened?"]),
      line("Once the issue is resolved, could you let me know how to avoid it next time?", "问题解决后，可以告诉我下次如何避免吗？", "once 引出完成条件，语气自然且有后续意识。", "Once the issue is resolved / could you let me know / how to avoid it next time?", [["resolved", "/rɪˈzɑːlvd/", "被解决的"], ["avoid", "/əˈvɔɪd/", "避免"]], ["Once the issue is resolved, could you let me know what changed?", "Once the issue is resolved, could you send me the details?"])
    ])
  ];

  window.bankScenesByLevel = { beginner, intermediate, proficient, advanced, natural };
})();
