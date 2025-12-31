const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector(".closeMenu");
const menu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Menu open & close logic
const menuBtn = document.querySelector(".menu-btn");
const i = document.querySelector("button i");

menuBtn.addEventListener("click", () => {
  let hamburgerIcon = "ri-menu-fill";
  let closeIcon = "ri-close-fill";

  menuBtn.classList.toggle("active");

  if (menuBtn.classList.contains("active")) {
    i.classList.replace(hamburgerIcon, closeIcon);
  } else {
    i.classList.replace(closeIcon, hamburgerIcon);
  }
});
