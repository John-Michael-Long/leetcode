/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) return intervals;
    intervals.sort((a,b) => a[0] - b[0]);
    const output = [];
    output.push(intervals[0])
    
    for(let i = 0; i < intervals.length; i++) {
        const last = output[output.length - 1]
        const current = intervals[i]
        if(current[0] > last[1]) {
            output.push(current)
        } else if(current[1] > last[1]) {
            last[1] = current[1]   
        }
    }
    return output
};


 
var merge = function(intervals) {
    if(!intervals.length) return []
    intervals.sort((a,b) => a[0] - b[0])
    const output = []
    output.push(intervals[0].slice())
    for(let i = 1; i < intervals.length; i++) {
        let a = output[output.length - 1]
        let b = intervals[i]
        if(b[0] > a[1]) {
            output.push(b.slice())
        } else {
            // overlap
            a[1] = Math.max(b[1], a[1])
        }
    }
    return output
};

var merge = function(intervals) {
    if(intervals.length < 2) { return intervals }
    intervals.sort((a, b) => a[0] - b[0])
    const ans = []
    ans.push(intervals[0])
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] > ans[ans.length - 1][1]) {
            ans.push(intervals[i])
        } else {
            // start of current is <= end of last
            let last = ans[ans.length - 1]
            last[1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
        }
    }
    return ans
};
