(() => {
  "use strict";

  const levels = {
    beginner: { label: "入门", description: "先说完整的一句话", color: "green", prompts: [
      { prompt: "把“我学习英语”翻译成英文。", context: "先使用最基本的主语 + 动词 + 宾语结构。", hint: ["I", "study", "English"], answer: "I study English.", meaning: "我学习英语。", ipa: "/aɪ ˈstʌdi ˈɪŋɡlɪʃ/", note: "先找到主语 I，再用 study 表达动作，最后补上学习的内容 English。", keys: ["i", "study", "english"] },
      { prompt: "把“我喝水”翻译成英文。", context: "继续练习主语 + 动词 + 宾语。", hint: ["I", "drink", "water"], answer: "I drink water.", meaning: "我喝水。", ipa: "/aɪ drɪŋk ˈwɔːtər/", note: "drink 是动作，water 是动作所涉及的事物。", keys: ["i", "drink", "water"] },
      { prompt: "把“她是我的朋友”翻译成英文。", context: "这一次使用主语 + be 动词 + 身份。", hint: ["She", "is", "my friend"], answer: "She is my friend.", meaning: "她是我的朋友。", ipa: "/ʃi ɪz maɪ frend/", note: "She 指她，is 连接主语和身份，my friend 表示我的朋友。", keys: ["she", "is", "my", "friend"] },
      { prompt: "把“我需要帮助”翻译成英文。", context: "用 need 表达一个清楚、直接的需要。", hint: ["I", "need", "help"], answer: "I need help.", meaning: "我需要帮助。", ipa: "/aɪ niːd help/", note: "need 后面直接接需要的事物，help 在这里是“帮助”。", keys: ["i", "need", "help"] }
    ] },
    intermediate: { label: "进阶", description: "补充时间和原因", color: "blue", prompts: [
      { prompt: "把“我今天在家学习英语”翻译成英文。", context: "在基础句子中加入时间和地点。", hint: ["I study English", "today", "at home"], answer: "I study English at home today.", meaning: "我今天在家学习英语。", ipa: "/aɪ ˈstʌdi ˈɪŋɡlɪʃ æt hoʊm təˈdeɪ/", note: "先说核心动作，再补充地点 at home 和时间 today。", keys: ["i", "study", "english", "at", "home", "today"] },
      { prompt: "把“我现在很忙，因为我有工作”翻译成英文。", context: "尝试用 because 连接两个完整的想法。", hint: ["I am busy now", "because", "I have work"], answer: "I am busy now because I have work.", meaning: "我现在很忙，因为我有工作。", ipa: "/aɪ æm ˈbɪzi naʊ bɪˈkɔz aɪ hæv wɝːk/", note: "because 后面接一个完整句子，用来说明原因。", keys: ["i", "am", "busy", "now", "because", "have", "work"] },
      { prompt: "把“请在这里等我”翻译成英文。", context: "用祈使句表达一个简单请求。", hint: ["Please", "wait", "here"], answer: "Please wait here.", meaning: "请在这里等我。", ipa: "/pliːz weɪt hɪr/", note: "祈使句通常直接从动词开始，please 让语气更礼貌。", keys: ["please", "wait", "here"] },
      { prompt: "把“我明天要去银行”翻译成英文。", context: "练习 will + 动词原形表达将来的计划。", hint: ["I will go", "to the bank", "tomorrow"], answer: "I will go to the bank tomorrow.", meaning: "我明天要去银行。", ipa: "/aɪ wɪl ɡoʊ tə ðə bæŋk təˈmɑːroʊ/", note: "will 后面使用动词原形 go，地点前使用 to。", keys: ["i", "will", "go", "to", "the", "bank", "tomorrow"] }
    ] },
    proficient: { label: "熟练", description: "说清楚观点和判断", color: "yellow", prompts: [
      { prompt: "把“我认为这个选择更实用”翻译成英文。", context: "用 I think 引出观点，再补充判断。", hint: ["I think", "this option", "is more practical"], answer: "I think this option is more practical.", meaning: "我认为这个选择更实用。", ipa: "/aɪ θɪŋk ðɪs ˈɑpʃən ɪz mɔr ˈpræktɪkəl/", note: "I think 后面接完整观点；more practical 用来做比较判断。", keys: ["i", "think", "this", "option", "is", "more", "practical"] },
      { prompt: "把“我同意你的看法，但我有一个问题”翻译成英文。", context: "尝试用 but 让两个想法形成转折。", hint: ["I agree", "with your view", "but", "I have a question"], answer: "I agree with your view, but I have a question.", meaning: "我同意你的看法，但我有一个问题。", ipa: "/aɪ əˈɡriː wɪð jʊr vjuː bət aɪ hæv ə ˈkwestʃən/", note: "agree with 表示同意某人的观点；but 后面接新的完整信息。", keys: ["i", "agree", "with", "your", "view", "but", "have", "a", "question"] },
      { prompt: "把“如果我们早点开始，就会更容易”翻译成英文。", context: "使用 if 条件句表达一个判断。", hint: ["If we start early", "it will be easier"], answer: "If we start early, it will be easier.", meaning: "如果我们早点开始，就会更容易。", ipa: "/ɪf wi stɑrt ˈɝli ɪt wɪl bi ˈiziər/", note: "if 从句说明条件，主句说明在这个条件下会发生什么。", keys: ["if", "we", "start", "early", "it", "will", "be", "easier"] },
      { prompt: "把“我更喜欢早上工作，因为那时我更专注”翻译成英文。", context: "把偏好和理由组合成连续表达。", hint: ["I prefer working in the morning", "because", "I am more focused"], answer: "I prefer working in the morning because I am more focused.", meaning: "我更喜欢早上工作，因为那时我更专注。", ipa: "/aɪ prɪˈfɝ ˈwɝkɪŋ ɪn ðə ˈmɔrnɪŋ bɪˈkɔz aɪ æm mɔr ˈfoʊkəst/", note: "prefer 后面接动名词 working，because 引出偏好的原因。", keys: ["i", "prefer", "working", "in", "the", "morning", "because", "am", "more", "focused"] }
    ] },
    advanced: { label: "精通", description: "处理复杂表达", color: "purple", prompts: [
      { prompt: "把“虽然这个方案更贵，但长期来看更可靠”翻译成英文。", context: "用 although 和 but 组织让步与转折。", hint: ["Although this plan is more expensive", "it is more reliable in the long run"], answer: "Although this plan is more expensive, it is more reliable in the long run.", meaning: "虽然这个方案更贵，但长期来看更可靠。", ipa: "/ɔlˈðoʊ ðɪs plæn ɪz mɔr ɪkˈspensɪv ɪt ɪz mɔr rɪˈlaɪəbəl ɪn ðə lɔŋ rʌn/", note: "although 已经表达让步，英文中通常不再需要 but；long run 表示长期。", keys: ["although", "this", "plan", "is", "more", "expensive", "reliable", "in", "the", "long", "run"] },
      { prompt: "把“我不确定这个决定是否会解决问题”翻译成英文。", context: "用 whether 引出一个需要判断的问题。", hint: ["I am not sure", "whether this decision", "will solve the problem"], answer: "I am not sure whether this decision will solve the problem.", meaning: "我不确定这个决定是否会解决问题。", ipa: "/aɪ æm nɑt ʃʊr ˈweðər ðɪs dɪˈsɪʒən wɪl sɑlv ðə ˈprɑbləm/", note: "whether 引出“不确定的内容”，后面依然要保持完整语序。", keys: ["i", "am", "not", "sure", "whether", "this", "decision", "will", "solve", "the", "problem"] },
      { prompt: "把“我们应该先确认事实，再决定下一步”翻译成英文。", context: "使用 should 和 before 连接行动顺序。", hint: ["We should confirm the facts", "before", "we decide what to do next"], answer: "We should confirm the facts before we decide what to do next.", meaning: "我们应该先确认事实，再决定下一步。", ipa: "/wi ʃʊd kənˈfɝm ðə fækts bɪˈfɔr wi dɪˈsaɪd wʌt tə du nekst/", note: "should 表示建议；before 从句说明第二个动作发生前的准备。", keys: ["we", "should", "confirm", "the", "facts", "before", "decide", "what", "to", "do", "next"] },
      { prompt: "把“如果没有更多信息，我不会贸然做决定”翻译成英文。", context: "练习 without 和 unless 带来的限制条件。", hint: ["Without more information", "I will not make a decision", "hastily"], answer: "Without more information, I will not make a decision hastily.", meaning: "如果没有更多信息，我不会贸然做决定。", ipa: "/wɪˈðaʊt mɔr ˌɪnfərˈmeɪʃən aɪ wɪl nɑt meɪk ə dɪˈsɪʒən ˈheɪstɪli/", note: "without more information 先限定条件，hastily 表示“仓促地、贸然地”。", keys: ["without", "more", "information", "i", "will", "not", "make", "a", "decision", "hastily"] }
    ] },
    natural: { label: "地道表达", description: "让句子更像真实交流", color: "orange", prompts: [
      { prompt: "把“我完全理解你的意思”翻译成更自然的英文。", context: "不要只翻译字面意思，尝试使用真实会话中的表达。", hint: ["I see", "exactly", "what you mean"], answer: "I see exactly what you mean.", meaning: "我完全理解你的意思。", ipa: "/aɪ si ɪɡˈzæktli wʌt ju min/", note: "I see what you mean 是高频回应；exactly 加强“完全理解”的语气。", keys: ["i", "see", "exactly", "what", "you", "mean"] },
      { prompt: "把“这听起来是个不错的主意”翻译成自然口语。", context: "练习用 sound 表达对一个想法的即时反应。", hint: ["That sounds", "like", "a good idea"], answer: "That sounds like a good idea.", meaning: "这听起来是个不错的主意。", ipa: "/ðæt saʊndz laɪk ə ɡʊd aɪˈdiə/", note: "sound like 表示“听起来像”，比直接说 That is good 更自然。", keys: ["that", "sounds", "like", "a", "good", "idea"] },
      { prompt: "把“我先考虑一下，再回复你”翻译成自然口语。", context: "用 let me 表达礼貌、自然的行动安排。", hint: ["Let me think about it", "and", "get back to you"], answer: "Let me think about it and get back to you.", meaning: "我先考虑一下，再回复你。", ipa: "/let mi θɪŋk əˈbaʊt ɪt ænd ɡet bæk tə ju/", note: "get back to you 是固定表达，意思是“之后回复你”。", keys: ["let", "me", "think", "about", "it", "and", "get", "back", "to", "you"] },
      { prompt: "把“无论如何，我们都需要继续前进”翻译成自然口语。", context: "用 anyway 引出坚定、收束性的表达。", hint: ["Anyway", "we need to", "keep moving forward"], answer: "Anyway, we need to keep moving forward.", meaning: "无论如何，我们都需要继续前进。", ipa: "/ˈeniweɪ wi niːd tə kiːp ˈmuːvɪŋ ˈfɔrwərd/", note: "Anyway 常用来结束犹豫、转回重点；keep doing 表示继续做某事。", keys: ["anyway", "we", "need", "to", "keep", "moving", "forward"] }
    ] }
  };

  const levelOrder = Object.keys(levels);
  const storageKey = "sentence-building-progress";
  const state = JSON.parse(localStorage.getItem(storageKey) || "{}");
  let activeLevel = localStorage.getItem("sentence-building-level") || "beginner";
  let promptIndex = 0;
  let answerVisible = false;

  const $ = (selector) => document.querySelector(selector);
  const activePrompt = () => levels[activeLevel].prompts[promptIndex];
  const normalize = (value) => String(value || "").toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9']+/g, " ").trim().replace(/\s+/g, " ");
  const tokens = (value) => normalize(value).split(" ").filter(Boolean);

  function renderLevels() {
    $("#sentence-level-list").innerHTML = levelOrder.map((key, index) => `<button class="sentence-level-button ${key === activeLevel ? "active" : ""}" data-level="${key}" type="button"><span>0${index + 1}</span><strong>${levels[key].label}</strong><small>${levels[key].description}</small></button>`).join("");
    document.querySelectorAll(".sentence-level-button").forEach((button) => button.addEventListener("click", () => { activeLevel = button.dataset.level; promptIndex = 0; answerVisible = false; localStorage.setItem("sentence-building-level", activeLevel); renderAll(); }));
  }

  function renderPrompt() {
    const item = activePrompt();
    const level = levels[activeLevel];
    $("#practice-level-label").textContent = `${level.label} · 句子 ${promptIndex + 1} / ${level.prompts.length}`;
    $("#practice-status").textContent = state[`${activeLevel}-${promptIndex}`] ? "已练习" : "未提交";
    $("#practice-title").textContent = item.prompt;
    $("#practice-context").textContent = item.context;
    $("#sentence-hint").innerHTML = item.hint.map((word) => `<span>${word}</span>`).join("");
    $("#sentence-input").value = "";
    $("#sentence-feedback").hidden = true;
    $("#sentence-feedback").className = "sentence-feedback";
    $("#reference-answer").hidden = !answerVisible;
    $("#answer-toggle").textContent = answerVisible ? "收起参考答案" : "查看参考答案";
    $("#reference-text").textContent = item.answer;
    $("#reference-ipa").textContent = item.ipa;
    $("#reference-meaning").textContent = item.meaning;
    $("#reference-note").textContent = item.note;
  }

  function renderCount() {
    $("#completed-count").textContent = Object.keys(state).filter((key) => state[key]).length;
  }

  function renderAll() { renderLevels(); renderPrompt(); renderCount(); }

  $("#sentence-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = activePrompt();
    const input = normalize($("#sentence-input").value);
    const required = item.keys.every((word) => tokens(input).includes(word));
    const closeEnough = input && (input === normalize(item.answer) || required);
    const feedback = $("#sentence-feedback");
    state[`${activeLevel}-${promptIndex}`] = true;
    localStorage.setItem(storageKey, JSON.stringify(state));
    if (closeEnough) { feedback.className = "sentence-feedback success"; feedback.textContent = "很好，你已经把核心意思组织出来了。现在打开参考答案，看看词序和表达是否更自然。"; }
    else { feedback.className = "sentence-feedback try-again"; feedback.textContent = "先别急着看答案。检查一下：主语有没有写出来？动词后面接的内容完整吗？你也可以提交后打开参考答案对照。"; }
    feedback.hidden = false;
    $("#practice-status").textContent = "已提交";
    renderCount();
  });

  $("#answer-toggle").addEventListener("click", () => { answerVisible = !answerVisible; renderPrompt(); });
  $("#clear-input").addEventListener("click", () => { $("#sentence-input").value = ""; $("#sentence-input").focus(); });
  $("#reference-speak").addEventListener("click", () => window.playEnglishText?.(activePrompt().answer, { rate: .9 }));
  $("#reference-slow").addEventListener("click", () => window.playEnglishText?.(activePrompt().answer, { rate: .58 }));
  $("#previous-prompt").addEventListener("click", () => { promptIndex = (promptIndex - 1 + levels[activeLevel].prompts.length) % levels[activeLevel].prompts.length; answerVisible = false; renderPrompt(); });
  $("#next-prompt").addEventListener("click", () => { promptIndex = (promptIndex + 1) % levels[activeLevel].prompts.length; answerVisible = false; renderPrompt(); });
  renderAll();
})();
