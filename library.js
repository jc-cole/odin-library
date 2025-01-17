const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
    console.log(myLibrary)
}

function displayBooks() {

    let card = document.querySelector(".book").cloneNode(true);

    document.querySelector("main").innerHTML = "";

    myLibrary.forEach((book) => {
        let newCard = card.cloneNode(true);
        newCard.querySelector(".title").textContent = book.title;
        newCard.querySelector(".author").textContent = book.author;
        newCard.querySelector(".pages").textContent = book.pages;
        newCard.className = "book visible";
        document.querySelector("main").appendChild(newCard);
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