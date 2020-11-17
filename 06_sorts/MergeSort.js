/**
 * 归并排序
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}

const mergeArr = (left, right) => {
    let temp = []
    let leftIndex = 0, rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            temp.push(left[leftIndex])
            leftIndex++
        } else {
            temp.push(right[rightIndex])
            rightIndex++
        }
    }

    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = mergeSort(testArr)
console.log(res)