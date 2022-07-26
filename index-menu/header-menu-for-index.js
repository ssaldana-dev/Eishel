const menu_img = document.getElementById('header-menu-img');
menu_img.addEventListener('click', deployMenu);

const home = document.getElementById('header-menu-home');
const about_us = document.getElementById('header-menu-aboutUs');
const services = document.getElementById('header-menu-services');
const gallery = document.getElementById('header-menu-gallery');
const collaborators = document.getElementById('header-menu-support');
const work_bench = document.getElementById('header-menu-workBench');
const contact = document.getElementById('header-menu-contact');

let isTheMenuActive = 0;

function deployMenu () {
    if (isTheMenuActive == 0) {
        menu_img.src = './assets/icon/menu-icon-selected.png'
        deployElements();
        isTheMenuActive = 1 ;
    }
    else {
        retractElements();
        menu_img.src = './assets/icon/menu-icon.svg'
        isTheMenuActive = 0;
    }
}

function deployElements () {
    home.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--home';
    about_us.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--aboutUs';
    services.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--services';
    gallery.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--gallery';
    collaborators.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--collaborators';
    work_bench.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--workBench';
    contact.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--contact responsiveMenu-option-anchor--last-option';
}

function retractElements () {
    home.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--home-hidden';
    about_us.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--aboutUs-hidden';
    services.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--services-hidden';
    gallery.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--gallery-hidden';
    collaborators.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--collaborators-hidden';
    work_bench.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--workBench-hidden';
    contact.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--last-option responsiveMenu-option-anchor--contact-hidden';
}