const selectionSort = require('./least-value');
const books = require('./books');

for (let i = 0; i < books.length; i++) {
    let least = selectionSort(books, i);
    let currentBook = books[i];
    let cheapestBook = books[least];
    books[i] = cheapestBook;
    books[least] = currentBook;
}

console.log("Ordem dos livros mais baratos: ", books);

