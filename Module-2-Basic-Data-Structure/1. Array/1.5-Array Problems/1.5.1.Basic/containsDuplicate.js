var containsDuplicate = function(nums) {
    duplicate = false
    for(let i = 0; i< nums.length; i++){
        for(j=1; j<nums.length; j++){
            if(nums[i] === nums[j] && i !== j) {
                duplicate = true
                return duplicate
            }
        }
    }
    return duplicate
};

// console.log(containsDuplicate([1,2,3,1])) // Output: true
// console.log(containsDuplicate([1,2,3,4])) // Output: false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // Output: true


// using set to check for duplicate
var containsDuplicateUsingSet = function(nums) {
    let set = new Set(nums)
    console.log(set)
    return set.size !== nums.length
};

console.log(containsDuplicateUsingSet([1,2,3,1])) // Output: true
console.log(containsDuplicateUsingSet([1,2,3,4])) // Output: false
console.log(containsDuplicateUsingSet([1,1,1,3,3,4,3,2,4,2])) // Output: true