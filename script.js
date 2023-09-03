
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

//do stuff
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

// refresh library so no duplication
function refreshBook() {
  const displayedBooks = document.querySelectorAll('.books');
  displayedBooks.forEach((book) => {
    book.remove();
  });
}

function displayBook() {
  // refresh library so no duplication
  refreshBook();
  for (let i = 0; i < myLibrary.length; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('books')
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    let book = myLibrary[i];
    h2.textContent = book.title;
    h3.textContent = book.author;
    div.appendChild(h2);
    div.appendChild(h3);
    container.appendChild(div);
  }
}

function removeBook() {
  //maybe use index
}

const myLibrary = [];
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));

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
    readValue = true;
  } else if (falseRead.checked) {
    readValue = false;
  }

  addBookToLibrary(titleInput.value, authorInput.value, pageNumbers.value, readValue)
  
  // const returnValue = `Title: ${titleInput.value}, Author: ${authorInput.value}, pages: ${pageNumbers.value}, Have I read it? ${readValue}`
  // outputBox.value = returnValue;
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myDialog.close();
});

// // testing
// //console.log(book1.info());
// //console.log(Book.prototype);