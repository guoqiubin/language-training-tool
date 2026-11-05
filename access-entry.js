(() => {
  "use strict";
  const API_URL = "https://tzfuoyctrwpjxjagmfwc.supabase.co/functions/v1/access-control";
  const TOKEN_KEY = "english-training-access-token";
  const protectedLinks = [...document.querySelectorAll('a[href*="training-center.html"]')];
  if (!protectedLinks.length) return;

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "access-gate.css";
  document.head.append(style);

  const dialog = document.createElement("div");
  dialog.className = "access-gate";
  dialog.hidden = true;
  dialog.innerHTML = `<section class="access-gate-card" role="dialog" aria-modal="true" aria-labelledby="entry-gate-title"><button type="button" class="access-entry-close" aria-label="关闭">×</button><p class="access-gate-kicker">PRIVATE LEARNING SPACE</p><h1 id="entry-gate-title">训练中心已锁定</h1><p>公开页面可以先查看课程与价格。兑换码支持 1 天、3 天、7 天兑换窗口和永久有效类型。</p><form class="access-gate-form"><label for="entry-access-code">兑换码</label><input id="entry-access-code" autocomplete="one-time-code" placeholder="例如 ENGLISH-2026" required /><button class="access-gate-submit" type="submit">兑换并进入训练中心 <span aria-hidden="true">→</span></button><p class="access-gate-status" role="status" aria-live="polite"></p></form></section>`;
  document.body.append(dialog);
  const form = dialog.querySelector("form");
  const input = dialog.querySelector("input");
  const submit = dialog.querySelector("button[type=submit]");
  const status = dialog.querySelector(".access-gate-status");
  let pendingHref = "training-center.html";

  const open = (href) => { pendingHref = href; dialog.hidden = false; input.focus(); };
  const close = () => { dialog.hidden = true; status.textContent = ""; submit.disabled = false; };
  protectedLinks.forEach((link) => link.addEventListener("click", async (event) => {
    event.preventDefault();
    const token = localStorage.getItem(TOKEN_KEY);
    // Let the destination page perform the authoritative check. This avoids reopening
    // the redemption dialog when the lightweight entry check is delayed or unavailable.
    if (token) { window.location.href = link.getAttribute("href"); return; }
    open(link.getAttribute("href"));
  }));
  dialog.querySelector(".access-entry-close").addEventListener("click", close);
  dialog.addEventListener("click", (event) => { if (event.target === dialog) close(); });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submit.disabled = true;
    status.textContent = "正在验证…";
    try {
      const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "redeem", code: input.value.trim() }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "暂时无法验证兑换码，请稍后再试。");
      localStorage.setItem(TOKEN_KEY, data.token);
      localStorage.setItem("english-training-access-profile", JSON.stringify(data));
      window.location.href = pendingHref;
    } catch (error) {
      status.textContent = error.message;
      submit.disabled = false;
    }
  });
})();
