// Function Declaration
greet("Tripurari"); // Output: Hello, Tripurari!
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Tripurari"); // Output: Hello, Tripurari!


function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15

function isEvenOdd(num) {
    if (num % 2 === 0) {
        return num + " is even.";
    }
    return num + " is odd.";
}
console.log(isEvenOdd(4)); // Output: 4 is even.
console.log(isEvenOdd(7)); // Output: 7 is odd.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120


//named function expression
let square = function sq(num) {
    return num * num;
};
console.log(square(4)); // Output: 16   


//anonymous function expression
let cube = function(num) {
    return num * num * num;
};
console.log(cube(3)); // Output: 27


// arrow function expression
console.log(multiply(5, 10));
let multiply = (a, b) => a * b;
console.log(multiply(5, 10)); // Output: 50

let greetArrow = name => "Hello, " + name + "!";
console.log(greetArrow("Tripurari")); // Output: Hello, Tripurari!


// Immediately Invoked Function Expression (IIFE)

(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!


(function(name) {
    console.log("Hello, " + name + "!");
})("Tripurari"); // Output: Hello, Tripurari!


// fucntion with default parameters

function greetDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetDefault(); // Output: Hello, Guest!
greetDefault("Tripurari"); // Output: Hello, Tripurari!


//function with rest parameters

function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(4, 5, 6, 7)); // Output: 22


//function with spread operator

function findMax(...numbers) {
    return Math.max(...numbers);
};
console.log(findMax(1, 5, 3)); // Output: 5
console.log(findMax(10, 20, 15)); // Output: 20


//function with rest and spread

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
};
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(combineArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]


//function that take another function as argument
console.log(performOperation(5, 10, addNumbers));
function performOperation(a, b, operation) {
    return operation(a, b);
};
function addNumbers(x, y) {
    return x + y;
}
function multiplyNumbers(x, y) {
    return x * y;
}
console.log(performOperation(5, 10, addNumbers)); // Output: 15
console.log(performOperation(5, 10, multiplyNumbers)); // Output: 50