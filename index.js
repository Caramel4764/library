const myLibrary = [];
const bookInfoContainer = document.getElementById("bookInfo");
const addBookBtn = document.getElementById("addBookBtn");
const isFinishedIndicator = document.getElementById("isFinishedIndicator");
const bookName = document.getElementById("name");
const bookAuthor = document.getElementById("author");

let isReadBtn = false;

addBookBtn.addEventListener("click", function() {
  let newBook = new Book(bookName.value, bookAuthor.value, isReadBtn);
  addBookToLibrary(newBook);
})
function Book(name, author, isRead) {
  this.name = name;
  this.author = author;
  this.isRead = isRead || false;
  this.index = myLibrary.length;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  let bookInfo = document.createElement("tr");
  let name = document.createElement("td");
  name.textContent=newBook.name;
  bookInfo.appendChild(name);
  let author = document.createElement("td");
  author.textContent = newBook.author;
  bookInfo.appendChild(author);
  let isRead = document.createElement("td");
  isRead.textContent = newBook.isRead;
  bookInfo.appendChild(isRead);
  bookInfoContainer.appendChild(bookInfo);
}
isFinishedIndicator.addEventListener("click", function () {
  isReadBtn = !isReadBtn;
  if (isReadBtn) {
    isFinishedIndicator.textContent = "Read";
  } else {
    isFinishedIndicator.textContent = "Unread";
  }
})
