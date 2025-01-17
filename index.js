let myLibrary = [];
const bookInfoContainer = document.getElementById("bookInfo");
const addBookBtn = document.getElementById("addBookBtn");
const isFinishedIndicator = document.getElementById("isFinishedIndicator");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
let isReadBtn = false;
let bookCount = 0;
addBookBtn.addEventListener("click", function() {
  bookCount++;
  let newBook = new Book(bookName.value, bookAuthor.value, bookPages.value, isReadBtn);
  addBookToLibrary(newBook);
})
function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.isRead = isRead || false;
  this.pages = pages;
  this.index = bookCount;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  rerenderBookTable();
}
isFinishedIndicator.addEventListener("click", function () {
  isReadBtn = !isReadBtn;
  if (isReadBtn) {
    isFinishedIndicator.textContent = "Read";
    isFinishedIndicator.classList.add("read");
    isFinishedIndicator.classList.remove("unread");

  } else {
    isFinishedIndicator.textContent = "Unread";
    isFinishedIndicator.classList.add("unread");
    isFinishedIndicator.classList.remove("read");
  }
})

function deleteBook(index) {
  myLibrary.forEach((book, i) => {
    if (book.index == index) {
      myLibrary = myLibrary.slice(0, i).concat(myLibrary.slice(i+1,book.length));
      rerenderBookTable();
    }
  })
}

function rerenderBookTable() {
  bookInfoContainer.textContent="";
  for (let i = 0; i<myLibrary.length; i++) {
    let bookInfo = document.createElement("tr");
    let name = document.createElement("td");
    name.textContent=myLibrary[i].name;
    bookInfo.appendChild(name);
    let author = document.createElement("td");
    author.textContent = myLibrary[i].author;
    bookInfo.appendChild(author);
    let pages = document.createElement("td");
    pages.textContent = myLibrary[i].pages;
    bookInfo.appendChild(pages);
    let isRead = document.createElement("td");
    isRead.textContent = myLibrary[i].isRead;
    bookInfo.appendChild(isRead);
    let deleteTd = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', function() {
      deleteBook(myLibrary[i].index);
    });
    deleteTd.appendChild(deleteBtn);
    bookInfo.appendChild(deleteTd);
    bookInfoContainer.appendChild(bookInfo);
  }
}