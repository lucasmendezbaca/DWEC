import { Book, BookList } from "./Clases";

myLibrary = new BookList();

function addBookToLibrary(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const book = new Book(title, author, genre);
    myLibrary.add(book);
    displayBooks();
}

function displayBooks() {
    const books = myLibrary.books;
    const readingList = document.getElementById("reading_list");
    readingList.innerHTML = "";
    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "libro";
        bookDiv.innerHTML = `
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>
                <p>Read: ${book.read}</p>
                <p>Read Date: ${book.readDate}</p>
            `;
        booksDiv.appendChild(bookDiv);
    });
}

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", addBookToLibrary);