const levels = [
  { id: "beginner", label: "入门" },
  { id: "intermediate", label: "进阶" },
  { id: "proficient", label: "熟练" },
  { id: "advanced", label: "精通" },
  { id: "natural", label: "地道表达" }
];
const levelOverviews = {
  beginner: {
    kicker: "CURRENT LEVEL · BEGINNER",
    title: "入门：先把声音和短句说清楚",
    copy: "这一阶段适合零基础学习者。你会从美式音标、自然拼读和高频短句开始，先建立“听得见、读得准、敢开口”的基础。",
    points: ["认识美式发音", "掌握高频短句", "建立开口信心"],
    today: "从美式音标开始，让每一次开口更清楚。"
  },
  intermediate: {
    kicker: "CURRENT LEVEL · INTERMEDIATE",
    title: "进阶：完成更多日常交流",
    copy: "你已经不只是记住单句，而是开始把句子放进真实场景。这个阶段会加强日常回应、提问和表达需求，让交流变得更连贯。",
    points: ["连接多个短句", "应对日常问答", "说清楚基本需求"],
    today: "从日常场景开始，把会的句子真正用起来。"
  },
  proficient: {
    kicker: "CURRENT LEVEL · PROFICIENT",
    title: "熟练：连续表达自己的想法",
    copy: "熟练阶段的目标，是从“会说一句”走向“能说一段”。你会练习更长的表达、自然的衔接和真实对话中的回应，在熟悉的话题里更完整地表达观点。",
    points: ["组织连续表达", "处理真实对话", "表达个人观点"],
    path: ["提出观点", "补充理由", "回应异议", "达成结论"],
    today: "从连续表达开始，让想法自然地说出来。"
  },
  advanced: {
    kicker: "CURRENT LEVEL · ADVANCED",
    title: "精通：处理复杂真实话题",
    copy: "精通阶段关注更复杂的沟通任务。你会练习解释、比较、讨论和澄清，在工作与生活中面对更长、更开放的问题。",
    points: ["讨论复杂话题", "解释原因与观点", "灵活应对追问"],
    today: "从真实话题开始，练习更完整、更有逻辑的表达。"
  },
  natural: {
    kicker: "CURRENT LEVEL · NATURAL",
    title: "地道表达：说出自然的语气和搭配",
    copy: "这一阶段不只追求“说对”，还要关注语气、节奏和表达习惯。你会学习更自然的搭配，让英语听起来更像真实交流。",
    points: ["掌握自然搭配", "调整语气节奏", "提升表达分寸感"],
    today: "从语气和搭配开始，让表达更自然。"
  }
};
const moduleTotals = { phonetics: 41, phonics: 6, vocabulary: 60, speaking: 60, translation: 3 };
const levelModuleTotals = { beginner: moduleTotals, intermediate: { translation: 3 }, proficient: { speaking: 40, translation: 3 }, advanced: { translation: 3 }, natural: { translation: 3 } };
const bankSceneEntry = ["bank", "银行场景", "从办理业务到解决问题", "真实办事"];
const sceneCatalog = {
  beginner: [
    bankSceneEntry,
    ["intro", "自我介绍", "第一次见面，先把自己介绍清楚", "认识与介绍"],
    ["needs", "表达需求", "在生活中说出我想要什么", "需求表达"],
    ["response", "日常回应", "听懂之后，自然接住对方的话", "日常交流"],
    ["food", "点餐购物", "在餐厅和商店里说清楚", "生活场景"],
    ["travel", "出行问路", "在路上解决简单问题", "出行沟通"],
    ["social", "简单社交", "和别人自然聊几句", "轻松聊天"]
  ],
  intermediate: [bankSceneEntry],
  proficient: [
    bankSceneEntry,
    ["opinions", "观点表达", "提出观点、补充理由、回应异议", "能力 01"],
    ["stories", "经历叙述", "交代背景、推进经过、总结收获", "能力 02"],
    ["compare", "比较选择", "比较差异、表达优先级、说明决定", "能力 03"],
    ["problem", "问题解决", "定位问题、提出方案、推进执行", "能力 04"],
    ["meetings", "会议协作", "提出议程、澄清分工、确认下一步", "能力 05"],
    ["feedback", "反馈沟通", "给出具体而有分寸的反馈", "能力 06"],
    ["planning", "计划安排", "说明优先级、时间安排和备选方案", "能力 07"],
    ["negotiation", "协商取舍", "说明限制、提出交换、达成方案", "能力 08"]
  ],
  advanced: [bankSceneEntry],
  natural: [bankSceneEntry]
};
const queryLevel = new URLSearchParams(window.location.search).get("level");
let currentLevel = levels.some((level) => level.id === queryLevel) ? queryLevel : (localStorage.getItem("training-level") || "beginner");
if (!levels.some((level) => level.id === currentLevel)) currentLevel = "beginner";

