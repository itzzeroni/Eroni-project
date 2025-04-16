let currentSlide = 0;
const slides = document.querySelectorAll('.portfolio-slide');

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateSlider();
}
