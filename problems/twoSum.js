/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indexMap = {}
    
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(indexMap[complement] !== undefined) {
           return [indexMap[complement], i] 
        }
        indexMap[nums[i]] = i
    }
    return []
};