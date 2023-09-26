function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

ScrollReveal({ reset: true,
 distance:'80px',
 duration:2000,
 delay:200

});

ScrollReveal().reveal('.section__pic-container', { origin: 'top' });
ScrollReveal().reveal('.section__text__p1', { origin: 'left' });
ScrollReveal().reveal('.title', { origin: 'right' });