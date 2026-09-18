//second largest number in an array

const secondLargest = (arr) => {
    // if(arr.length < 2) return null; // Not enough elements for second largest
    // let largest = arr[0];
    // let secondLargest = arr[0];
    // for(let i = 1; i < arr.length; i++) {
    //     if(arr[i] > largest) {
    //         secondLargest = largest; // Update second largest before updating largest
    //         largest = arr[i];
    //     } else if(arr[i] > secondLargest && arr[i] !== largest) {
    //         secondLargest = arr[i]; // Update second largest if it's greater than current second largest and not equal to largest
    //     }
    // }
    // return secondLargest === -Infinity ? null : secondLargest; // Return null if there is no second largest

    if(arr.length < 2) return null; 
    const array = arr.sort((a, b) => b - a); // Sort in descending order
    return array[1]; // Return the second element which is the second largest
}