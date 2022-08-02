const donationsContainer = document.querySelector('.donations-banner-switch');
const donationsContainerImg = document.querySelector('.donations-banner-switch-image');
const bbvaButton = document.querySelector('.bbvaButton');
bbvaButton.addEventListener('click', donationsChange);

const bbvaInformationElement = document.createElement('article');
bbvaInformationElement.className = 'donations-banner-information';
const bbvaInformationElementParagraphOne = document.createElement('p');
bbvaInformationElementParagraphOne.className = 'donations-banner-information-paragraph';
const bbvaInformationElementParagraphOneText = document.createTextNode('Eishel Nuestro Hogar, A.C. ')
const bbvaInformationElementParagraphTwo = document.createElement('p');
bbvaInformationElementParagraphTwo.className = 'donations-banner-information-paragraph';
const bbvaInformationElementParagraphTwoText = document.createTextNode('BBVA')
const bbvaInformationElementParagraphTree = document.createElement('p');
bbvaInformationElementParagraphTree.className = 'donations-banner-information-paragraph';
const bbvaInformationElementParagraphTreeText = document.createTextNode('Clabe 012540004513728909')
const bbvaInformationElementParagraphFour = document.createElement('p');
bbvaInformationElementParagraphFour.classList = 'donations-banner-information-paragraph';
const bbvaInformationElementParagraphFourText =document.createTextNode('Cuenta 0451372890')

bbvaInformationElement.appendChild(bbvaInformationElementParagraphOne);
bbvaInformationElement.appendChild(bbvaInformationElementParagraphTwo);
bbvaInformationElement.appendChild(bbvaInformationElementParagraphTree);
bbvaInformationElement.appendChild(bbvaInformationElementParagraphFour);
bbvaInformationElementParagraphOne.appendChild(bbvaInformationElementParagraphOneText);
bbvaInformationElementParagraphTwo.appendChild(bbvaInformationElementParagraphTwoText);
bbvaInformationElementParagraphTree.appendChild(bbvaInformationElementParagraphTreeText);
bbvaInformationElementParagraphFour.appendChild(bbvaInformationElementParagraphFourText);

first = 0;

let change = 0;

function donationsChange () {
    if (first == 0) {
        donationsContainer.replaceChild(bbvaInformationElement, donationsContainer.firstChild);
        donationsContainer.replaceChild(donationsContainerImg, donationsContainer.firstChild);
        donationsContainer.replaceChild(bbvaInformationElement, donationsContainer.firstChild);
        first = 1;
    }
    if (change == 0) {
        donationsContainer.replaceChild(bbvaInformationElement, donationsContainer.firstChild);
        change = 1;
    }
    else {
        donationsContainer.replaceChild(donationsContainerImg, donationsContainer.firstChild);
        change = 0;
    }

}