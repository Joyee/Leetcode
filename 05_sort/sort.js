/**
 * 冒泡、插入、选择排序
 */
// 冒泡排序
const bubbleSort = (arr) => {
    const n = arr.length
    if (n <= 1) return

    for (let i = 0; i < n; i++) {
        let hasChange = false
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                hasChange = true
            }
        }
        // 所有元素已经到位
        if (!hasChange) break
    }
    console.log(arr)
}

// 插入排序
const insertionSort = (arr) => {
    if (arr.length <= 1) return

    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
            } else {
                break
            }
        }
        arr[j + 1] = temp
    }
    console.log(arr)
}

// 选择排序
const selectionSort = (arr) => {
    if (arr.length <= 1) return
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log(arr)
}

const test = [4, 5, 6, 3, 2, 1]
bubbleSort(test)
const testSort = [4, 1, 6, 3, 2, 1]
insertionSort(testSort)
const testSelect = [4, 8, 6, 3, 2, 1, 0, 12]
selectionSort(testSelect)