
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e =>{
    e.preventDefault();

    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        //feedback
        feedback.textContent = 'username is valid'
    }else {
        //help info feedback
        feedback.textContent = 'username must contain letters only between 6 & 12 characters long';
    }
})