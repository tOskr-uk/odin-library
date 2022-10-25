const myLibrary = [];
const addBook = document.getElementById('add-book');
const library = document.querySelector('.library');
let btnCollDel;


// adds new books to the myLibrary array
function addBookToLibrary(title, author, pages, read){
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
}

// event listener for adding a book button press
addBook.addEventListener('click', ()=>{
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');

    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    clearTable();
    buildTable();
})

// event listener for deleting a book button press
library.addEventListener('click', e=>{
    if(e.target.classList.contains('book-del')){
        const arrEl = e.target.getAttribute('data');
        myLibrary.splice(arrEl,1);
        clearTable();
        buildTable();
    }
})

// clears the html table
function clearTable(){
    library.innerHTML='';
}

// builds and populates the html table
function buildTable(){
    // build table head
    const tbl = document.createElement('table');
    tbl.classList.add('table');
    let tr = document.createElement('tr');
    let td = ['Title', 'Author', 'Pages', 'Read', 'Delete'];
    td.forEach(e=>{
        const th = document.createElement('th');
        th.innerText = e;
        tr.appendChild(th);
    });
    tbl.appendChild(tr);
    library.appendChild(tbl);

    // populate the table with myLibrary array data
    for(let i=0; i<myLibrary.length; i++){
        let obj = myLibrary[i];
        tr = document.createElement('tr');
        for(key in obj){
            td = document.createElement('td');
            if(key === 'read'){
                let a = document.createElement('a');
                console.log(obj[key]);
                if(obj[key] == true){
                    a.classList.add('btn', 'btn--blue');
                    a.innerText='Read';
                } else {
                    a.classList.add('btn', 'btn--grey');
                    a.innerText='Unread';
                }
                td.appendChild(a);
            } else {
                td.innerText=obj[key];
            }
            tr.appendChild(td);            
        }

        // add delete button
        let a = document.createElement('a');
        a.classList.add('btn', 'book-del');
        a.innerText='Delete';
        a.setAttribute('data', i);
        td = document.createElement('td');
        td.appendChild(a);
        tr.appendChild(td);
        tbl.appendChild(tr);
    }
    btnCollDel = document.querySelectorAll('.book-del')
    // console.log(btnCollDel);
}

// generates some non specific data for the myLibrary array
function generateSomeData(){
    const obj1 = new Book('The Sword of Shannara', 'Terry Brooks', 759, true);
    myLibrary.push(obj1)
    const obj2 = new Book('The Elfstones of Shannara', 'Terry Brooks', 906, false);
    myLibrary.push(obj2)
}

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

generateSomeData();
buildTable();

function getKey(){
    // console.log(myLibrary[0]);
    for(key in myLibrary[0]){
        // console.log(key);
    }
}

getKey()