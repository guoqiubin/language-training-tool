const posterFont = '"Noto Sans SC", "PingFang SC", sans-serif';

function posterWrap(ctx, text, x, y, maxWidth, lineHeight, color, font) {
  ctx.font = font;
  ctx.fillStyle = color;
  const chars = Array.from(String(text || ""));
  let line = "";
  let lines = [];
  chars.forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else line = test;
  });
  if (line) lines.push(line);
  lines.forEach((item, index) => ctx.fillText(item, x, y + index * lineHeight));
  return y + Math.max(lines.length, 1) * lineHeight;
}

function drawPosterCard(ctx, x, y, width, title, body, accent = "#548464") {
  const bodyLines = Math.max(1, Math.ceil(ctx.measureText(body || "").width / (width - 48)));
  const height = 70 + bodyLines * 30;
  ctx.fillStyle = "#f3f8f3";
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 18);
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.font = `700 24px ${posterFont}`;
  ctx.fillText(title, x + 24, y + 37);
  posterWrap(ctx, body, x + 24, y + 73, width - 48, 30, "#5c7066", `400 20px ${posterFont}`);
  return y + height;
}

function buildPosterCanvas(data) {
  const width = 1080;
  const contentHeight = 760 + (data.words?.length || 0) * 92 + (data.replies?.length || 0) * 86 + (data.details?.length || 0) * 74;
  const height = Math.max(1500, Math.min(2700, contentHeight));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f7f8f4";
  ctx.fillRect(0, 0, width, height);
  const margin = 72;
  let y = 82;

  ctx.fillStyle = "#548464";
  ctx.font = `700 22px ${posterFont}`;
  ctx.letterSpacing = "3px";
  ctx.fillText("ENGLISH TRAINING TOOL", margin, y);
  y += 72;
  ctx.fillStyle = "#1f2d2b";
  ctx.font = `800 42px ${posterFont}`;
  ctx.fillText(data.kicker || "口语训练", margin, y);
  y += 70;
  ctx.fillStyle = "#243331";
  y = posterWrap(ctx, data.english, margin, y, width - margin * 2, 68, "#243331", `800 54px ${posterFont}`) + 18;
  y = posterWrap(ctx, data.meaning, margin, y, width - margin * 2, 42, "#55725f", `700 30px ${posterFont}`) + 14;
  if (data.ipa) y = posterWrap(ctx, data.ipa, margin, y, width - margin * 2, 32, "#568064", `400 22px ${posterFont}`) + 24;

  ctx.fillStyle = "#e7f2ec";
  ctx.beginPath();
  ctx.roundRect(margin, y, width - margin * 2, 180, 24);
  ctx.fill();
  y += 42;
  ctx.fillStyle = "#477356";
  ctx.font = `700 24px ${posterFont}`;
  ctx.fillText("怎么学", margin + 28, y);
  y += 43;
  y = posterWrap(ctx, data.note || "先听示范，再按意群练习，最后用自己的声音说出来。", margin + 28, y, width - margin * 2 - 56, 34, "#5c7066", `400 21px ${posterFont}`);
  if (data.chunks) {
    y += 8;
    y = posterWrap(ctx, `意群：${data.chunks}`, margin + 28, y, width - margin * 2 - 56, 32, "#568064", `400 20px ${posterFont}`);
  }
  y += 34;

  if (data.details?.length) {
    ctx.fillStyle = "#1f2d2b";
    ctx.font = `800 29px ${posterFont}`;
    ctx.fillText("重点说明", margin, y);
    y += 48;
    data.details.forEach((detail) => { y = drawPosterCard(ctx, margin, y, width - margin * 2, detail.title, detail.body, detail.accent) + 16; });
  }

  if (data.words?.length) {
    ctx.fillStyle = "#1f2d2b";
    ctx.font = `800 29px ${posterFont}`;
    ctx.fillText("重点单词", margin, y);
    y += 48;
    data.words.forEach((word) => { y = drawPosterCard(ctx, margin, y, width - margin * 2, `${word.word}  ${word.ipa || ""}`, word.meaning || "中文释义待补充", "#5d78a1") + 16; });
  }

  if (data.replies?.length) {
    ctx.fillStyle = "#1f2d2b";
    ctx.font = `800 29px ${posterFont}`;
    ctx.fillText("参考回复", margin, y);
    y += 48;
    data.replies.forEach((reply, index) => { y = drawPosterCard(ctx, margin, y, width - margin * 2, `回复 ${index + 1}  ${reply.english}`, `${reply.ipa || ""}  ${reply.meaning || ""}`, "#bd704b") + 16; });
  }

  ctx.fillStyle = "#8ca39a";
  ctx.font = `700 18px ${posterFont}`;
  ctx.fillText("SPEAK A LITTLE. EVERY DAY.", margin, height - 52);
  return canvas;
}

function closePoster() {
  document.querySelector(".poster-modal")?.remove();
}

function openPoster(data) {
  closePoster();
  const canvas = buildPosterCanvas(data);
  const modal = document.createElement("div");
  modal.className = "poster-modal";
  modal.innerHTML = `<div class="poster-dialog" role="dialog" aria-modal="true" aria-labelledby="poster-dialog-title"><div class="poster-dialog-top"><div><p class="section-kicker">POSTER PREVIEW</p><h2 id="poster-dialog-title">海报预览</h2></div><button class="poster-close" type="button" aria-label="关闭海报预览">×</button></div><img class="poster-preview" alt="当前练习海报预览" /><div class="poster-dialog-actions"><button class="secondary-button poster-close-action" type="button">返回练习</button><button class="primary-button poster-download" type="button">↓ 下载图片</button></div><p class="poster-dialog-hint">图片已包含当前练习的主要内容，适合保存或分享。</p></div>`;
  document.body.appendChild(modal);
  modal.querySelector(".poster-preview").src = canvas.toDataURL("image/png");
  modal.querySelectorAll(".poster-close, .poster-close-action").forEach((button) => button.addEventListener("click", closePoster));
  modal.addEventListener("click", (event) => { if (event.target === modal) closePoster(); });
  modal.querySelector(".poster-download").addEventListener("click", () => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement("a");
      link.download = `english-training-${Date.now()}.png`;
      link.href = URL.createObjectURL(blob);
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    }, "image/png");
  });
}

window.openPoster = openPoster;
