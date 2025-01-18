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
    isFinishedIndicator.classList.remove("red");

  } else {
    isFinishedIndicator.textContent = "Unread";
    isFinishedIndicator.classList.add("red");
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
    name.textContent = myLibrary[i].name;
    name.setAttribute("colspan", "5");
    bookInfo.appendChild(name);
    let author = document.createElement("td");
    author.setAttribute("colspan", "5");

    author.textContent = myLibrary[i].author;
    bookInfo.appendChild(author);
    let pages = document.createElement("td");
    pages.textContent = myLibrary[i].pages;
    pages.setAttribute("colspan", "2");

    bookInfo.appendChild(pages);
    let isRead = document.createElement("td");
    isRead.textContent = myLibrary[i].isRead;
    isRead.setAttribute("colspan", "2");

    bookInfo.appendChild(isRead);
    let deleteTd = document.createElement('td');
    deleteTd.setAttribute("colspan", "1");

    let deleteBtn = document.createElement('button');
    let deleteBtnDiv = document.createElement("div");
    deleteBtnDiv.classList.add("f-center");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("del-btn");
    deleteBtn.classList.add("red");
    deleteBtn.addEventListener('click', function() {
      deleteBook(myLibrary[i].index);
    });
    deleteBtnDiv.appendChild(deleteBtn);
    deleteTd.appendChild(deleteBtnDiv);
    bookInfo.appendChild(deleteTd);
    bookInfoContainer.appendChild(bookInfo);
  }
}