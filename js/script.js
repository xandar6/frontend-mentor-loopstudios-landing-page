const mobileMenu = document.querySelector(".header__mobile-menu");
const btnOpenMobileMenu = document.querySelector(".header__menu-button");
const btnCloseMobileMenu = document.querySelector(".header__mobile-close");
const mobileMenuLinks = document.querySelectorAll(".header__mobile-nav-link");

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

if (mobileMenu && btnOpenMobileMenu && btnCloseMobileMenu) {
  btnOpenMobileMenu.addEventListener("click", openMobileMenu);
  btnCloseMobileMenu.addEventListener("click", closeMobileMenu);
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
  document.addEventListener("keydown", handleMenuKeydown);
}

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  btnOpenMobileMenu.setAttribute("aria-expanded", "true");
  document.body.classList.add("has-open-menu");
  window.setTimeout(() => btnCloseMobileMenu.focus(), 0);
}

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  btnOpenMobileMenu.setAttribute("aria-expanded", "false");
  document.body.classList.remove("has-open-menu");
  btnOpenMobileMenu.focus();
}

function handleMenuKeydown(event) {
  if (!mobileMenu.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeMobileMenu();
    return;
  }

  if (event.key !== "Tab") return;

  const focusableElements = mobileMenu.querySelectorAll(focusableSelector);
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  if (!firstFocusable || !lastFocusable) return;

  if (!mobileMenu.contains(document.activeElement)) {
    event.preventDefault();
    firstFocusable.focus();
    return;
  }

  if (event.shiftKey && document.activeElement === firstFocusable) {
    event.preventDefault();
    lastFocusable.focus();
  }

  if (!event.shiftKey && document.activeElement === lastFocusable) {
    event.preventDefault();
    firstFocusable.focus();
  }
}
