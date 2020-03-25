/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	if(nums.length < 4) return [];
	nums.sort((a,b) => a - b)
	const n = nums.length;
	const solution = [];
	
	for(let i = 0; i < n - 3; i++) {
		if(i !== 0 && nums[i] === nums[i - 1]) continue;
		
		for(let j = i + 1; j < n - 2; j++) {
			if(j !== i + 1 && nums[j] === nums[j - 1]) continue;
			
			let left = j + 1;
			let right = n - 1;
			while(left < right) {
				const sum = nums[i] + nums[j] + nums[left] + nums[right];
				if(sum < target) {
					left++
				} else if (sum > target) {
					right--
				} else {
					solution.push([nums[i], nums[j], nums[left], nums[right]])
					left++
					right--
					while(left < right && nums[left] === nums[left - 1]) left++;
					while(left < right && nums[right] === nums[right + 1]) right--;
				}
			}
		}
	}
	return solution;
};