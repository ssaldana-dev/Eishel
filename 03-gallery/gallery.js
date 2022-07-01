/*  Se declaran las variables que contienen cada fotografía y se le añade un escuchador de eventos a cada una 
    que detecta un click y manda a llamar una función diferente por cada imagen. Funciones que tienen como 
    fin hacer que la imagen crezca de tamaño, el resto queden en tamaño normal y disparar otra función en caso 
    de darse un segundo click consecutivo en la misma imagen.                                                   */
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
const instalations11 = document.getElementById('instalations-11');
instalations11.addEventListener('click', makeItBigger11);
const instalations12 = document.getElementById('instalations-12');
instalations12.addEventListener('click', makeItBigger12);
const instalations13 = document.getElementById('instalations-13');
instalations13.addEventListener('click', makeItBigger13);

/*  Se declaran las variables que contienen los elementos que forman parte de la página a exepción del carrusel 
    de fotografías y se añade un escuchador de eventos a cada uno que detecta un click y dispara la función que 
    retorna las imágenes a su tamaño original.                                                                  */
const title = document.getElementById('title');
title.addEventListener('click', resetCarouselItemsSize);
const galleryTitle = document.getElementById('gallery-title');
galleryTitle.addEventListener('click', resetCarouselItemsSize);

/*  Se declaran la variable que guardará el valor de qué imagen ha sido clickeada y se usará posteriormente para 
    un cona condicional switch.                                                                                 */
let whatPhotoIsClicked = 0;

/*  Se declaran las variables que guardarán el valor como 1 o 0 (true o false), si se dan 2 clicks consecutivos 
    en la misma imagen.                                                                                         */
/* 
                                                                                                                */
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
let secondClick11 = 0;
let secondClick12 = 0;
let secondClick13 = 0;

/*  Estas funciones, se disparan en el eventListener de su imagen correspondeinte. Lo que hacen es lo siguiente: 
        1: Le da a la variable whatPhotoIsClicked el valor de su imagen correspondiente.
        2: Se valida una condicional if que tiene como parámetro el valor de secondClick. 
        3: En caso de ser 0 (false), dispara la función makeItBigger, que agranda el tamaño de la foto y 
        resetea el valor de todos los secondClick a 0. Posteriormente, cambia el valor del secondClick de la 
        fotografía correspondiente a 1.
        4: En caso de ser 1 el valor de secondClick de la fotografía, disparará una función que mostrará la 
        fotografía en pantalla completa, cosa que de momento se sigue trabajando.                               */
function makeItBigger1 () {
    whatPhotoIsClicked = 1;
    if (secondClick1 == 0) {
        makeItBigger();
        secondClick1 = 1;
    }
    else if (secondClick1 == 1) {
        currentBannerPosition = 1;
        openBanner();
    }
}
function makeItBigger2 () {
    whatPhotoIsClicked = 2;
    if (secondClick2 == 0) {
        makeItBigger();
        secondClick2 = 1;
    }
    else if (secondClick2 == 1) {
        currentBannerPosition = 2;
        openBanner();
    }
}
function makeItBigger3 () {
    whatPhotoIsClicked = 3;

    if (secondClick3 == 0) {
        makeItBigger();
        secondClick3 = 1;
    }
    else if (secondClick3 == 1) {
        currentBannerPosition = 3;
        openBanner();
    }
}
function makeItBigger4 () {
    whatPhotoIsClicked = 4;

    if (secondClick4 == 0) {
        makeItBigger();
        secondClick4 = 1;
    }
    else if (secondClick4 == 1) {
        currentBannerPosition = 4;
        openBanner();
    }
}
function makeItBigger5 () {
    whatPhotoIsClicked = 5;

    if (secondClick5 == 0) {
        makeItBigger();
        secondClick5 = 1;
    }
    else if (secondClick5 == 1) {
        currentBannerPosition = 5;
        openBanner();
    }
}
function makeItBigger6 () {
    whatPhotoIsClicked = 6;

    if (secondClick6 == 0) {
        makeItBigger();
        secondClick6 = 1;
    }
    else if (secondClick6 == 1) {
        currentBannerPosition = 6;
        openBanner();
    }
}
function makeItBigger7 () {
    whatPhotoIsClicked = 7;

    if (secondClick7 == 0) {
        makeItBigger();
        secondClick7 = 1;
    }
    else if (secondClick7 == 1) {
        currentBannerPosition = 7;
        openBanner();
    }
}
function makeItBigger8 () {
    whatPhotoIsClicked = 8;

    if (secondClick8 == 0) {
        makeItBigger();
        secondClick8 = 1;
    }
    else if (secondClick8 == 1) {
        currentBannerPosition = 8;
        openBanner();
    };
}
function makeItBigger9 () {
    whatPhotoIsClicked = 9;

    if (secondClick9 == 0) {
        makeItBigger();
        secondClick9 = 1;
    }
    else if (secondClick9 == 1) {
        currentBannerPosition = 9;
        openBanner();
    }
}
function makeItBigger10 () {
    whatPhotoIsClicked = 10;

    if (secondClick10 == 0) {
        makeItBigger();
        secondClick10 = 1;
    }
    else if (secondClick10 == 1) {
        currentBannerPosition = 10;
        openBanner();
    }
}
function makeItBigger11 () {
    whatPhotoIsClicked = 11;

    if (secondClick11 == 0) {
        makeItBigger();
        secondClick11 = 1;
    }
    else if (secondClick11 == 1) {
        currentBannerPosition = 11;
        openBanner();
    }
}
function makeItBigger12 () {
    whatPhotoIsClicked = 12;

    if (secondClick12 == 0) {
        makeItBigger();
        secondClick12 = 1;
    }
    else if (secondClick12 == 1) {
        currentBannerPosition = 12;
        openBanner();
    }
}
function makeItBigger13 () {
    whatPhotoIsClicked = 13;

    if (secondClick13 == 0) {
        makeItBigger();
        secondClick13 = 1;
    }
    else if (secondClick13 == 1) {
        currentBannerPosition = 13;
        openBanner();
    }
}

