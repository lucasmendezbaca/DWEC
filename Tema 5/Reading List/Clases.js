class Book{
    constructor(title, author, genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = false;
        this.readDate = null;
    }
}

class BookList{
    constructor(){
        this.books = [];
        this.currentBook = 0;
    }

    add(book){
        this.books.push(book);
    }

    finishCurrentBook(){
        if (this.currentBook<this.books.length)
        {
            this.books[this.currentBook].read=true;
            this.books[this.currentBook].readDate = new Date();
            this.currentBook++;

        }

    }

    get numberBooksRead(){
        return this.books.filter( (book)=> book.read).length;
    }

    get numberBooksNotReadYet(){
        return this.books.length - this.numberBooksRead;
    }

    get totalBooks(){
        return this.books.length;
    }

}

export {Book, BookList};