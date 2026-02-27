//Objects in JavaScript

//Creating an object using object literal syntax
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York


//Creating an object using the Object constructor
let user = new Object();
user.username = "tripurari";
user.email = "tripurari@example.com";
console.log(user.username); // Output: tripurari
console.log(user.email); // Output: tripurari@example.com


//Creating an object using a constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const myCar = new Car("Toyota", "Camry", 2020);
console.log(typeof myCar); // Output: object
console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Camry
console.log(myCar.year); // Output: 2020


//Creating an object using Object.create()
const animal = {
    type: "Mammal",
    sound: function() {
        return "Some sound";
    }   
};
const dog = Object.create(animal);
console.log(typeof dog); // Output: object
dog.name = "Buddy";
console.log(dog.name); // Output: Buddy
console.log(dog.type); // Output: Mammal
console.log(dog.sound()); // Output: Some sound


let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    "Best Seller": true,
    getDetails: function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
};
console.log(book.getDetails()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925

delete book.year;
console.log(book.year); // Output: undefined

book.publisher = "Scribner";
console.log(book.publisher); // Output: Scribner

console.log("Best Seller" in book); // Output: true
console.log(book.hasOwnProperty("author")); // Output: true

console.log(Object.keys(book)); // Output: [ 'title', 'author', 'Best Seller', 'getDetails', 'publisher' ]
console.log(Object.values(book)); // Output: [ 'The Great Gatsby', 'F. Scott Fitzgerald', true, [Function: getDetails], 'Scribner' ]

console.log(book["Best Seller"]); // Output: true
console.log(book["getDetails"]()); // Output: The Great Gatsby by F. Scott Fitzgerald, published in 1925

for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(key + ": " + book[key]);
    }
}
// Output:
// title: The Great Gatsby
// author: F. Scott Fitzgerald
// Best Seller: true
// getDetails: [Function: getDetails]
// publisher: Scribner