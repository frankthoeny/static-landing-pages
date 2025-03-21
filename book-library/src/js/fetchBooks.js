/**
 * This file contains the fetchBooks function which fetches book data from an API.
 * 
 * fetchBooks:
 * - Fetches book data from the specified API endpoint.
 * - Sorts the books alphabetically by title.
 * - Calls the provided callback function (populateBooks) with the sorted book data.
 * - Logs an error message if the fetch operation fails.
 */
export function fetchBooks(populateBooks) {
    fetch("http://localhost:3000/api/v1/books")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            data.sort((a, b) => a.title.localeCompare(b.title));
            populateBooks(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}
