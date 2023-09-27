const menu = document.querySelector("header nav ul");
const icon = document.querySelector(".hamburger-icon");

function toggleMenu(e) {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

icon.addEventListener("click", toggleMenu);

ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });

ScrollReveal().reveal(".section__text__p1", { origin: "left" });
ScrollReveal().reveal(".title", { origin: "right" });
