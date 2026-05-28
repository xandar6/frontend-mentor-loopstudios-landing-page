const mobileMenu = document.querySelector(".header__mobile_menu");

const btnOpenMobileMenu = document.querySelector(
  ".header__btn_open_mobile_menu",
);
const btnCloseMobileMenu = document.querySelector(
  ".header__mobile_menu__btn_close",
);
btnOpenMobileMenu.addEventListener("click", openMobileMenu);
btnCloseMobileMenu.addEventListener("click", closeMenu);

function openMobileMenu() {
  mobileMenu.classList.add("is-open");
}

function closeMenu() {
  mobileMenu.classList.remove("is-open");
}
