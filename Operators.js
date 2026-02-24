let a = "2";
let b = "8";

let c = a + b;
console.log(c); // Output: "28" 
console.log(typeof c); // Output: "string"

let g = Number(a) + Number(b);
console.log(g); // Output: 10
console.log(typeof g); // Output: "number"

let d = a - b;
console.log(d); // Output: -6
console.log(typeof d); // Output: "number"

let e = a * b;
console.log(e); // Output: 16
console.log(typeof e); // Output: "number"

let f = a / b;
console.log(f); // Output: 0.25
console.log(typeof f); // Output: "number"

let h = a % b;
console.log(h); // Output: 2
console.log(typeof h); // Output: "number"

let i = a ** b;
console.log(i); // Output: 256
console.log(typeof i); // Output: "number"      

console.log(2+2+"2"); // Output: "42"
console.log(typeof(2+2+"2")); // Output: "string"
console.log("2"+2+2); // Output: "222"
console.log(typeof("2"+2+2)); // Output: "string"

console.log(2+2*2); // Output: 6
console.log(typeof(2+2*2)); // Output: "number"
console.log((2+2)*2); // Output: 8

console.log(6-'2'); // Output: 4
console.log('6'-2);  // Output: 4

console.log(6*'2'); // Output: 12
console.log('6'*2);  // Output: 12  

console.log(6/'2'); // Output: 3
console.log('6'/2);  // Output: 3  

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // Output: "23"
console.log(+apples + +oranges); // Output: 5

let increment = 5;
console.log(increment++); // Output: 5 (returns the value before incrementing)
console.log(increment);   // Output: 6 (value after incrementing)

let decrement = 5;
console.log(decrement--); // Output: 5 (returns the value before decrementing)
console.log(decrement);   // Output: 4 (value after decrementing)

let increment2 = 5;
console.log(++increment2); // Output: 6 (increments first, then returns the value)

let decrement2 = 5;
console.log(--decrement2); // Output: 4 (decrements first, then returns the value)  