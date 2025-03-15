let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function updateSlide() {
    slider.style.transform = `translateX(${-currentIndex * 600}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds