
//function declaration can work before writing function code
greet();


//function declaration
function greet() {
    console.log("hello there!");
}

greet();


//function expression wont work if call before it
//speak();

//function expression
//declare constant with anonymous function and there should be semicolon after curly braces
//hoisting is not possible with function expression meaning we can call function only after it not before
//function with input parameters
const speak = function (name = 'Nitu', time = 'Night') {
    console.log(`good ${time} ${name}`)
};

//speak('Nitu', 'morning');

//speak();

speak('titu');

const calcArea = function (radius) {

    return 3.14 * radius ** 2;

    // let area = 3.14 * radius ** 2;
    // return area;
};

const area = calcArea(5);
console.log(area);

//arrow functions

// const calArea = (radius) => {

//     return 3.14 * radius ** 2;
// };


//another approach to write same arrow function as above
const calArea = radius => 3.14 * radius ** 2;

const a = calArea(10);
console.log('area is: ', a);

const greets = () => 'hello world';

const result = greets();

console.log(result);

const bill = function (products, tax) {
    let total = 0;
    for (i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

//convert to arrow function

// const bill = (products, tax) => {
//     let total = 0;
//     for (i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;

// };

console.log(bill([10, 20, 30], 0.2));


