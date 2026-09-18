// what is iterable and non-iterable in JavaScript?
// iterable: an object that can be iterated over, meaning it can be used in a for...of loop or with the spread operator. Examples of iterable objects include arrays, strings, maps, sets, and generators.
// non-iterable: an object that cannot be iterated over. Examples of non-iterable objects include plain objects ({}), numbers, booleans, and null or undefined.

// Example of iterable:
const array = [1, 2, 3];
for (const item of array) {
    console.log(item); // Output: 1, 2, 3
}

// Example of non-iterable:
const obj = { a: 1, b: 2 };
for (const item of obj) {  
    console.log(item); // This will throw a TypeError: obj is not iterable
}


