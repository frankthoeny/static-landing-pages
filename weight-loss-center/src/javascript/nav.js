/**
 * This script handles the navigation menu functionality for the weight loss center landing page.
 * 
 * Features:
 * - Toggles the visibility of the navigation menu when the hamburger icon is clicked.
 * - Closes the navigation menu when any navigation link is clicked.
 * 
 * Elements:
 * - hamburger: The hamburger icon element that toggles the navigation menu.
 * - navMenu: The <ul> element containing the navigation links.
 * 
 * Event Listeners:
 * - Click event on the hamburger icon to toggle the 'active' class.
 * - Click event on each navigation link to remove the 'active' class from both the hamburger icon and the navigation menu.
 */
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav ul'); // Select the <ul>

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll(".nav ul li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))