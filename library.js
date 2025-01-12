const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function displayBooks() {

    myLibrary.forEach((book) => {
        let card = document.querySelector(".book").cloneNode(true);
        console.log(card.childNodes)
        card.querySelector(".title").textContent = book.title;
        card.querySelector(".author").textContent = book.author;
        card.querySelector(".pages").textContent = book.pages;
        card.className = "book visible";
        document.querySelector("main").appendChild(card);
    })
}


document.querySelector("form button").addEventListener("click", (event) => {
    let title = document.querySelector("#Title").value;
    let author = document.querySelector("#Author").value;
    let pages = document.querySelector("#Pages").value;
    addBookToLibrary(title, author, pages);
    displayBooks();
});
console.log(myLibrary);
displayBooks();