(() => {
  "use strict";

  const pages = [
    ["首页", "首页与服务价目表", "index.html"],
    ["用户指南", "第一次使用网站的学习路径", "guide.html"],
    ["训练中心", "音标、口语、自然拼读与学习等级", "training-center.html"],
    ["魔兽争霸口语", "趣玩中心 · 游戏英语", "warcraft.html"],
    ["随机一句", "每日一句口语", "random-sentence.html"],
    ["阅读悬赏", "任务中心 · 英语阅读", "reading-rewards.html"],
    ["专项英语", "Python 与心理学专业概念", "special-english.html"],
    ["造句训练", "独立专项训练，随时切换难度", "sentence-building.html"],
    ["法语训练", "法语入门短句与跟读", "french.html"],
    ["美式音标", "发音与音标训练", "phonetics.html"],
    ["自然拼读", "从字母声音拼起单词", "phonics.html"],
    ["入门单词", "主题词包、中文释义与例句", "vocabulary.html"],
    ["极简语法", "基础语法知识卡", "grammar.html"],
    ["口语训练", "场景口语练习", "speaking.html"]
  ];
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const header = document.createElement("header");
  header.className = "site-header";
  const isFrench = location.pathname.split("/").pop() === "french.html";
  header.innerHTML = `<div class="site-header-inner"><div class="site-language"><button class="site-language-trigger" type="button" aria-expanded="false" aria-label="切换语言"><span class="site-language-flag" aria-hidden="true">${isFrench ? "🇫🇷" : "🇺🇸"}</span><span>⌄</span></button><div class="site-language-menu"><a class="${isFrench ? "" : "active"}" href="index.html"><span class="site-language-flag" aria-hidden="true">🇺🇸</span>English</a><a class="${isFrench ? "active" : ""}" href="french.html"><span class="site-language-flag" aria-hidden="true">🇫🇷</span>Français</a></div></div><a class="site-brand" href="index.html" aria-label="返回首页"><img class="site-brand-avatar" src="assets/avatar.jpg" alt="个人头像" /><span class="site-brand-copy"><strong>ENGLISH TRAINING TOOL</strong><small>Speak with confidence</small></span></a><form class="site-search" role="search"><input id="site-search-input" type="search" autocomplete="off" placeholder="搜索网站内容…" aria-label="搜索网站内容" /><button type="submit" aria-label="搜索">⌕</button><div class="site-search-results" id="site-search-results" hidden></div></form><nav class="site-nav" aria-label="全局导航"><a class="site-nav-link" href="index.html">首页</a><button class="site-nav-link" type="button" data-guide>用户指南</button><span class="site-contact"><button class="site-nav-link site-contact-trigger" type="button" aria-expanded="false">联系我</button><span class="site-contact-popover" role="tooltip"><img src="assets/wechat-contact.jpg" alt="微信二维码" /><small>扫码添加微信</small></span></span><button class="site-theme-toggle" type="button" data-theme-toggle><span class="site-theme-dot" aria-hidden="true"></span><span data-theme-label>深夜</span></button><button class="site-icon-button" type="button" aria-label="GitHub（占位）" title="GitHub 功能开发中"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" /></svg></button></nav></div>`;
  document.body.classList.add("has-site-header");
  document.body.prepend(header);
  const guideButton = header.querySelector("[data-guide]");
  const guideLink = document.createElement("a");
  guideLink.className = "site-nav-link";
  guideLink.href = "guide.html";
  guideLink.textContent = "用户指南";
  guideButton.replaceWith(guideLink);
  const languageTriggerRendered = header.querySelector(".site-language-trigger");
  const languageMenuRendered = header.querySelector(".site-language-menu");
  languageTriggerRendered.innerHTML = '<span class="site-language-flag" aria-hidden="true">' + (isFrench ? "🇫🇷" : "🇺🇸") + '</span><span>⌄</span>';
  languageMenuRendered.innerHTML = '<a class="' + (isFrench ? "" : "active") + '" href="index.html"><span class="site-language-flag" aria-hidden="true">🇺🇸</span>English</a><a class="' + (isFrench ? "active" : "") + '" href="french.html"><span class="site-language-flag" aria-hidden="true">🇫🇷</span>Français</a>';
  header.querySelector(".site-icon-button path").setAttribute("d", "M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 1 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z");
  header.querySelector(".site-icon-button path").setAttribute("d", "M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z");

  const footer = document.createElement("footer");
  footer.className = "site-global-footer";
  footer.innerHTML = `<div class="site-global-footer-inner"><span>友情链接</span><nav aria-label="友情链接"><a href="https://cbst-dialogue-mvp.vercel.app/" target="_blank" rel="noopener noreferrer">CBST 对话工具 <span>↗</span></a><a href="https://new-chat-six-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">策略运营助手 <span>↗</span></a></nav></div>`;
  document.body.append(footer);

  const dialog = document.createElement("div");
  dialog.className = "site-guide-dialog";
  dialog.hidden = true;
  dialog.innerHTML = `<section class="site-guide-card" role="dialog" aria-modal="true" aria-labelledby="site-guide-title"><button class="site-guide-close" type="button" aria-label="关闭用户指南">×</button><p class="section-kicker">USER GUIDE</p><h2 id="site-guide-title">用户指南</h2><p>用户指南正在开发中，后续会介绍学习等级、训练模块和本地学习记录的使用方式。</p></section>`;
  document.body.append(dialog);

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
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") dialog.hidden = true; });

  const themeButton = header.querySelector("[data-theme-toggle]");
  const themeLabel = header.querySelector("[data-theme-label]");
  const applyTheme = (night) => { document.body.classList.toggle("site-night", night); themeLabel.textContent = night ? "默认" : "深夜"; themeButton.setAttribute("aria-pressed", String(night)); };
  const savedTheme = localStorage.getItem("english-training-theme") === "night";
  applyTheme(savedTheme);
  themeButton.addEventListener("click", () => { const night = !document.body.classList.contains("site-night"); applyTheme(night); localStorage.setItem("english-training-theme", night ? "night" : "default"); });
})();
