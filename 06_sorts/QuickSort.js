/**
 * 快速排序
 */
const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const partition = (arr, pivot, left, right) => {
    const pivotVal = arr[pivot] // 轴心点
    let startIndex = left // 存储指数
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, i, startIndex)
            startIndex++
        }
    }
    swap(arr, startIndex, pivot)
    return startIndex
}

const quickSort = (arr, left, right) => {
    if (left < right) {
        let pivot = right
        let partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
        quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
quickSort(testArr, 0, testArr.length - 1)
console.log('sort', testArr)