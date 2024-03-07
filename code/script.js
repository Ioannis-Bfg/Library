const grid=document.querySelector('#grid');
const myLibrary=[];
const btn_new=document.querySelector('#new_button')
const left=document.querySelector('#left');
const form=document.querySelector('#form');

// /////////////////////////////////////////////////////////

function displayBooks(lib){

    grid.innerHTML='';
    lib.forEach(book => {
        let card=document.createElement('div');
        card.style.width='150px';
        card.style.backgroundColor='black';
        card.style.color='white'
        card.style.height='150px';
        card.style.borderRadius='10px';
        card.style.padding='1%';
        card.style.lineHeight='1.9rem'
        card.style.display='flex';
        card.style.fontSize='0.8rem';
        card.style.alignItems='center';
        card.style.justifyContent='center';      
        card.style.borderLeft='10px solid orange';  
        card.style.boxShadow='0 5px 5px rgba(0, 0, 0, 0.5)';
        card.innerHTML= formatInfo(book).replace(/\n/g, '<br>');
        grid.appendChild(card);
    });
}

function Book(title,author,genre,pages){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.pages=pages;
    this.status=false;
    this.present=function(){
        return `${this.title} is a ${this.genre} book written by ${this.author}, pages: ${this.pages}`
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function formatInfo(book){
    return `Title : ${book.title}\nAuthor: ${book.author}\nGenre: ${book.genre}\nPages: ${book.pages}`;
}



// ///////////////////////////////////////////////////////

// btn_new.addEventListener('click',()=>{
//     let form=document.createElement('form');
//     let input_title=document.createElement('input');
//     let input_author=document.createElement('input');
//     let input_genre=document.createElement('input');
//     let input_pages=document.createElement('input');
// })

btn_new.addEventListener('click',()=>{
    form.style.display='flex';
})


form.addEventListener('submit',function(event){
    event.preventDefault();

    let new_book={};
    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let genre=document.querySelector('#genre').value;
    let pages=document.querySelector('#pages').value;

    new_book=new Book(title,author,genre,pages);
    addBookToLibrary(new_book);
    displayBooks(myLibrary);

    form.reset();
    form.style.display='none';
})

// //////////////////////////////////////////////////



// displayBooks(myLibrary);

// console.log(myLibrary[0]);

