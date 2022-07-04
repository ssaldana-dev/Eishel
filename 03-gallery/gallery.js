/*  Se declaran las variables que contienen cada fotografía y se le añade un escuchador de eventos a cada una 
    que detecta un click y manda a llamar una función diferente por cada imagen. Funciones que tienen como 
    fin hacer que la imagen crezca de tamaño, el resto queden en tamaño normal y disparar otra función en caso 
    de darse un segundo click consecutivo en la misma imagen.                                                   */

let whatPhotoIsClicked = 0;

const instalations = [];
instalations[1] = document.getElementById('instalations-1');
instalations[2] = document.getElementById('instalations-2');
instalations[3] = document.getElementById('instalations-3');
instalations[4] = document.getElementById('instalations-4');
instalations[5] = document.getElementById('instalations-5');
instalations[6] = document.getElementById('instalations-6');
instalations[7] = document.getElementById('instalations-7');
instalations[8] = document.getElementById('instalations-8');
instalations[9] = document.getElementById('instalations-9');
instalations[10] = document.getElementById('instalations-10');
instalations[11] = document.getElementById('instalations-11');
instalations[12] = document.getElementById('instalations-12');
instalations[13] = document.getElementById('instalations-13');

instalations[1].addEventListener('click', function(){whatPhotoIsClicked = 1; makeItBigger()});
instalations[2].addEventListener('click', function(){whatPhotoIsClicked = 2; makeItBigger()});
instalations[3].addEventListener('click', function(){whatPhotoIsClicked = 3; makeItBigger()});
instalations[4].addEventListener('click', function(){whatPhotoIsClicked = 4; makeItBigger()});
instalations[5].addEventListener('click', function(){whatPhotoIsClicked = 5; makeItBigger()});
instalations[6].addEventListener('click', function(){whatPhotoIsClicked = 6; makeItBigger()});
instalations[7].addEventListener('click', function(){whatPhotoIsClicked = 7; makeItBigger()});
instalations[8].addEventListener('click', function(){whatPhotoIsClicked = 8; makeItBigger()});
instalations[9].addEventListener('click', function(){whatPhotoIsClicked = 9; makeItBigger()});
instalations[10].addEventListener('click', function(){whatPhotoIsClicked = 10; makeItBigger()});
instalations[11].addEventListener('click', function(){whatPhotoIsClicked = 11; makeItBigger()});
instalations[12].addEventListener('click', function(){whatPhotoIsClicked = 12; makeItBigger()});
instalations[13].addEventListener('click', function(){whatPhotoIsClicked = 13; makeItBigger()});

instalations[1].value = 1;
instalations[2].value = 2;
instalations[3].value = 3;
instalations[4].value = 4;
instalations[5].value = 5;
instalations[6].value = 6;
instalations[7].value = 7;
instalations[8].value = 8;
instalations[9].value = 9;
instalations[10].value = 10;
instalations[11].value = 11;
instalations[12].value = 12;

/*  Se declaran las variables que contienen los elementos que forman parte de la página a exepción del carrusel 
    de fotografías y se añade un escuchador de eventos a cada uno que detecta un click y dispara la función que 
    retorna las imágenes a su tamaño original.                                                                  */
const title = document.getElementById('title');
title.addEventListener('click', resetCarouselItemsSize);
const galleryTitle = document.getElementById('gallery-title');
galleryTitle.addEventListener('click', resetCarouselItemsSize,);

/*  Se declaran la variable que guardará el valor de qué imagen ha sido clickeada y se usará posteriormente para 
    un condicional switch.                                                                                 */


/*  Se declaran las variables que guardarán el valor como 1 o 0 (true o false), si se dan 2 clicks consecutivos 
    en la misma imagen.                                                                                         */
/* 
                                                                                                                */

let secondClick = [];
secondClick[1] = 0;
secondClick[2] = 0;
secondClick[3] = 0;
secondClick[4] = 0;
secondClick[5] = 0;
secondClick[6] = 0;
secondClick[7] = 0;
secondClick[8] = 0;
secondClick[9] = 0;
secondClick[10] = 0;
secondClick[11] = 0;
secondClick[12] = 0;
secondClick[13] = 0;

/*  Estas funciones, se disparan en el eventListener de su imagen correspondeinte. Lo que hacen es lo siguiente: 
        1: Le da a la variable whatPhotoIsClicked el valor de su imagen correspondiente.
        2: Se valida una condicional if que tiene como parámetro el valor de secondClick. 
        3: En caso de ser 0 (false), dispara la función makeItBigger, que agranda el tamaño de la foto y 
        resetea el valor de todos los secondClick a 0. Posteriormente, cambia el valor del secondClick de la 
        fotografía correspondiente a 1.
        4: En caso de ser 1 el valor de secondClick de la fotografía, disparará una función que mostrará la 
        fotografía en pantalla completa, cosa que de momento se sigue trabajando.                               */


