(() => {
  "use strict";

  const pages = [
    ["首页", "价格表、服务介绍与语言入口", "index.html"],
    ["英语", "英语训练中心、任务中心与专项英语", "english.html"],
    ["泰语", "泰语音标入门训练", "thai.html"],
    ["用户指南", "第一次使用网站的学习路径", "guide.html"],
    ["训练中心", "音标、口语、自然拼读与学习等级", "training-center.html"],
    ["魔兽争霸口语", "趣玩中心 · 游戏英语", "warcraft.html"],
    ["随机一句", "每日一句口语", "random-sentence.html"],
    ["阅读悬赏", "任务中心 · 英语阅读", "reading-rewards.html"],
    ["专项英语", "Python 与心理学专业概念", "special-english.html"],
    ["雅思专区", "雅思听力、写作、阅读与口语", "ielts.html"],
    ["造句训练", "独立专项训练，随时切换难度", "sentence-building.html"],
    ["翻译", "中译英训练与自然表达选择", "translation.html"],
    ["写作", "按等级练习英文写作", "writing.html"],
    ["美式音标", "发音与音标训练", "phonetics.html"],
    ["自然拼读", "从字母声音拼起单词", "phonics.html"],
    ["入门单词", "主题词包、中文释义与例句", "vocabulary.html"],
    ["极简语法", "基础语法知识卡", "grammar.html"],
    ["口语训练", "场景口语练习", "speaking.html"]
  ];
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const header = document.createElement("header");
  header.className = "site-header";
  const currentPath = location.pathname.split("/").pop() || "index.html";
  const isFrench = currentPath === "french.html";
  const isThai = currentPath === "thai.html";
  const currentLanguageFlag = isFrench ? "🇫🇷" : isThai ? "🇹🇭" : "🇺🇸";
  header.innerHTML = `<div class="site-header-inner"><div class="site-language"><button class="site-language-trigger" type="button" aria-expanded="false" aria-label="切换语言"><span class="site-language-flag" aria-hidden="true">${isFrench ? "🇫🇷" : "🇺🇸"}</span><span>⌄</span></button><div class="site-language-menu"><a class="${isFrench ? "" : "active"}" href="index.html"><span class="site-language-flag" aria-hidden="true">🇺🇸</span>English</a><a class="${isFrench ? "active" : ""}" href="french.html"><span class="site-language-flag" aria-hidden="true">🇫🇷</span>Français</a></div></div><a class="site-brand" href="index.html" aria-label="返回首页"><img class="site-brand-avatar" src="assets/avatar.jpg" alt="个人头像" /><span class="site-brand-copy"><strong>ENGLISH TRAINING TOOL</strong><small>Speak with confidence</small></span></a><form class="site-search" role="search"><input id="site-search-input" type="search" autocomplete="off" placeholder="搜索网站内容…" aria-label="搜索网站内容" /><button type="submit" aria-label="搜索">⌕</button><div class="site-search-results" id="site-search-results" hidden></div></form><nav class="site-nav" aria-label="全局导航"><a class="site-nav-link" href="index.html">首页</a><button class="site-nav-link" type="button" data-guide>用户指南</button><button class="site-nav-link" type="button" data-account>我的</button><span class="site-contact"><button class="site-nav-link site-contact-trigger" type="button" aria-expanded="false">联系我</button><span class="site-contact-popover" role="tooltip"><img src="assets/wechat-contact.jpg" alt="微信二维码" /><small>扫码添加微信</small></span></span><button class="site-theme-toggle" type="button" data-theme-toggle><span class="site-theme-dot" aria-hidden="true"></span><span data-theme-label>深夜</span></button><button class="site-icon-button" type="button" aria-label="GitHub（占位）" title="GitHub 功能开发中"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 1-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" /></svg></button></nav></div>`;
  document.body.classList.add("has-site-header");
  document.body.prepend(header);

  // 重点单词卡片：只为有明确视觉联想的词条补充轻量图示。
  // 图示内置在页面中，不依赖外部图片服务；抽象词或未匹配词条保持原布局。
  const wordVisualCatalog = {
    station: ["🚉", "车站"], taxi: ["🚕", "出租车"], hotel: ["🏨", "酒店"], coffee: ["☕", "咖啡"],
    water: ["💧", "水"], menu: ["📋", "菜单"], bill: ["🧾", "账单"], card: ["💳", "卡片"],
    door: ["🚪", "门口"], book: ["📘", "书"], bag: ["👜", "包"], phone: ["📱", "电话"],
    car: ["🚗", "汽车"], home: ["🏠", "家"], house: ["🏠", "房子"], sun: ["☀️", "太阳"],
    fish: ["🐟", "鱼"], dog: ["🐕", "狗"], cat: ["🐈", "猫"], food: ["🍽️", "食物"],
    tea: ["🍵", "茶"], ice: ["🧊", "冰"], meeting: ["👥", "会议"], office: ["🏢", "办公室"],
    work: ["💼", "工作"], team: ["👥", "团队"], problem: ["🧩", "问题"], plan: ["🗺️", "计划"],
    option: ["🔀", "选项"], idea: ["💡", "想法"], time: ["⏱️", "时间"], morning: ["🌤️", "早上"]
  };
  const makeWordVisual = (word, visual) => {
    const media = document.createElement("span");
    media.className = "word-card-media";
    media.setAttribute("aria-hidden", "true");
    const image = document.createElement("img");
    image.alt = word + " 图示";
    image.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect width="96" height="96" rx="18" fill="#ffffff"/><circle cx="48" cy="42" r="27" fill="#edf7ee"/><text x="48" y="51" text-anchor="middle" font-size="30">' + visual[0] + '</text><text x="48" y="82" text-anchor="middle" fill="#548464" font-family="Arial, sans-serif" font-size="10" font-weight="700">' + visual[1] + "</text></svg>"
    );
    media.append(image);
    return media;
  };
  const enhanceWordCards = (root = document) => {
    root.querySelectorAll?.(".word-card").forEach((card) => {
      if (card.querySelector(".word-card-media")) return;
      const source = card.dataset.word || card.querySelector("[data-word]")?.dataset.word || card.querySelector("strong")?.textContent || "";
      const key = source.toLowerCase().replace(/[’']/g, "").trim();
      const visual = wordVisualCatalog[key];
      if (!visual) return;
      card.classList.add("has-word-visual");
      card.append(makeWordVisual(source, visual));
    });
  };
  window.enhanceWordCards = enhanceWordCards;
  enhanceWordCards();
  new MutationObserver(() => window.requestAnimationFrame(() => enhanceWordCards())).observe(document.body, { childList: true, subtree: true });

  const timer = document.createElement("aside");
  timer.className = "focus-timer";
  timer.innerHTML = `<button class="focus-timer-toggle" type="button" aria-expanded="false" aria-controls="focus-timer-panel" title="打开倒计时"><span class="focus-timer-toggle-icon" aria-hidden="true">◷</span><span class="focus-timer-toggle-time" data-timer-mini>40:00</span></button><section class="focus-timer-panel" id="focus-timer-panel" hidden><div class="focus-timer-heading"><div><p class="focus-timer-kicker">FOCUS TIMER</p><h2>专注倒计时</h2></div><button class="focus-timer-close" type="button" aria-label="关闭倒计时面板">×</button></div><div class="focus-timer-display" data-timer-display>40:00</div><p class="focus-timer-status" data-timer-status>设置时间，开始专注或课堂倒计时。</p><form class="focus-timer-form"><label for="focus-timer-minutes">分钟</label><div class="focus-timer-input-row"><input id="focus-timer-minutes" type="number" min="1" max="9999" step="1" value="40" inputmode="numeric" /><button type="submit">设置</button></div></form><div class="focus-timer-actions"><button type="button" data-timer-start>开始</button><button type="button" data-timer-pause>暂停</button><button type="button" data-timer-reset>重置</button></div><p class="focus-timer-hint">最后 5 分钟会变为警示色。</p></section>`;
  document.body.append(timer);
  const timerToggle = timer.querySelector(".focus-timer-toggle");
  const timerPanel = timer.querySelector(".focus-timer-panel");
  const timerDisplay = timer.querySelector("[data-timer-display]");
  const timerMini = timer.querySelector("[data-timer-mini]");
  const timerStatus = timer.querySelector("[data-timer-status]");
  const timerInput = timer.querySelector("#focus-timer-minutes");
  const timerStart = timer.querySelector("[data-timer-start]");
  const timerPause = timer.querySelector("[data-timer-pause]");
  const timerReset = timer.querySelector("[data-timer-reset]");
  const timerStorageKey = "english-training-focus-timer";
  let timerState;
  try { timerState = JSON.parse(localStorage.getItem(timerStorageKey) || "null"); } catch { timerState = null; }
  timerState = timerState && Number.isInteger(timerState.durationMinutes) ? timerState : { durationMinutes: 40, remainingSeconds: 40 * 60, endAt: null, running: false };
  const persistTimer = () => localStorage.setItem(timerStorageKey, JSON.stringify(timerState));
  const readRemaining = () => timerState.running && timerState.endAt ? Math.max(0, Math.ceil((timerState.endAt - Date.now()) / 1000)) : Math.max(0, timerState.remainingSeconds || 0);
  const formatTimer = (seconds) => { const safe = Math.max(0, seconds); const hours = Math.floor(safe / 3600); const minutes = Math.floor((safe % 3600) / 60); const secs = safe % 60; return hours ? [hours, minutes, secs].map((value) => String(value).padStart(2, "0")).join(":") : `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`; };
  const renderTimer = () => {
    const remaining = readRemaining();
    if (timerState.running && remaining === 0) { timerState.running = false; timerState.endAt = null; timerState.remainingSeconds = 0; persistTimer(); }
    const label = formatTimer(remaining);
    timerDisplay.textContent = label;
    timerMini.textContent = label;
    timer.classList.toggle("is-warning", remaining > 0 && remaining <= 5 * 60);
    timer.classList.toggle("is-done", remaining === 0);
    timerStatus.textContent = remaining === 0 ? "时间到，可以休息或开始下一轮。" : timerState.running ? "进行中，专注当前任务。" : "已暂停，准备好后继续。";
    timerStart.textContent = timerState.running ? "进行中" : "开始";
    timerStart.disabled = timerState.running;
    timerPause.disabled = !timerState.running;
    timerInput.value = timerState.durationMinutes;
  };
  const setTimerDuration = (value) => {
    const minutes = Math.max(1, Math.min(9999, Math.floor(Number(value) || 40)));
    timerState = { durationMinutes: minutes, remainingSeconds: minutes * 60, endAt: null, running: false };
    persistTimer();
    renderTimer();
  };
  timerToggle.addEventListener("click", () => { const open = timerPanel.hidden; timerPanel.hidden = !open; timerToggle.setAttribute("aria-expanded", String(open)); });
  timer.querySelector(".focus-timer-close").addEventListener("click", () => { timerPanel.hidden = true; timerToggle.setAttribute("aria-expanded", "false"); });
  timer.querySelector(".focus-timer-form").addEventListener("submit", (event) => { event.preventDefault(); setTimerDuration(timerInput.value); });
  timerStart.addEventListener("click", () => { const remaining = readRemaining() || timerState.durationMinutes * 60; timerState.remainingSeconds = remaining; timerState.endAt = Date.now() + remaining * 1000; timerState.running = true; persistTimer(); renderTimer(); });
  timerPause.addEventListener("click", () => { timerState.remainingSeconds = readRemaining(); timerState.endAt = null; timerState.running = false; persistTimer(); renderTimer(); });
  timerReset.addEventListener("click", () => setTimerDuration(timerState.durationMinutes));
  window.setInterval(renderTimer, 1000);
  window.addEventListener("storage", (event) => { if (event.key === timerStorageKey) { try { const next = JSON.parse(event.newValue || "null"); if (!next || !Number.isInteger(next.durationMinutes)) return; timerState = next; } catch { return; } renderTimer(); } });
  renderTimer();
  const accountButton = header.querySelector("[data-account]");
  const themeButtonBeforeAccount = header.querySelector("[data-theme-toggle]");
  themeButtonBeforeAccount.insertAdjacentElement("afterend", accountButton);
  const githubButton = header.querySelector(".site-icon-button");
  githubButton.setAttribute("aria-label", "在 GitHub 查看项目");
  githubButton.setAttribute("title", "在 GitHub 查看项目");
  githubButton.addEventListener("click", () => window.open("https://github.com/guoqiubin/language-training-tool", "_blank", "noopener,noreferrer"));
  const guideButton = header.querySelector("[data-guide]");
  const guideLink = document.createElement("a");
  guideLink.className = "site-nav-link";
  guideLink.href = "guide.html";
  guideLink.textContent = "用户指南";
  guideButton.replaceWith(guideLink);
  const languageTriggerRendered = header.querySelector(".site-language-trigger");
  const languageMenuRendered = header.querySelector(".site-language-menu");
  languageTriggerRendered.innerHTML = '<span class="site-language-flag" aria-hidden="true">' + currentLanguageFlag + '</span><span>⌄</span>';
  languageMenuRendered.innerHTML = '<a class="' + (!isFrench && !isThai ? "active" : "") + '" href="english.html"><span class="site-language-flag" aria-hidden="true">🇺🇸</span>English</a><a class="' + (isFrench ? "active" : "") + '" href="french.html"><span class="site-language-flag" aria-hidden="true">🇫🇷</span>Français</a><a class="' + (isThai ? "active" : "") + '" href="thai.html"><span class="site-language-flag" aria-hidden="true">🇹🇭</span>ไทย</a>';
  header.querySelector(".site-icon-button path").setAttribute("d", "M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 1 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z");
  header.querySelector(".site-icon-button path").setAttribute("d", "M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z");

  const footer = document.createElement("footer");
  footer.className = "site-global-footer";
  footer.innerHTML = `<section class="site-contact-band" aria-label="联系信息"><div class="site-contact-band-copy"><p class="site-contact-band-kicker">CONTACT</p><h2>想一起做点什么？</h2><p>课程合作、产品建议或商务合作，欢迎通过下面的方式联系我。</p></div><div class="site-contact-details"><a href="mailto:460860080@qq.com"><span>邮箱</span><strong>460860080@qq.com</strong></a><div><span>微信</span><strong>SIUGUO885</strong></div><a href="tel:18874909720"><span>商务合作</span><strong>18874909720</strong></a></div></section><div class="site-global-footer-inner"><span>友情链接</span><nav aria-label="友情链接"><a href="https://cbst-dialogue-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">CBST 对话工具 <span>↗</span></a><a href="https://new-chat-six-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">策略运营助手 <span>↗</span></a></nav></div>`;
  document.body.append(footer);

  const dialog = document.createElement("div");
  dialog.className = "site-guide-dialog";
  dialog.hidden = true;
  dialog.innerHTML = `<section class="site-guide-card" role="dialog" aria-modal="true" aria-labelledby="site-guide-title"><button class="site-guide-close" type="button" aria-label="关闭用户指南">×</button><p class="section-kicker">USER GUIDE</p><h2 id="site-guide-title">用户指南</h2><p>用户指南正在开发中，后续会介绍学习等级、训练模块和本地学习记录的使用方式。</p></section>`;
  document.body.append(dialog);

  const accountDialog = document.createElement("div");
  accountDialog.className = "site-account-dialog";
  accountDialog.hidden = true;
  accountDialog.innerHTML = `<section class="site-account-card" role="dialog" aria-modal="true" aria-labelledby="site-account-title"><button class="site-guide-close" type="button" aria-label="关闭我的">×</button><p class="section-kicker">MY LEARNING SPACE</p><h2 id="site-account-title">我的</h2><p class="site-account-summary" data-account-summary>正在读取学习权限…</p><div class="site-account-details" data-account-details></div><div class="site-skin-center"><div class="site-skin-heading"><span>外观</span><strong data-skin-current>默认</strong></div><div class="site-skin-options" role="group" aria-label="选择外观"><button class="site-skin-option" type="button" data-skin="default"><span class="site-skin-preview site-skin-preview-default" aria-hidden="true"></span><strong>默认</strong><small>当前清爽学习界面</small></button><button class="site-skin-option" type="button" data-skin="bauhaus"><span class="site-skin-preview site-skin-preview-bauhaus" aria-hidden="true"><i></i><b></b></span><strong>复古</strong><small>包豪斯几何风格</small></button><button class="site-skin-option" type="button" data-skin="industrial"><span class="site-skin-preview site-skin-preview-industrial" aria-hidden="true"><i></i><b></b></span><strong>鎏金</strong><small>工业工具风格</small></button></div></div><p class="site-account-note">学习权限和兑换记录保存在当前浏览器中；如更换设备，请联系老师。</p></section>`;
  document.body.append(accountDialog);

  const releaseUpdate = document.createElement("div");
  releaseUpdate.className = "release-update-dialog";
  releaseUpdate.hidden = true;
  releaseUpdate.innerHTML = `<section class="release-update-card" role="dialog" aria-modal="true" aria-labelledby="release-update-title"><div class="release-update-visual" aria-hidden="true"><span class="release-update-orbit release-update-orbit-one"></span><span class="release-update-orbit release-update-orbit-two"></span><span class="release-update-spark release-update-spark-one">＋</span><span class="release-update-spark release-update-spark-two">✦</span><div class="release-update-mini-card"><span>NEW RELEASE</span><strong>学习空间</strong><small>内容持续更新中</small></div></div><div class="release-update-copy"><p class="section-kicker">PRODUCT UPDATE · 2026.11</p><h2 id="release-update-title">新的学习内容，已经上线</h2><p class="release-update-lead">这次更新，我们把新的学习入口和产品变化整理成一张卡片，之后每次更新都能更清楚地告诉你发生了什么。</p><ul><li>新增「英语思维」阅读模块</li><li>更新提示支持网页端与移动端</li><li>点击后直达本次更新内容</li></ul><button class="release-update-action" type="button">立即体验 <span aria-hidden="true">→</span></button></div></section>`;
  document.body.append(releaseUpdate);
  const releaseUpdateKey = "language-training-release-2026-11-10";
  const releaseUpdateAction = releaseUpdate.querySelector(".release-update-action");
  const showReleaseUpdate = () => { releaseUpdate.hidden = false; document.body.classList.add("release-update-open"); };
  const dismissReleaseUpdate = () => { localStorage.setItem(releaseUpdateKey, "seen"); releaseUpdate.hidden = true; document.body.classList.remove("release-update-open"); window.location.href = "english-thinking.html"; };
  releaseUpdateAction.addEventListener("click", dismissReleaseUpdate);
  if (localStorage.getItem(releaseUpdateKey) !== "seen") window.setTimeout(showReleaseUpdate, 260);

  const input = header.querySelector("#site-search-input");
  const results = header.querySelector("#site-search-results");
  const renderResults = (query) => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) { results.hidden = true; results.innerHTML = ""; return; }
    const matches = pages.filter(([title, description]) => `${title} ${description}`.toLowerCase().includes(keyword));
    results.innerHTML = matches.length ? matches.map(([title, description, href]) => `<a class="site-search-result" href="${href}"><strong>${title}</strong><small>${description}</small></a>`).join("") : `<span class="site-search-result"><strong>没有找到相关内容</strong><small>换一个关键词试试</small></span>`;
    results.hidden = false;
  };
  input.addEventListener("input", () => renderResults(input.value));
  input.addEventListener("focus", () => renderResults(input.value));
  header.querySelector(".site-search").addEventListener("submit", (event) => { event.preventDefault(); const first = results.querySelector("a"); if (first) first.click(); });
  document.addEventListener("click", (event) => { if (!header.querySelector(".site-search").contains(event.target)) results.hidden = true; });

  const contactTrigger = header.querySelector(".site-contact-trigger");
  const contact = header.querySelector(".site-contact");
  contact.addEventListener("mouseenter", () => contactTrigger.setAttribute("aria-expanded", "true"));
  contact.addEventListener("mouseleave", () => contactTrigger.setAttribute("aria-expanded", "false"));
  contactTrigger.addEventListener("focus", () => contactTrigger.setAttribute("aria-expanded", "true"));
  contactTrigger.addEventListener("blur", () => contactTrigger.setAttribute("aria-expanded", "false"));
  const languageTrigger = header.querySelector(".site-language-trigger");
  const language = header.querySelector(".site-language");
  language.addEventListener("mouseenter", () => languageTrigger.setAttribute("aria-expanded", "true"));
  language.addEventListener("mouseleave", () => languageTrigger.setAttribute("aria-expanded", "false"));
  languageTrigger.addEventListener("focus", () => languageTrigger.setAttribute("aria-expanded", "true"));
  languageTrigger.addEventListener("blur", () => languageTrigger.setAttribute("aria-expanded", "false"));
  dialog.querySelector(".site-guide-close").addEventListener("click", () => { dialog.hidden = true; });
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.hidden = true; });
  const accountSummary = accountDialog.querySelector("[data-account-summary]");
  const accountDetails = accountDialog.querySelector("[data-account-details]");
  const skinCurrent = accountDialog.querySelector("[data-skin-current]");
  const skinButtons = [...accountDialog.querySelectorAll("[data-skin]")];
  const applySkin = (skin) => {
    const isBauhaus = skin === "bauhaus";
    const isIndustrial = skin === "industrial";
    document.body.classList.toggle("site-skin-bauhaus", isBauhaus);
    document.body.classList.toggle("site-skin-industrial", isIndustrial);
    skinCurrent.textContent = isIndustrial ? "鎏金" : isBauhaus ? "复古" : "默认";
    skinButtons.forEach((button) => {
      const active = button.dataset.skin === skin;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };
  const savedSkin = localStorage.getItem("english-training-skin") || "default";
  applySkin(savedSkin);
  skinButtons.forEach((button) => button.addEventListener("click", () => { const skin = button.dataset.skin; localStorage.setItem("english-training-skin", skin); applySkin(skin); }));
  const accountTypeLabels = { one_day: "1 天兑换窗口", three_days: "3 天兑换窗口", seven_days: "7 天兑换窗口", permanent: "永久有效" };
  const formatAccountDate = (value) => value ? new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)) : "—";
  const loadAccount = async () => {
    const token = localStorage.getItem("english-training-access-token");
    if (!token) { accountSummary.textContent = "尚未开通训练权限"; accountDetails.innerHTML = `<a class="site-account-action" href="index.html">返回首页兑换</a>`; return; }
    try {
      const response = await fetch("https://tzfuoyctrwpjxjagmfwc.supabase.co/functions/v1/access-control", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "check", token }) });
      const data = await response.json();
      if (!response.ok || !data.valid) { accountSummary.textContent = "训练权限当前不可用"; accountDetails.innerHTML = `<p>请联系老师检查兑换状态。</p>`; return; }
      accountSummary.textContent = "训练权限已开通";
      accountDetails.innerHTML = `<div><span>兑换类型</span><strong>${accountTypeLabels[data.accessType] || "已开通"}</strong></div><div><span>兑换时间</span><strong>${formatAccountDate(data.redeemedAt)}</strong></div>`;
    } catch { accountSummary.textContent = "暂时无法读取权限状态"; accountDetails.innerHTML = `<p>网络恢复后重新打开即可。</p>`; }
  };
  accountButton.addEventListener("click", () => { accountDialog.hidden = false; loadAccount(); });
  accountDialog.querySelector(".site-guide-close").addEventListener("click", () => { accountDialog.hidden = true; });
  accountDialog.addEventListener("click", (event) => { if (event.target === accountDialog) accountDialog.hidden = true; });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") dialog.hidden = true; });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") accountDialog.hidden = true; });

  const themeButton = header.querySelector("[data-theme-toggle]");
  const themeLabel = header.querySelector("[data-theme-label]");
  const applyTheme = (night) => { document.body.classList.toggle("site-night", night); themeLabel.textContent = night ? "默认" : "深夜"; themeButton.setAttribute("aria-pressed", String(night)); };
  const savedTheme = localStorage.getItem("english-training-theme") === "night";
  applyTheme(savedTheme);
  themeButton.addEventListener("click", () => { const night = !document.body.classList.contains("site-night"); applyTheme(night); localStorage.setItem("english-training-theme", night ? "night" : "default"); });
})();
