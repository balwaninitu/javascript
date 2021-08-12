

let names = ['pia', 'mia', 'tia'];

//foreach method  iterate over each element in array
// names.forEach(function (name) {

//     console.log(name);
// });


//arrow function
// names.forEach((index, name) => {

//     console.log(index, name);
// });

//another approach

const logName = (name, index) => {

    console.log(`${index} - hello ${name}`);
};

names.forEach(logName);