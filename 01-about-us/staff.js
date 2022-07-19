const COLLABORATOR_IMAGE_1 = document.getElementById('collaborator-img-1');
COLLABORATOR_IMAGE_1.addEventListener('click', changeClass1);
const COLLABORATOR_IMAGE_2 = document.getElementById('collaborator-img-2');
COLLABORATOR_IMAGE_2.addEventListener('click', changeClass2);
const COLLABORATOR_IMAGE_3 = document.getElementById('collaborator-img-3');
COLLABORATOR_IMAGE_3.addEventListener('click', changeClass3);
const COLLABORATOR_IMAGE_4 = document.getElementById('collaborator-img-4');
COLLABORATOR_IMAGE_4.addEventListener('click', changeClass4);
const COLLABORATOR_IMAGE_5 = document.getElementById('collaborator-img-5');
COLLABORATOR_IMAGE_5.addEventListener('click', changeClass5);
const COLLABORATOR_IMAGE_6 = document.getElementById('collaborator-img-6');
COLLABORATOR_IMAGE_6.addEventListener('click', changeClass6);
const COLLABORATOR_IMAGE_7 = document.getElementById('collaborator-img-7');
COLLABORATOR_IMAGE_7.addEventListener('click', changeClass7);
const COLLABORATOR_IMAGE_8 = document.getElementById('collaborator-img-8');
COLLABORATOR_IMAGE_8.addEventListener('click', changeClass8);

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;
let counter_5 = 0;
let counter_6 = 0;
let counter_7 = 0;
let counter_8 = 0;

function changeClass1 () {
    if (counter_1 == 0) {
        COLLABORATOR_IMAGE_1.className = 'staff-collaborator-container-img change1';
        counter_1 = 1;
    }
    else {
        COLLABORATOR_IMAGE_1.className = 'staff-collaborator-container-img change2';
        counter_1 = 0;
    }
}
function changeClass2 () {
    if (counter_2 == 0) {
        COLLABORATOR_IMAGE_2.className = 'staff-collaborator-container-img change1';
        counter_2 = 1;
    }
    else {
        COLLABORATOR_IMAGE_2.className = 'staff-collaborator-container-img change2';
        counter_2 = 0;
    }
}
function changeClass3 () {
    if (counter_3 == 0) {
        COLLABORATOR_IMAGE_3.className = 'staff-collaborator-container-img change1';
        counter_3 = 1;
    }
    else {
        COLLABORATOR_IMAGE_3.className = 'staff-collaborator-container-img change2';
        counter_3 = 0;
    }
}
function changeClass4 () {
    if (counter_4 == 0) {
        COLLABORATOR_IMAGE_4.className = 'staff-collaborator-container-img change1';
        counter_4 = 1;
    }
    else {
        COLLABORATOR_IMAGE_4.className = 'staff-collaborator-container-img change2';
        counter_4 = 0;
    }
}
function changeClass5 () {
    if (counter_5 == 0) {
        COLLABORATOR_IMAGE_5.className = 'staff-collaborator-container-img change1';
        counter_5 = 1;
    }
    else {
        COLLABORATOR_IMAGE_5.className = 'staff-collaborator-container-img change2';
        counter_5 = 0;
    }
}
function changeClass6 () {
    if (counter_6 == 0) {
        COLLABORATOR_IMAGE_6.className = 'staff-collaborator-container-img change1';
        counter_6 = 1;
    }
    else {
        COLLABORATOR_IMAGE_6.className = 'staff-collaborator-container-img change2';
        counter_6 = 0;
    }
}
function changeClass7 () {
    if (counter_7 == 0) {
        COLLABORATOR_IMAGE_7.className = 'staff-collaborator-container-img change1';
        counter_7 = 1;
    }
    else {
        COLLABORATOR_IMAGE_7.className = 'staff-collaborator-container-img change2';
        counter_7 = 0;
    }
}
function changeClass8 () {
    if (counter_8 == 0) {
        COLLABORATOR_IMAGE_8.className = 'staff-collaborator-container-img change1';
        counter_8 = 1;
    }
    else {
        COLLABORATOR_IMAGE_8.className = 'staff-collaborator-container-img change2';
        counter_8 = 0;
    }
}