(() => {
  "use strict";

  const content = {
    beginner: {
      label: "入门",
      items: [
        { category: "日常表达", prompt: "我每天学习英语。", hint: "提示：想想“每天”应该放在句子的什么位置。", answers: [["参考表达 1", "I study English every day.", "最直接、最常用的日常表达。"], ["参考表达 2", "I learn English every day.", "learn 更强调学习过程。"], ["参考表达 3", "I practice English every day.", "practice 更强调反复练习。"]], analysis: "主干是 I + 动词 + English。every day 放在句末，说明动作发生的频率。study、learn 和 practice 都可以表达“学习”，但侧重点不同。", words: [["study", "学习"], ["practice", "练习"], ["every day", "每天"]] },
        { category: "日常动作", prompt: "请把门打开。", hint: "提示：这是一个礼貌的请求。", answers: [["参考表达 1", "Please open the door.", "最清楚、最适合初学者的说法。"], ["参考表达 2", "Could you open the door, please?", "语气更委婉，适合请求别人帮忙。"], ["参考表达 3", "Would you mind opening the door?", "更礼貌，字面是“你介意开门吗？”"]], analysis: "please 可以放在句首或句末。Could you... 和 Would you mind... 都能让请求更柔和，但后面的动词结构不同。", words: [["open", "打开"], ["door", "门"], ["please", "请"]] },
        { category: "自我表达", prompt: "我现在有点累。", hint: "提示：用 be 动词连接主语和状态。", answers: [["参考表达 1", "I'm a little tired now.", "自然、完整的日常说法。"], ["参考表达 2", "I feel a bit tired right now.", "强调“感觉有些累”。"], ["参考表达 3", "I'm feeling kind of tired.", "更口语、更轻松的表达。"]], analysis: "tired 是形容词，需要和 am / 'm 一起使用。a little、a bit 和 kind of 都能表达“有一点”，语气略有不同。", words: [["tired", "累的"], ["feel", "感觉"], ["right now", "此刻"]] }
      ]
    },
    intermediate: {
      label: "进阶",
      items: [
        { category: "工作沟通", prompt: "我会在下午把文件发给你。", hint: "提示：表达将来的安排。", answers: [["参考表达 1", "I'll send you the file this afternoon.", "自然直接，适合日常工作沟通。"], ["参考表达 2", "I'll send the file over this afternoon.", "send ... over 更口语。"], ["参考表达 3", "You'll have the file from me this afternoon.", "强调对方会在下午收到文件。"]], analysis: "send 后面可以直接接人和物：send you the file。this afternoon 是明确的时间信息，放在句末最自然。", words: [["send", "发送"], ["file", "文件"], ["this afternoon", "今天下午"]] },
        { category: "计划安排", prompt: "如果你有时间，我们可以一起讨论这个问题。", hint: "提示：先说条件，再说结果。", answers: [["参考表达 1", "If you have time, we can discuss this together.", "结构清楚，适合一般交流。"], ["参考表达 2", "If you're free, we could talk this through together.", "更口语，talk this through 表示把问题讨论清楚。"], ["参考表达 3", "We could go over this together if you have a moment.", "语气更委婉，也更像工作场景。"]], analysis: "if 引导条件，主句用 can 或 could 表达可能性。talk this through 和 go over 都比简单的 discuss 更有具体语境。", words: [["discuss", "讨论"], ["together", "一起"], ["if", "如果"]] },
        { category: "表达原因", prompt: "我迟到了，因为路上交通很拥堵。", hint: "提示：先说明事实，再补充原因。", answers: [["参考表达 1", "I was late because traffic was really bad.", "最自然、最常用。"], ["参考表达 2", "Sorry I'm late—the traffic was terrible.", "更像真实道歉时的口语。"], ["参考表达 3", "I got held up in heavy traffic.", "更简洁，held up 表示被耽搁。"]], analysis: "be late 是“迟到”的固定表达。heavy traffic 和 bad traffic 都可以表示交通拥堵；got held up 更强调“被堵住、耽搁了”。", words: [["late", "迟到的"], ["traffic", "交通"], ["hold up", "耽搁"]] }
      ]
    },
    proficient: {
      label: "熟练",
      items: [
        { category: "表达观点", prompt: "我理解你的担忧，但我认为这个方案仍然值得尝试。", hint: "提示：先承认对方，再提出自己的判断。", answers: [["参考表达 1", "I understand your concern, but I still think this approach is worth trying.", "稳妥、清晰，适合正式讨论。"], ["参考表达 2", "I see where you're coming from, but I believe this is still worth a shot.", "更自然、更有对话感。"], ["参考表达 3", "Your concern is fair. That said, I think we should give this approach a try.", "先认可，再转入建议，语气更成熟。"]], analysis: "I see where you're coming from 是很自然的“我理解你的立场”。That said 用来承认前文后转折；worth a shot 比 worth trying 更口语。", words: [["concern", "担忧"], ["approach", "方案；方法"], ["worth a shot", "值得一试"]] },
        { category: "协作沟通", prompt: "在我们做出决定之前，我想先确认每个人都理解下一步。", hint: "提示：注意 before 从句和确认信息的表达。", answers: [["参考表达 1", "Before we make a decision, I'd like to make sure everyone understands the next step.", "清晰、稳妥的会议表达。"], ["参考表达 2", "I'd like to make sure we're all clear on the next step before we decide.", "更简洁自然，适合口头沟通。"], ["参考表达 3", "Before moving forward, can we confirm that everyone is on the same page?", "on the same page 是“理解一致”的固定表达。"]], analysis: "make sure 后面可以接完整从句。move forward 表示推进；be on the same page 不是字面上的“在同一页”，而是确认团队理解一致。", words: [["make sure", "确保"], ["move forward", "推进"], ["on the same page", "理解一致"]] },
        { category: "处理分歧", prompt: "我不一定同意这个结论，但我愿意听听你是怎么得出这个结论的。", hint: "提示：先保留意见，再表达开放态度。", answers: [["参考表达 1", "I don't necessarily agree with that conclusion, but I'd like to hear how you arrived at it.", "成熟、克制的表达。"], ["参考表达 2", "I'm not sure I agree, but I'm open to hearing your reasoning.", "更简洁，也更适合口头讨论。"], ["参考表达 3", "I may see it differently, though I'd be interested to understand your perspective.", "语气更柔和，避免直接否定。"]], analysis: "not necessarily 比直接说 I disagree 更有保留。be open to 和 be interested to 都是在表达愿意继续交流；arrive at a conclusion 是正式搭配。", words: [["necessarily", "必然地"], ["reasoning", "推理；理由"], ["perspective", "观点；视角"]] }
      ]
    }
  };

  const $ = (id) => document.getElementById(id);
  const queryLevel = new URLSearchParams(window.location.search).get("level");
  let level = content[queryLevel] ? queryLevel : "beginner";
  let index = 0;
  let currentAnswerText = "";
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  };
  const render = () => {
    const pack = content[level];
    const item = pack.items[index];
    currentAnswerText = item.answers[0][1];
    $("translation-position").textContent = String(index + 1);
    $("translation-total").textContent = String(pack.items.length);
    $("translation-category").textContent = item.category;
    $("translation-level-label").textContent = pack.label + " · 题目 " + (index + 1) + " / " + pack.items.length;
    $("translation-prompt-text").textContent = item.prompt;
    $("translation-hint").textContent = item.hint;
    $("translation-answer").hidden = true;
    $("reveal-answer").hidden = false;
    $("next-question").hidden = true;
    $("translation-answer-list").innerHTML = item.answers.map((answer) => '<div class="answer-item"><span class="answer-label">' + answer[0] + '</span><div><strong>' + answer[1] + '</strong><small>' + answer[2] + '</small></div></div>').join("");
    $("translation-analysis-text").textContent = item.analysis;
    $("translation-vocabulary-list").innerHTML = '<div class="translation-vocabulary-list">' + item.words.map((word) => '<span class="vocab-chip"><b>' + word[0] + '</b><small>' + word[1] + '</small></span>').join("") + "</div>";
    document.querySelectorAll(".translation-level").forEach((button) => { button.classList.toggle("active", button.dataset.level === level); button.setAttribute("aria-selected", String(button.dataset.level === level)); });
  };
  document.querySelectorAll(".translation-level").forEach((button) => button.addEventListener("click", () => {
    level = button.dataset.level;
    index = 0;
    const url = new URL(window.location.href);
    url.searchParams.set("level", level);
    window.history.replaceState({}, "", url);
    document.querySelectorAll(".translation-level").forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", String(item === button));
    });
    render();
  }));
  $("reveal-answer").addEventListener("click", () => {
    $("translation-answer").hidden = false;
    $("reveal-answer").hidden = true;
    $("next-question").hidden = false;
  });
  $("next-question").addEventListener("click", () => {
    index = (index + 1) % content[level].items.length;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("translation-answer").querySelector("[data-speak-answer]").addEventListener("click", () => speak(currentAnswerText));
  render();
})();
