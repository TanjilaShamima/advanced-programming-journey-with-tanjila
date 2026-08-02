const binarySearch = (arr, target) => {
    arr.sort((a, b) => a - b); // Ensure the array is sorted
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const targetValue = 7;

const resultIndex = binarySearch(array, targetValue);

if (resultIndex !== -1) {
    console.log(`Target ${targetValue} found at index ${resultIndex}.`);
} else {
    console.log(`Target ${targetValue} not found in the array.`);
}