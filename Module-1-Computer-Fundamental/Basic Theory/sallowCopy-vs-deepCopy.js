// What is the difference between shallow copy and deep copy in JavaScript?
// Shallow copy creates a new object or array, but it only copies the references to the nested objects or arrays. This means that if you modify a nested object or array in the copied version, it will also affect the original.
// Deep copy creates a new object or array, and recursively copies all nested objects or arrays. This means that modifications to the nested objects or arrays in the copied version will not affect the original.

// Example of shallow copy:
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original }; // Using spread operator
shallow.b.c = 3; // Modifying the nested object
console.log(original.b.c); // Output: 3 (original is affected)
console.log(shallow.b.c); // Output: 3

// Example of deep copy:
const original2 = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(original2)); // Using JSON methods
deep.b.c = 3; // Modifying the nested object
console.log(original2.b.c); // Output: 2 (original is not affected)
console.log(deep.b.c); // Output: 3