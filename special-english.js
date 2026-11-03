(() => {
  "use strict";

  const fields = [
    {
      id: "python",
      label: "计算机科学 · Python",
      kicker: "COMPUTER SCIENCE · PYTHON",
      short: "从代码基础开始读懂技术英语",
      concepts: [
        ["string", "字符串", "/strɪŋ/", "数据类型", "A string is a sequence of characters used to represent text.", "字符串是一串用于表示文本的字符。", "在 Python 中，字符串通常写在单引号或双引号中，例如 'hello'。", "In practice, a string is the basic container for names, messages, labels, and other text in a program."],
        ["integer", "整数", "/ˈɪntədʒər/", "数据类型", "An integer is a whole number without a decimal part.", "整数是不带小数部分的完整数字。", "例如 0、3 和 -8 都是 integers。", "Integers are useful when a program needs to count things or represent a whole-number quantity."],
        ["float", "浮点数", "/floʊt/", "数据类型", "A float is a number that can represent a decimal value.", "浮点数是可以表示小数值的数字。", "例如 3.14 是一个 float，常用于测量、价格和比例。", "A float lets a program work with values that fall between whole numbers, such as measurements or prices."],
        ["boolean", "布尔值", "/ˈbuːliən/", "数据类型", "A boolean represents one of two values: true or false.", "布尔值表示两种状态之一：真或假。", "条件判断经常使用 boolean 来表示某件事是否成立。", "A boolean turns a decision into a clear yes-or-no value that a program can test."],
        ["variable", "变量", "/ˈveriəbəl/", "程序基础", "A variable is a name that refers to a value stored in a program.", "变量是一个指向程序中某个已存储值的名称。", "变量让我们可以给数据命名，并在后续代码中重复使用。", "A variable gives a value a meaningful name, so the same piece of information can be reused and updated."],
        ["list", "列表", "/lɪst/", "数据结构", "A list is an ordered collection of items that can be changed.", "列表是一个有顺序、并且可以被修改的项目集合。", "列表适合保存一组需要按顺序处理的数据。", "Think of a list as an editable row of items: the order matters, and items can be added or removed."],
        ["dictionary", "字典", "/ˈdɪkʃəneri/", "数据结构", "A dictionary stores data as key-value pairs.", "字典用键值对的形式存储数据。", "可以通过 key 找到对应的 value，适合表示带标签的信息。", "A dictionary is useful when each value needs a label, such as a user's name, age, or email address."],
        ["function", "函数", "/ˈfʌŋkʃən/", "程序结构", "A function is a reusable block of code that performs a specific task.", "函数是一段可以重复使用、用于完成特定任务的代码。", "函数可以接收输入，也可以返回处理后的结果。", "A function packages one job into a reusable unit, making code easier to read, test, and maintain."],
        ["loop", "循环", "/luːp/", "控制流程", "A loop repeats a block of code while a condition is true or for each item in a collection.", "循环会在条件成立时，或针对集合中的每个项目，重复执行一段代码。", "for 和 while 是 Python 中最常见的两种循环方式。", "A loop saves repetition by telling the program to perform the same kind of action across many items or steps."],
        ["exception", "异常", "/ɪkˈsepʃən/", "错误处理", "An exception is an event that interrupts the normal flow of a program.", "异常是会打断程序正常执行流程的事件。", "程序可以使用 try 和 except 来处理预期中的错误。", "An exception is the program's signal that something unexpected happened and needs a deliberate response."]
        , ["tuple", "元组", "/ˈtʌpəl/", "数据结构", "A tuple is an ordered collection of items that cannot be changed after creation.", "元组是一个创建后不能修改的有序项目集合。", "元组适合保存不希望被意外改变的一组值。", "A tuple is like a fixed list: it keeps order but protects its contents from later changes."],
        ["set", "集合", "/set/", "数据结构", "A set is an unordered collection of unique items.", "集合是一个无序且不重复的项目集合。", "集合适合去重，或进行交集、并集等集合运算。", "A set focuses on membership rather than position, so it is useful when duplicates do not matter."],
        ["conditional statement", "条件语句", "/kənˈdɪʃənəl ˈsteɪtmənt/", "控制流程", "A conditional statement runs different code depending on whether a condition is true.", "条件语句会根据条件是否成立来运行不同的代码。", "if、elif 和 else 共同组成 Python 中常见的条件判断。", "A conditional statement gives a program a decision point: do one thing in one situation and another thing otherwise."],
        ["argument", "参数值", "/ˈɑːrɡjəmənt/", "函数调用", "An argument is a value passed to a function when it is called.", "参数值是在调用函数时传入函数的值。", "函数可以根据不同的 argument 处理不同的数据。", "An argument is the specific input given to a function so the same function can work with different data."],
        ["return value", "返回值", "/rɪˈtɝːn ˈvæljuː/", "函数调用", "A return value is the result that a function sends back to the code that called it.", "返回值是函数发送回调用它的代码的结果。", "return 让函数不仅执行动作，还可以把结果交给后续代码。", "A return value is the useful outcome a function hands back after it finishes its work."],
        ["module", "模块", "/ˈmɑːdʒuːl/", "程序组织", "A module is a file that contains Python code which can be imported and reused.", "模块是一个包含 Python 代码、可以被导入和复用的文件。", "模块帮助我们把大型程序拆分成更容易管理的部分。", "A module gives related code a home of its own, so different parts of a project stay organized."],
        ["class", "类", "/klæs/", "面向对象编程", "A class is a blueprint for creating objects with shared data and behavior.", "类是创建具有共同数据和行为的对象的蓝图。", "类把对象的属性和可以执行的动作放在同一个结构中。", "A class describes what a kind of object knows and can do before individual objects are created from it."],
        ["object", "对象", "/ˈɑːbdʒekt/", "面向对象编程", "An object is an instance of a class that contains data and behavior.", "对象是类的一个实例，包含数据和行为。", "一个 class 可以创建多个具有相同结构但数据不同的 object。", "An object is a concrete example created from a class, with its own state and access to shared behavior."],
        ["library", "库", "/ˈlaɪbreri/", "程序生态", "A library is a collection of reusable code provided for a particular purpose.", "库是一组为特定目的提供的可复用代码。", "使用库可以减少重复造轮子，把精力放在自己的问题上。", "A library is a toolbox written by others that gives a program ready-made capabilities."],
        ["debugging", "调试", "/ˌdiːˈbʌɡɪŋ/", "开发实践", "Debugging is the process of finding and fixing problems in a program.", "调试是寻找并修复程序问题的过程。", "调试不仅是改错，也包括定位问题出现的原因。", "Debugging is a structured investigation: observe the behavior, locate the cause, and make a targeted fix."]
      ]
    },
    {
      id: "psychology",
      label: "心理学",
      kicker: "PSYCHOLOGY · CORE CONCEPTS",
      short: "用英语理解心理学的核心概念",
      concepts: [
        ["id", "本我", "/ɪd/", "古典精神分析", "The id refers to the instinctive part of the mind that seeks immediate satisfaction.", "本我指心理中追求即时满足、受本能驱动的部分。", "在弗洛伊德的理论中，本我遵循快乐原则，关注欲望和冲动。", "The id can be understood as the part of the mind that says, “I want it now,” before reality or rules are considered."],
        ["ego", "自我", "/ˈiːɡoʊ/", "古典精神分析", "The ego helps a person deal with reality while balancing inner demands.", "自我帮助个体面对现实，同时平衡内在需求。", "自我需要在欲望、现实和社会规范之间寻找可行的方式。", "The ego represents the practical part of the mind that asks how a desire can be handled in the real world."],
        ["superego", "超我", "/ˈsuːpərˌiːɡoʊ/", "古典精神分析", "The superego represents internalized values, rules, and ideals.", "超我代表个体内化的价值观、规则和理想。", "它常常和道德判断、内疚感以及“应该怎样做”联系在一起。", "The superego is the inner voice of standards and ideals, often expressed through a sense of should, should not, or guilt."],
        ["defense mechanism", "防御机制", "/dɪˈfens ˈmekənɪzəm/", "精神动力学", "A defense mechanism is a mental process that protects a person from uncomfortable feelings.", "防御机制是一种保护个体免受不适情绪影响的心理过程。", "否认、压抑和投射都是心理动力学中常讨论的防御方式。", "A defense mechanism is not simply a lie; it is a way the mind reduces emotional pressure when a feeling is difficult to face directly."],
        ["projection", "投射", "/prəˈdʒekʃən/", "精神动力学", "Projection is the process of attributing one's own feelings to another person.", "投射是把自己的感受归因到他人身上的心理过程。", "例如，一个人无法承认自己的愤怒，却认为别人一直在针对自己。", "Projection shifts an uncomfortable feeling outward, so a person experiences it as if it belongs to someone else."],
        ["attachment", "依恋", "/əˈtætʃmənt/", "发展心理学", "Attachment is an emotional bond that develops between people, especially between a child and a caregiver.", "依恋是人与人之间形成的情感联结，尤其常指儿童与照顾者之间的关系。", "依恋理论关注安全感、关系模式以及早期经验对后续关系的影响。", "Attachment describes how a relationship becomes a source of safety, comfort, and expectations about whether others can be trusted."],
        ["object relations", "客体关系", "/ˈɑːbdʒekt rɪˈleɪʃənz/", "客体关系精神分析", "Object relations theory examines how early relationships shape a person's inner world.", "客体关系理论研究早期关系如何塑造一个人的内在世界。", "这里的“客体”主要指重要他人及其在心理中的内在表征。", "Object relations focuses on the internal pictures of important relationships that a person carries and repeats in later connections."],
        ["cognitive bias", "认知偏差", "/ˈkɑːɡnətɪv baɪəs/", "认知心理学", "A cognitive bias is a systematic pattern of thinking that can affect judgment.", "认知偏差是一种可能影响判断的系统性思维倾向。", "它不一定意味着思考完全错误，而是说明判断会受到特定模式的影响。", "A cognitive bias is a predictable shortcut in thinking; it can be useful, but it can also pull judgment away from the available evidence."],
        ["working memory", "工作记忆", "/ˈwɝːkɪŋ ˈmeməri/", "认知心理学", "Working memory is the limited mental system used to hold and manipulate information briefly.", "工作记忆是一个容量有限、用于短时间保持和处理信息的心理系统。", "心算、听句子并记住开头内容，都需要使用工作记忆。", "Working memory is like a small mental workspace: it holds information briefly while a person uses it to reason, read, or solve a problem."],
        ["reinforcement", "强化", "/ˌriːɪnˈfɔːrsmənt/", "行为主义心理学", "Reinforcement is a consequence that increases the likelihood of a behavior happening again.", "强化是会提高某种行为再次发生可能性的结果。", "强化关注行为后发生了什么，以及这种结果如何影响未来行为。", "Reinforcement explains why a behavior becomes more likely when it is followed by a consequence that matters to the person."],
        ["behavior", "行为", "/bɪˈheɪvjər/", "行为主义心理学", "Behavior is an observable action or response of a person or organism.", "行为是一个人或有机体可以被观察到的行动或反应。", "行为心理学通常先描述行为本身，再研究它受到什么影响。", "Behavior is the part of a person's activity that can be observed, described, and connected to a situation or consequence."],
        ["stimulus", "刺激", "/ˈstɪmjələs/", "行为主义心理学", "A stimulus is an event or signal that can produce a response.", "刺激是能够引发反应的事件或信号。", "声音、光线、问题或奖励都可能在特定情境中成为 stimulus。", "A stimulus is something that enters the situation and gives the organism a reason or cue to respond."],
        ["classical conditioning", "经典条件作用", "/ˈklæsɪkəl kənˈdɪʃənɪŋ/", "学习心理学", "Classical conditioning is learning through an association between two stimuli.", "经典条件作用是通过两个刺激之间的联结而发生的学习。", "一个原本中性的刺激，可能因为反复和另一个刺激配对而引发反应。", "Classical conditioning describes learning that happens when one signal starts to predict another meaningful event."],
        ["operant conditioning", "操作性条件作用", "/ˈɑːpər ənt kənˈdɪʃənɪŋ/", "学习心理学", "Operant conditioning is learning shaped by the consequences of a behavior.", "操作性条件作用是由行为后果塑造的学习。", "它关注行为之后的奖励、惩罚或结果如何改变行为频率。", "Operant conditioning focuses on what follows an action and how that outcome changes the chance of the action happening again."],
        ["schema", "图式", "/ˈskiːmə/", "认知心理学", "A schema is a mental framework used to organize and interpret information.", "图式是用于组织和解释信息的心理框架。", "图式帮助人们快速理解经验，但也可能让人忽略不符合预期的信息。", "A schema is a mental template that helps a person make sense of new information by linking it to what is already known."],
        ["empathy", "共情", "/ˈempəθi/", "社会心理学", "Empathy is the ability to understand and respond to another person's experience.", "共情是理解并回应他人经历的能力。", "共情不等于完全同意，而是先尝试理解对方正在经历什么。", "Empathy means trying to understand another person's experience from their position without assuming that it is exactly the same as one's own."],
        ["motivation", "动机", "/ˌmoʊtəˈveɪʃən/", "动机心理学", "Motivation is the set of processes that energize and direct behavior toward a goal.", "动机是一组推动并引导行为朝向目标的心理过程。", "动机可以来自兴趣、奖励、责任感或避免某种结果。", "Motivation explains what gives behavior energy and direction, especially when a person is trying to reach a goal."],
        ["self-efficacy", "自我效能感", "/ˌself ˈefɪkəsi/", "社会认知理论", "Self-efficacy is a person's belief in their ability to perform a specific task.", "自我效能感是个体对自己完成特定任务能力的信念。", "它不是笼统的自信，而是针对某项任务的“我能做到”判断。", "Self-efficacy is task-specific confidence: the belief that one can organize and carry out the actions needed in a situation."],
        ["emotion regulation", "情绪调节", "/ɪˈmoʊʃən ˌreɡjəˈleɪʃən/", "情绪心理学", "Emotion regulation is the process of influencing how emotions are experienced and expressed.", "情绪调节是影响情绪体验和表达方式的过程。", "情绪调节不是压制所有情绪，而是选择更适合当下情境的回应方式。", "Emotion regulation is not the same as suppressing feelings; it is the ability to shape when, how, and how strongly an emotion is expressed."]
      ]
    }
  ];

  window.specialEnglishConcepts = fields;

  const fieldList = document.querySelector("#field-list");
  const conceptList = document.querySelector("#concept-list");
  const detail = document.querySelector("#concept-detail");
  const fieldTitle = document.querySelector("#field-title");
  const fieldKicker = document.querySelector("#field-kicker");
  const conceptCount = document.querySelector("#concept-count");
  const landing = document.querySelector("#special-field-landing");
  const detailLayout = document.querySelector("#special-field-detail");
  const requestedField = new URLSearchParams(window.location.search).get("field");
  let activeField = fields.find((field) => field.id === requestedField) || fields[0];
  let activeIndex = 0;
  let activeCategory = "全部";
  let feedbackNotice = "左右滑动或使用按钮切换概念";
  let feedbackState = "";
  let touchStartX = 0;
  let touchStartY = 0;
  const masteredKey = "special-english-mastered";
  const readMastered = () => { try { return new Set(JSON.parse(localStorage.getItem(masteredKey) || "[]")); } catch { return new Set(); } };
  const conceptId = (field, concept) => `${field.id}:${concept[0]}`;

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));

  function renderFields() {
    fieldList.innerHTML = fields.map((field) => `<button class="field-button field-${field.id}${field.id === activeField.id ? " active" : ""}" type="button" data-field="${field.id}"><span class="field-avatar"><img src="assets/special-${field.id === "python" ? "computer" : "psychology"}.svg" alt="" /></span><strong>${field.label}</strong><small>${field.short}</small><b>→</b></button>`).join("");
    fieldList.querySelectorAll("[data-field]").forEach((button) => button.addEventListener("click", () => {
      activeField = fields.find((field) => field.id === button.dataset.field) || fields[0];
      activeIndex = 0;
      activeCategory = "全部";
      window.history.replaceState({}, "", `special-english.html?field=${activeField.id}`);
      renderRoute();
    }));
  }

  function renderConcepts() {
    const categories = ["全部", ...new Set(activeField.concepts.map((concept) => concept[3]))];
    const visible = activeCategory === "全部" ? activeField.concepts.map((concept, index) => ({ concept, index })) : activeField.concepts.map((concept, index) => ({ concept, index })).filter(({ concept }) => concept[3] === activeCategory);
    if (!visible.length) {
      activeCategory = "全部";
      activeIndex = 0;
    }
    const filtered = activeCategory === "全部" ? activeField.concepts.map((concept, index) => ({ concept, index })) : activeField.concepts.map((concept, index) => ({ concept, index })).filter(({ concept }) => concept[3] === activeCategory);
    conceptList.innerHTML = `<div class="concept-filters" role="tablist" aria-label="概念分类">${categories.map((category) => `<button class="concept-filter${category === activeCategory ? " active" : ""}" type="button" role="tab" aria-selected="${category === activeCategory}" data-category="${esc(category)}">${esc(category)}</button>`).join("")}</div><div class="concept-grid">${filtered.map(({ concept, index }) => `<button class="concept-button${index === activeIndex ? " active" : ""}" type="button" data-concept-index="${index}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${esc(concept[1])}</strong><small>${esc(concept[0])}</small><em>${esc(concept[3])}</em></button>`).join("")}</div>`;
    conceptList.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      const first = activeCategory === "全部" ? 0 : activeField.concepts.findIndex((concept) => concept[3] === activeCategory);
      activeIndex = first >= 0 ? first : 0;
      render();
    }));
    conceptList.querySelectorAll("[data-concept-index]").forEach((button) => button.addEventListener("click", () => { activeIndex = Number(button.dataset.conceptIndex); render(); }));
  }

  function visibleIndexes() {
    return activeField.concepts.map((concept, index) => ({ concept, index })).filter(({ concept }) => activeCategory === "全部" || concept[3] === activeCategory).map(({ index }) => index);
  }

  function renderDetail() {
    const [english, chinese, ipa, category, definition, definitionZh, note, interpretationEn] = activeField.concepts[activeIndex];
    detail.innerHTML = `<div class="concept-detail-top"><div><p class="section-kicker">CONCEPT · ${esc(category)}</p><h2>${esc(chinese)}</h2><strong class="concept-english">${esc(english)}</strong><span class="concept-ipa">${esc(ipa)}</span></div><button class="concept-audio" type="button" data-audio-text="${esc(english)}">▶ 朗读术语</button></div><div class="concept-definition-grid"><article><div class="concept-block-heading"><span>ENGLISH DEFINITION · 英文定义</span><button type="button" data-definition-audio="${esc(definition)}">▶ 常速朗读</button></div><p>${esc(definition)}</p></article><article><span>中文定义</span><p>${esc(definitionZh)}</p></article></div><section class="concept-interpretation"><div class="concept-interpretation-heading"><div><span>CONCEPT INTERPRETATION · 概念解读</span><strong>把定义放回真实语境里理解</strong></div><button type="button" data-interpretation-audio="${esc(interpretationEn)}">▶ 常速朗读</button></div><div class="concept-interpretation-grid"><article><span>ENGLISH · 英文解读</span><p>${esc(interpretationEn)}</p></article><article><span>中文解读</span><p>${esc(note)}</p></article></div></section>`;
    detail.querySelector("[data-audio-text]").addEventListener("click", (event) => {
      if (window.playEnglishText) window.playEnglishText(event.currentTarget.dataset.audioText, { rate: .82 });
    });
    detail.querySelectorAll("[data-definition-audio], [data-interpretation-audio]").forEach((button) => button.addEventListener("click", (event) => {
      if (window.playEnglishText) window.playEnglishText(event.currentTarget.dataset.definitionAudio || event.currentTarget.dataset.interpretationAudio, { rate: .9 });
    }));
  }

  function renderFeedback() {
    const concept = activeField.concepts[activeIndex];
    const id = conceptId(activeField, concept);
    const mastered = readMastered().has(id);
    document.querySelector("#feedback-status").textContent = mastered ? "已加入掌握卡片库，可在下方集中回顾" : feedbackNotice;
    document.querySelectorAll("[data-feedback]").forEach((button) => button.classList.toggle("active", button.dataset.feedback === (mastered ? "mastered" : feedbackState)));
    const indexes = visibleIndexes();
    const position = indexes.indexOf(activeIndex);
    document.querySelector("[data-concept-prev]").disabled = position <= 0;
    document.querySelector("[data-concept-next]").disabled = position < 0 || position >= indexes.length - 1;
  }

  function renderMasteredLibrary() {
    const mastered = readMastered();
    const items = fields.flatMap((field) => field.concepts.map((concept, index) => ({ field, concept, index }))).filter(({ field, concept }) => mastered.has(conceptId(field, concept)));
    document.querySelector("#mastered-count").textContent = `${items.length} 个`;
    document.querySelector("#mastered-list").innerHTML = items.length ? items.map(({ field, concept, index }) => `<button class="mastered-card" type="button" data-mastered-field="${field.id}" data-mastered-index="${index}"><span>${field.id === "python" ? "Py" : "心"}</span><strong>${esc(concept[1])}</strong><small>${esc(concept[0])} · ${esc(concept[3])}</small></button>`).join("") : `<p class="mastered-empty">完成“已掌握”反馈后，概念会出现在这里，方便集中回顾。</p>`;
    document.querySelectorAll("[data-mastered-field]").forEach((button) => button.addEventListener("click", () => {
      activeField = fields.find((field) => field.id === button.dataset.masteredField) || fields[0];
      activeIndex = Number(button.dataset.masteredIndex);
      window.history.replaceState({}, "", `special-english.html?field=${activeField.id}`);
      feedbackNotice = "正在回顾已掌握概念";
      render();
      document.querySelector("#concept-detail").scrollIntoView({ behavior: "smooth", block: "center" });
    }));
  }

  function moveConcept(offset) {
    const indexes = visibleIndexes();
    const position = indexes.indexOf(activeIndex);
    const nextIndex = indexes[position + offset];
    if (nextIndex === undefined) return;
    activeIndex = nextIndex;
    feedbackNotice = offset > 0 ? "已切换到下一个概念" : "已切换到上一个概念";
    render();
  }

  function handleFeedback(type) {
    const concept = activeField.concepts[activeIndex];
    const mastered = readMastered();
    if (type === "mastered") {
      mastered.add(conceptId(activeField, concept));
      feedbackState = "mastered";
      feedbackNotice = `已掌握“${concept[1]}”，可以继续学习或在下方回顾`;
    } else {
      mastered.delete(conceptId(activeField, concept));
      feedbackState = "review";
      feedbackNotice = `已标记“${concept[1]}”为未掌握，之后可以再次回顾`;
    }
    localStorage.setItem(masteredKey, JSON.stringify([...mastered]));
    render();
    document.querySelector(".concept-feedback").classList.remove("feedback-pulse");
    requestAnimationFrame(() => document.querySelector(".concept-feedback").classList.add("feedback-pulse"));
  }

  function render() {
    document.body.dataset.specialField = activeField.id;
    fieldTitle.textContent = activeField.label;
    fieldKicker.textContent = activeField.kicker;
    conceptCount.textContent = `${activeField.concepts.length} 个概念 · ${new Set(activeField.concepts.map((concept) => concept[3])).size} 个分类`;
    renderFields();
    renderConcepts();
    renderDetail();
    renderFeedback();
    renderMasteredLibrary();
  }

  function renderRoute() {
    const selectedField = new URLSearchParams(window.location.search).get("field");
    const hasSelectedField = fields.some((field) => field.id === selectedField);
    landing.hidden = hasSelectedField;
    detailLayout.hidden = !hasSelectedField;
    if (hasSelectedField) render();
  }

  document.querySelector("[data-concept-prev]").addEventListener("click", () => moveConcept(-1));
  document.querySelector("[data-concept-next]").addEventListener("click", () => moveConcept(1));
  document.querySelectorAll("[data-feedback]").forEach((button) => button.addEventListener("click", () => handleFeedback(button.dataset.feedback)));
  detail.addEventListener("touchstart", (event) => { const touch = event.changedTouches[0]; touchStartX = touch.clientX; touchStartY = touch.clientY; }, { passive: true });
  detail.addEventListener("touchend", (event) => { const touch = event.changedTouches[0]; const deltaX = touch.clientX - touchStartX; const deltaY = touch.clientY - touchStartY; if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) moveConcept(deltaX < 0 ? 1 : -1); }, { passive: true });
  document.addEventListener("keydown", (event) => { if (event.target.closest("input, textarea, button")) return; if (event.key === "ArrowLeft") moveConcept(-1); if (event.key === "ArrowRight") moveConcept(1); });

  renderRoute();
})();
