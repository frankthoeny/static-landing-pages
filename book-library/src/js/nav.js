/**
 * This file contains functions to set up the navigation menu and the alphabet glossary.
 * 
 * Functions:
 * - setupNavMenu: Toggles the visibility of the navigation menu when the hamburger icon is clicked and closes the navigation menu when a menu item is clicked.
 * - createAlphabetGlossary: Creates the alphabet glossary and appends it to the navigation menu.
 * - setupAlphabetGlossary: Adds an event listener to the alphabet glossary, highlights the selected letter, and displays the corresponding books.
 * 
 * setupNavMenu:
 * - Selects the hamburger icon and the navigation menu.
 * - Adds a click event listener to the hamburger icon to toggle the 'active' class on both the hamburger icon and the navigation menu.
 * - Adds click event listeners to each navigation menu item to remove the 'active' class from both the hamburger icon and the navigation menu when a menu item is clicked.
 * 
 * createAlphabetGlossary:
 * - Selects the alphabet glossary element.
 * - Creates a list item for each letter of the alphabet, sets its id and text content, and appends it to the alphabet glossary element.
 * 
 * setupAlphabetGlossary:
 * - Selects the alphabet glossary element.
 * - Adds a click event listener to the alphabet glossary element.
 * - When a letter is clicked, it highlights the selected letter, displays the corresponding books, and removes the 'active' class from all other letters.
 */

export function setupNavMenu() {
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
}

export function createAlphabetGlossary() {
    const alphabetGlossary = document.getElementById("alphabet-glossary");
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach((letter) => {
        const li = document.createElement("li");
        li.id = letter;
        li.textContent = letter.toUpperCase();
        alphabetGlossary.appendChild(li);
    });
}

export function setupAlphabetGlossary() {
    const alphabetGlossary = document.getElementById("alphabet-glossary");
    alphabetGlossary.addEventListener("click", (e) => {
        if (e.target.tagName === 'LI') {
            const selectedLetter = e.target.id;
            const selectedDiv = document.getElementById(`div_${selectedLetter}`);
            const divs = document.querySelectorAll(".content-container > div");

            divs.forEach((div) => {
                div.classList.remove("active");
            });

            if (selectedDiv) {
                selectedDiv.classList.add("active");
            }
            const lis = document.querySelectorAll("#alphabet-glossary li");
            lis.forEach((li) => {
                li.classList.remove("selected");
            });
            e.target.classList.add("selected");
        }
    });
}