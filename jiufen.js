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
  const BRIDGE_URL = "http://127.0.0.1:47821/capture";

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

  const captureFromLocalBridge = async () => {
    status.textContent = "正在读取当前九分学长页面…";
    bridgeButton.disabled = true;
    try {
      const response = await fetch(BRIDGE_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "ielts-reading" }) });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "本地桥接读取失败");
      const data = result.data || {};
      if (data.title) form.elements.title.value = data.title;
      if (data.passage) form.elements.passage.value = data.passage;
      if (data.questions) form.elements.questions.value = data.questions;
      status.textContent = "已自动读取当前真题，请确认内容后保存。";
    } catch (error) {
      status.textContent = `自动读取失败：${error.message || "请确认本地桥接已启动"}。也可以手动粘贴内容。`;
    } finally { bridgeButton.disabled = false; }
  };

  captureButton.addEventListener("click", () => { form.reset(); dialog.showModal(); captureFromLocalBridge(); });
  bridgeButton.addEventListener("click", async () => {
    captureFromLocalBridge();
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