/*  La función makeItBigger dispara una condicional switch que toma como parámetro la variable 
    whatPhotoIsClicked. Hay un caso para cada fotografía. En todos, se dispara primero una función que 
    retorna a su tamaño original a todas las fotografías del carrusel, y luego se agrega una clase a la 
    fotografía seleccionada que cambiará su tamaño a 1.5x .                                                     */
function makeItBigger () {
    if(secondClick[whatPhotoIsClicked] == 0) {
        resetCarouselItemsSize();
        instalations[whatPhotoIsClicked].className ='gallery-carousel-photo bigger-photo';
        console.log(whatPhotoIsClicked);
        secondClick[whatPhotoIsClicked] = 1 ;
    }
    else if (secondClick[whatPhotoIsClicked] == 1) {
        currentBannerPosition = whatPhotoIsClicked;
        openBanner();
    }
    
}

/*  La función resetCarouselItemsSize resetea las clases de todas las fotografías del carrusel, regresándolas a 
    su tamaño original.                                                                                         */
function resetCarouselItemsSize () {
    instalations[1].className = 'gallery-carousel-photo carousel-first-photo';
    instalations[2].className = 'gallery-carousel-photo';
    instalations[3].className = 'gallery-carousel-photo';
    instalations[4].className = 'gallery-carousel-photo';
    instalations[5].className = 'gallery-carousel-photo';
    instalations[6].className = 'gallery-carousel-photo';
    instalations[7].className = 'gallery-carousel-photo';
    instalations[8].className = 'gallery-carousel-photo';
    instalations[9].className = 'gallery-carousel-photo';
    instalations[10].className = 'gallery-carousel-photo';
    instalations[11].className = 'gallery-carousel-photo';
    instalations[12].className = 'gallery-carousel-photo';
    instalations[13].className = 'gallery-carousel-photo carousel-last-photo';
    // activities1.className = 'gallery-carousel-photo carousel-first-photo';
    // activities2.className = 'gallery-carousel-photo';
    // activities3.className = 'gallery-carousel-photo';
    // activities4.className = 'gallery-carousel-photo';
    // activities5.className = 'gallery-carousel-photo';
    // activities6.className = 'gallery-carousel-photo';
    // activities7.className = 'gallery-carousel-photo';
    // activities8.className = 'gallery-carousel-photo';
    // activities9.className = 'gallery-carousel-photo';
    // activities10.className = 'gallery-carousel-photo';
    // activities11.className = 'gallery-carousel-photo';
    // activities12.className = 'gallery-carousel-photo';
    // activities13.className = 'gallery-carousel-photo carousel-last-photo';
    resetClickValues()
}

