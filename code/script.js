const grid=document.querySelector('#grid');
const myLibrary=[];
const btn_new=document.querySelector('#new_button')
const left=document.querySelector('#left');
const form=document.querySelector('#form');


// /////////////////////////////////////////////////////////

function displayBooks(lib){

    grid.innerHTML='';
    let i=0;
    lib.forEach(book => {
        let card=document.createElement('div');
        card.setAttribute('id',`a${i}`);
        card.style.width='150px';
        card.style.backgroundColor='#a89374';
        card.style.color='#fcfbf9'
        card.style.height='190px';
        card.style.borderRadius='10px';
        card.style.padding='3%';
        card.style.lineHeight='1.9rem'
        card.style.display='flex';
        card.style.fontSize='0.9rem';
        card.style.alignItems='center';
        card.style.justifyContent='center';      
        card.style.borderLeft='10px solid #d9ad6b';  
        card.style.flexDirection='column';
        card.style.justifyContent='space-between';
        card.style.fontWeight='500';
        card.style.boxShadow='0 5px 5px rgba(0, 0, 0, 0.5)';
        card.innerHTML= formatInfo(book).replace(/\n/g, '<br>');

        const deleteButton = card.querySelector('#delete');
        deleteButton.addEventListener('click', () => {
            let ind=parseInt((card.id).substring(1));
            console.log(ind);
            removeBook(ind); 
        });

        const readButton=card.querySelector('#read');
        readButton.addEventListener('click',()=>{

            if(book.status){
                book.status=false;
                readButton.style.backgroundColor='transparent';
            } else{
                readButton.style.backgroundColor='green';
                readButton.style.borderRadius='5px';
                book.status=true;
            }

        })
        grid.appendChild(card);
        i=i+1;
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
    return `Title : ${book.title}\nAuthor: ${book.author}\nGenre: ${book.genre}\nPages: ${book.pages} <div id='icon_container'><button id='delete'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg></button><button id='read'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>read</title><path d="M21.59,11.59L23,13L13.5,22.5L8.42,17.41L9.83,16L13.5,19.68L21.59,11.59M4,16V3H6L9,3A4,4 0 0,1 13,7C13,8.54 12.13,9.88 10.85,10.55L14,16H12L9.11,11H6V16H4M6,9H9A2,2 0 0,0 11,7A2,2 0 0,0 9,5H6V9Z" /></svg></button></div>`;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(myLibrary); 
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
    form.classList.toggle('show')
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
    form.classList.toggle('show')
})

// //////////////////////////////////////////////////

// btn_delete.addEventListener('click',(event)=>{
//     let cardId = event.target.closest('div').id;
//     console.log(cardId);
//     let del_elem=document.querySelector(`#a${cardId}`);
//     del_elem.remove();
// })

// /////////////////////////////
// displayBooks(myLibrary);

// console.log(myLibrary[0]);

