// Push()

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// Pop()
const arr2 = [1, 2, 3];
const poppedValue = arr2.pop();
console.log(arr2); // Output: [1, 2]
console.log(poppedValue); // Output: 3

// Shift()
const arr3 = [1, 2, 3];
const shiftedValue = arr3.shift();
console.log(arr3); // Output: [2, 3]
console.log(shiftedValue); // Output: 1


// Unshift()
const arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4); // Output: [0, 1, 2, 3]

// Splice()
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 1);
console.log(arr5); // Output: [1, 2, 4, 5]
arr5.splice(2, 0, 3);
console.log(arr5); // Output: [1, 2, 3, 4, 5]
// splice(start, deleteCount, item1, item2, ...)

// Slice()
const arr6 = [1, 2, 3, 4, 5];
const slicedArr = arr6.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4]
console.log(arr6); // Output: [1, 2, 3, 4, 5] (original array is not modified)
// slice(start, end) - end is not included

// Concat()
const arr7 = [1, 2, 3];
const arr8 = [4, 5, 6];
const concatenatedArr = arr7.concat(arr8);
console.log(concatenatedArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr7); // Output: [1, 2, 3] (original array is not modified)
console.log(arr8); // Output: [4, 5, 6] (original array is not modified)
// concat(array1, array2, ...) - can take multiple arrays as arguments

// includes()
const arr9 = [1, 2, 3];
console.log(arr9.includes(2)); // Output: true
console.log(arr9.includes(4)); // Output: false

// indexOf()
const arr10 = [1, 2, 3, 2];
console.log(arr10.indexOf(2)); // Output: 1 (first occurrence of 2)
console.log(arr10.indexOf(4)); // Output: -1 (4 is not found)

// lastIndexOf()
const arr11 = [1, 2, 3, 2];
console.log(arr11.lastIndexOf(2)); // Output: 3 (last occurrence of 2)
console.log(arr11.lastIndexOf(4)); // Output: -1 (4 is not found)

// sort()
const arr12 = [3, 1, 4, 2];
arr12.sort();
console.log(arr12); // Output: [1, 2, 3, 4] (sorted in ascending order)
const arr13 = [3, 1, 4, 2];
arr13.sort((a, b) => b - a);
console.log(arr13); // Output: [4, 3, 2, 1] (sorted in descending order)
// sort() can also be used to sort strings and other data types, but it sorts them as strings by default. To sort numbers correctly, you should provide a compare function as shown above.

// reverse()
const arr14 = [1, 2, 3];
arr14.reverse();
console.log(arr14); // Output: [3, 2, 1]

// join()
const arr15 = [1, 2, 3];
const joinedString = arr15.join("-");
console.log(joinedString); // Output: "1-2-3"

// split() - this is a string method, but it is often used in conjunction with join()
const str = "1-2-3";
const splitArr = str.split("-");
console.log(splitArr); // Output: ["1", "2", "3"]
// split(separator, limit) - separator is the character or regular expression to split the string, and limit is the maximum number of splits to perform. If limit is not provided, it will split the entire string.


// map() 
const arr16 = [1, 2, 3];
const mappedArr = arr16.map(x => x * 2);
console.log(mappedArr); // Output: [2, 4, 6] (a new array is created with the results of calling the provided function on every element in the original array)
console.log(arr16); // Output: [1, 2, 3] (original array is not modified)

// filter()
const arr17 = [1, 2, 3, 4, 5];
const filteredArr = arr17.filter(x => x % 2 === 0);
console.log(filteredArr); // Output: [2, 4] (a new array is created with all elements that pass the test implemented by the provided function)
console.log(arr17); // Output: [1, 2, 3, 4, 5] (original array is not modified)

//forEach()
const arr17_1 = [1, 2, 3];
arr17_1.forEach(x => console.log(x * 2));
// Output: 2, 4, 6 (executes the provided function once for each array element, but does not create a new array)
console.log(arr17_1); // Output: [1, 2, 3] (original array is not modified)

// reduce()
const arr18 = [1, 2, 3, 4];
const sum = arr18.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10 (the result of reducing the array to a single value using the provided function)
console.log(arr18); // Output: [1, 2, 3, 4] (original array is not modified)
// reduce(callback, initialValue) - callback is the function to execute on each element in the array, and initialValue is the value to use as the first argument to the first call of the callback. If initialValue is not provided, the first element of the array will be used as the initial accumulator value, and the iteration will start from the second element.

