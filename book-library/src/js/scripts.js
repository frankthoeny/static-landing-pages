/**
 * This file contains the main script for the Book Library application.
 * 
 * Functions:
 * - createBookCard: Creates a card element for a book.
 * - populateBooks: Populates the book cards into the corresponding divs based on the first letter of the book title.
 * - createDivs: Creates divs for each letter of the alphabet and appends them to the content container.
 * - createAlphabetGlossary: Creates the alphabet glossary and appends it to the navigation menu.
 * 
 * Initialization:
 * - Calls setupNavMenu to set up the navigation menu.
 * - Calls setupAlphabetGlossary to set up the alphabet glossary.
 * - Calls createDivs to create the alphabet divs.
 * - Calls createAlphabetGlossary to create the alphabet glossary.
 * - Calls fetchBooks to fetch and populate the books.
 */

import { fetchBooks } from './fetchBooks.js';
import { setupNavMenu, createAlphabetGlossary, setupAlphabetGlossary } from './nav.js';

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${book.cover_image}" alt="${book.title} cover" />
        <h3>${book.title}</h3>
        <em>by ${book.author}</em>
        <br>
        <small>${book.publication_year}</small>
        <br>
        <p>${book.description}</p>
        <br>
        <span>Genres: ${book.genre.join(', ')}</span>
    `;
    return card;
}

function populateBooks(books) {
    books.forEach((book) => {
        const firstLetter = book.title.charAt(0).toLowerCase();
        const div = document.getElementById(`div_${firstLetter}`);
        if (div) {
            const card = createBookCard(book);
            div.appendChild(card);
        }
    });
}

function createDivs() {
    const contentContainer = document.getElementById("content-container");
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach((letter) => {
        const div = document.createElement("div");
        div.id = `div_${letter}`;
        contentContainer.appendChild(div);
    });
}

setupNavMenu();
createAlphabetGlossary();
setupAlphabetGlossary();
createDivs();
fetchBooks(populateBooks);