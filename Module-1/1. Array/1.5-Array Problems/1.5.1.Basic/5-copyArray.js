// copy array

const copyArray = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr = [1, 2, 3, 4, 5];
const copiedArr = copyArray(arr);
console.log(copiedArr); // Output: [1, 2, 3, 4, 5]