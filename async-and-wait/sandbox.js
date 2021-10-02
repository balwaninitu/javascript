//async and wait
//whenever called async function it return promise
const getTodos = async () => {

    const response = await fetch('json/luigi.json');
    const data = await response.json();

    return data;

};

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data));
    
    console.log(3);
    console.log(4);
