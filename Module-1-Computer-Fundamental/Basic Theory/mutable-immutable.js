// what is mutable and immutable?
// mutable means that the value can be changed after it is created, while immutable means that the value cannot be changed after it is created.
// In JavaScript, primitive types (such as numbers, strings, booleans, null, and undefined) are immutable, while objects (including arrays and functions) are mutable.

// Example of mutable:
const arr = [1, 2, 3];
arr.push(4); // The array is modified, so it is mutable
console.log(arr); // Output: [1, 2, 3, 4]

// Example of immutable:
let num = 5;
num = 10; // A new value is assigned, but the original value (5) is not changed
console.log(num); // Output: 10

const str = "Hello";
str[0] = "h"; // This does not change the original string, so it is immutable
console.log(str); // Output: "Hello"

// objects are mutable:
const obj = { a: 1, b: 2 };
obj.a = 3; // The object is modified, so it is mutable
console.log(obj); // Output: { a: 3, b: 2 }

// functions are also mutable:
function greet() {
    console.log("Hello");
}
greet.message = "This is a greeting function"; // Adding a property to the function, so it is mutable
console.log(greet.message); // Output: "This is a greeting function"

// my question is for numbers, value is changed then why is it considered immutable?
// In JavaScript, when you assign a new value to a variable that holds a primitive type (like a number), you are not changing the original value; instead, you are creating a new value and updating the variable to reference that new value. The original value remains unchanged in memory. This is why primitive types are considered immutable.

// For example:
let x = 5;
x = 10; // A new value (10) is created, and x now references this new value. The original value (5) is still unchanged in memory.
console.log(x); // Output: 10