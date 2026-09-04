(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");
  if (!toggle || !panel) return;
  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
