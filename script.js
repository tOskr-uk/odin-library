const myLibrary = [];
const add = document.getElementById('add-book');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const library = document.querySelector('.library');

function addBookToLibrary(title, author, pages, read){
    const obj = new Book(title, author, pages, read);
    myLibrary.push(obj);
}

add.addEventListener('click', ()=>{
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    clearTable();
    buildTable();
})

// clears the html table
function clearTable(){
    library.innerHTML='';
}

function buildTable(){
    // build table head
    const t = document.createElement('table');
    t.classList.add('table');
    let tr = document.createElement('tr');
    let td = ['Title', 'Author', 'Pages', 'Read', 'Delete'];
    td.forEach(e=>{
        const th = document.createElement('th');
        th.innerText = e;
        tr.appendChild(th);
    })
    t.appendChild(tr);
    library.appendChild(t);

    // populate the table with myLibrary array data
    for(let i=0; i<myLibrary.length; i++){
        let obj = myLibrary[i];
        tr = document.createElement('tr');
        for(key in obj){
            td = document.createElement('td');
            td.innerText=obj[key];
            tr.appendChild(td);
        }

        // add delete button
        let a = document.createElement('a');
        a.classList.add('btn');
        a.innerText='Delete';
        td = document.createElement('td');
        td.appendChild(a);
        tr.appendChild(td);
        t.appendChild(tr);
    }
}

// generates some non specific data for the myLibrary array
function generateSomeData(){
    const obj1 = new Book('The Sword of Shannara', 'Terry Brooks', 759, false);
    myLibrary.push(obj1)
    const obj2 = new Book('The Elfstones of Shannara', 'Terry Brooks', 906, false);
    myLibrary.push(obj2)
}

generateSomeData();
buildTable();




// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}