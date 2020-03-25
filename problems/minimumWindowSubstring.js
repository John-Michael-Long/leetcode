/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if(t.length > s.length || t.length === 0 || s.length === 0) return ""
  const letterCount = {};
  
  for(let i = 0; i < t.length; i++) {
    if(letterCount[t[i]] === undefined) letterCount[t[i]] = 0
    letterCount[t[i]]++;
  }
  const requiredCount = Object.keys(letterCount).length;
  
  const sLetterCount = {}
  let formed = 0;
  let minString;
  for(let left = 0, right = 0; right < s.length; right++) {
    let char = s[right]
    
    if(letterCount[char]) {
      if(sLetterCount[char] === undefined) sLetterCount[char] = 0;
      sLetterCount[char]++;
      if(sLetterCount[char] === letterCount[char]) formed++;
    }
    
    while(formed === requiredCount && left <= right) {
      let current = s.slice(left, right + 1)
      if(!minString || current.length < minString.length) minString = current;
      
      let leftChar = s[left]
      if(sLetterCount[leftChar]) {
        sLetterCount[leftChar]--
        if(sLetterCount[leftChar] < letterCount[leftChar]) formed--;
      }
      left++;
    }
  }
  return minString === undefined ? "" : minString;
};