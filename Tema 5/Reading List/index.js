import { Book, BookList } from "./Clases.js";

var myLibrary = new BookList();

function addBookToLibrary() {
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
                <div class="titulo_autor">
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                <div>
                <p>Read: ${book.read}</p>
            `;
        readingList.appendChild(bookDiv);
    });
}

const boton = document.getElementById("submit");
boton.addEventListener("click", addBookToLibrary);