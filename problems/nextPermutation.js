/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length <= 1) return;
  const n = nums.length;
  let i = n - 2;
  
  while(i >= 0 && nums[i] >= nums[i + 1]) i--;
  
  if(i >= 0) {
    let j = n - 1;
    while(j >= 0 && nums[j] <= nums[i]) j--;
    swap(i,j)
  }
  
  reverse(i + 1)
  
  function reverse(i) {
    let k = n - 1;
    while(i < k) {
      swap(i,k)
      i++;
      k--;
    }
  }
  
  function swap(i,j) {
    let temp = nums[j]
    nums[j] = nums[i]
    nums[i] = temp;
  }
};