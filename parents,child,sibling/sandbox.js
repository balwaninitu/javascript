const article = document.querySelector('article');

console.log(article.children);

//forEach can only use for nodeList and array
//when there is all child in the parent we can not use forEach
//convert all children of article class into array
console.log(Array.from(article.children));


Array.from(article.children).forEach(child =>{
child.classList.add('article-element');
})

const title = document.querySelector('h2');
//find out parent
console.log(title.parentElement);
//to get grandparent or parent of parent which is body
console.log(title.parentElement.parentElement);

//sibling relationship
//it will give sibling of h2 which is tag p
console.log(title.nextElementSibling);
//if sibling not available it will give null
console.log(title.previousElementSibling);

//chaining
console.log(title.nextElementSibling.parentElement.children)