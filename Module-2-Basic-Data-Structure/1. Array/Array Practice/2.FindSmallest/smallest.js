//  Find smallest Element in an Array


const findSmallestElement = (arr) => {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  let smallest = arr[0]; // Initialize smallest with the first element

  for(let i = 0; i< arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i]; // Update smallest if current element is smaller
    }

  }
  return smallest; // Return the smallest element
}

const arr = [5, 2, 9, 1, 5, 6];
console.log(findSmallestElement(arr)); // Output: 1