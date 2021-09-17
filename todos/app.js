const addForm = document.querySelector('.add');
//reference to ul to inject template
const list =  document.querySelector('.todos');

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