function readCompletedCount(storageKey, valueField = null, fallbackStorageKey = null) {
  try {
    const storedValue = localStorage.getItem(storageKey) ?? (fallbackStorageKey ? localStorage.getItem(fallbackStorageKey) : null);
    const saved = JSON.parse(storedValue || "[]");
    if (valueField) return Array.isArray(saved?.[valueField]) ? saved[valueField].length : 0;
    return Array.isArray(saved) ? saved.length : 0;
  } catch (error) {
    return 0;
  }
}

function renderTrainingProgress() {
  const completed = {
    phonetics: readCompletedCount(`phonetics-completed-${currentLevel}`, null, currentLevel === "beginner" ? "phonetics-completed" : null),
    phonics: readCompletedCount(`phonics-progress-${currentLevel}`, "completed", currentLevel === "beginner" ? "phonics-progress" : null),
    vocabulary: readCompletedCount(`vocabulary-progress-${currentLevel}`, "library", currentLevel === "beginner" ? "vocabulary-library-beginner" : null),
    speaking: readCompletedCount(`speaking-progress-${currentLevel}`, "completed", currentLevel === "beginner" ? "speaking-progress" : null),
    translation: readCompletedCount(`translation-progress-${currentLevel}`, "completed")
  };
  const currentTotals = levelModuleTotals[currentLevel] || {};
  const trackedUnits = Object.values(currentTotals).reduce((sum, total) => sum + total, 0);
  const completedUnits = Object.values(completed).reduce((sum, count) => sum + count, 0);
  const percentage = trackedUnits ? Math.round((completedUnits / trackedUnits) * 100) : 0;
  const levelLabel = levels.find((level) => level.id === currentLevel).label;
  document.querySelector(".progress-strip strong").textContent = `${percentage}%`;
  document.querySelector(".progress-track span").style.width = `${percentage}%`;
  document.querySelector(".progress-strip p").textContent = trackedUnits ? `${levelLabel}已完成 ${completedUnits} / ${trackedUnits} 个基础练习。` : `${levelLabel}内容即将开始，完成后的进度会记录在本等级中。`;
  Object.entries(completed).forEach(([module, count]) => {
    const element = document.querySelector(`[data-module-progress="${module}"]`);
    if (element) element.textContent = currentTotals[module] ? `${count} / ${currentTotals[module]} ${module === "vocabulary" ? "已入词库" : "已完成"}` : "当前等级未开放";
  });
}

function renderLevels() {
  const options = document.querySelector("#level-options");
  if (!options.childElementCount) {
    options.innerHTML = levels.map((level) => `<button class="level-option" data-level="${level.id}" type="button">${level.label}</button>`).join("");
  }
  options.querySelectorAll("[data-level]").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === currentLevel);
    button.setAttribute("aria-pressed", String(button.dataset.level === currentLevel));
  });
  document.querySelectorAll("#level-ladder-track [data-level]").forEach((button) => {
    const isActive = button.dataset.level === currentLevel;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "step" : "false");
  });
}

function renderLevelOverview() {
  const overview = levelOverviews[currentLevel];
  const level = levels.find((item) => item.id === currentLevel);
  const overviewMark = document.querySelector(".level-overview-mark");
  document.querySelector("#level-overview-kicker").textContent = overview.kicker;
  document.querySelector("#level-overview-title").textContent = overview.title;
  document.querySelector("#level-overview-copy").innerHTML = `<p>${overview.copy}</p>`;
  document.querySelector("#level-overview-points").innerHTML = overview.points.map((point) => `<span>${point}</span>`).join("");
  const skillPath = document.querySelector("#level-skill-path");
  skillPath.innerHTML = overview.path ? `<small>本阶段能力路径</small>${overview.path.map((step, index) => `<span>${String(index + 1).padStart(2, "0")} ${step}</span>`).join("<b aria-hidden=\"true\">→</b>")}` : "";
  skillPath.hidden = !overview.path;
  document.querySelector("#today-description").textContent = overview.today;
  overviewMark.textContent = String(levels.indexOf(level) + 1).padStart(2, "0");
  document.querySelector(".level-overview").dataset.level = currentLevel;
}

