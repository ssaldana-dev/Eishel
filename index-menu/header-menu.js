const menu = document.getElementById('menu');
menu.addEventListener('click', deployMenu);
const hamburguer = document.getElementById('menu-hamburguer')

const home = document.getElementById('header-menu-home');
const donations = document.getElementById('header-menu-donations');
const about_us = document.getElementById('header-menu-aboutUs');
const services = document.getElementById('header-menu-services');
const gallery = document.getElementById('header-menu-gallery');
const collaborators = document.getElementById('header-menu-support');
const work_bench = document.getElementById('header-menu-workBench');
const contact = document.getElementById('header-menu-contact');

let isTheMenuActive = 0;

function deployMenu () {
    if (isTheMenuActive == 0) {
        hamburguer.className = 'responsiveMenu-container-hamburguer cross';
        deployElements();
        isTheMenuActive = 1 ;
    }
    else {
        hamburguer.className = 'responsiveMenu-container-hamburguer';
        retractElements();
        isTheMenuActive = 0;
    }
}

function deployElements () {
    home.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--home';
    donations.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--donations'
    about_us.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--aboutUs';
    services.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--services';
    gallery.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--gallery';
    collaborators.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--collaborators';
    work_bench.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--workBench';
    contact.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--contact responsiveMenu-option-anchor--last-option';
}

function retractElements () {
    home.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--home hidden';
    donations.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--donations hidden';
    about_us.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--aboutUs hidden';
    services.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--services hidden';
    gallery.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--gallery hidden';
    collaborators.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--collaborators hidden';
    work_bench.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--workBench hidden';
    contact.className = 'responsiveMenu-option-anchor responsiveMenu-option-anchor--last-option responsiveMenu-option-anchor--contact hidden';
}