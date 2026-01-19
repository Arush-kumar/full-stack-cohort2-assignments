const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");
const icon = document.querySelector(".ri-menu-line");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");

  // add class toggle if have menu class active
  icon.className = menu.classList.contains('active') ? 'ri-close-large-line' : 'ri-menu-line';
});