function renderScenarioEntry() {
  const list = document.querySelector("#scenario-entry-list");
  const note = document.querySelector("#scenario-entry-note");
  if (!list) return;
  const levelLabel = levels.find((level) => level.id === currentLevel)?.label || "当前等级";
  const scenes = sceneCatalog[currentLevel] || [];
  note.textContent = scenes.length ? `当前推荐：${levelLabel} · 选择一个真实场景开始` : `${levelLabel}的场景内容正在准备中`;
  list.innerHTML = scenes.length ? scenes.map(([id, title, description, tag], index) => `<a class="scenario-entry-card" href="speaking.html?level=${encodeURIComponent(currentLevel)}&scene=${encodeURIComponent(id)}"><span class="scenario-entry-number">0${index + 1}</span><span class="scenario-entry-copy"><strong>${title}</strong><small>${description}</small></span><span class="scenario-entry-tag">${tag}</span><span class="scenario-entry-arrow" aria-hidden="true">→</span></a>`).join("") : `<div class="scenario-entry-empty"><strong>${levelLabel}场景内容即将开始</strong><span>你可以先切换到入门或熟练，体验已经开放的口语场景。</span></div>`;
}

function changeLevel(nextLevel) {
  if (!levels.some((level) => level.id === nextLevel) || nextLevel === currentLevel) return;
  currentLevel = nextLevel;
  localStorage.setItem("training-level", currentLevel);
  const url = new URL(window.location.href);
  url.searchParams.set("level", currentLevel);
  window.history.replaceState({}, "", url);
  renderLevels();
  renderLevelOverview();
  renderScenarioEntry();
  renderModuleAvailability();
  renderTrainingProgress();
}

function renderModuleAvailability() {
  const availableModules = currentLevel === "beginner" ? ["phonetics", "phonics", "vocabulary", "speaking", "grammar", "random-sentence", "translation"] : currentLevel === "proficient" ? ["speaking", "translation"] : ["translation"];
  document.body.dataset.level = currentLevel;
  const todayStart = document.querySelector("#today-start");
  if (todayStart) {
    const todayAvailable = currentLevel === "beginner" || currentLevel === "proficient";
    todayStart.href = currentLevel === "proficient" ? "#speaking" : todayAvailable ? "#phonetics" : "#module-title";
    todayStart.classList.toggle("is-disabled", !todayAvailable);
    todayStart.setAttribute("aria-disabled", String(!todayAvailable));
    todayStart.innerHTML = currentLevel === "proficient" ? '开始熟练口语 <span aria-hidden="true">→</span>' : todayAvailable ? '开始训练 <span aria-hidden="true">→</span>' : '当前等级即将开始';
  }
  const phonicsCard = document.querySelector("#phonics");
  if (phonicsCard) phonicsCard.hidden = currentLevel !== "beginner";
  document.querySelectorAll("[data-level-link]").forEach((link) => {
    const baseHref = link.getAttribute("href").split("?")[0];
    const moduleId = baseHref === "phonetics.html" ? "phonetics" : baseHref === "phonics.html" ? "phonics" : baseHref === "vocabulary.html" ? "vocabulary" : baseHref === "speaking.html" ? "speaking" : baseHref === "grammar.html" ? "grammar" : baseHref === "random-sentence.html" ? "random-sentence" : "translation";
    const available = availableModules.includes(moduleId);
    link.setAttribute("href", available ? `${baseHref}${currentLevel === "beginner" ? "" : `?level=${currentLevel}`}` : `${baseHref}?level=${currentLevel}`);
    link.classList.toggle("is-disabled", !available);
    link.setAttribute("aria-disabled", String(!available));
    link.textContent = available ? (baseHref === "phonetics.html" ? "开始训练 →" : baseHref === "phonics.html" ? "开始拼读 →" : baseHref === "vocabulary.html" ? "开始学词 →" : baseHref === "speaking.html" && currentLevel === "proficient" ? "开始熟练口语 →" : baseHref === "translation.html" ? "开始翻译 →" : baseHref === "grammar.html" ? "查看知识卡 →" : "打开句子 →") : "该等级即将开始";
  });
  document.querySelectorAll(".module-card").forEach((card) => card.classList.toggle("level-coming", !availableModules.includes(card.id)));
}

const levelOptions = document.querySelector("#level-options");
levelOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-level]");
  if (button) changeLevel(button.dataset.level);
});
const levelLadder = document.querySelector("#level-ladder-track");
levelLadder.addEventListener("click", (event) => {
  const button = event.target.closest("[data-level]");
  if (button) changeLevel(button.dataset.level);
});
renderLevels();
renderLevelOverview();
renderScenarioEntry();
renderModuleAvailability();
renderTrainingProgress();
window.addEventListener("storage", renderTrainingProgress);
