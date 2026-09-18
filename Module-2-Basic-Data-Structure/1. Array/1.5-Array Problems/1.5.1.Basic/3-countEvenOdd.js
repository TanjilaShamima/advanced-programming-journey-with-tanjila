// count even and odd numbers in an array

const countEvenOdd = (arr) => {
    let evenCount = 0;
    let oddCount = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(countEvenOdd(arr)); // Output: { evenCount: 3, oddCount: 3 }