//live feedback

const form = document.querySelector('.signup-form');

const username = form.username.value;

const usernamePattern = /^[a-zA-Z]{6,12}$/;

// // validation
// form.addEventListener('submit', e => {
//     e.preventDefault();
// }); 

//live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    //two ways to get value from form
   // console.log(e.target.value, form.username.value);

   if(usernamePattern.test(e.target.value)){
      // console.log('passed');
      form.username.setAttribute('class' , 'success');

   }else {
       //console.log('failed');
       form.username.setAttribute('class' , 'error');
   }
});