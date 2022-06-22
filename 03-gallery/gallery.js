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

/*  La función makeItBigger dispara una condicional switch que toma como parámetro la variable 
    whatPhotoIsClicked. Hay un caso para cada fotografía. En todos, se dispara primero una función que 
    retorna a su tamaño original a todas las fotografías del carrusel, y luego se agrega una clase a la 
    fotografía seleccionada que cambiará su tamaño a 1.5x .                                                     */
function makeItBigger () {
    switch (whatPhotoIsClicked) {
        case 1:
            resetClickValues();
            resetCarouselItemsSize();
            instalations1.className = 'gallery-carousel-photo carousel-first-photo bigger-photo'
        break
        case 2:
            resetClickValues();
            resetCarouselItemsSize();
            instalations2.className = 'gallery-carousel-photo bigger-photo'
        break
        case 3:
            resetClickValues();
            resetCarouselItemsSize();
            instalations3.className = 'gallery-carousel-photo bigger-photo'
        break
        case 4:
            resetClickValues();
            resetCarouselItemsSize();
            instalations4.className = 'gallery-carousel-photo bigger-photo'
        break
        case 5:
            resetClickValues();
            resetCarouselItemsSize();
            instalations5.className = 'gallery-carousel-photo bigger-photo'
        break
        case 6:
            resetClickValues();
            resetCarouselItemsSize();
            instalations6.className = 'gallery-carousel-photo bigger-photo'
        break
        case 7:
            resetClickValues();
            resetCarouselItemsSize();
            instalations7.className = 'gallery-carousel-photo bigger-photo'
        break
        case 8:
            resetClickValues();
            resetCarouselItemsSize();
            instalations8.className = 'gallery-carousel-photo bigger-photo'
        break
        case 9:
            resetClickValues();
            resetCarouselItemsSize();
            instalations9.className = 'gallery-carousel-photo bigger-photo'
        break
        case 10:
            resetClickValues();
            resetCarouselItemsSize();
            instalations10.className = 'gallery-carousel-photo carousel-last-photo bigger-photo'
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