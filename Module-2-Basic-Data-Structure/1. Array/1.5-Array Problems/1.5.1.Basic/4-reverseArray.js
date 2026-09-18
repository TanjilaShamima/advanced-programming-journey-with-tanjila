// reverse Array

const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.reverse(); // Using built-in method to reverse the array
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]