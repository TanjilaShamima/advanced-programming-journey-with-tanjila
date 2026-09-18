// 3sum 
// Given an array of integers, return all the triplets that sum up to zero.

const threeSum = (arr) => {
    arr.sort((a, b) => a - b);
    const result = [];
    for(let i = 0; i < arr.length - 2; i++) {
        if(i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicates
        let left = i + 1;
        let right = arr.length - 1;
        while(left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];
            if(currentSum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while(left < right && arr[left] === arr[left + 1]) left++; // skip duplicates
                while(left < right && arr[right] === arr[right - 1]) right--; // skip duplicates
                left++;
                right--;
            } else if (currentSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr)); // Output: [[-1, -1, 2], [-1, 0, 1]]