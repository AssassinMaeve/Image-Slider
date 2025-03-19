let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function updateSlide() {
    const slideWidth = document.querySelector('.slider-container').clientWidth; // Dynamic width
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

// Pause auto-slide on manual navigation
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 3000);
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 3000);
});

// Adjust slide width on window resize
window.addEventListener('resize', updateSlide);
