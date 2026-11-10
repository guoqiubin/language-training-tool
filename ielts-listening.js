(function () {
  "use strict";

  const questions = [
    { context: "课程报名", prompt: "What is the student's first name?", sentence: "My first name is Daniel.", answer: ["Daniel"], requirement: "NO MORE THAN TWO WORDS", meaning: "我的名字是 Daniel。", explanation: "先锁定 first name。答案只需要填写名字 Daniel，不需要抄写完整句子。" },
    { context: "课程报名", prompt: "What is the student's preferred class?", sentence: "I would prefer the evening class.", answer: ["evening class"], requirement: "NO MORE THAN TWO WORDS", meaning: "我更喜欢晚上的课程。", explanation: "prefer 后面的信息是考点。注意 evening class 是两个单词，不能再添加 the。" },
    { context: "城市交通", prompt: "Where should the visitor get off?", sentence: "Please get off at Central Station.", answer: ["Central Station"], requirement: "NO MORE THAN TWO WORDS", meaning: "请在中央车站下车。", explanation: "get off at 后面通常接下车地点。专有名词要注意拼写和首字母。" },
    { context: "酒店预订", prompt: "How many nights will the guest stay?", sentence: "We will stay for three nights.", answer: ["three", "3"], requirement: "NO MORE THAN TWO WORDS AND/OR A NUMBER", meaning: "我们会住三个晚上。", explanation: "for 后面给出住宿时长。three 或 3 都符合数字信息的填写方式。" },
    { context: "购物信息", prompt: "How much is the membership?", sentence: "The membership costs fifteen dollars.", answer: ["fifteen dollars", "15 dollars", "15"], requirement: "NO MORE THAN TWO WORDS AND/OR A NUMBER", meaning: "会员费是十五美元。", explanation: "costs 后面是价格。答案可以写 fifteen dollars，也可以写数字形式。" },
    { context: "图书馆服务", prompt: "What does the student need to bring?", sentence: "You need to bring your student card.", answer: ["student card"], requirement: "NO MORE THAN TWO WORDS", meaning: "你需要带学生卡。", explanation: "need to bring 后面的名词短语就是答案。不要把 your 一起写入答案。" },
    { context: "会议安排", prompt: "When will the meeting begin?", sentence: "The meeting will begin at nine thirty.", answer: ["nine thirty", "9:30"], requirement: "NO MORE THAN TWO WORDS AND/OR A NUMBER", meaning: "会议将在九点三十分开始。", explanation: "begin at 后面是时间信息。听到时间后先确认是开始时间，而不是结束时间。" },
    { context: "社区活动", prompt: "What activity will the group do?", sentence: "The group will plant trees in the park.", answer: ["plant trees"], requirement: "NO MORE THAN TWO WORDS", meaning: "小组将在公园植树。", explanation: "will 后面的动作是 plant trees。这里考查动词和宾语组成的短语。" }
  ];

  const $ = (selector) => document.querySelector(selector);
  const input = $("[data-listening-input]");
  const playButton = $("[data-listening-play]");
  const play = (rate) => {
    const item = questions[state.index];
    if (window.playEnglishText) window.playEnglishText(item.sentence, { rate, onStart: () => { playButton.textContent = "▶ 播放中"; }, onEnd: () => { playButton.textContent = "▶ 播放"; } });
  };
  const state = { index: 0, completed: new Set(), submitted: false };
  const normalize = (value) => value.trim().toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, " ");
  const wordCount = (value) => normalize(value).split(" ").filter(Boolean).length;
  const render = () => {
    const item = questions[state.index];
    $("[data-listening-index]").textContent = `QUESTION ${String(state.index + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
    $("[data-listening-context]").textContent = `场景：${item.context}`;
    $("[data-listening-prompt]").textContent = item.prompt;
    $("[data-listening-requirement]").textContent = item.requirement;
    $("[data-listening-answer]").textContent = item.answer[0];
    $("[data-listening-transcript]").textContent = item.sentence;
    $("[data-listening-meaning]").textContent = item.meaning;
    $("[data-listening-explanation]").textContent = item.explanation;
    $("[data-listening-feedback]").textContent = "";
    $("[data-listening-panel]").hidden = true;
    $("[data-listening-reveal]").setAttribute("aria-expanded", "false");
    $("[data-listening-reveal]").innerHTML = "查看答案与解析 <span>＋</span>";
    input.value = "";
    $("[data-listening-count]").textContent = state.completed.size;
    $("[data-listening-progress]").style.width = `${(state.completed.size / questions.length) * 100}%`;
    $("[data-listening-prev]").disabled = state.index === 0;
  };

  $("[data-listening-play]").addEventListener("click", () => play(0.9));
  $("[data-listening-slow]").addEventListener("click", () => play(0.62));
  $("[data-listening-reveal]").addEventListener("click", () => {
    const panel = $("[data-listening-panel]");
    const open = panel.hidden;
    panel.hidden = !open;
    $("[data-listening-reveal]").setAttribute("aria-expanded", String(open));
    $("[data-listening-reveal]").innerHTML = open ? "收起答案与解析 <span>−</span>" : "查看答案与解析 <span>＋</span>";
  });
  $("[data-listening-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = normalize(input.value);
    const feedback = $("[data-listening-feedback]");
    if (!value) { feedback.className = "listening-feedback is-warning"; feedback.textContent = "请先填写你的答案。"; return; }
    if (wordCount(value) > 2 && !questions[state.index].requirement.includes("AND/OR")) { feedback.className = "listening-feedback is-warning"; feedback.textContent = "答案不能超过两个单词，请重新检查。"; return; }
    const correct = questions[state.index].answer.some((answer) => normalize(answer) === value);
    feedback.className = `listening-feedback ${correct ? "is-correct" : "is-wrong"}`;
    feedback.textContent = correct ? "回答正确。可以打开解析，确认你听到的关键信息。" : "暂时不一致。可以再听一遍，再查看答案与解析。";
    if (correct) state.completed.add(state.index);
    $("[data-listening-count]").textContent = state.completed.size;
    $("[data-listening-progress]").style.width = `${(state.completed.size / questions.length) * 100}%`;
  });
  $("[data-listening-prev]").addEventListener("click", () => { if (state.index > 0) { state.index -= 1; render(); } });
  $("[data-listening-next]").addEventListener("click", () => { if (state.index < questions.length - 1) { state.index += 1; render(); } });
  render();
})();
