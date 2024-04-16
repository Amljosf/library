const myLibrary = [
  //   {
  //     title: "martin",
  //     author: "Luthor",
  //     pages: 100,
  //     read: "yes",
  //   },
];
console.log(myLibrary);

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
  display();
}
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index){
    myLibrary[index].toggleRead()
    display()
}

function display() {
  const displaybook = document.getElementById("booknext");
  displaybook.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>status: ${book.read ? "read" : "not read"}</p>
        <button onclick="toggleRead(${index})">Toggle read</button><br>
            
        
        <br>
        <button id="remove-btn" onclick="removeBook(${index})">Remove</button>
        
    `;

    booknext.appendChild(bookCard);
  });
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  display();
}
document.getElementById("moral").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const newBook = new Book(title, author, pages,read);
  addBookToLibrary(newBook);

  document.getElementById("moral").reset();
});
display();
