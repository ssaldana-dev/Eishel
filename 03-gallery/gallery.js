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
            instalations10.className = 'gallery-carousel-photo carousel-last-photo bigger-photo';
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
    instalations10.className = 'gallery-carousel-photo carousel-last-photo';
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
}

/* Construcción del banner de la galería */

const banner =  document.getElementById('gallery-banner');
const bannerImage = document.getElementById('display-photo');
const bannerImageBack = document.getElementById('display-photo-photoBack')
let currentBannerPosition = 0;


const bannerImageSources = {
    imagen1: './assets/imgs/instalaciones-1(775x519).jpg',
    imagen2: './assets/imgs/instalaciones-2(775x519).jpg',
    imagen3: './assets/imgs/instalaciones-3(775x519).jpg',
    imagen4: './assets/imgs/instalaciones-4(775x519).jpg',
    imagen5: './assets/imgs/instalaciones-5(775x519).jpg',
    imagen6: './assets/imgs/instalaciones-6(775x519).jpg',
    imagen7: './assets/imgs/instalaciones-7(775x519).jpg',
    imagen8: './assets/imgs/instalaciones-8(775x519).jpg',
    imagen9: './assets/imgs/instalaciones-9(775x519).jpg',
    imagen10: './assets/imgs/instalaciones-10(775x519).jpg'
}

function closeBanner () {
    bannerImage.className = 'gallery-display-container-photo';
    banner.className = 'gallery-display off';
    resetClickValues();
    resetCarouselItemsSize();
}

function openBanner () {
    switch (currentBannerPosition) {
        case 1:
            bannerImage.src = bannerImageSources.imagen1;
        break
        case 2:
            bannerImage.src = bannerImageSources.imagen2;
        break
        case 3:
            bannerImage.src = bannerImageSources.imagen3;
        break
        case 4:
            bannerImage.src = bannerImageSources.imagen4;
        break
        case 5:
            bannerImage.src = bannerImageSources.imagen5;
        break
        case 6:
            bannerImage.src = bannerImageSources.imagen6;
        break
        case 7:
            bannerImage.src = bannerImageSources.imagen7;
        break
        case 8:
            bannerImage.src = bannerImageSources.imagen8;
        break
        case 9:
            bannerImage.src = bannerImageSources.imagen9;
        break
        case 10:
            bannerImage.src = bannerImageSources.imagen10;
        break
    }

    banner.className = 'gallery-display on';
}

function slideImageBack () {
   if (currentBannerPosition == 1) {

   }
   else if (currentBannerPosition == 2) {
        bannerImage.src = bannerImageSources.imagen1;
        bannerImageBack.src = bannerImageSources.imagen2;
        currentBannerPosition = 1;
        backSlide();
        fadeOut();
   }
   else if (currentBannerPosition == 3) {
        bannerImage.src = bannerImageSources.imagen2;
        bannerImageBack.src = bannerImageSources.imagen3;
        currentBannerPosition = 2;
        backSlide();
        fadeOut();
   }
   else if (currentBannerPosition == 4) {
        bannerImage.src = bannerImageSources.imagen3;
        bannerImageBack.src = bannerImageSources.imagen4;
        currentBannerPosition = 3;
        backSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 5) {
        bannerImage.src = bannerImageSources.imagen4;
        bannerImageBack.src = bannerImageSources.imagen5;
        currentBannerPosition = 4;
        backSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 6) {
        bannerImage.src = bannerImageSources.imagen5;
        bannerImageBack.src = bannerImageSources.imagen6;
        currentBannerPosition = 5;
        backSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 7) {
        bannerImage.src = bannerImageSources.imagen6;
        bannerImageBack.src = bannerImageSources.imagen7;
        currentBannerPosition = 6;
        backSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 8) {
        bannerImage.src = bannerImageSources.imagen7;
        bannerImageBack.src = bannerImageSources.imagen8;
        currentBannerPosition = 7;
        backSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 9) {
        bannerImage.src = bannerImageSources.imagen8;
        bannerImageBack.src = bannerImageSources.imagen9;
        currentBannerPosition = 8;
        backSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 10) {
        bannerImage.src = bannerImageSources.imagen9;
        bannerImageBack.src = bannerImageSources.imagen10;
        currentBannerPosition = 9;
        backSlide();
        fadeOut();
    }
}

function slideImageFront () {
    if (currentBannerPosition == 1) {
        bannerImage.src = bannerImageSources.imagen2;
        bannerImageBack.src = bannerImageSources.imagen1;
        currentBannerPosition = 2;
        frontSlide();
        fadeOut();
    }
    else if (currentBannerPosition == 2) {
         bannerImage.src = bannerImageSources.imagen3;
         bannerImageBack.src = bannerImageSources.imagen2;
         currentBannerPosition = 3;
         frontSlide();
         fadeOut();
    }
    else if (currentBannerPosition == 3) {
         bannerImage.src = bannerImageSources.imagen4;
         bannerImageBack.src = bannerImageSources.imagen3;
         currentBannerPosition = 4;
         frontSlide();
         fadeOut();
    }
    else if (currentBannerPosition == 4) {
         bannerImage.src = bannerImageSources.imagen5;
         bannerImageBack.src = bannerImageSources.imagen4;
         currentBannerPosition = 5;
         frontSlide();
         fadeOut();
     }
     else if (currentBannerPosition == 5) {
         bannerImage.src = bannerImageSources.imagen6;
         bannerImageBack.src = bannerImageSources.imagen5;
         currentBannerPosition = 6;
         frontSlide();
         fadeOut();
     }
     else if (currentBannerPosition == 6) {
         bannerImage.src = bannerImageSources.imagen7;
         bannerImageBack.src = bannerImageSources.imagen6;
         currentBannerPosition = 7;
         frontSlide();
         fadeOut();
     }
     else if (currentBannerPosition == 7) {
         bannerImage.src = bannerImageSources.imagen8;
         bannerImageBack.src = bannerImageSources.imagen7;
         currentBannerPosition = 8;
         frontSlide();
         fadeOut();
     }
     else if (currentBannerPosition == 8) {
         bannerImage.src = bannerImageSources.imagen9;
         bannerImageBack.src = bannerImageSources.imagen8;
         currentBannerPosition = 9;
         frontSlide();
         fadeOut();
     }
     else if (currentBannerPosition == 9) {
         bannerImage.src = bannerImageSources.imagen10;
         bannerImageBack.src = bannerImageSources.imagen9;
         currentBannerPosition = 10;
         frontSlide();
         fadeOut();
     }
     else if (currentBannerPosition == 10) {

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