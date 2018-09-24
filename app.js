//Book construtor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI constructor
class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
}

//Event listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('bookTitle').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    
    const ui = new UI();

    //Add book to list
    ui.addBookToList(book);

    e.preventDefault();
});