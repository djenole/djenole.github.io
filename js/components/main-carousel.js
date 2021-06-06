const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let moveCarousel = 100;


buttonRight.addEventListener('click', function() {
    moveCarousel = moveCarousel + 100;
    elements.style = `transform: translateX(${moveCarousel}px)`;
});


buttonLeft.addEventListener('click', function() {
    moveCarousel = moveCarousel - 100;
    elements.style = `transform: translateX(${moveCarousel}px)`;
});