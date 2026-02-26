let a = true;
let b = false;

console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false
console.log(!b); // Output: true

let x = 5;
let y = 10;
console.log(x > 0 && y > 0); // Output: true
console.log(x > 0 || y < 0); // Output: true
console.log(!(x > 0)); // Output: false
console.log(!(y < 0)); // Output: true


true && true;   // Output: true
true && false;  // Output: false
false && true;  // Output: false
false && false; // Output: false

true || true;   // Output: true
true || false;  // Output: true
false || true;  // Output: true
false || false; // Output: false