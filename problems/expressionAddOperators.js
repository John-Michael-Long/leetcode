/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  const nums = num.split('')
  const output = [];
  const opps = ['*', '+', '-']
  
  function backtrack(startIdx, value, expr, diff) {
    // console.log('start:', startIdx,' | val:',value,' | expr:', expr, ' | diff:', diff)
    // if startIdx is correct length
    if(startIdx === nums.length) {
      if(value === target) output.push(expr)
      return;
    }
    
    for(let j = startIdx + 1; j <= nums.length; j++) {
      let current = num.slice(startIdx, j)
      
      if(current[0] === '0' && current.length > 1) continue;
      
      let curNum = parseInt(current)
      if(startIdx === 0) {
        backtrack(j, curNum, current, curNum)
      } else {
        // addition
        backtrack(j, value + curNum, expr + "+" + current, curNum)
        // subtraction
        backtrack(j, value - curNum, expr + '-' + current, -curNum)
        // multiplication
        backtrack(j, value - diff + diff * curNum, expr + '*' + current, diff * curNum)
      }
    }
  }
  backtrack(0, 0, '', 0)
  return output;
};

/*
IN: string, int
OUT: string array
EDGE CASES:
- num.length = 0,1,2
- negative target ?
*/