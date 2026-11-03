/* 统一语音播放器：兼容移动端首次加载语音列表较慢、连续点击和鸿蒙浏览器队列问题。 */
(function () {
  let requestId = 0;
  let voiceTimer;

  function voices() {
    return window.speechSynthesis?.getVoices?.() || [];
  }

  function preferredVoice(language) {
    const available = voices();
    const prefix = language.toLowerCase().split("-")[0];
    const exactUs = available.filter((voice) => voice.lang?.toLowerCase() === language.toLowerCase() || voice.lang?.toLowerCase().startsWith(`${prefix}-`));
    const preferredNames = ["Google US English", "Samantha", "Microsoft Aria Online (Natural) - English (United States)", "Alex"];
    return preferredNames.map((name) => exactUs.find((voice) => voice.name === name)).find(Boolean) || exactUs[0] || null;
  }

  function notifyUnsupported() {
    let toast = document.querySelector(".speech-compat-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "speech-compat-toast";
      toast.textContent = "当前浏览器暂不支持网页发音，请使用最新版浏览器。";
      document.body.appendChild(toast);
    }
    window.clearTimeout(toast._timer);
    toast._timer = window.setTimeout(() => toast.remove(), 3200);
  }

  function playText(text, language, options = {}) {
    const synth = window.speechSynthesis;
    if (!synth || !window.SpeechSynthesisUtterance) {
      notifyUnsupported();
      options.onError?.();
      return false;
    }

    const currentRequest = ++requestId;
    window.clearTimeout(voiceTimer);
    synth.cancel();

    const start = () => {
      if (currentRequest !== requestId) return;
      const utterance = new SpeechSynthesisUtterance(String(text));
      const voice = preferredVoice(language);
      utterance.lang = language;
      utterance.rate = options.rate || 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      if (voice) utterance.voice = voice;
      utterance.onstart = () => options.onStart?.();
      utterance.onend = () => options.onEnd?.();
      utterance.onerror = () => options.onError?.();
      synth.speak(utterance);
    };

    /* 鸿蒙设备首次进入页面时可能还没有返回 voice 列表；给系统一个短暂的初始化窗口。 */
    if (!voices().length) {
      let started = false;
      const launch = () => {
        if (started) return;
        started = true;
        synth.removeEventListener("voiceschanged", launch);
        window.clearTimeout(voiceTimer);
        window.setTimeout(start, 40);
      };
      synth.addEventListener("voiceschanged", launch, { once: true });
      voiceTimer = window.setTimeout(launch, 500);
    } else {
      voiceTimer = window.setTimeout(start, 40);
    }
    return true;
  }

  window.playEnglishText = (text, options = {}) => playText(text, "en-US", options);
  window.playFrenchText = (text, options = {}) => playText(text, "fr-FR", options);
})();
