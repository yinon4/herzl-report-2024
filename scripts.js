// JavaScript to handle slide transitions

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Automatically go to the next slide every 3 seconds
setInterval(() => {
    goToSlide(currentSlide + 1);
}, 3000); // Change every 3 seconds

// Initial slide
goToSlide(0);

// Optional: Handle swipe events for mobile-friendly navigation (for better user experience)
let startX = 0;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        goToSlide(currentSlide + 1);  // Swipe left
    } else if (endX - startX > 50) {
        goToSlide(currentSlide - 1);  // Swipe right
    }
});
