/*
3 steps to activate events
1. create dom where need event e.g.click me button
2.eventlistener which actively looking for event
3.callback function which fires event when it happen 
*/

// const button = document.querySelector('button');
// button.addEventListener('click', () =>{
//     console.log('you clicked me');
// });

const items = document.querySelectorAll('li');
//nodelist to loop over
items.forEach(item => {
    item.addEventListener('click', e => {
        //console.log('item clicked');
        //console.log(e);
        //console.log(e.target);
        //console.log(item);
        e.target.style.textDecoration = 'line-through';
    });
});
