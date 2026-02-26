// Nullish coalescing operator (??)
let user = null;
let defaultName = "Guest";
let name = user ?? defaultName;
console.log(name); // Output: "Guest"

user = "Alice";
name = user ?? defaultName;
console.log(name); // Output: "Alice"

let value = 0;
let result = value ?? "Default Value";
console.log(result); // Output: 0 (because 0 is not null or undefined)

value = undefined;
result = value ?? "Default Value";
console.log(result); // Output: "Default Value" (because value is undefined) 

let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

