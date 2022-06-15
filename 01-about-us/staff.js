const COLLABORATOR_IMAGE = document.getElementById('collaborator-img');
COLLABORATOR_IMAGE.addEventListener('click', AddClass);
const COLLABORATOR_TEXT = document.getElementById('collaborator-text');
COLLABORATOR_TEXT.addEventListener('click', ReturnClass);

function AddClass () {
    COLLABORATOR_IMAGE.className = 'staff-collaborator-container-img change1';
}
function ReturnClass () {
    COLLABORATOR_IMAGE.className = 'staff-collaborator-container-img change2';
}