const gallery = [
    {
        img: "https://content.rozetka.com.ua/goods/images/big/193762020.jpg",
    },
    {
        img: "https://content1.rozetka.com.ua/goods/images/big/193762070.jpg",
    },
    {
        img: "https://content2.rozetka.com.ua/goods/images/big/190725870.jpg",
    }
];

const refs = {
    listColor: document.querySelector('.list-color'),
    firstImg: document.querySelector('.color-peak'),
};

refs.listColor.addEventListener('click', onClickColor);

const result = gallery.reduce((arr, el) => {
    arr.push(el.img);
    return arr;
}, []);

const red = result[0];
const blue = result[1];
const white = result[2];

function onClickColor(event) {

    if (!event.target.classList.contains('item')) {
        return;
    }

    if (event.target.classList.contains('red')) {
        refs.firstImg.src = red;
    } else if (event.target.classList.contains('blue')) {
        refs.firstImg.src = blue;
    } else if (event.target.classList.contains('white')) {
        refs.firstImg.src = white;
    } else {
        null;
    }
}; 


