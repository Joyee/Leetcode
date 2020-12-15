var findNumberIn2DArray = function (matrix, target) {
    if (!matrix || matrix.length <= 0 || !matrix[0]) return false
    var rows = matrix.length, cols = matrix[0].length
    var row = 0, col = cols - 1
    if (rows > 0 && cols > 0) {
        while (row < rows && col >= 0) {
            if (matrix[row][col] === target) {
                return true
            } else if (matrix[row][col] > target) {
                --col
            } else {
                ++row
            }
        }
    }

    return false
}

var arr = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]

console.log(findNumberIn2DArray(arr, 5))