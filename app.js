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
        `;
        row.addEventListener('click', function() {
            if(this.className === '') {
                this.className = 'table-primary';
            } else {
                this.className = '';
            }
        });
        list.appendChild(row);
    }

    clearFields() {
        document.getElementById('bookTitle').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Event listeners
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('bookTitle').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    
    const ui = new UI();

    //Add book to list
    ui.addBookToList(book);

    ui.clearFields();

    //e.preventDefault();
});

document.getElementById('delete').addEventListener('click', function(e) {
 
    if(e.classList.contains('table-primary')) {
        e.remove();
    }
});