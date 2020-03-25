/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1) { nums }
    let zeros = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeros++
        } else {
            if(zeros > 0) { 
                nums[i - zeros] = nums[i]
                nums[i] = 0
            }
        }
    }
    return nums
};