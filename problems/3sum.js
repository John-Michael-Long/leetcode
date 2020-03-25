/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length < 3) return [];
  const solution = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  
  for(let left = 0; left < n; left++) {
    if(nums[left] > 0) break;
    let mid = left + 1;
    let right = n - 1;
    if(left > 0 && nums[left] === nums[left - 1]) continue;
    
    while(mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];
      if(sum === 0) {
        solution.push([nums[left], nums[mid], nums[right]])
        mid++;
        right--;
        while(mid < right && nums[mid] === nums[mid - 1]) mid++;
        while(left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
          mid++;
      } else {
          right--;
      }
    }
  }
  return solution;
};



