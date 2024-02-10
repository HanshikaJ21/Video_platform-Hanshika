// JavaScript for Slider

// Get all slides
const slides = document.querySelectorAll('.slide');

// Set initial slide index
let currentSlide = 0;

// Show the current slide
function showSlide() {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    // Show the current slide
    slides[currentSlide].style.display = 'block';
}

// Show next slide
function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Reset to the first slide if the end is reached
    }
    showSlide();
}

// Show previous slide
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to the last slide if at the beginning
    }
    showSlide();
}

// Display the first slide initially
showSlide();

// Optional: Auto advance to the next slide every 5 seconds
setInterval(nextSlide, 5000);
