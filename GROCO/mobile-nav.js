document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        // Close other menus when navbar is opened
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});
