// two sum problem

var twoSum = function(nums, target) {

    for(let i = 0; i<=nums.length - 1; i++){
        for(let j = 1; j <= nums.length - 1; j++){
            if(i !== j && nums[i] + nums[j] === target) return [i, j]
        }
    }
};

// console.log(twoSum([3, 2, 4], 6)) // Output: [0, 1]

// using two pointer approach it is not working because the array is not sorted. So we need to sort the array first and then use two pointer approach.

const twoSumUsingTwoPointers = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        console.log(left, right)
        sum = nums[left] + nums[right]
        console.log(sum)
        if(sum === target) {
            console.log(left, right)
            return [left, right]
        }
        else if(sum < target) left++
        else right--
    }
};

console.log(twoSumUsingTwoPointers([1, 2, 3], 5)) // Output: [1, 2]