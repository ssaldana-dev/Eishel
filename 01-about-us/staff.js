const COLLABORATOR_IMAGE_1 = document.getElementById('collaborator-img-1');
COLLABORATOR_IMAGE_1.addEventListener('click', changeClass1);
const COLLABORATOR_IMAGE_2 = document.getElementById('collaborator-img-2');
COLLABORATOR_IMAGE_2.addEventListener('click', changeClass2);
const COLLABORATOR_IMAGE_3 = document.getElementById('collaborator-img-3');
COLLABORATOR_IMAGE_3.addEventListener('click', changeClass3);
const COLLABORATOR_IMAGE_4 = document.getElementById('collaborator-img-4');
COLLABORATOR_IMAGE_4.addEventListener('click', changeClass4);

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;

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