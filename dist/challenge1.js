"use strict";
// Don't delete code bellow and this code must be at the bottom of the file
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
// Array to store books
const books = [];
/**
 * Adds a new book to the collection
 * @param title - The title of the book
 * @param author - The author of the book
 * @param year - The publication year of the book
 */
function addBook(title, author, year) {
    const book = { title, author, year };
    books.push(book);
    console.log(`Book added: "${title}" by ${author} (${year})`);
}
/**
 * Lists all books in the collection
 */
function listBooks() {
    console.log('All Books:');
    books.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.year})`);
    });
}
/**
 * Searches for books by title (case-sensitive)
 * @param title - The title to search for (optional)
 */
function searchBook(title) {
    if (!title) {
        console.log('Please provide a title to search.');
        return;
    }
    const results = books.filter((book) => book.title.includes(title));
    if (results.length === 0) {
        console.log(`No books found with title containing "${title}".`);
    }
    else {
        console.log(`Search Results for "${title}":`);
        results.forEach((book) => {
            console.log(`- ${book.title} by ${book.author} (${book.year})`);
        });
    }
}
