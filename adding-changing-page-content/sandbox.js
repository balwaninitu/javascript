const para = document.querySelector('p');

//innerText is a propertu hence no need brackets after it but it need in method
console.log(para.innerText);


para.innerText = ' ninjas are awesome!';
//+ add extra content on web page
para.innerText += ' ninjas are awesome!';

const paras = document.querySelectorAll('p');

//loop over all p tag and display on console
paras.forEach(para => {
    console.log(para.innerText);
//add new text to each p tag
    para.innerText += ' new text';
    
});

//change p inside content class

const content = document.querySelector(' .content');

console.log(content.innerHTML);

//override contents in html, + will append
content.innerHTML += '<h2>This is a new H2</h2>';

//output html for each of data available in database
const people = ['mario', 'luigi', 'yoshi'];

//get people
people.forEach(person => {
    content.innerHTML += `<p>${person}<p>`;
});


