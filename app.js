$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    slideSpeed: 1000,
    autoPlay: true,
  });
});


let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.navbar-links');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(e => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove("active");
}))