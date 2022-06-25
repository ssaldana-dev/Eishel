const menu_img = document.getElementById('header-menu-img');
menu_img.addEventListener('click', deployMenu);

const home = document.getElementById('header-menu-home');
const about_us = document.getElementById('header-menu-aboutUs');
const services = document.getElementById('header-menu-services');
const gallery = document.getElementById('header-menu-gallery');
const collaborators = document.getElementById('header-menu-collaborators');
const work_bench = document.getElementById('header-menu-workBench');
const contact = document.getElementById('header-menu-contact');

let isTheMenuActive = 0;

function deployMenu () {
    if (isTheMenuActive == 0) {
        menu_img.src = '../assets/icon/menu-icon-selected.png'
        deployElements();
        isTheMenuActive = 1 ;
    }
    else {
        retractElements();
        menu_img.src = '../assets/icon/menu-icon.svg'
        isTheMenuActive = 0;
    }
}

function deployElements () {
    home.className = 'responsiveMenu-option responsiveMenu-option--home';
    about_us.className = 'responsiveMenu-option responsiveMenu-option--aboutUs';
    services.className = 'responsiveMenu-option responsiveMenu-option--services';
    gallery.className = 'responsiveMenu-option responsiveMenu-option--gallery';
    collaborators.className = 'responsiveMenu-option responsiveMenu-option--collaborators';
    work_bench.className = 'responsiveMenu-option responsiveMenu-option--workBench';
    contact.className = 'responsiveMenu-option responsiveMenu-option--contact responsiveMenu-option--last-option';
}

function retractElements () {
    home.className = 'responsiveMenu-option responsiveMenu-option--home-hidden';
    about_us.className = 'responsiveMenu-option responsiveMenu-option--aboutUs-hidden';
    services.className = 'responsiveMenu-option responsiveMenu-option--services-hidden';
    gallery.className = 'responsiveMenu-option responsiveMenu-option--gallery-hidden';
    collaborators.className = 'responsiveMenu-option responsiveMenu-option--collaborators-hidden';
    work_bench.className = 'responsiveMenu-option responsiveMenu-option--workBench-hidden';
    contact.className = 'responsiveMenu-option responsiveMenu-option--last-option responsiveMenu-option--contact-hidden';
}