const button = document.querySelector('button');

const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

//show display none when click
button.addEventListener('click' , () =>{
popup.style.display = 'block';
});

//when click on close button it should close
close.addEventListener('click', () =>{
    popup.style.display = 'none'
});

//close pop-up if click anywhere
popup.addEventListener('click', () =>{
    popup.style.display = 'none'
});

