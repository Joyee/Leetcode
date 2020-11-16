/**
 * 第k大的数
 */
function kthNum (arr, k) {
    const len = arr.length
    if (k > len) {
        return -1
    }

    let p = partition(arr, 0, len - 1)
    while (p + 1 !== k) {
        if (p + 1 > k) {
            p = partition(arr, 0, p - 1)
        } else {
            p = partition(arr, p + 1, len - 1)
        }
    }
    console.log(arr)
    return arr[p]
}

function partition (arr, start, end) {
    let i = start
    let pivotVal = arr[end]
    for (let j = start; j < end; j++) {
        if (arr[j] < pivotVal) {
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, end)
    return i
}

function swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const testArr = []
let i = 0
while (i < 10) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}
console.log('unsort', testArr)
console.log(kthNum(testArr, 2))