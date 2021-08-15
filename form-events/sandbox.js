
//attach evenlistener to form
const form = document.querySelector('.signup-form');
//no need to get query selector if there is already with form
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault(); 
    //get value from input field
    //console.log(username.value);
    console.log(form.username.value);
    
});


