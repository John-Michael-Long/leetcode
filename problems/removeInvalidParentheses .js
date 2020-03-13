var removeInvalidParentheses = function(s) {
    const validCombos = new Set()
    let minRemoved;
    
    function backtrack(index, combo, leftCount, rightCount, removed) {
        if(index === s.length) {
            if(leftCount === rightCount) {
                if (minRemoved === undefined) { minRemoved = removed }
                if(removed <= minRemoved) {
                    if(removed < minRemoved) {
                        validCombos.clear()
                        minRemoved = removed
                    }
                    validCombos.add(combo)
                }
            }
            return
        }
        let char = s[index]
        if(char !== '(' && char !== ')') {
            backtrack(index + 1, combo + char, leftCount, rightCount, removed)
        } else {
            backtrack(index + 1, combo, leftCount, rightCount, removed + 1)
            if(char === '(') {
                backtrack(index + 1, combo + char, leftCount + 1, rightCount, removed)
            } else {
                if(leftCount > rightCount) {
                    backtrack(index + 1, combo + char, leftCount, rightCount + 1, removed)
                }
            }
        }
    }
    backtrack(0, '', 0, 0, 0)
    return Array.from(validCombos)
};
