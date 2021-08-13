let offset = 0;
const sliderRef = document.querySelector('.slider-line');
const btnLeftRef = document.querySelector('.left');
const btnRightRef = document.querySelector('.right');

btnRightRef.addEventListener('click', onClickRight);
btnLeftRef.addEventListener('click', onClickLeft);

function onClickRight () {
    offset += 256;
    if (offset > 512) {
        offset = 0;
    }

    sliderRef.style.left = -offset + 'px';
};

function onClickLeft () {
    offset -= 256;
    if (offset < 0) {
        offset = 512;
    }

    sliderRef.style.left = -offset + 'px';
};


