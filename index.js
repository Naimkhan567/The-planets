

const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');


navToggle.addEventListener("click", function() {
    navbar.classList.toggle("active-navToggle");
});