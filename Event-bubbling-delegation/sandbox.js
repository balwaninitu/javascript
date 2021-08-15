
/*event bubbling- when event listener attached to child and get fire at 
callback function and it go back again to parent to check if there are 
more eventlistener attached. it is calleb bubbling.

*/
const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log('event in li');
//         //to stop event bubbling up to the parent
//         e.stopPropagation();
//         e.target.remove();
//     });
// });


//only attached eventlistener to parent(ul) and it will delegate to children(li)
ul.addEventListener('click', e =>{
    //console.log('even in UL')
    //here children has to attached as target
     //console.log(e.target);
    if (e.target.tagName === 'LI'){
        e.target.remove();
    }
   
});
