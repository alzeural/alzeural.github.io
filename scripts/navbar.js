// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

mobileToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileToggle.textContent = navbarMenu.classList.contains('active') ? '✕' : '☰';
});