/*  La función resetClickValues, retorna el valor de todos los secondClick a 0 (false).                         */
function resetClickValues () {
    secondClick[1] = 0;
    secondClick[2] = 0;
    secondClick[3] = 0;
    secondClick[4] = 0;
    secondClick[5] = 0;
    secondClick[6] = 0;
    secondClick[7] = 0;
    secondClick[8] = 0;
    secondClick[9] = 0;
    secondClick[10] = 0;
    secondClick[11] = 0;
    secondClick[12] = 0;
    secondClick[13] = 0;
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
    image13: './assets/imgs/instalaciones-13(775x518).jpg',
    image14: './assets/imgs/actividades-1(775x518).jpg',
    image15: './assets/imgs/actividades-2(775x518).jpg',
    image16: './assets/imgs/actividades-3(775x518).jpg',
    image17: './assets/imgs/actividades-4(775x518).jpg',
    image18: './assets/imgs/actividades-5(775x518).jpg',
    image19: './assets/imgs/actividades-6(775x518).jpg',
    image20: './assets/imgs/actividades-7(775x518).jpg',
    image21: './assets/imgs/actividades-8(775x518).jpg',
    image22: './assets/imgs/actividades-9(775x518).jpg',
    image23: './assets/imgs/actividades-10(775x518).jpg',
    image24: './assets/imgs/actividades-11(775x518).jpg',
    image25: './assets/imgs/actividades-12(775x518).jpg',
    image26: './assets/imgs/actividades-13(775x518).jpg'
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
        case 14:
            bannerImage.src = bannerImageSources.image14;
        break
        case 15:
            bannerImage.src = bannerImageSources.imag15;
        break
        case 16:
            bannerImage.src = bannerImageSources.image16;
        break
        case 17:
            bannerImage.src = bannerImageSources.image17;
        break
        case 18:
            bannerImage.src = bannerImageSources.image18;
        break
        case 19:
            bannerImage.src = bannerImageSources.image19;
        break
        case 20:
            bannerImage.src = bannerImageSources.image20;
        break
        case 21:
            bannerImage.src = bannerImageSources.image21;
        break
        case 22:
            bannerImage.src = bannerImageSources.image22;
        break
        case 23:
            bannerImage.src = bannerImageSources.image23;
        break
        case 24:
            bannerImage.src = bannerImageSources.image24;
        break
        case 25:
            bannerImage.src = bannerImageSources.image25;
        break
        case 26:
            bannerImage.src = bannerImageSources.image26;
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
        case 14:

        break
        case 15:
            bannerImage.src = bannerImageSources.image14;
            bannerImageBack.src = bannerImageSources.image15;
            currentBannerPosition = 14;
            backSlide();
            fadeOut();
        break
        case 16:
            bannerImage.src = bannerImageSources.image15;
            bannerImageBack.src = bannerImageSources.image16;
            currentBannerPosition = 15;
            backSlide();
            fadeOut();
        break
        case 17:
            bannerImage.src = bannerImageSources.image16;
            bannerImageBack.src = bannerImageSources.image17;
            currentBannerPosition = 16;
            backSlide();
            fadeOut();
        break
        case 18:
            bannerImage.src = bannerImageSources.image17;
            bannerImageBack.src = bannerImageSources.image18;
            currentBannerPosition = 17;
            backSlide();
            fadeOut();
        break
        case 19:
            bannerImage.src = bannerImageSources.image18;
            bannerImageBack.src = bannerImageSources.image19;
            currentBannerPosition = 18;
            backSlide();
            fadeOut();
        break
        case 20:
            bannerImage.src = bannerImageSources.image19;
            bannerImageBack.src = bannerImageSources.image20;
            currentBannerPosition = 19;
            backSlide();
            fadeOut();
        break
        case 21:
            bannerImage.src = bannerImageSources.image20;
            bannerImageBack.src = bannerImageSources.image21;
            currentBannerPosition = 20;
            backSlide();
            fadeOut();
        break
        case 22:
            bannerImage.src = bannerImageSources.image21;
            bannerImageBack.src = bannerImageSources.image22;
            currentBannerPosition = 21;
            backSlide();
            fadeOut();
        break
        case 23:
            bannerImage.src = bannerImageSources.image22;
            bannerImageBack.src = bannerImageSources.image23;
            currentBannerPosition = 22;
            backSlide();
            fadeOut();
        break
        case 24:
            bannerImage.src = bannerImageSources.image23;
            bannerImageBack.src = bannerImageSources.image24;
            currentBannerPosition = 23;
            backSlide();
            fadeOut();
        break
        case 25:
            bannerImage.src = bannerImageSources.image24;
            bannerImageBack.src = bannerImageSources.image25;
            currentBannerPosition = 24;
            backSlide();
            fadeOut();
        break
        case 26:
            bannerImage.src = bannerImageSources.image25;
            bannerImageBack.src = bannerImageSources.image25;
            currentBannerPosition = 25;
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
        case 14:
            bannerImage.src = bannerImageSources.image15;
            bannerImageBack.src = bannerImageSources.image14;
            currentBannerPosition = 15;
            frontSlide();
            fadeOut();
        break
        case 15:
            bannerImage.src = bannerImageSources.image16;
            bannerImageBack.src = bannerImageSources.image15;
            currentBannerPosition = 16;
            frontSlide();
            fadeOut();
        break
        case 16:
            bannerImage.src = bannerImageSources.image17;
            bannerImageBack.src = bannerImageSources.image16;
            currentBannerPosition = 17;
            frontSlide();
            fadeOut();
        break
        case 17:
            bannerImage.src = bannerImageSources.image18;
            bannerImageBack.src = bannerImageSources.image17;
            currentBannerPosition = 18;
            frontSlide();
            fadeOut();
        break
        case 18:
            bannerImage.src = bannerImageSources.image19;
            bannerImageBack.src = bannerImageSources.image18;
            currentBannerPosition = 19;
            frontSlide();
            fadeOut();
        break
        case 19:
            bannerImage.src = bannerImageSources.image20;
            bannerImageBack.src = bannerImageSources.image19;
            currentBannerPosition = 20;
            frontSlide();
            fadeOut();
        break
        case 20:
            bannerImage.src = bannerImageSources.image21;
            bannerImageBack.src = bannerImageSources.image20;
            currentBannerPosition = 21;
            frontSlide();
            fadeOut();
        break
        case 21:
            bannerImage.src = bannerImageSources.image22;
            bannerImageBack.src = bannerImageSources.image21;
            currentBannerPosition = 22;
            frontSlide();
            fadeOut();
        break
        case 22:
            bannerImage.src = bannerImageSources.image23;
            bannerImageBack.src = bannerImageSources.image22;
            currentBannerPosition = 23;
            frontSlide();
            fadeOut();
        break
        case 23:
            bannerImage.src = bannerImageSources.image24;
            bannerImageBack.src = bannerImageSources.image23;
            currentBannerPosition = 24;
            frontSlide();
            fadeOut();
        break
        case 24:
            bannerImage.src = bannerImageSources.image25;
            bannerImageBack.src = bannerImageSources.image24;
            currentBannerPosition = 25;
            frontSlide();
            fadeOut();
        break
        case 25:
            bannerImage.src = bannerImageSources.image26;
            bannerImageBack.src = bannerImageSources.image25;
            currentBannerPosition = 26;
            frontSlide();
            fadeOut();
        break
        case 26:

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