/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  if(words.length <= 1) return true;
  
  for(let i = 0; i < words.length - 1; i++) {
    let curr = words[i]
    let next = words[i + 1]
    for(let k = 0; k < Math.max(curr.length, next.length); k++) {
      if(k >= curr.length) break;
      if(k >= next.length) return false;
      if(order.indexOf(curr[k]) < order.indexOf(next[k])) break;
      if(order.indexOf(curr[k]) > order.indexOf(next[k])) return false;
    }
  }
  return true
};

var isAlienSorted = function(words, order) {
    const letterMap = {};
    order.split('').forEach((letter,idx) => letterMap[letter] = idx)
    
    for(let i = 0; i < words.length - 1; i++) {
        let w1 = words[i]
        let w2 = words[i + 1]
        let j
        for(j = 0; j < Math.min(w1.length, w2.length); j++) {
            if(letterMap[w1[j]] !== letterMap[w2[j]]) {
                if(letterMap[w1[j]] > letterMap[w2[j]]) {
                    return false;
                }
                break;
            } 
        }
        
        if(j === Math.min(w1.length, w2.length) && w1.length > w2.length) {
            return false
        }
    }
    return true;
};