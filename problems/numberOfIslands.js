/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length || !grid[0].length) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    function traverseIsland(r, c) {
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == 0) return
        
        grid[r][c] = 0;
        traverseIsland(r - 1, c)
        traverseIsland(r + 1, c)
        traverseIsland(r, c - 1)
        traverseIsland(r, c + 1)
    }
    
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++) {
            if(grid[r][c] == 1) {
                count++;
                traverseIsland(r, c)
            }
        }
    }
    
    return count;
};