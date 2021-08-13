const sizesList = document.querySelector('.list-sizes');

sizesList.addEventListener('click', onClick);

function onClick(event) {

    if (!event.target.classList.contains('item')) {
        return;
    }

    event.target.classList.toggle('border');
};