// 岛屿数量
/**
 * @param {character[][]} grid
 * [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9],
 *  [10, 11, 12]
 *  character.length = 4
 *  character[0].length = 3
 *  row = 4
 *  col = 3
 * ]
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0 // 岛屿个数
    const rowLen = grid.length
    const colLen = grid[0].length

    function dfs (row, col) {
        // 判断临界值
        if (col < 0 || col >= colLen || row < 0 || row >= rowLen || grid[row][col] === '0') {
            return
        }
        grid[row][col] = '0' // 沉没
        // 递归
        dfs(row, col + 1)
        dfs(row, col - 1)
        dfs(row + 1, col)
        dfs(row - 1, col)
    }

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            count++
            dfs(row, col)
        }
    }
    
    return count
}
