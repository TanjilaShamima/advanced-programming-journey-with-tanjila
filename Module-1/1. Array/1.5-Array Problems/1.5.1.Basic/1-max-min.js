// max -min problem

// Given an array of integers, find the maximum and minimum elements in the array.

const maxMin = (arr) => {
    if(arr.length === 0) return null;
    let max = arr[0];
    let min = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i];
        }
    }
    return { max, min };
}

const arr = [3, 1, 4, 1, 5, 9];
console.log(maxMin(arr)); // Output: { max: 9, min: 1 }