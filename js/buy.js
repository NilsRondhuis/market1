const refs = {
    cartQuantity: document.querySelector('.quantity'),
    buyBtn: document.querySelector('.btn'),
    cartContent: document.querySelector('.cart-content'),
    cartText: document.querySelector('.cart-text'),
};

refs.buyBtn.addEventListener('click', onClickBuy);

const string = 'Товар добавлен в корзину';

function onClickBuy() {
    refs.cartQuantity.classList.add('is-hidden');
    refs.cartText.textContent = string;
}