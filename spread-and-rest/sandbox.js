//rest parameter
const double = (...nums) =>{
    console.log(nums);
    return nums.map(num => nums*2);

}

const result = double(1,3,5,7,9,2,4,6,8);
console.log(result);


//spread syntax(arrays)
const people = ['nitu', 'ritu', 'titu'];
const members = ['mario', 'chun-li', ...people]
console.log(...people);
console.log(members);


//spread syntax(objects)
const person = {name: 'nitu', age:30, job: 'engineer'};
const personClone = {...person, location: 'singapore'};
console.log(personClone);