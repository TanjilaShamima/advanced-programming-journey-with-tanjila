// reverse array
// Given an array, reverse the array in-place without using any extra space.
const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]
// Demonstrate the function with arr [1, 2, 3, 4, 5].

// array = [1, 2, 3, 4, 5]
// left = 0, right = 4
// swap arr[left] and arr[right]
// array = [5, 2, 3, 4, 1]
// left = 1, right = 3
// swap arr[left] and arr[right]
// array = [5, 4, 3, 2, 1]
// left = 2, right = 2
// left is not less than right, exit loop
// return [5, 4, 3, 2, 1]