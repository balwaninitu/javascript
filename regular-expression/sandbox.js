//validation of form

const form = document.querySelector('.signup-form');

form.addEventListener('submit', e =>{

    console.log(form.username.value)
});

//testing RegEx
const username = 'riddhamm';
const pattern = /^[a-z]{6,}$/;


//return bool value
// let result = pattern.test(username);
// //console.log(result);

// if(result){
//     console.log('regex test passed :)');

// }else {
//     console.log('regex test failed :(');
// }

//other approach, return int value
//matches the pattern at that position
let result = username.search(pattern);
console.log(result)