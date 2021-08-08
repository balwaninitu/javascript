// 

let age = 23;
let year = 2019;

console.log(age, year);

//ovewrite the variable
age = 30;
console.log(age);

//const can not overwrite
const points = 70;
//points = 80;
console.log(points);

let str = "I love javascript";

//string character
console.log(str[3]);


//string properties is length
console.log(str.length);

//string method
console.log(str.toUpperCase());

console.log(str.lastIndexOf('l'));

let result = str.slice(4, 7);

console.log(result);

let res = str.substr(4, 7);

console.log(res);

let res2 = str.replace('I', 'we');

console.log(res2);

//Numbers
//order of operation B I D M A S

let res3 = 5 * (4 - 2) ** 2;

console.log(res3);

const title = 'The magic Compass'
const author = 'Thea Stilton';
const likes = 30;

//concatenate numbers and string

let res4 = str + " " + res3 + ' result';

console.log(res4);

res6 = 'The ' + author + ' book name ' + title + ' got ' + likes + ' likes';
console.log(res6);

//template string

let res5 = `The ${author} book name ${title} got ${likes} likes`;
console.log(res5);

//creating html template

html = `

<h2>${author}</h2>
<p>${title}</p>
<span>This book has ${likes} likes</span>

`;

console.log(html);

//loop in html

let names = ["ria", "tia", "pia"];

for (let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
//while loop

let i = 0;

while (i < names.length) {
    console.log('val of i is: ', names[i])
    i++;
}

//do while loop

//let j = 5;

let j = 3;

do {
    console.log('value of j is: ', j)
    j++;
} while (j < 5);