/*  La función makeItBigger dispara una condicional switch que toma como parámetro la variable 
    whatPhotoIsClicked. Hay un caso para cada fotografía. En todos, se dispara primero una función que 
    retorna a su tamaño original a todas las fotografías del carrusel, y luego se agrega una clase a la 
    fotografía seleccionada que cambiará su tamaño a 1.5x .                                                     */
function makeItBigger () {
    switch (whatPhotoIsClicked) {
        case 1:
            resetClickValues();
            resetCarouselItemsSize();
            instalations1.className = 'gallery-carousel-photo carousel-first-photo bigger-photo';
        break
        case 2:
            resetClickValues();
            resetCarouselItemsSize();
            instalations2.className = 'gallery-carousel-photo bigger-photo';
        break
        case 3:
            resetClickValues();
            resetCarouselItemsSize();
            instalations3.className = 'gallery-carousel-photo bigger-photo';
        break
        case 4:
            resetClickValues();
            resetCarouselItemsSize();
            instalations4.className = 'gallery-carousel-photo bigger-photo';
        break
        case 5:
            resetClickValues();
            resetCarouselItemsSize();
            instalations5.className = 'gallery-carousel-photo bigger-photo';
        break
        case 6:
            resetClickValues();
            resetCarouselItemsSize();
            instalations6.className = 'gallery-carousel-photo bigger-photo';
        break
        case 7:
            resetClickValues();
            resetCarouselItemsSize();
            instalations7.className = 'gallery-carousel-photo bigger-photo';
        break
        case 8:
            resetClickValues();
            resetCarouselItemsSize();
            instalations8.className = 'gallery-carousel-photo bigger-photo';
        break
        case 9:
            resetClickValues();
            resetCarouselItemsSize();
            instalations9.className = 'gallery-carousel-photo bigger-photo';
        break
        case 10:
            resetClickValues();
            resetCarouselItemsSize();
            instalations10.className = 'gallery-carousel-photo bigger-photo';
        break
        case 11:
            resetClickValues();
            resetCarouselItemsSize();
            instalations11.className = 'gallery-carousel-photo bigger-photo';
        break
        case 12:
            resetClickValues();
            resetCarouselItemsSize();
            instalations12.className = 'gallery-carousel-photo bigger-photo';
        break
        case 13:
            resetClickValues();
            resetCarouselItemsSize();
            instalations13.className = 'gallery-carousel-photo carousel-last-photo bigger-photo';
        break
    }
}

/*  La función resetCarouselItemsSize resetea las clases de todas las fotografías del carrusel, regresándolas a 
    su tamaño original.                                                                                         */
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
    instalations10.className = 'gallery-carousel-photo';
    instalations11.className = 'gallery-carousel-photo';
    instalations12.className = 'gallery-carousel-photo';
    instalations13.className = 'gallery-carousel-photo carousel-last-photo';
    resetClickValues()
}

