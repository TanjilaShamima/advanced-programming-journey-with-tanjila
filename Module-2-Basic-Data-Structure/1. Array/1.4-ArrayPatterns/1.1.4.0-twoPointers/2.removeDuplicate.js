// remove duplicate from sorted array
// Given a sorted array, remove the duplicates in-place such that each element appears only once and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = (arr) => {
    if(arr.length === 0) return 0;
    let i = 0;

    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr;
}

const arr = [1, 1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5, 6]

// Demonstrate the function with arr [1, 1, 2, 3, 3, 4, 5, 5, 6].

// array = [1, 1, 2, 3, 3, 4, 5, 5, 6]

// i = 0, j = 1
// arr[i] = 1, arr[j] = 1, arr[i] === arr[j], j++
// i = 0, j = 2
// arr[i] = 1, arr[j] = 2, arr[i] !== arr[j], i++, arr[i] = arr[j]
// array = [1, 2, 2, 3, 3, 4, 5, 5, 6]
// i = 1, j = 3
// arr[i] = 2, arr[j] = 3, arr[i] !== arr[j], i++, arr[i] = arr[j]
// array = [1, 2, 3, 3, 3, 4, 5, 5, 6]
// i = 2, j = 4
// arr[i] = 3, arr[j] = 3, arr[i] === arr[j], j++
// i = 2, j = 5
// arr[i] = 3, arr[j] = 4, arr[i] !== arr[j], i++, arr[i] = arr[j]
// array = [1, 2, 3, 4, 3, 4, 5, 5, 6]
// i = 3, j = 6
// arr[i] = 4, arr[j] = 5, arr[i] !== arr[j], i++, arr[i] = arr[j]
// array = [1, 2, 3, 4, 5, 4, 5, 5, 6]
// i = 4, j = 7
// arr[i] = 5, arr[j] = 5, arr[i] === arr[j], j++
// i = 4, j = 8
// arr[i] = 5, arr[j] = 6, arr[i] !== arr[j], i++, arr[i] = arr[j]
// array = [1, 2, 3, 4, 5, 6, 5, 5, 6]
// return [1, 2, 3, 4, 5, 6]