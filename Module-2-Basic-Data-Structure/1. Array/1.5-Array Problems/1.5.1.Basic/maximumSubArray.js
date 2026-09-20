// Maximum subarray problem

var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currentSum = nums[0]
    for(let i = 1; i < nums.length; i++){
        // if currentSum is negative then we will start a new subarray from the current element. Otherwise, we will add the current element to the current subarray.
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // Output: 6

