(() => {
  "use strict";

  const STORAGE_KEY = "jiufen-review-library-v1";
  const dialog = document.querySelector("[data-jiufen-dialog]");
  const captureButton = document.querySelector("[data-jiufen-capture]");
  const form = document.querySelector("[data-jiufen-form]");
  const recordsRoot = document.querySelector("[data-jiufen-records]");
  const count = document.querySelector("[data-jiufen-count]");
  const status = document.querySelector("[data-jiufen-status]");
  const bridgeButton = document.querySelector("[data-jiufen-bridge]");

  const readRecords = () => {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(value) ? value : [];
    } catch { return []; }
  };
  const writeRecords = (records) => localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));
  const formatDate = (value) => new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));

  const render = () => {
    const records = readRecords();
    count.textContent = `${records.length} 篇已保存`;
    if (!records.length) {
      recordsRoot.innerHTML = `<div class="jiufen-empty">还没有保存的真题。点击上方按钮，开始建立你的雅思阅读复习库。</div>`;
      return;
    }
    recordsRoot.innerHTML = records.map((record) => `<article class="jiufen-record"><div class="jiufen-record-head"><h3>${escapeHtml(record.title)}</h3><time>${escapeHtml(formatDate(record.createdAt))}</time></div><div class="jiufen-record-meta"><span>阅读材料</span><span>题目已保存</span><span>${escapeHtml(record.source || "本地导入")}</span></div><details><summary>展开查看内容</summary><div class="jiufen-record-content"><section><h4>READING PASSAGE</h4><p>${escapeHtml(record.passage)}</p></section><section><h4>QUESTIONS</h4><p>${escapeHtml(record.questions)}</p></section></div></details><button class="jiufen-delete" type="button" data-delete-record="${escapeHtml(record.id)}">删除这条记录</button></article>`).join("");
  };

  captureButton.addEventListener("click", () => { status.textContent = "等待本地解析；如果没有桥接，可直接粘贴内容保存。"; form.reset(); dialog.showModal(); });
  bridgeButton.addEventListener("click", async () => {
    status.textContent = "正在检查本地解析桥接…";
    const bridge = window.__JIUFEN_LOCAL_BRIDGE__;
    if (!bridge || typeof bridge.capture !== "function") {
      status.textContent = "当前网页未发现本地桥接。请将九分学长中的材料与题目粘贴到下方，网页会在本地保存。";
      return;
    }
    try {
      const result = await bridge.capture({ type: "ielts-reading" });
      if (result?.title) form.elements.title.value = result.title;
      if (result?.passage) form.elements.passage.value = result.passage;
      if (result?.questions) form.elements.questions.value = result.questions;
      status.textContent = "已读取本地解析结果，请确认后保存。";
    } catch (error) { status.textContent = `本地解析暂时未完成：${error.message || "请改用粘贴方式"}`; }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const record = { id: `jiufen-${Date.now()}`, title: String(data.get("title") || "未命名真题").trim(), passage: String(data.get("passage") || "").trim(), questions: String(data.get("questions") || "").trim(), source: "本地导入", createdAt: new Date().toISOString() };
    if (!record.title || !record.passage || !record.questions) { status.textContent = "请先填写标题、阅读材料和题目。"; return; }
    writeRecords([record, ...readRecords()]);
    dialog.close();
    render();
  });

  recordsRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-record]");
    if (!button) return;
    const next = readRecords().filter((record) => record.id !== button.dataset.deleteRecord);
    writeRecords(next);
    render();
  });

  render();
})();
