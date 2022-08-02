const messageBanner = document.querySelector('.send');
const messageBannerButton = document.querySelector('.send-message-button')
messageBannerButton.addEventListener('click', closeBanner);

function closeBanner () {
    messageBanner.style.display = 'none';
}