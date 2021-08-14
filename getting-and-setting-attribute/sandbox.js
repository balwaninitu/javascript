//reference to element that we want to change

const link = document.querySelector('a');

//get attribute to get link from html
console.log(link.getAttribute('href'));

//change attribute in html
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerHTML = 'TheNet Ninja Website';

const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');

//can add style attribute to p tag in html
msg.setAttribute('style', 'color:green;');