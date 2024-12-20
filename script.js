/*
 * JavaScript Boilerplate for Library Management System Project
 * 
 * This JavaScript file is part of the Intro to OOP assignment.
 * Your task is to complete the OOP classes with appropriate methods and properties.
 * 
 * Follow the TODO prompts and complete each section to ensure the
 * Library Management System App works as expected.
 */

/* 
/* The Book class serves the critical function of encapsulating the data and behavior of individual books,
/* making it possible to manage these objects in a structured and efficient way within the Library class. 
*/
// Create the Book class
class Book {
    // TODO: Create a constructor that takes two parameters: title and author
    // Hint: The constructor should initialize the title and author properties for each Book instance
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }


    // TODO: Implement a method to get the details of the book
    // Hint: This method should return a string in the format: "Title by Author"
    getDetails() {
        return `${this.title} by ${this.author}`;
    }
    

}

/* 
/* The Library class, in turn, aggregates and manages multiple Book objects, 
/* allowing for more complex operations like listing all books, adding new books, 
/* or managing the collection as a whole.
*/
// Create a class to manage the library
class Library {
    // TODO: Create a constructor with no parameters
    // Hint: This constructor should initialize an empty books array to track the Book objects in the library    
    constructor() {
        this.books = [];
    }

    // TODO: Implement a method to add a book to the library
    // Hint: Be sure to also update the Book List after updating the array of books
    addBook(book) {
        if (book instanceof Book && book.title && book.author) {
            this.books.push(book);
            this.updateBookList();
        } else {
            alert('Invalid Book details. Please ensure both title and author are provided.');
        }
    }

    removeBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
            this.updateBookList();
        }
    }
    



    // Implement a method to update the book list displayed in the UI
    updateBookList() {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = '';

        this.books.forEach((book, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = book.getDetails();

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'btn btn-danger btn-sm';
            removeButton.setAttribute('data-index', index);

            removeButton.addEventListener('click', () => {
                this.removeBook(index);
            });

            li.appendChild(removeButton);
            bookList.appendChild(li);
        });
    }
}

// Initialize the library
const library = new Library();

// Handle form submission to add a new book
document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    // TODO: Create a new book instance and add it to the library
    // Hint: Instantiate a new Book object with the provided title and author, then add it to the library's books array    
    if (title && author) {
        const newBook = new Book(title, author);
        library.addBook(newBook);
    } else {
        alert('Please provide both tile and the author.');
    }


    // Clear form inputs
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});

// Final Hint: As you complete each TODO, test your code by adding some books through the form.
// Use console.log statements to help debug and ensure that each part of your code is working correctly.