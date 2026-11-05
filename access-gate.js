(() => {
  "use strict";

  const API_URL = "https://tzfuoyctrwpjxjagmfwc.supabase.co/functions/v1/access-control";
  const TOKEN_KEY = "english-training-access-token";
  const isProtected = document.body.hasAttribute("data-access-protected");
  if (!isProtected) return;

  document.documentElement.classList.add("access-checking");
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "access-gate.css";
  document.head.append(style);

  const gate = document.createElement("div");
  gate.className = "access-gate";
  gate.innerHTML = `<section class="access-gate-card" role="dialog" aria-modal="true" aria-labelledby="access-gate-title"><p class="access-gate-kicker">PRIVATE LEARNING SPACE</p><h1 id="access-gate-title">输入兑换码，开始学习</h1><p>训练中心内容仅向已参加课程的学员开放。兑换码支持 1 天、3 天、7 天兑换窗口和永久有效类型；兑换成功后，本浏览器会保留你的学习权限。</p><form class="access-gate-form"><label for="access-code-input">兑换码</label><input id="access-code-input" name="code" autocomplete="one-time-code" placeholder="例如 ENGLISH-2026" required /><button class="access-gate-submit" type="submit">兑换并进入训练中心 <span aria-hidden="true">→</span></button><p class="access-gate-status" role="status" aria-live="polite"></p></form><p class="access-gate-note">如果你已经兑换过，请使用同一浏览器继续访问；清除浏览器数据或更换设备后，需要联系老师恢复权限。</p></section>`;
  document.body.append(gate);

  const form = gate.querySelector("form");
  const input = gate.querySelector("input");
  const submit = gate.querySelector("button");
  const status = gate.querySelector(".access-gate-status");

  const showPage = () => {
    gate.hidden = true;
    document.documentElement.classList.remove("access-checking");
  };
  const showLocked = () => {
    gate.hidden = false;
    document.documentElement.classList.remove("access-checking");
    input.focus();
  };
  const callApi = async (payload) => {
    const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || "暂时无法验证兑换码，请稍后再试。");
    return data;
  };

  const savedToken = localStorage.getItem(TOKEN_KEY);
  if (savedToken) {
    // A redeemed browser should not be interrupted by a transient API/network failure.
    // The API still remains authoritative: an explicit invalid response locks the page.
    showPage();
    callApi({ action: "check", token: savedToken }).then((data) => {
      if (data.valid) {
        localStorage.setItem("english-training-access-profile", JSON.stringify(data));
        return;
      }
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem("english-training-access-profile");
      showLocked();
    }).catch(() => {
      // Keep the locally redeemed session open and retry on the next protected page.
    });
  } else {
    showLocked();
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const code = input.value.trim();
    if (!code) return;
    submit.disabled = true;
    status.textContent = "正在验证…";
    try {
      const data = await callApi({ action: "redeem", code });
      localStorage.setItem(TOKEN_KEY, data.token);
      localStorage.setItem("english-training-access-profile", JSON.stringify(data));
      status.textContent = "兑换成功，正在进入…";
      window.setTimeout(showPage, 220);
    } catch (error) {
      status.textContent = error.message;
      submit.disabled = false;
    }
  });
})();
