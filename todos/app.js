const addForm = document.querySelector('.add');
//reference to ul to inject template
const list =  document.querySelector('.todos');


//reference for input to able to search
const search = document.querySelector('.search input');

//function to create template and add list to the DOM
const generateTemplate = todo => {
    //write template string to inject template in DOM
   const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
      `;

      //+= to append list
      list.innerHTML += html;

}
//add todos
addForm.addEventListener('submit' , e => {

    //prevent reloading of page
    e.preventDefault();
    const todo = addForm.add.value.trim();
    //console.log(todo);

    //check if user has input anything
    if (todo.length){
       //passing values to the function
    generateTemplate(todo);

    //reset submit form to blank after enter hit
    addForm.reset();

    }

});

/*event delegation by attaching event listener to list
and mentioning if only click at trash it will delete same function will
apply to new added list
*/
//delete todos
list.addEventListener('click', e => {
    //check if contains delete class
    if(e.target.classList.contains('delete')){
        //navigate to the list tag which need to delete
        e.target.parentElement.remove();
    }
});

//write function to take term from search bar
const filterTodos = (term) => {
    //console.log(term);
    //console.log(Array.from(list.children));
    // console.log(todo.textContent)
// return true;

    //if not match filtered that class
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    //if matched take filtered back off
    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

    };



//search functionality to search keyword
//keyup event to search
search.addEventListener('keyup', () => {

    //get input field to match
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});




