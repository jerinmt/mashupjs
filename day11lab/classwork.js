class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    get details() {
        return `${this.title} by ${this.author}`;
    }
    set newPrice(updatedPrice) {
        if(isNaN(updatedPrice)) {
            console.log('Not a number');
        } else if(updatedPrice > 0) {
            this.price = updatedPrice;
            console.log('Changed price.');
        } else {
            console.log('Invalid price');
        }
    }
}
const book1 = new Book('Iliad', 'Homer', 200);
console.log(book1);
document.getElementById('details').innerHTML = book1.details;
book1.newPrice = 'Free';
book1.newPrice = null;
book1.newPrice = -50;
book1.newPrice = 150;
console.log(book1);