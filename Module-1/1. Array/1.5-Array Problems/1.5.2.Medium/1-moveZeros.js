// move zeros to the end of the array while maintaining the order of non-zero elements

const moveZeros = (arr) => {
    const nonZeroArr = arr.filter(num => num !== 0);

   for(let i = nonZeroArr.length; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr)); // Output: [1, 3, 12, 0, 0]