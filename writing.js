(function () {
  const content = {
    beginner: {
      label: "入门", note: "写清楚基本信息", tasks: [
        { category: "自我介绍", title: "介绍你自己", prompt: "请用 3–5 句英文介绍自己，包括姓名、身份和一个兴趣。", requirements: ["使用 My name is...", "使用 I am...", "加入一个兴趣"], target: "建议 30–50 词", sample: "My name is Leo. I am a student. I like music and I enjoy learning English. I practice for a few minutes every day.", translation: "我叫 Leo。我是一名学生。我喜欢音乐，也喜欢学习英语。我每天练习几分钟。", analysis: "先用 My name is... 提供姓名，再用 I am... 说明身份，最后用 I like... 或 I enjoy... 补充个人信息。", expressions: [["I am a student.", "我是一名学生。"], ["I enjoy learning English.", "我喜欢学习英语。"]] },
        { category: "日常习惯", title: "写写你的日常", prompt: "请写几句话介绍你每天的学习习惯，以及你为什么这样安排。", requirements: ["使用 I usually...", "使用 because", "表达一个时间"], target: "建议 40–60 词", sample: "I usually study English in the evening. I read a short text and repeat a few sentences. I do this because I want to speak more clearly.", translation: "我通常在晚上学习英语。我会读一小段文章，并重复几句话。这样做是因为我想说得更清楚。", analysis: "用 usually 表达习惯，用 and 连接两个动作，再用 because 解释原因。先写做什么，再写为什么。", expressions: [["I usually study...", "我通常学习……"], ["I do this because...", "我这样做是因为……"]] }
      ]
    },
    intermediate: {
      label: "进阶", note: "写出完整经历", tasks: [
        { category: "日常沟通", title: "改约一次见面", prompt: "请给朋友写一封短消息，说明你需要改约见面，并提出新的时间。", requirements: ["说明原计划", "解释原因", "提出新时间"], target: "建议 80–100 词", sample: "Hi Maya, I’m sorry, but I need to reschedule our meeting on Friday. Something urgent came up at work, and I may not be free in the afternoon. Would Saturday morning work for you? Please let me know.", translation: "嗨，Maya。不好意思，我需要改一下周五的见面时间。工作上突然有急事，我下午可能没有空。周六上午你方便吗？请告诉我。", analysis: "先礼貌说明需要改约，再用 but 和 because 解释原因，最后用 Would... work for you? 提出替代方案。", expressions: [["I need to reschedule...", "我需要改约……"], ["Would ... work for you?", "……对你来说方便吗？"]] },
        { category: "经历叙述", title: "分享一次小经历", prompt: "请描述一次你最近完成的事情，包括发生了什么、你的感受和结果。", requirements: ["使用过去时", "加入感受", "说明结果"], target: "建议 80–120 词", sample: "Last week, I gave a short presentation in English. I was nervous at first, but I prepared carefully and practiced several times. In the end, I finished it successfully and felt more confident than before.", translation: "上周，我用英语做了一次简短的演讲。一开始我很紧张，但我认真准备并练习了好几次。最后我顺利完成了演讲，也比以前更有信心。", analysis: "按时间顺序组织：Last week 交代背景，but 表示转折，In the end 总结结果。叙述经历时，不要只列事实，也要补充感受。", expressions: [["I was nervous at first.", "一开始我很紧张。"], ["In the end...", "最后……"]] }
      ]
    },
    proficient: {
      label: "熟练", note: "表达观点与理由", tasks: [
        { category: "观点表达", title: "谈谈远程工作", prompt: "请表达你对远程工作的看法，说明一个优点、一个限制，并给出你的判断。", requirements: ["明确表达观点", "使用对比", "给出结论"], target: "建议 150–180 词", sample: "In my view, remote work offers greater flexibility and can help people manage their time more effectively. However, it may also reduce spontaneous communication within a team. For that reason, I believe a hybrid model is often more practical than working entirely online.", translation: "在我看来，远程工作提供了更大的灵活性，也能帮助人们更有效地管理时间。然而，它也可能减少团队中的即时沟通。因此，我认为混合办公通常比完全线上办公更实际。", analysis: "用 In my view 引出观点，用 However 转入限制，再用 For that reason 推出结论。熟练阶段要让每个观点之间有清晰的逻辑关系。", expressions: [["In my view...", "在我看来……"], ["For that reason...", "因此……"]] },
        { category: "问题解决", title: "提出一个改进方案", prompt: "请描述一个学习或工作中的问题，并提出一个可执行的改进方案。", requirements: ["定义问题", "解释影响", "提出方案"], target: "建议 150–200 词", sample: "The main challenge is that our meetings often run over time, which makes it difficult to focus on the most important decisions. A simple solution would be to share an agenda in advance and set a time limit for each topic. This would make the discussion more focused and give everyone a clearer sense of responsibility.", translation: "主要问题是我们的会议经常超时，这使我们很难专注于最重要的决定。一个简单的解决办法是提前分享议程，并为每个议题设定时间限制。这样可以让讨论更集中，也让每个人更清楚自己的责任。", analysis: "先用 The main challenge is that 定义问题，再用 which 补充影响，最后用 A simple solution would be... 提出方案并解释预期效果。", expressions: [["The main challenge is that...", "主要挑战是……"], ["A simple solution would be...", "一个简单的解决办法是……"]] }
      ]
    },
    advanced: {
      label: "精通", note: "处理复杂论证", tasks: [
        { category: "正式写作", title: "写一封问题说明邮件", prompt: "请写一封正式邮件，向同事说明项目延误的原因、影响和下一步安排。", requirements: ["保持正式语气", "区分事实与判断", "提出下一步"], target: "建议 220–280 词", sample: "Dear team, I’m writing to provide an update on the project timeline. The latest delay was caused by a change in the testing requirements, which required additional review from the engineering team. Although this affects our original launch date, we can reduce the impact by prioritizing the remaining critical tasks. I suggest that we meet tomorrow to confirm the revised schedule and assign clear owners.", translation: "团队各位好，我写信是为了更新项目进度。最近的延误是由测试要求的变化造成的，这需要工程团队进行额外审核。虽然这会影响原定上线日期，但我们可以通过优先处理剩余的关键任务来降低影响。我建议明天开会确认修订后的时间表，并明确负责人。", analysis: "正式写作要有清晰的开头、事实说明、影响判断和行动建议。Although... 让你承认不利影响，同时把重点带回可执行的解决方案。", expressions: [["I’m writing to provide an update on...", "我写信是为了更新……"], ["We can reduce the impact by...", "我们可以通过……降低影响。"]] },
        { category: "比较决策", title: "比较两个方案", prompt: "请比较两个学习方案，并向读者推荐其中一个，说明你的判断依据。", requirements: ["比较优缺点", "使用让步关系", "明确推荐"], target: "建议 220–300 词", sample: "Both options have clear advantages. A self-paced course offers flexibility and allows learners to review difficult material, whereas a scheduled class provides stronger accountability and more immediate feedback. While the first option may suit highly independent learners, I would recommend the scheduled class for most beginners because consistent practice is more likely to become a lasting habit.", translation: "两个方案都有明显的优点。自主学习课程提供灵活性，允许学习者复习困难内容；而固定课程则提供更强的督促和更及时的反馈。虽然第一种方案可能适合高度独立的学习者，但我会向大多数初学者推荐固定课程，因为持续练习更可能形成长期习惯。", analysis: "先承认双方优势，再用 whereas 建立对比，用 While... 处理例外情况，最后给出带有依据的推荐。", expressions: [["Both options have clear advantages.", "两个方案都有明显优点。"], ["I would recommend... because...", "我会推荐……因为……"]] }
      ]
    },
    natural: {
      label: "地道表达", note: "写得自然有分寸", tasks: [
        { category: "自然改写", title: "把表达写得更自然", prompt: "请把一个生硬的观点改写成自然、克制、像真实交流的英文，并保留原意。", requirements: ["避免逐字翻译", "加入自然衔接", "保持语气克制"], target: "建议 180–240 词", sample: "I understand why some people prefer a completely online approach. It is convenient, and it can work well when learners already know how to organize their time. That said, I still find regular interaction valuable, especially when someone is trying to build confidence. A balanced approach may not be perfect for everyone, but it is often easier to sustain.", translation: "我理解为什么有些人更喜欢完全线上的方式。它很方便，而且当学习者已经知道如何安排时间时，效果可能很好。不过，我仍然认为定期互动很有价值，尤其是当一个人正在建立信心时。平衡的方式不一定适合所有人，但通常更容易坚持。", analysis: "地道表达不只是换更难的词，而是让语气有缓冲：I understand..., That said..., may not be perfect... 都能避免表达过于绝对。", expressions: [["That said...", "不过话说回来……"], ["It may not be perfect, but...", "它可能并不完美，但……"]] },
        { category: "细腻观点", title: "写出有分寸的看法", prompt: "请就一个你在意的话题表达看法，既要说明立场，也要承认其他观点有合理之处。", requirements: ["表达立场", "承认另一面", "给出平衡结论"], target: "建议 250–320 词", sample: "I used to think that productivity was mainly a matter of discipline. I still believe consistency matters, but I have come to see that the environment around us plays a role as well. A clear plan is useful, yet it does not solve everything when the task itself is unclear or emotionally demanding. In the end, sustainable progress seems to depend on both personal effort and a realistic understanding of our limits.", translation: "我过去认为效率主要取决于自律。我仍然相信持续性很重要，但我逐渐意识到，周围的环境也会发挥作用。清晰的计划很有用，但当任务本身不明确或在情绪上很有压力时，它并不能解决所有问题。归根结底，可持续的进步似乎取决于个人努力，也取决于对自身局限的现实理解。", analysis: "用 I used to... 表示观点变化，用 but 和 as well 扩展视角，再用 In the end 总结一个不绝对的结论，这种结构更接近真实写作。", expressions: [["I have come to see that...", "我逐渐意识到……"], ["In the end...", "归根结底……"]] }
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  let level = content[params.get("level")] ? params.get("level") : (localStorage.getItem("writing-level") || "beginner");
  if (!content[level]) level = "beginner";
  let index = 0;
  const $ = (id) => document.getElementById(id);
  const currentTask = () => content[level].tasks[index];
  const progressKey = () => "writing-progress-" + level;
  function getCompleted() { try { return JSON.parse(localStorage.getItem(progressKey()) || "{\"completed\":[]}").completed || []; } catch (error) { return []; } }
  function saveDraft() { localStorage.setItem("writing-draft-" + level + "-" + index, $("writing-editor").value); $("writing-save-status").textContent = "已保存到当前浏览器"; }
  function updateCount() { const words = $("writing-editor").value.trim().split(/\s+/).filter(Boolean); $("writing-count").textContent = (words[0] ? words.length : 0) + " words"; }
  function renderLevels() { $("writing-level-list").innerHTML = Object.keys(content).map(function (key) { const item = content[key]; return '<button class="writing-level ' + (key === level ? "active" : "") + '" type="button" data-level="' + key + '"><strong>' + item.label + '</strong><small>' + item.tasks.length + ' 个任务 · ' + item.note + '</small></button>'; }).join(""); }
  function render() {
    const task = currentTask();
    $("writing-position").textContent = index + 1; $("writing-total").textContent = content[level].tasks.length; $("writing-category").textContent = task.category; $("writing-level-label").textContent = content[level].label; $("writing-title").textContent = task.title; $("writing-prompt").textContent = task.prompt; $("writing-requirements").innerHTML = task.requirements.map(function (text) { return "<span>" + text + "</span>"; }).join(""); $("writing-target").textContent = task.target;
    $("writing-editor").value = localStorage.getItem("writing-draft-" + level + "-" + index) || ""; $("writing-save-status").textContent = $("writing-editor").value ? "已恢复本地草稿" : "尚未保存"; updateCount(); $("writing-answer").hidden = true; $("reveal-writing").setAttribute("aria-expanded", "false"); $("writing-feedback").textContent = getCompleted().indexOf(index) >= 0 ? "这个任务已经完成，你可以继续复盘或进入下一个任务。" : "";
    $("writing-sample").textContent = task.sample; $("writing-translation").textContent = task.translation; $("writing-analysis").textContent = task.analysis; $("writing-expressions").innerHTML = task.expressions.map(function (pair) { return "<li><strong>" + pair[0] + "</strong>：" + pair[1] + "</li>"; }).join(""); renderLevels();
  }
  function selectLevel(nextLevel) { if (!content[nextLevel]) return; level = nextLevel; index = 0; localStorage.setItem("writing-level", level); const url = new URL(window.location.href); url.searchParams.set("level", level); history.replaceState({}, "", url); render(); }
  document.addEventListener("click", function (event) { const levelButton = event.target.closest("[data-level]"); if (levelButton) selectLevel(levelButton.dataset.level); });
  $("writing-editor").addEventListener("input", function () { updateCount(); saveDraft(); });
  $("complete-writing").addEventListener("click", function () { saveDraft(); const completed = getCompleted(); if (completed.indexOf(index) < 0) completed.push(index); localStorage.setItem(progressKey(), JSON.stringify({ completed: completed })); $("writing-feedback").textContent = "已完成并保存。现在可以查看范文，或继续下一个任务。"; });
  $("reveal-writing").addEventListener("click", function () { const answer = $("writing-answer"); answer.hidden = !answer.hidden; this.setAttribute("aria-expanded", String(!answer.hidden)); });
  $("next-writing").addEventListener("click", function () { index = (index + 1) % content[level].tasks.length; render(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  $("speak-writing").addEventListener("click", function () { if (window.speechSynthesis) { window.speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(currentTask().sample); utterance.lang = "en-US"; utterance.rate = .9; window.speechSynthesis.speak(utterance); } });
  render();
})();
