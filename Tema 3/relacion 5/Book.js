class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = undefined;
    }

    setAlrreadyRead(bool) {
        this.read = bool;

        if(this.read == true) {
            this.read_date = new Date();
        }
    }

}