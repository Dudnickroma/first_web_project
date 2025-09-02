// main.js — тільки JS, без <script> та HTML усередині
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const panel = document.getElementById("mobile-menu");
  const closeBtn = document.querySelector(".header__mobile-close");

  if (!burger || !panel || !closeBtn) return;

  function openMenu() {
    panel.classList.add("is-open");
    panel.removeAttribute("hidden");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    panel.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    // ховаємо елемент після анімації, щоб зберегти ефект слайду
    setTimeout(() => {
      if (!panel.classList.contains("is-open")) {
        panel.setAttribute("hidden", "");
      }
    }, 250);
  }

  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  // клік по затемненню закриває меню (якщо робитимеш оверлей)
  panel.addEventListener("click", (e) => {
    if (e.target === panel) closeMenu();
  });

  // Esc закриває меню
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("is-open")) {
      closeMenu();
    }
  });
});
