/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    const ans = []
    let carry = 0;
    while (i >= 0 || j >= 0 || carry) {
        let d1 = Number(a[i]) || 0;
        let d2 = Number(b[j]) || 0;
        let sum = d1 + d2 + carry;
        let digit = sum % 2;
        carry = sum > 1 ? 1 : 0
        ans.push(digit)
        i--
        j--
    }
    
    return ans.reverse().join('')
};
