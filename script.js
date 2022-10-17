const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} long and ${this.read?'has been read':'has not been read yet'}`;
    }
}

function addBookToLibrary(author, title, pages, read){
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj)
}


const add = document.querySelector('button');
const author = document.getElementById('author');
const title = document.getElementById('title');
const read = document.getElementById('read');
const pages = document.getElementById('pages');

add.addEventListener('click', ()=>{
    addBookToLibrary(author.value, title.value, pages.value, read.checked);
    console.log(myLibrary);    
})


