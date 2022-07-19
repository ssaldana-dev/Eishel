const mainCollaborators = document.getElementById('main-collab');
const initialHeight = window.innerHeight - 150;

mainCollaborators.style.height = `${initialHeight}px`;

const user = document.getElementById('user-input');
const password = document.getElementById('password-input');
const send = document.getElementById('access-button');
send.addEventListener('click', verifyUser);

const correctUser = 'Eishel';
const correctPassword = 'User2022';

function verifyUser () {
    if (user.value == correctUser && password.value == correctPassword) {
        window.location.href = "../07-support/support.html";
    }
    else {
        alert('Usuario o contraseña inválidos');
    }
}