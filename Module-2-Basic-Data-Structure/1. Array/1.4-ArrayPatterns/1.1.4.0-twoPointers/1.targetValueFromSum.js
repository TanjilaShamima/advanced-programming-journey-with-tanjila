// target value from sum
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

const targetValueFromSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const currentSum = arr[left] + arr[right];

        if(currentSum === target) {
            return [arr[left], arr[right]];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}


const arr = [1, 2, 3, 4, 6];
const target = 6;

console.log(targetValueFromSum(arr, target)); // Output: [2, 4]

// Demonstrate the function with arr[1, 2, 3, 4, 6] and target 6.

// array = [1, 2, 3, 4, 6]
// target = 6
// left = 0, right = 4
// currentSum = 1 + 6 = 7 > target, right--
// left = 0, right = 3
// currentSum = 1 + 4 = 5 < target, left++
// left = 1, right = 3
// currentSum = 2 + 4 = 6 === target, return [2, 4]
