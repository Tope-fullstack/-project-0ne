document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let shoppingCart = document.querySelector('.shopping-cart');
    let loginForm = document.querySelector('.login-form');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
    }

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
    }

    document.querySelector('#cart-btn').onclick = () => {
        shoppingCart.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
    }

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
    }

    // Close menus when clicking outside
    window.onclick = (e) => {
        if (!e.target.matches('#menu-btn') && 
            !e.target.matches('#search-btn') && 
            !e.target.matches('#cart-btn') && 
            !e.target.matches('#login-btn')) {
            
            if (!navbar.contains(e.target)) {
                navbar.classList.remove('active');
            }
            if (!searchForm.contains(e.target)) {
                searchForm.classList.remove('active');
            }
            if (!shoppingCart.contains(e.target)) {
                shoppingCart.classList.remove('active');
            }
            if (!loginForm.contains(e.target)) {
                loginForm.classList.remove('active');
            }
        }
    }
});
