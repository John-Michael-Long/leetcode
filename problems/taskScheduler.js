/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const taskCount = Array(26).fill(0);
    tasks.forEach(task => {
        let charIdx = task.charCodeAt() - 'A'.charCodeAt()
        taskCount[charIdx]++
    })
    
    taskCount.sort((a,b) => b - a)
    
    let time = 0;
    while(taskCount[0] > 0) {
        let i = 0;
        while(i <= n) {
            if(taskCount[0] === 0) break;
            if(i < 26 && taskCount[i] > 0) taskCount[i]--;
            time++;
            i++;
        }
        taskCount.sort((a,b) => b - a)
    }
    return time;
};