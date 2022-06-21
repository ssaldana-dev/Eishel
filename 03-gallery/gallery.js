const instalations1 = document.getElementById('instalations-1');
instalations1.addEventListener('click', makeItBigger1);
const instalations2 = document.getElementById('instalations-2');
instalations2.addEventListener('click', makeItBigger2);
const instalations3 = document.getElementById('instalations-3');
instalations3.addEventListener('click', makeItBigger3);
const instalations4 = document.getElementById('instalations-4');
instalations4.addEventListener('click', makeItBigger4);
const instalations5 = document.getElementById('instalations-5');
instalations5.addEventListener('click', makeItBigger5);
const instalations6 = document.getElementById('instalations-6');
instalations6.addEventListener('click', makeItBigger6);
const instalations7 = document.getElementById('instalations-7');
instalations7.addEventListener('click', makeItBigger7);
const instalations8 = document.getElementById('instalations-8');
instalations8.addEventListener('click', makeItBigger8);
const instalations9 = document.getElementById('instalations-9');
instalations9.addEventListener('click', makeItBigger9);
const instalations10 = document.getElementById('instalations-10');
instalations10.addEventListener('click', makeItBigger10);

const title = document.getElementById('title');
title.addEventListener('click', resetCarouselItemsSize);
const galleryTitle = document.getElementById('gallery-title');
galleryTitle.addEventListener('click', resetCarouselItemsSize);

let whatPhotoIsClicked = 0;
let secondClick1 = 0;
let secondClick2 = 0;
let secondClick3 = 0;
let secondClick4 = 0;
let secondClick5 = 0;
let secondClick6 = 0;
let secondClick7 = 0;
let secondClick8 = 0;
let secondClick9 = 0;
let secondClick10 = 0;

function makeItBigger1 () {
    whatPhotoIsClicked = 1;
    if (secondClick1 == 0) {
        makeItBigger();
        secondClick1 = 1;
    }
    else if (secondClick1 == 1) {
        alert('funciona');
    }
}
function makeItBigger2 () {
    whatPhotoIsClicked = 2;
    if (secondClick2 == 0) {
        makeItBigger();
        secondClick2 = 1;
    }
    else if (secondClick2 == 1) {
        alert('funciona');
    }
}
function makeItBigger3 () {
    whatPhotoIsClicked = 3;

    if (secondClick3 == 0) {
        makeItBigger();
        secondClick3 = 1;
    }
    else if (secondClick3 == 1) {
        alert('funciona');
    }
}
function makeItBigger4 () {
    whatPhotoIsClicked = 4;

    if (secondClick4 == 0) {
        makeItBigger();
        secondClick4 = 1;
    }
    else if (secondClick4 == 1) {
        alert('funciona');
    }
}
function makeItBigger5 () {
    whatPhotoIsClicked = 5;

    if (secondClick5 == 0) {
        makeItBigger();
        secondClick5 = 1;
    }
    else if (secondClick5 == 1) {
        alert('funciona');
    }
}
function makeItBigger6 () {
    whatPhotoIsClicked = 6;

    if (secondClick6 == 0) {
        makeItBigger();
        secondClick6 = 1;
    }
    else if (secondClick6 == 1) {
        alert('funciona');
    }
}
function makeItBigger7 () {
    whatPhotoIsClicked = 7;

    if (secondClick7 == 0) {
        makeItBigger();
        secondClick7 = 1;
    }
    else if (secondClick7 == 1) {
        alert('funciona');
    }
}
function makeItBigger8 () {
    whatPhotoIsClicked = 8;

    if (secondClick8 == 0) {
        makeItBigger();
        secondClick8 = 1;
    }
    else if (secondClick8 == 1) {
        alert('funciona');
    };
}
function makeItBigger9 () {
    whatPhotoIsClicked = 9;

    if (secondClick9 == 0) {
        makeItBigger();
        secondClick9 = 1;
    }
    else if (secondClick9 == 1) {
        alert('funciona');
    }
}
function makeItBigger10 () {
    whatPhotoIsClicked = 10;

    if (secondClick10 == 0) {
        makeItBigger();
        secondClick10 = 1;
    }
    else if (secondClick10 == 1) {
        alert('funciona');
    }
}

function makeItBigger () {
    switch (whatPhotoIsClicked) {
        case 1:
            resetCarouselItemsSize();
            instalations1.className = 'gallery-carousel-photo carousel-first-photo bigger-photo'
        break
        case 2:
            resetCarouselItemsSize();
            instalations2.className = 'gallery-carousel-photo bigger-photo'
        break
        case 3:
            resetCarouselItemsSize();
            instalations3.className = 'gallery-carousel-photo bigger-photo'
        break
        case 4:
            resetCarouselItemsSize();
            instalations4.className = 'gallery-carousel-photo bigger-photo'
        break
        case 5:
            resetCarouselItemsSize();
            instalations5.className = 'gallery-carousel-photo bigger-photo'
        break
        case 6:
            resetCarouselItemsSize();
            instalations6.className = 'gallery-carousel-photo bigger-photo'
        break
        case 7:
            resetCarouselItemsSize();
            instalations7.className = 'gallery-carousel-photo bigger-photo'
        break
        case 8:
            resetCarouselItemsSize();
            instalations8.className = 'gallery-carousel-photo bigger-photo'
        break
        case 9:
            resetCarouselItemsSize();
            instalations9.className = 'gallery-carousel-photo bigger-photo'
        break
        case 10:
            resetCarouselItemsSize();
            instalations10.className = 'gallery-carousel-photo carousel-last-photo bigger-photo'
        break
    }
}

function resetCarouselItemsSize () {
    instalations1.className = 'gallery-carousel-photo carousel-first-photo';
    instalations2.className = 'gallery-carousel-photo';
    instalations3.className = 'gallery-carousel-photo';
    instalations4.className = 'gallery-carousel-photo';
    instalations5.className = 'gallery-carousel-photo';
    instalations6.className = 'gallery-carousel-photo';
    instalations7.className = 'gallery-carousel-photo';
    instalations8.className = 'gallery-carousel-photo';
    instalations9.className = 'gallery-carousel-photo';
    instalations10.className = 'gallery-carousel-photo carousel-last-photo';
    resetClickValues();
}
function resetClickValues () {
    secondClick1 = 0;
    secondClick2 = 0;
    secondClick3 = 0;
    secondClick4 = 0;
    secondClick5 = 0;
    secondClick6 = 0;
    secondClick7 = 0;
    secondClick8 = 0;
    secondClick9 = 0;
    secondClick10 = 0;
}