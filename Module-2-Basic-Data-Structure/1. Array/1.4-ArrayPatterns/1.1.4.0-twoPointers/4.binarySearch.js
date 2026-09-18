const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    const array = arr.sort((a, b) => a - b); // Ensure the array is sorted
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(array[mid] === target) {
            return mid; // Return the index of the target
        } else if (array[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}