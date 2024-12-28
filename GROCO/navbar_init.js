// Initialize navbar functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