// find()
const arr19 = [1, 2, 3, 4];
const foundValue = arr19.find(x => x > 2);
console.log(foundValue); // Output: 3 (the value of the first element in the array that satisfies the provided testing function)
console.log(arr19); // Output: [1, 2, 3, 4] (original array is not modified)

// findIndex()
const arr20 = [1, 2, 3, 4];
const foundIndex = arr20.findIndex(x => x > 2);
console.log(foundIndex); // Output: 2 (the index of the first element in the array that satisfies the provided testing function)
console.log(arr20); // Output: [1, 2, 3, 4] (original array is not modified)

// some()
const arr21 = [1, 2, 3, 4];
const hasEven = arr21.some(x => x % 2 === 0);
console.log(hasEven); // Output: true (returns true if at least one element in the array satisfies the provided testing function)
console.log(arr21); // Output: [1, 2, 3, 4] (original array is not modified)

// every()
const arr22 = [1, 2, 3, 4];
const allEven = arr22.every(x => x % 2 === 0);
console.log(allEven); // Output: false (returns true if all elements in the array satisfy the provided testing function)
console.log(arr22); // Output: [1, 2, 3, 4] (original array is not modified)

// fill()
const arr23 = [1, 2, 3, 4];
arr23.fill(0);
console.log(arr23); // Output: [0, 0, 0, 0] (all elements in the array are replaced with the specified value)

// copyWithin()
const arr24 = [1, 2, 3, 4, 5];
arr24.copyWithin(0, 3);
console.log(arr24); // Output: [4, 5, 3, 4, 5] (copies a sequence of array elements within the array to the position starting at target)

// entries()
const arr25 = [1, 2, 3];
const entriesIterator = arr25.entries();
console.log(entriesIterator.next().value); // Output: [0, 1] (returns a new Array Iterator object that contains the key/value pairs for each index in the array)
console.log(entriesIterator.next().value); // Output: [1, 2]
console.log(entriesIterator.next().value); // Output: [2, 3]
console.log(entriesIterator.next().value); // Output: undefined (iterator is exhausted)


// keys()
const arr26 = [1, 2, 3];
const keysIterator = arr26.keys();
console.log(keysIterator.next().value); // Output: 0 (returns a new Array Iterator object that contains the keys for each index in the array)
console.log(keysIterator.next().value); // Output: 1
console.log(keysIterator.next().value); // Output: 2


// values()
const arr27 = [1, 2, 3];
const valuesIterator = arr27.values();
console.log(valuesIterator.next().value); // Output: 1 (returns a new Array Iterator object that contains the values for each index in the array)
console.log(valuesIterator.next().value); // Output: 2
console.log(valuesIterator.next().value); // Output: 3

// flat()
const arr28 = [1, 2, [3, 4], [5, [6, 7]]];
const flattenedArr = arr28.flat(2);
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6, 7] (a new array with all sub-array elements concatenated into it recursively up to the specified depth)

// flatMap()
const arr29 = [1, 2, 3];
const flatMappedArr = arr29.flatMap(x => [x, x * 2]);
console.log(flatMappedArr); // Output: [1, 2, 2, 4, 3, 6] (a new array with each element mapped to a new array and then flattened by one level)

// from()
const arr30 = Array.from("hello");
console.log(arr30); // Output: ["h", "e", "l", "l", "o"] (creates a new array from an array-like or iterable object)

// of()
const arr31 = Array.of(1, 2, 3);
console.log(arr31); // Output: [1, 2, 3] (creates a new array from a variable number of arguments)

// isArray()
console.log(Array.isArray([1, 2, 3])); // Output: true (returns true if the argument is an array, false otherwise)
console.log(Array.isArray("hello")); // Output: false (a string is not an array)

// Spread operator
const arr32 = [1, 2, 3];
const newArr = [...arr32, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5] (creates a new array by spreading the elements of the original array and adding new elements)

// Destucturing assignment
const arr33 = [1, 2, 3];
const [a, b, c] = arr33;
console.log(a); // Output: 1 (assigns the elements of the array to individual variables)
console.log(b); // Output: 2
console.log(c); // Output: 3


//problem list
//reduce
//flat
//flatMap
