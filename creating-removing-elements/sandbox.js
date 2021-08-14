//delete and add elements to web page

//delete
 const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () =>{
    //ul.innerHTML += '<li>buy books</li>';
    //different approach
    const li = document.createElement('li');
    li.textContent = 'something new to do'; 
    //append to bottom of parent
    ul.append(li);
    //append at the top
    ul.prepend(li);
});



// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.remove();
//     });
// });