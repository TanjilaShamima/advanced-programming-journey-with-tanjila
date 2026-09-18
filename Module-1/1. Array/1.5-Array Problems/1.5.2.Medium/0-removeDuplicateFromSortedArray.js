// remove duplicates from sorted array
const removeDuplicates = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr;
}

const arr = [1, 1, 2, 3, 3, 4, 5, 5, 6];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5, 6]
