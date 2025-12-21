// Import the functions from challenge1.ts
const { addBook, listBooks, searchBook } = require('./dist/challenge1');

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');
