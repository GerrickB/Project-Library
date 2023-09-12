class myBook {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
  
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }

}

//do stuff with book
function addBookToLibrary(title, author, pages, read, id) {
  myLibrary.push(new myBook(title, author, pages, read, id));
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
    let book = myLibrary[i];
    const container = document.querySelector('.container');

    const div = document.createElement('div');
    div.classList.add('books');
  
    const pre = document.createElement('pre');
    pre.textContent = `Title: ${book.title}\nAuthor: ${book.author}\nLength: ${book.pages} pages\nRead Status: ${book.read}`

    const p = document.createElement('p');
    p.textContent = `book id: ${book.id}`

    // img button to delete book
    const img = document.createElement('img');
    img.src = 'icons/delete_FILL0_wght400_GRAD0_opsz24.svg'
    img.addEventListener('click', () => {
      // dynamic index choosing
      let correctIndex;
      for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id === book.id)  {
          correctIndex = i;
        }
      }
      myLibrary.splice(correctIndex, 1);
      displayBook();
    });

    div.appendChild(pre);
    div.appendChild(p);
    div.appendChild(img);
    container.appendChild(div); 
  }
}

/* ------------Dialog Form----------------*/
const showDialog = document.getElementById("showDialog");
const myDialog = document.getElementById("myDialog");
const titleInput = myDialog.querySelector("#titleInput");
const authorInput = myDialog.querySelector("#authorInput");
const pageNumbers = myDialog.querySelector("#pageNumbers")
const trueRead = myDialog.querySelector("#trueRead");
const falseRead = myDialog.querySelector("#falseRead");
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

  addBookToLibrary(titleInput.value, authorInput.value, pageNumbers.value, readValue, bookID);
  bookID++;
  displayBook();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myDialog.close();
});
/* ----------------------------------------*/

const btn = document.querySelector('#btn');
btn.addEventListener('click', displayBook);

const myLibrary = [];
let bookID = 1;
// add first book manually /explicitly?
myLibrary.push(new myBook('The Hobbit', 'J.R.R. Tolkien', 295, false, 0));