const openBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeForm");
const form = document.getElementById("form-container")

openBtn.addEventListener("click", () => {
    form.style.display = "block";
})
closeBtn.addEventListener("click", () => {
    form.style.display = "none";
    addbook()
})

const mylib = [];

function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error("you must use 'new' operator to call this constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(this.title, this.author, this.pages, this.read);
    }
}
function addbook() {
    const name = document.getElementById("title");
    const auth = document.getElementById("author");
    const page = document.getElementById("pages");
    const read = document.getElementById("read");

    let newbook = new Book(name.value, auth.value, page.value, read.value)
    mylib.push(newbook);
    createCard(auth.value, name.value, page.value, read.value);
}


function createCard(auth, name, pages, read) {

    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = "Author: " + auth;

    const book_title = document.createElement("h5");
    book_title.classList.add("book-title");
    book_title.textContent = name;

    const pages_no = document.createElement("p");
    pages_no.classList.add("pages-num");
    pages_no.textContent = "Pages: " + pages;

    const read_case = document.createElement("p");
    read_case.classList.add("Iscompleted");

    const deleteBook = document.createElement("button");
    deleteBook.classList.add("delete-book");
    deleteBook.innerHTML = `<svg fill="darkred" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                        </svg>`

    const actions = document.createElement("div");
    actions.classList.add("actions");


    if (read == "yes") {
        read_case.innerHTML = `<svg fill="#0D3B66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M19.78,2.2L24,6.42L8.44,22L0,13.55L4.22,9.33L8.44,13.55L19.78,2.2M19.78,5L8.44,16.36L4.22,12.19L2.81,13.55L8.44,19.17L21.19,6.42L19.78,5Z" />
                        </svg>`
    } else {
        read_case.innerHTML = `<svg fill="darkred" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" /></svg>`
    }

    deleteBook.addEventListener("click", () => {
        bookCard.remove();
    })

    bookInfo.appendChild(author);
    bookInfo.appendChild(book_title);
    bookInfo.appendChild(pages_no);

    actions.appendChild(read_case);
    actions.appendChild(deleteBook);

    bookCard.appendChild(bookInfo);
    bookCard.appendChild(actions);

    document.getElementById("books-container").appendChild(bookCard);
}