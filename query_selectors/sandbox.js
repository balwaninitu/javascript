
//grabs first p in the dom
const para = document.querySelector('p')

console.log(para);

//to grab class use dit(.)
const para1 = document.querySelector('.error');
console.log(para1);

const para2 = document.querySelectorAll('p');
console.log(para2);
console.log(para2[2]);


para2.forEach(para => {

    console.log(para);
});