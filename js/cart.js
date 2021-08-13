const cartRef = document.querySelector('.icon-cart');
const cartContentRef = document.querySelector('.cart-content');

cartRef.addEventListener('click', onClick);

function onClick() {
    cartContentRef.classList.toggle('is-hidden');
};