/*  La función resetClickValues, retorna el valor de todos los secondClick a 0 (false).                         */
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
    secondClick11 = 0;
    secondClick12 = 0;
    secondClick13 = 0;
}

/* Construcción del banner de la galería */

const banner =  document.getElementById('gallery-banner');
const bannerImage = document.getElementById('display-photo');
const bannerImageBack = document.getElementById('display-photo-photoBack')
let currentBannerPosition = 0;


const bannerImageSources = {
    image1: './assets/imgs/instalaciones-1(775x518).jpg',
    image2: './assets/imgs/instalaciones-2(775x518).jpg',
    image3: './assets/imgs/instalaciones-3(775x518).jpg',
    image4: './assets/imgs/instalaciones-4(775x518).jpg',
    image5: './assets/imgs/instalaciones-5(775x518).jpg',
    image6: './assets/imgs/instalaciones-6(775x518).jpg',
    image7: './assets/imgs/instalaciones-7(775x518).jpg',
    image8: './assets/imgs/instalaciones-8(775x518).jpg',
    image9: './assets/imgs/instalaciones-9(775x518).jpg',
    image10: './assets/imgs/instalaciones-10(775x518).jpg',
    image11: './assets/imgs/instalaciones-11(775x518).jpg',
    image12: './assets/imgs/instalaciones-12(775x518).jpg',
    image13: './assets/imgs/instalaciones-13(775x518).jpg'
}

function closeBanner () {
    bannerImageBack.className = 'gallery-display-container-photo-photoBack';
    bannerImage.className = 'gallery-display-container-photo';
    banner.className = 'gallery-display off';
    resetClickValues();
    resetCarouselItemsSize();
}

function openBanner () {
    switch (currentBannerPosition) {
        case 1:
            bannerImage.src = bannerImageSources.image1;
        break
        case 2:
            bannerImage.src = bannerImageSources.image2;
        break
        case 3:
            bannerImage.src = bannerImageSources.image3;
        break
        case 4:
            bannerImage.src = bannerImageSources.image4;
        break
        case 5:
            bannerImage.src = bannerImageSources.image5;
        break
        case 6:
            bannerImage.src = bannerImageSources.image6;
        break
        case 7:
            bannerImage.src = bannerImageSources.image7;
        break
        case 8:
            bannerImage.src = bannerImageSources.image8;
        break
        case 9:
            bannerImage.src = bannerImageSources.image9;
        break
        case 10:
            bannerImage.src = bannerImageSources.image10;
        break
        case 11:
            bannerImage.src = bannerImageSources.image11;
        break
        case 12:
            bannerImage.src = bannerImageSources.image12;
        break
        case 13:
            bannerImage.src = bannerImageSources.image13;
        break
    }

    banner.className = 'gallery-display on';
}

function slideImageBack () {
    switch (currentBannerPosition) {
        case 1:

        break
        case 2:
            bannerImage.src = bannerImageSources.image1;
            bannerImageBack.src = bannerImageSources.image2;
            currentBannerPosition = 1;
            backSlide();
            fadeOut();
        break
        case 3:
            bannerImage.src = bannerImageSources.image2;
            bannerImageBack.src = bannerImageSources.image3;
            currentBannerPosition = 2;
            backSlide();
            fadeOut();
        break
        case 4:
            bannerImage.src = bannerImageSources.image3;
            bannerImageBack.src = bannerImageSources.image4;
            currentBannerPosition = 3;
            backSlide();
            fadeOut();
        break
        case 5:
            bannerImage.src = bannerImageSources.image4;
            bannerImageBack.src = bannerImageSources.image5;
            currentBannerPosition = 4;
            backSlide();
            fadeOut();
        break
        case 6:
            bannerImage.src = bannerImageSources.image5;
            bannerImageBack.src = bannerImageSources.image6;
            currentBannerPosition = 5;
            backSlide();
            fadeOut();
        break
        case 7:
            bannerImage.src = bannerImageSources.image6;
            bannerImageBack.src = bannerImageSources.image7;
            currentBannerPosition = 6;
            backSlide();
            fadeOut();
        break
        case 8:
            bannerImage.src = bannerImageSources.image7;
            bannerImageBack.src = bannerImageSources.image8;
            currentBannerPosition = 7;
            backSlide();
            fadeOut();
        break
        case 9:
            bannerImage.src = bannerImageSources.image8;
            bannerImageBack.src = bannerImageSources.image9;
            currentBannerPosition = 8;
            backSlide();
            fadeOut();
        break
        case 10:
            bannerImage.src = bannerImageSources.image9;
            bannerImageBack.src = bannerImageSources.image10;
            currentBannerPosition = 9;
            backSlide();
            fadeOut();
        break
        case 11:
            bannerImage.src = bannerImageSources.image10;
            bannerImageBack.src = bannerImageSources.image11;
            currentBannerPosition = 10;
            backSlide();
            fadeOut();
        break
        case 12:
            bannerImage.src = bannerImageSources.image11;
            bannerImageBack.src = bannerImageSources.image12;
            currentBannerPosition = 11;
            backSlide();
            fadeOut();
        break
        case 13:
            bannerImage.src = bannerImageSources.image12;
            bannerImageBack.src = bannerImageSources.image13;
            currentBannerPosition = 12;
            backSlide();
            fadeOut();
        break
    }
}

