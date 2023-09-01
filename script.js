
// the constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
}

function displayBook() {
  for (let i = 0; i < myLibraryTest.length; i++) {
    const container = document.querySelector('.container')
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    let book = myLibraryTest[i];
    h2.textContent = book.title;
    h3.textContent = book.author;
    div.appendChild(h2);
    div.appendChild(h3);
    container.appendChild(div);
  }
}

//do stuff
function addBookToLibrary() {
   myLibrary.push();
}

//for testing
//console.log(book1.info());
//console.log(Book.prototype);
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const book3 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const book4 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const myLibraryTest = [book1, book2, book3, book4];
//for testing


const myLibrary = [];
const btn = document.querySelector('#btn');
btn.addEventListener('click', displayBook)

//Dialog form
const showDialog = document.getElementById("showDialog");
const myDialog = document.getElementById("myDialog");

showDialog.addEventListener("click", () => {
  myDialog.showModal();
})
