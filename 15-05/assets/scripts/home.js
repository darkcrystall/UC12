const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".menu-link");

menuMobile.addEventListener("click", () => {
  menu.classList.toggle("appear");
  if (menu.classList.contains("appear")) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.toggle("link-clicado");
      });
    });
  }
});