function slideImageFront () {
    switch (currentBannerPosition) {
        case 1:
            bannerImage.src = bannerImageSources.image2;
            bannerImageBack.src = bannerImageSources.image1;
            currentBannerPosition = 2;
            frontSlide();
            fadeOut();
        break
        case 2:
            bannerImage.src = bannerImageSources.image3;
            bannerImageBack.src = bannerImageSources.image2;
            currentBannerPosition = 3;
            frontSlide();
            fadeOut();
        break
        case 3:
            bannerImage.src = bannerImageSources.image4;
            bannerImageBack.src = bannerImageSources.image3;
            currentBannerPosition = 4;
            frontSlide();
            fadeOut();
        break
        case 4:
            bannerImage.src = bannerImageSources.image5;
            bannerImageBack.src = bannerImageSources.image4;
            currentBannerPosition = 5;
            frontSlide();
            fadeOut();
        break
        case 5:
            bannerImage.src = bannerImageSources.image6;
            bannerImageBack.src = bannerImageSources.image5;
            currentBannerPosition = 6;
            frontSlide();
            fadeOut();
        break
        case 6:
            bannerImage.src = bannerImageSources.image7;
            bannerImageBack.src = bannerImageSources.image6;
            currentBannerPosition = 7;
            frontSlide();
            fadeOut();
        break
        case 7:
            bannerImage.src = bannerImageSources.image8;
            bannerImageBack.src = bannerImageSources.image7;
            currentBannerPosition = 8;
            frontSlide();
            fadeOut();
        break
        case 8:
            bannerImage.src = bannerImageSources.image9;
            bannerImageBack.src = bannerImageSources.image8;
            currentBannerPosition = 9;
            frontSlide();
            fadeOut();
        break
        case 9:
            bannerImage.src = bannerImageSources.image10;
            bannerImageBack.src = bannerImageSources.image9;
            currentBannerPosition = 10;
            frontSlide();
            fadeOut();
        break
        case 10:
            bannerImage.src = bannerImageSources.image11;
            bannerImageBack.src = bannerImageSources.image10;
            currentBannerPosition = 11;
            frontSlide();
            fadeOut();
        break
        case 11:
            bannerImage.src = bannerImageSources.image12;
            bannerImageBack.src = bannerImageSources.image11;
            currentBannerPosition = 12;
            frontSlide();
            fadeOut();
        break
        case 12:
            bannerImage.src = bannerImageSources.image13;
            bannerImageBack.src = bannerImageSources.image12;
            currentBannerPosition = 13;
            frontSlide();
            fadeOut();
        break
        case 13:

        break
    }
}

let backSlideCounter = 0;
let frontSlideCounter = 0;
let fadeOutCounter = 0;

function backSlide () {
    if (backSlideCounter == 0) {
        bannerImage.className = 'gallery-display-container-photo photo-backSlide1';
        backSlideCounter = 1;
    }
    else if (backSlideCounter == 1) {
        bannerImage.className = 'gallery-display-container-photo photo-backSlide2';
        backSlideCounter = 0;
    }
}

function frontSlide () {
    if (frontSlideCounter == 0) {
        bannerImage.className = 'gallery-display-container-photo photo-frontSlide1';
        frontSlideCounter = 1;
    }
    else if (frontSlideCounter == 1) {
        bannerImage.className = 'gallery-display-container-photo photo-frontSlide2';
        frontSlideCounter = 0;
    }
}

function fadeOut () {
    if (fadeOutCounter == 0) {
        bannerImageBack.className = 'gallery-display-container-photo-photoBack fadeOutImg1';
        fadeOutCounter = 1;
    }
    else if (fadeOutCounter == 1) {
        bannerImageBack.className = 'gallery-display-container-photo-photoBack fadeOutImg2';
        fadeOutCounter = 0;
    }
}