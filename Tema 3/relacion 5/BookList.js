class BookList {
    constructor() {
        this.books = [];
        this.currentBook = undefined;
        this.nextBook = undefined;
        this.lastBook = undefined;
    }

    setCurrentBook(book) {
        if(!typeof book == Book) {
            return false;
        }

        this.currentBook = this.books.find(elem => book.title == elem.title);
    }

    setLastBook(book) {
        if(!typeof book == Book) {
            return false;
        }

        this.lastBook = book;
    }

    setNextBook(book) {
        if(!typeof book == Book) {
            return false;
        }

    }

    finisCurrentBook(nextBook) {
        this.currentBook.arreadyRead(true);
        this.setLastBook(this.currentBook);
        this.setCurrentBook(this.books.find(elem => nextBook.title == elem.title));

    }

    add(book) {
        if(!typeof book == Book) {
            return false;
        }

        this.books.push(book);
    }


}
