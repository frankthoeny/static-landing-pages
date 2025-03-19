/**
 * Touch-enabled Image Slider with Automatic Sliding
 *
 * This script implements a responsive image slider with touch gestures for navigation.
 * It also includes automatic sliding functionality, which can be paused and resumed
 * based on user interaction (touch or mouse events).
 *
 * Features:
 * - Touch swipe navigation.
 * - Navigation dots for manual slide selection.
 * - Automatic slide transitions with a 3-second interval.
 * - Pause automatic sliding on touch or mouse hover.
 * - Resume automatic sliding after touch or mouse leave, with a delay.
 * - Smooth transitions using CSS transforms.
 *
 * Variables:
 * - sliderContainer: The main container for the slider.
 * - slider: The element that contains the slides.
 * - slides: An array of all slide elements.
 * - dots: An array of all navigation dot elements.
 * - currentIndex: The index of the currently displayed slide.
 * - startX: The initial X coordinate of a touch event.
 * - isDragging: A boolean indicating whether the user is currently dragging the slider.
 * - intervalId: The ID of the interval for automatic sliding.
 * - touchTimeout: The ID of the timeout used to delay automatic sliding after touch.
 */

const sliderContainer = document.querySelector(".slider-container"); // The main container for the slider.
const slider = document.querySelector(".slider"); // The element that contains the slides.
const slides = document.querySelectorAll('.slide'); // An array of all slide elements.
const dots = document.querySelectorAll('.dot'); // An array of all navigation dot elements.

let currentIndex = 0; // The index of the currently displayed slide.
let startX; // The initial X coordinate of a touch event.
let isDragging = false; // A boolean indicating whether the user is currently dragging the slider.
let intervalId; // The ID of the interval for automatic sliding.
let touchTimeout; // The ID of the timeout used to delay automatic sliding after touch.

/**

/**
 * Updates the slider's position based on the current index.
 */
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

/**
 * Updates the active state of the navigation dots.
 */
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

/**
 * Function to automatically advance to the next slide.
 */
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

/**
 * Starts the automatic sliding interval.
 */
function startInterval() {
    intervalId = setInterval(nextSlide, 3000);
}

/**
 * Resets the automatic sliding interval with a delay.
 */
function resetInterval() {
    clearInterval(intervalId);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(startInterval, 3000);
}

/**
 * Handles the start of a touch event.
 * @param {TouchEvent} e The touch event.
 */
function handleTouchStart(e) {
    startX = e.touches[0].clientX;
    isDragging = true;
    clearInterval(intervalId); // Stop automatic sliding
    clearTimeout(touchTimeout); // Clear any pending timeout
}

/**
 * Handles the move of a touch event.
 * @param {TouchEvent} e The touch event.
 */
function handleTouchMove(e) {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    slider.style.transform = `translateX(calc(-${currentIndex * 100}% + ${diffX}px))`;
}

/**
 * Handles the end of a touch event.
 * @param {TouchEvent} e The touch event.
 */
function handleTouchEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > 50 && currentIndex > 0) {
        currentIndex--;
        updateSlider();
    } else if (diffX < -50 && currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    } else {
        updateSlider(); // Return to original position
    }
    resetInterval(); // Restart automatic sliding
}

// Initialize the slider and start automatic sliding.
updateSlider();
startInterval();

// Event listeners for touch events.
sliderContainer.addEventListener('touchstart', handleTouchStart);
sliderContainer.addEventListener('touchmove', handleTouchMove);
sliderContainer.addEventListener('touchend', handleTouchEnd);

// Event listeners for mouse events.
sliderContainer.addEventListener('mouseleave', resetInterval); // Reset interval when mouse leaves
sliderContainer.addEventListener('mouseenter', () => { clearTimeout(touchTimeout); clearInterval(intervalId); }); // Stop interval when mouse enters.

// Event listeners for dot clicks.
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        resetInterval(); //reset the timer.
    });
});