/**
 * 顺时针打印矩阵
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix) return
  if (matrix.length <= 0) return matrix
  if (!matrix[0]) return matrix
  var rows = matrix.length, columns = matrix[0].length

  var start = 0, printArray = []
  while (columns > start * 2 && rows > start * 2) {
    var endX = columns - 1 - start, endY = rows - 1 - start
    // 从左到右打印一行
    for (let i = start; i <= endX; i++) {
      printArray.push(matrix[start][i])
    }
    // 从上到下打印一列
    if (start < endY) {
      for (let i = start + 1; i <= endY; i++) {
        printArray.push(matrix[i][endX])
      }
    }
    // 从右到左打印一行
    if (start < endX && start < endY) {
      for (let i = endX - 1; i >= start; i--) {
        printArray.push(matrix[endY][i])
      }
    }

    // 从下到上打印一列
    if (start < endY - 1 && start < endX) {
      for (let i = endY - 1; i >= start + 1; i--) {
        printArray.push(matrix[i][start])
      }
    }
    ++start
  }

  return printArray
};

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder([]))