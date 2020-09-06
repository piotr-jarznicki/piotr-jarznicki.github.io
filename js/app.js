const menuButton = document.querySelector(".logo-menu__hamburger-icon");
const menu = document.querySelector(".main-nav");
menuButton.addEventListener("click", function () {
  menu.classList.toggle("slide-in-nav");
  menu.classList.toggle("slide-out-nav");
  if (menu.classList.contains("slide-in-nav")) {
    menu.classList.remove("slide-out-nav");
  } else if (menu.classList.contains("slide-out-nav")) {
    menu.classList.remove("slide-in-nav");
  }
});
