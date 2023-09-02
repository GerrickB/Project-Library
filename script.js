
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
/* ----------------------------------------*/
/* ---------------testing----------------*/
/* ----------------------------------------*/
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

/* ----------------------------------------*/
/* ------------Dialog Form----------------*/
/* ----------------------------------------*/
const showDialog = document.getElementById("showDialog");
const myDialog = document.getElementById("myDialog");
const titleInput = myDialog.querySelector("#titleInput");
const authorInput = myDialog.querySelector("#authorInput");
const pageNumbers = myDialog.querySelector("#pageNumbers")
const trueRead = myDialog.querySelector("#trueRead");
const falseRead = myDialog.querySelector("#falseRead");
// output test
const outputBox = document.querySelector("output");
const confirmBtn = myDialog.querySelector("#confirmBtn");


showDialog.addEventListener("click", () => {
  myDialog.showModal();
});

myDialog.addEventListener("close", (e) => {
  let readValue = 'None';
  if (trueRead.checked) {
    readValue = "True";
  } else if (falseRead.checked) {
    readValue = "False";
  }
  
  const returnValue = `Title: ${titleInput.value}, Author: ${authorInput.value}, pages: ${pageNumbers.value}, Have I read it? ${readValue}`
  outputBox.value = returnValue;
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myDialog.close();
})
