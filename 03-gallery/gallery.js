let whatPhotoIsClicked = 0;

const miniatures = [];
miniatures[1] = document.getElementById('instalations-1');
miniatures[2] = document.getElementById('instalations-2');
miniatures[3] = document.getElementById('instalations-3');
miniatures[4] = document.getElementById('instalations-4');
miniatures[5] = document.getElementById('instalations-5');
miniatures[6] = document.getElementById('instalations-6');
miniatures[7] = document.getElementById('instalations-7');
miniatures[8] = document.getElementById('instalations-8');
miniatures[9] = document.getElementById('instalations-9');
miniatures[10] = document.getElementById('instalations-10');
miniatures[11] = document.getElementById('instalations-11');
miniatures[12] = document.getElementById('instalations-12');
miniatures[13] = document.getElementById('instalations-13');
miniatures[14] = document.getElementById('events-1');
miniatures[15] = document.getElementById('events-2');
miniatures[16] = document.getElementById('events-3');
miniatures[17] = document.getElementById('events-4');
miniatures[18] = document.getElementById('events-5');
miniatures[19] = document.getElementById('events-6');
miniatures[20] = document.getElementById('events-7');
miniatures[21] = document.getElementById('events-8');
miniatures[22] = document.getElementById('events-9');
miniatures[23] = document.getElementById('events-10');
miniatures[24] = document.getElementById('events-11');
miniatures[25] = document.getElementById('events-12');
miniatures[26] = document.getElementById('activities-1');
miniatures[27] = document.getElementById('activities-2');
miniatures[28] = document.getElementById('activities-3');
miniatures[29] = document.getElementById('activities-4');
miniatures[30] = document.getElementById('activities-5');
miniatures[31] = document.getElementById('activities-6');
miniatures[32] = document.getElementById('activities-7');
miniatures[33] = document.getElementById('activities-8');
miniatures[34] = document.getElementById('activities-9');
miniatures[35] = document.getElementById('activities-10');
miniatures[36] = document.getElementById('activities-11');
miniatures[37] = document.getElementById('activities-12');
miniatures[1].addEventListener('click', function(){whatPhotoIsClicked = 1; makeItBigger()});
miniatures[2].addEventListener('click', function(){whatPhotoIsClicked = 2; makeItBigger()});
miniatures[3].addEventListener('click', function(){whatPhotoIsClicked = 3; makeItBigger()});
miniatures[4].addEventListener('click', function(){whatPhotoIsClicked = 4; makeItBigger()});
miniatures[5].addEventListener('click', function(){whatPhotoIsClicked = 5; makeItBigger()});
miniatures[6].addEventListener('click', function(){whatPhotoIsClicked = 6; makeItBigger()});
miniatures[7].addEventListener('click', function(){whatPhotoIsClicked = 7; makeItBigger()});
miniatures[8].addEventListener('click', function(){whatPhotoIsClicked = 8; makeItBigger()});
miniatures[9].addEventListener('click', function(){whatPhotoIsClicked = 9; makeItBigger()});
miniatures[10].addEventListener('click', function(){whatPhotoIsClicked = 10; makeItBigger()});
miniatures[11].addEventListener('click', function(){whatPhotoIsClicked = 11; makeItBigger()});
miniatures[12].addEventListener('click', function(){whatPhotoIsClicked = 12; makeItBigger()});
miniatures[13].addEventListener('click', function(){whatPhotoIsClicked = 13; makeItBigger()});
miniatures[14].addEventListener('click', function() {whatPhotoIsClicked = 14; makeItBigger()});
miniatures[15].addEventListener('click', function() {whatPhotoIsClicked = 15; makeItBigger()});
miniatures[16].addEventListener('click', function() {whatPhotoIsClicked = 16; makeItBigger()});
miniatures[17].addEventListener('click', function() {whatPhotoIsClicked = 17; makeItBigger()});
miniatures[18].addEventListener('click', function() {whatPhotoIsClicked = 18; makeItBigger()});
miniatures[19].addEventListener('click', function() {whatPhotoIsClicked = 19; makeItBigger()});
miniatures[20].addEventListener('click', function() {whatPhotoIsClicked = 20; makeItBigger()});
miniatures[21].addEventListener('click', function() {whatPhotoIsClicked = 21; makeItBigger()});
miniatures[22].addEventListener('click', function() {whatPhotoIsClicked = 22; makeItBigger()});
miniatures[23].addEventListener('click', function() {whatPhotoIsClicked = 23; makeItBigger()});
miniatures[24].addEventListener('click', function() {whatPhotoIsClicked = 24; makeItBigger()});
miniatures[25].addEventListener('click', function() {whatPhotoIsClicked = 25; makeItBigger()});
miniatures[26].addEventListener('click', function() {whatPhotoIsClicked = 26; makeItBigger()});
miniatures[27].addEventListener('click', function() {whatPhotoIsClicked = 27; makeItBigger()});
miniatures[28].addEventListener('click', function() {whatPhotoIsClicked = 28; makeItBigger()});
miniatures[29].addEventListener('click', function() {whatPhotoIsClicked = 29; makeItBigger()});
miniatures[30].addEventListener('click', function() {whatPhotoIsClicked = 30; makeItBigger()});
miniatures[31].addEventListener('click', function() {whatPhotoIsClicked = 31; makeItBigger()});
miniatures[32].addEventListener('click', function() {whatPhotoIsClicked = 32; makeItBigger()});
miniatures[33].addEventListener('click', function() {whatPhotoIsClicked = 33; makeItBigger()});
miniatures[34].addEventListener('click', function() {whatPhotoIsClicked = 34; makeItBigger()});
miniatures[35].addEventListener('click', function() {whatPhotoIsClicked = 35; makeItBigger()});
miniatures[36].addEventListener('click', function() {whatPhotoIsClicked = 36; makeItBigger()});
miniatures[37].addEventListener('click', function() {whatPhotoIsClicked = 37; makeItBigger()});

const secondClick = [];
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
secondClick[14] = 0;
secondClick[15] = 0;
secondClick[16] = 0;
secondClick[17] = 0;
secondClick[18] = 0;
secondClick[19] = 0;
secondClick[20] = 0;
secondClick[21] = 0;
secondClick[22] = 0;
secondClick[23] = 0;
secondClick[24] = 0;
secondClick[25] = 0;
secondClick[26] = 0;
secondClick[27] = 0;
secondClick[28] = 0;
secondClick[29] = 0;
secondClick[30] = 0;
secondClick[31] = 0;
secondClick[32] = 0;
secondClick[33] = 0;
secondClick[34] = 0;
secondClick[35] = 0;
secondClick[36] = 0;
secondClick[37] = 0;

const title = document.getElementById('title');
title.addEventListener('click', resetCarouselItemsSize);
const galleryTitleInstalations = document.getElementById('gallery-title-instalations');
galleryTitleInstalations.addEventListener('click', resetCarouselItemsSize,);
const galleryTitleEvents = document.getElementById('gallery-title-events');
galleryTitleEvents.addEventListener('click', resetCarouselItemsSize,);
const galleryTitleActivities = document.getElementById('gallery-title-activities');
galleryTitleActivities.addEventListener('click', resetCarouselItemsSize,);

function makeItBigger () {
    console.log('function makeItBigger had been activated.');
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

function resetClickValues () {
    for (let j = 0; j < secondClick.length; j++) {
        secondClick[j] = 0;
    }
}

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