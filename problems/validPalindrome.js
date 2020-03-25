/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(!s) return true
  const arr = s.toLowerCase().match(/[a-z0-9]/g)
  
  if(!arr) return true
  
  let left = 0, right = arr.length - 1;
  
  while(left < right) {
    if(arr[left] !== arr[right]) return false
    right--;
    left++;
  }
  
  return true
  
};