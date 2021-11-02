const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];
console.log(namesArray);

//set allows only unique values
//const nameSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);
const nameSet = new Set(namesArray);
console.log(nameSet);

//const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log(ages, ages.size);

console.log(ages.has(20), ages.has(25));


ages.clear();
console.log(ages);

const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'luigi', age: 32},
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});

