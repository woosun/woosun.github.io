(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const saved = localStorage.getItem("theme");

  if (saved === "dark" || saved === "light") {
    root.dataset.theme = saved;
  }

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
