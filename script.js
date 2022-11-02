const myLibrary = [];
const addBook = document.getElementById('add-book');
const library = document.querySelector('.library');
let btnCollDel;

// event listener for adding a book button press
addBook.addEventListener('click', ()=>{
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');

    const book = new Book(title.value, author.value, pages.value, read.checked);
    book.addBook();
    clearTable();
    buildTable();
})

// event listener for deleting a book or changing read status button press
library.addEventListener('click', e=>{
    if(e.target.classList.contains('book-del')){
        const atr = e.target.getAttribute('data');
        myLibrary.splice(atr,1);
    }

    if(e.target.classList.contains('read-status')){
        const atr = e.target.getAttribute('data');
        const val = myLibrary[atr].read;
        val==true?myLibrary[atr].read=false:myLibrary[atr].read=true;
    }
    clearTable();
    buildTable();
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
                if(obj[key] == true){
                    a.classList.add('btn', 'btn--blue', 'read-status');
                    a.setAttribute('data', i);
                    a.innerText='Read';
                } else {
                    a.classList.add('btn', 'btn--grey', 'read-status');
                    a.setAttribute('data', i);
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
}

// generates some non specific data for the myLibrary array
function generateSomeData(){
    const bookArr = [
        ['The Sword of Shannara', 'Terry Brooks', 759, true],
        ['The Elfstones of Shannara', 'Terry Brooks', 906, false],
        ['2001: A Space Odyssey', 'Arthur C. Clarke', 224, true],
        ['Mr. Tickle', 'Roger Hargreaves', 36, true]
    ];

    bookArr.forEach(el=>{
        const book = new Book(el[0], el[1], el[2], el[3]);
        book.addBook();
    })
}

// book constructor
class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    addBook(){
        myLibrary.push({
            title: this.title, 
            author: this.author, 
            pages: this.pages, 
            read: this.read
        });
    }
}

generateSomeData();
buildTable();