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
        const list = document.querySelector('.book-list');
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
            } 
            else {
                this.classList.remove('table-primary');
            }
        });
        list.appendChild(row);
    }

    clearFields() {
        document.getElementById('bookTitle').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    alertMessage(message, className) {
        const container = document.querySelector('.container');
        const bookForm = document.querySelector('#book-form');
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, bookForm);

        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000)
    }
}

//Event listeners
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('bookTitle').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(title == '' || author == '' || isbn == '' ) {
        ui.alertMessage("Please fill out the form below", "danger");
    } else {
        //Add book to list
        ui.alertMessage("Book published", "success");
        ui.addBookToList(book);
        ui.clearFields();
    }
});

//delete button functions

const btnDelete = document.getElementById('delete').addEventListener('click', function() {
    document.querySelectorAll('.table-primary').forEach(function(e) {
        e.remove();
      });
    });