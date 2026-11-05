(() => {
  "use strict";

  const units = [
    { id: "consonants", title: "辅音", subtitle: "พยัญชนะ · Consonants", cards: [
      { symbol: "ก", roman: "ko kai", ipa: "/k/", meaning: "清不送气的 k 音", note: "舌根抬起，短促地发音，不要带明显气流。", example: "กา", exampleMeaning: "กา /kaa/：乌鸦；练习把 ก 放在音节开头。" },
      { symbol: "ข", roman: "kho khai", ipa: "/kʰ/", meaning: "送气的 kh 音", note: "和英语 k 相似，但释放时要有一股清晰气流。", example: "ไข่", exampleMeaning: "ไข่ /kʰài/：蛋；先发辅音，再进入声调。" },
      { symbol: "ค", roman: "kho khwai", ipa: "/kʰ/", meaning: "低辅音 kh 音", note: "发音接近 ข，但属于低辅音类别，影响后续声调规则。", example: "คน", exampleMeaning: "คน /kʰon/：人；注意结尾 n 的收音。" },
      { symbol: "ม", roman: "mo ma", ipa: "/m/", meaning: "双唇鼻音 m", note: "双唇闭合，声音从鼻腔出来，和中文“m”很接近。", example: "มา", exampleMeaning: "มา /maa/：来；把元音拉长。" },
      { symbol: "น", roman: "no nu", ipa: "/n/", meaning: "舌尖鼻音 n", note: "舌尖接近上齿龈，声音连续而不爆破。", example: "นา", exampleMeaning: "นา /naa/：田；结尾也能作为 n 收音。" },
      { symbol: "ส", roman: "so sua", ipa: "/s/", meaning: "清辅音 s", note: "气流从舌尖和齿龈之间通过，声带不振动。", example: "สา", exampleMeaning: "สา /sǎa/：原因；初步感受上升调。" }
    ]},
    { id: "vowels", title: "元音", subtitle: "สระ · Vowels", cards: [
      { symbol: "อะ", roman: "a", ipa: "/a/", meaning: "短元音 a", note: "口腔打开，发音短而清楚，不要拖长。", example: "กะ", exampleMeaning: "กะ /kà/：估计；短元音后快速收束。" },
      { symbol: "อา", roman: "aa", ipa: "/aː/", meaning: "长元音 aa", note: "和短 a 的口形相近，但时长明显更长。", example: "กา", exampleMeaning: "กา /kaa/：乌鸦；对比 กะ，体会长短变化。" },
      { symbol: "อิ", roman: "i", ipa: "/i/", meaning: "短元音 i", note: "嘴角稍微展开，声音短促，接近中文“衣”的短版本。", example: "กิน", exampleMeaning: "กิน /kin/：吃；i 后接 n 收音。" },
      { symbol: "อี", roman: "ii", ipa: "/iː/", meaning: "长元音 ii", note: "保持舌位不变，把元音稳定拉长。", example: "มี", exampleMeaning: "มี /mii/：有；注意长元音的持续时间。" },
      { symbol: "อุ", roman: "u", ipa: "/u/", meaning: "短元音 u", note: "嘴唇圆起，声音短，避免变成英语 oo。", example: "กุ", exampleMeaning: "กุ /kù/：练习短 u 和低调组合。" },
      { symbol: "อู", roman: "uu", ipa: "/uː/", meaning: "长元音 uu", note: "嘴唇保持圆形，把声音平稳延长。", example: "ดู", exampleMeaning: "ดู /duu/：看；长元音后不要急着收音。" }
    ]},
    { id: "tones", title: "声调", subtitle: "วรรณยุกต์ · Tones", cards: [
      { symbol: "สามัญ", roman: "sǎaman", ipa: "mid tone", meaning: "中平调", note: "音高保持在中间位置，像平稳陈述，不上扬也不下坠。", example: "มา", exampleMeaning: "มา /maa/：来；这里先把声音读得平稳。" },
      { symbol: "เอก", roman: "èek", ipa: "low tone", meaning: "低调", note: "从中音区向下压，声音短而稳，不要拖成唱歌。", example: "ก่า", exampleMeaning: "ก่า /kàa/：练习低调和长元音的配合。" },
      { symbol: "โท", roman: "thoo", ipa: "falling tone", meaning: "降调", note: "从较高位置滑向较低位置，像强调后自然落下。", example: "ข่า", exampleMeaning: "ข่า /kʰàa/：姜；先高后低地完成滑动。" },
      { symbol: "ตรี", roman: "trii", ipa: "high tone", meaning: "高调", note: "保持较高音区，声音明亮，但不要突然喊叫。", example: "ม้า", exampleMeaning: "ม้า /máa/：马；把音高放在中音之上。" },
      { symbol: "จัตวา", roman: "jàt-tawaa", ipa: "rising tone", meaning: "升调", note: "从较低位置向上抬升，像中文疑问语气但更平滑。", example: "หมา", exampleMeaning: "หมา /mǎa/：狗；练习从低到高的连续移动。" }
    ]}
  ];
  const progressKey = "thai-phonetics-progress";
  const progress = JSON.parse(localStorage.getItem(progressKey) || "{}");
  let unitIndex = 0;
  let cardIndex = 0;
  const unitList = document.querySelector("#thai-unit-list");
  const card = document.querySelector("#thai-card");
  const unitLabel = document.querySelector("#thai-unit-label");
  const position = document.querySelector("#thai-position");

  const speak = (text, rate) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "th-TH";
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };
  const current = () => units[unitIndex].cards[cardIndex];
  const showToast = (message) => {
    const toast = document.createElement("div");
    toast.className = "thai-toast";
    toast.textContent = message;
    document.body.append(toast);
    window.setTimeout(() => toast.remove(), 1800);
  };
  const renderUnits = () => {
    unitList.innerHTML = units.map((unit, index) => `<button type="button" class="thai-unit-button${index === unitIndex ? " active" : ""}" data-unit-index="${index}"><span>0${index + 1}</span><strong>${unit.title}</strong><small>${unit.subtitle}</small></button>`).join("");
    unitList.querySelectorAll("[data-unit-index]").forEach((button) => button.addEventListener("click", () => { unitIndex = Number(button.dataset.unitIndex); cardIndex = 0; renderUnits(); renderCard(); }));
  };
  const renderCard = () => {
    const item = current();
    const key = `${units[unitIndex].id}-${cardIndex}`;
    unitLabel.textContent = units[unitIndex].title;
    position.textContent = `${cardIndex + 1} / ${units[unitIndex].cards.length}`;
    card.innerHTML = `<div class="thai-lesson"><h2>${item.symbol}</h2><p class="roman">${item.roman}</p><p class="ipa">${item.ipa}</p><p class="meaning">${item.meaning}</p><p class="note">${item.note}</p><div class="thai-example"><strong>${item.example}</strong><p>${item.exampleMeaning}</p></div><div class="thai-actions"><button class="thai-action primary" type="button" data-speak="normal">▶ 常速朗读</button><button class="thai-action" type="button" data-speak="slow">🐢 慢速朗读</button><button class="thai-action" type="button" data-complete>${progress[key] ? "✓ 已练习" : "标记已练习"}</button></div></div>`;
    card.querySelector('[data-speak="normal"]').addEventListener("click", () => speak(item.example, .9));
    card.querySelector('[data-speak="slow"]').addEventListener("click", () => speak(item.example, .55));
    card.querySelector("[data-complete]").addEventListener("click", () => { progress[key] = true; localStorage.setItem(progressKey, JSON.stringify(progress)); renderCard(); showToast("已记录这张音标卡片"); });
  };
  document.querySelector("#thai-prev").addEventListener("click", () => { cardIndex = (cardIndex - 1 + units[unitIndex].cards.length) % units[unitIndex].cards.length; renderCard(); });
  document.querySelector("#thai-next").addEventListener("click", () => { cardIndex = (cardIndex + 1) % units[unitIndex].cards.length; renderCard(); });
  document.querySelectorAll("[data-coming]").forEach((button) => button.addEventListener("click", () => showToast(`${button.dataset.coming}正在开发中`)));
  let touchStartX = 0;
  card.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
  card.addEventListener("touchend", (event) => { const delta = event.changedTouches[0].screenX - touchStartX; if (Math.abs(delta) < 50) return; cardIndex = delta < 0 ? (cardIndex + 1) % units[unitIndex].cards.length : (cardIndex - 1 + units[unitIndex].cards.length) % units[unitIndex].cards.length; renderCard(); }, { passive: true });
  renderUnits();
  renderCard();
})();
