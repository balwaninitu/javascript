
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
    let area = 3.14 * radius ** 2;
    return area;
};

const area = calcArea(5);
console.log(area);

