const title = document.getElementById('title');
title.addEventListener('click', resetCarouselItemsSize);
const galleryTitleInstalations = document.getElementById('gallery-title-instalations');
galleryTitleInstalations.addEventListener('click', resetCarouselItemsSize,);
const galleryTitleEvents = document.getElementById('gallery-title-events');
galleryTitleEvents.addEventListener('click', resetCarouselItemsSize,);
const galleryTitleActivities = document.getElementById('gallery-title-activities');
galleryTitleActivities.addEventListener('click', resetCarouselItemsSize,);

/*  Esta variable guardará el valor de la fotografía que sea clickeada  */
let whatPhotoIsClicked = 0;
/*  La variable miniatures contiene un array vacío, en donde se guardarán los objetos HTML por medio de una función getElementById */
const miniatures = [];
/*  El siguiente cicle for itera 13 veces, que es la cantidad de imágenes por carousel, dado que los IDs de los elementos en HTML 
    están diferenciados por un número ascendente, en cada iteración se agregan al array miniatures, sumándose el número de iteración
    correspondiente. De esta manera, nos ahorramos muchísimas líneas de código. Esto hace que el código sea difícilmente escalable 
    por tanto, en un futuro automatizaré este proceso creando una clase para las imágenes y se incrustarán tanto en el HTML como en el 
    código de manera automática.    */
for (let h = 1; h <= 13; h++) {
    let idInstalations = 'instalations-' + h;
    let idEvents = 'activities-' + (h);
    let idActivities = 'events-' + (h);
    miniatures[h] = document.getElementById(idInstalations);
    if (h >= 13) {

    }
    else {
        h1 = h + 13;
        h2 = h + 13 + 12;
        miniatures[h1] = document.getElementById(idActivities);
        miniatures[h2] = document.getElementById(idEvents);
    }
}
/*  Este ciclo for itera una vez por cada elemento de miniatures, y le agrega un eventListener
    a cada alemento, así como una función que, identifica primero el elemento con la variable 
    whatPhotoIsClicked y luego manda a llamar a la función makeItBigger al momento de hacer click
    en el elemento. */
for (let k = 1;k < miniatures.length; k++) {
    miniatures[k].addEventListener('click', function(){whatPhotoIsClicked = k; makeItBigger()});
}
/*  Aquí se abre un array vació en la constante secondClick y luego por medio de un ciclo for 
    crea una variable que coincide con el número del elemento en miniatures. Esto para guardar el 
    valor del click y saber si se clickea dos veces consecutivas el mismo elemento. */
const secondClick = [];
for (let l = 1; l < miniatures.length; l++) {
    secondClick[l] = 0;
}
/*  La función MakeItBigger se manda a llamar cada que se le da click a una miniatura. Contiene una
    condicional que verifica si no se ha dado click dos veces de manera consecutiva a la misma imagen. 
    En caso de que no sea así, retorna el tamañao de todos los elementos, y luego vuelve grande el 
    elemento al que se haya dado click. Luego, si sí se le dio un segundo click consecutivo, cambia el 
    valor de currentBannerPosition al de la imagen actual y abre el banner. */
function makeItBigger () {
    if(secondClick[whatPhotoIsClicked] == 0) {
        resetCarouselItemsSize();
        miniatures[whatPhotoIsClicked].className ='gallery-carousel-photo bigger-photo';
        secondClick[whatPhotoIsClicked] = 1 ;
    }
    else if (secondClick[whatPhotoIsClicked] == 1) {
        currentBannerPosition = whatPhotoIsClicked;
        openBanner();
    }
}
/*  La funcion resetCarouselItemSize, cambia las clases de todos los elementos a sus valores originales, 
    y seguido manda a llamar la función que resetea los valores del click   */
function resetCarouselItemsSize () {
    for (let i = 1; i < miniatures.length; i++) {
        miniatures[i].className = 'gallery-carousel-photo';
    }
    miniatures[1].className = 'gallery-carousel-photo carousel-first-photo';
    miniatures[13].className = 'gallery-carousel-photo carousel-last-photo';
    miniatures[14].className = 'gallery-carousel-photo carousel-first-photo';
    miniatures[25].className = 'gallery-carousel-photo carousel-last-photo';
    miniatures[26].className = 'gallery-carousel-photo carousel-first-photo';
    miniatures[37].className = 'gallery-carousel-photo carousel-last-photo';
    resetClickValues()
}
/*  La función resetClickValues, resetea los valores del click. */
function resetClickValues () {
    for (let j = 0; j < secondClick.length; j++) {
        secondClick[j] = 0;
    }
}
/*  Las siguiente parte contiene el dinamismo del banner, falta comentar su funcionamiento. */
const banner =  document.getElementById('gallery-banner');
const bannerImage = document.getElementById('display-photo');
const bannerImageBack = document.getElementById('display-photo-photoBack')
let currentBannerPosition = 0;

