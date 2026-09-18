//  Find Largest Element in an Array

const findLargestElement = (arr) => {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let largest = arr[0]; // Initialize largest with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if current element is greater
    }
  }
  return largest; // Return the largest element
};
