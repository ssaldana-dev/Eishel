const title = document.getElementById('title');
const galleryTitleInstalations = document.getElementById('gallery-title-instalations');
const galleryTitleEvents = document.getElementById('gallery-title-events');
const galleryTitleActivities = document.getElementById('gallery-title-activities');

title.addEventListener('click', resetCarouselItemsSize);
galleryTitleInstalations.addEventListener('click', resetCarouselItemsSize,);
galleryTitleEvents.addEventListener('click', resetCarouselItemsSize,);
galleryTitleActivities.addEventListener('click', resetCarouselItemsSize,);

let whatPhotoIsClicked = 0;
const miniatures = [];
/*  Cicle que guarda las miniaturas del HTML en un array.   */
for (let h = 1; h <= 13; h++) {
    let idInstalations = 'instalations-' + h;
    let idEvents = 'activities-' + (h);
    let idActivities = 'events-' + (h);
    miniatures[h] = document.getElementById(idInstalations);
    if (h >= 13) {
    } else {
        h1 = h + 13;
        h2 = h + 13 + 12;
        miniatures[h1] = document.getElementById(idActivities);
        miniatures[h2] = document.getElementById(idEvents);
    }
}
/*  Este ciclo le agrega un eventListener a cada alemento, y agrega una función que guarda el número 
    de la miniatura en el click.    */
for (let k = 1;k < miniatures.length; k++) {
    miniatures[k].addEventListener('click', function(){whatPhotoIsClicked = k; makeItBigger()});
}
/*  Este ciclo crea una variable para guardar el click. */
const secondClick = [];
for (let l = 1; l < miniatures.length; l++) {
    secondClick[l] = false;
}
/*  Esta función hace grande la miniatura al primer click y al segundo consecutivo abre el banner.  */
function makeItBigger () {
    if (secondClick[whatPhotoIsClicked] == false) {
        resetCarouselItemsSize();
        miniatures[whatPhotoIsClicked].className ='gallery-carousel-photo bigger-photo';
        secondClick[whatPhotoIsClicked] = true;
    } else if (secondClick[whatPhotoIsClicked] == true) {
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
        secondClick[j] = false;
    }
}
/*  Las siguiente parte contiene el dinamismo del banner, falta comentar su funcionamiento. */
const banner =  document.getElementById('gallery-banner');
const bannerImage = document.getElementById('display-photo');
const bannerImageBack = document.getElementById('display-photo-photoBack')
let currentBannerPosition = 0;
/*  Este ciclo crea y guarda las rutas de las imágnes del banner en un array.   */
const bannerImageSources = []
for (let l = 1; l <= 13; l++) {
    let instalationsPath = `./assets/imgs/mobile-banner/instalaciones-${l}.jpg`;
    let activitiesPath = `./assets/imgs/mobile-banner/actividades-${l}.jpg`;
    let eventsPath = `./assets/imgs/mobile-banner/eventos-${l}.jpg`;
    bannerImageSources[l] = instalationsPath;
    if (l >= 13) {

    } else {
        bannerImageSources[l + 13] = eventsPath;
        bannerImageSources[l + 12 + 13] = activitiesPath;
    }
}

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

function slideImageBack() {
    if (currentBannerPosition <= 1) {
    } else if (currentBannerPosition == 14) {
    } else if (currentBannerPosition == 26) {
    } else {
        bannerImage.src = bannerImageSources[currentBannerPosition - 1];
        bannerImageBack.src = bannerImageSources[currentBannerPosition];
        currentBannerPosition += -1;
        backSlide();
        fadeOut();
    }
}

function slideImageFront () {
    if (currentBannerPosition == 13) {
    } else if (currentBannerPosition == 25) {
    } else if (currentBannerPosition == 37) {
    } else {
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
    } else if (backSlideCounter == 1) {
        bannerImage.className = 'gallery-display-container-photo photo-backSlide2';
        backSlideCounter = 0;
    }
}

function frontSlide () {
    if (frontSlideCounter == 0) {
        bannerImage.className = 'gallery-display-container-photo photo-frontSlide1';
        frontSlideCounter = 1;
    } else if (frontSlideCounter == 1) {
        bannerImage.className = 'gallery-display-container-photo photo-frontSlide2';
        frontSlideCounter = 0;
    }
}

function fadeOut () {
    if (fadeOutCounter == 0) {
        bannerImageBack.className = 'gallery-display-container-photo-photoBack fadeOutImg1';
        fadeOutCounter = 1;
    } else if (fadeOutCounter == 1) {
        bannerImageBack.className = 'gallery-display-container-photo-photoBack fadeOutImg2';
        fadeOutCounter = 0;
    }
}