const bannerImageSources = []
bannerImageSources[1] = './assets/imgs/mobile-banner/instalaciones-1(775x518).jpg';
bannerImageSources[2] = './assets/imgs/mobile-banner/instalaciones-2(775x518).jpg';
bannerImageSources[3] = './assets/imgs/mobile-banner/instalaciones-3(775x518).jpg';
bannerImageSources[4] = './assets/imgs/mobile-banner/instalaciones-4(775x518).jpg';
bannerImageSources[5] = './assets/imgs/mobile-banner/instalaciones-5(775x518).jpg';
bannerImageSources[6] = './assets/imgs/mobile-banner/instalaciones-6(775x518).jpg';
bannerImageSources[7] = './assets/imgs/mobile-banner/instalaciones-7(775x518).jpg';
bannerImageSources[8] = './assets/imgs/mobile-banner/instalaciones-8(775x518).jpg';
bannerImageSources[9] = './assets/imgs/mobile-banner/instalaciones-9(775x518).jpg';
bannerImageSources[10] = './assets/imgs/mobile-banner/instalaciones-10(775x518).jpg';
bannerImageSources[11] = './assets/imgs/mobile-banner/instalaciones-11(775x518).jpg';
bannerImageSources[12] = './assets/imgs/mobile-banner/instalaciones-12(775x518).jpg';
bannerImageSources[13] = './assets/imgs/mobile-banner/instalaciones-13(775x518).jpg';
bannerImageSources[14] = './assets/imgs/mobile-banner/eventos-1(800x600).jpg';
bannerImageSources[15] = './assets/imgs/mobile-banner/eventos-2(512x384).jpg';
bannerImageSources[16] = './assets/imgs/mobile-banner/eventos-3(512x384).jpg';
bannerImageSources[17] = './assets/imgs/mobile-banner/eventos-4(512x384).jpg';
bannerImageSources[18] = './assets/imgs/mobile-banner/eventos-5(640x360).jpg';
bannerImageSources[19] = './assets/imgs/mobile-banner/eventos-6(512x384).jpg';
bannerImageSources[20] = './assets/imgs/mobile-banner/eventos-7(512x384).jpg';
bannerImageSources[21] = './assets/imgs/mobile-banner/eventos-8(426x640).jpg';
bannerImageSources[22] = './assets/imgs/mobile-banner/eventos-9(480x360).jpg';
bannerImageSources[23] = './assets/imgs/mobile-banner/eventos-10(480x360).jpg';
bannerImageSources[24] = './assets/imgs/mobile-banner/eventos-11(360x480).jpg';
bannerImageSources[25] = './assets/imgs/mobile-banner/eventos-12(480x360).jpg';
bannerImageSources[26] = './assets/imgs/mobile-banner/actividades-1(720x960).jpg';
bannerImageSources[27] = './assets/imgs/mobile-banner/actividades-2(720x960).jpg';
bannerImageSources[28] = './assets/imgs/mobile-banner/actividades-3(960x720).jpg';
bannerImageSources[29] = './assets/imgs/mobile-banner/actividades-4(960x720).jpg';
bannerImageSources[30] = './assets/imgs/mobile-banner/actividades-5(590x960).jpg';
bannerImageSources[31] = './assets/imgs/mobile-banner/actividades-6(960x540).jpg';
bannerImageSources[32] = './assets/imgs/mobile-banner/actividades-7(960x720).jpg';
bannerImageSources[33] = './assets/imgs/mobile-banner/actividades-8(960x720).jpg';
bannerImageSources[34] = './assets/imgs/mobile-banner/actividades-9(960x540).jpg';
bannerImageSources[35] = './assets/imgs/mobile-banner/actividades-10(960x540).jpg';
bannerImageSources[36] = './assets/imgs/mobile-banner/actividades-11(720x960).jpg';
bannerImageSources[37] = './assets/imgs/mobile-banner/actividades-12(683x512).jpg';


function closeBanner () {
    bannerImageBack.className = 'gallery-display-container-photo-photoBack';
    bannerImage.className = 'gallery-display-container-photo';
    banner.className = 'gallery-display off';
    resetCarouselItemsSize();
}

function openBanner () {
    bannerImage.src = bannerImageSources[currentBannerPosition]
    banner.className = 'gallery-display on';
}

function slideImageBack () {
    if (currentBannerPosition <= 1) {

    }
    else if (currentBannerPosition == 14) {

    }
    else if (currentBannerPosition == 26) {

    }
    else {
        bannerImage.src = bannerImageSources[currentBannerPosition - 1];
        bannerImageBack.src = bannerImageSources[currentBannerPosition]
        currentBannerPosition += -1;
        backSlide();
        fadeOut();
    }
}

function slideImageFront () {
    if (currentBannerPosition == 13) {

    }
    else if (currentBannerPosition == 25) {

    }
    else if (currentBannerPosition == 37) {

    }
    else {
        bannerImage.src = bannerImageSources[currentBannerPosition + 1]
        bannerImageBack.src = bannerImageSources[currentBannerPosition];
        currentBannerPosition += 1;
        frontSlide();
        fadeOut();
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