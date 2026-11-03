(function () {
  "use strict";
  document.querySelectorAll("[data-ielts-feature]").forEach(function (button) {
    button.addEventListener("click", function () {
      var toast = document.querySelector(".ielts-toast");
      if (!toast) {
        toast = document.createElement("div");
        toast.className = "ielts-toast";
        toast.setAttribute("role", "status");
        document.body.appendChild(toast);
      }
      toast.textContent = button.getAttribute("data-ielts-feature") + "正在开发中，后续会按照雅思难度逐步开放。";
      window.clearTimeout(window.__ieltsToastTimer);
      window.__ieltsToastTimer = window.setTimeout(function () { toast.remove(); }, 2800);
    });
  });
})();
