/**
 * 冒泡排序
 * 冒泡排序只会操作相邻两个数据
 */
const bubbleSort = (arr) => {
  if (arr.length <= 0) return
  for (let i = 0; i < arr.length; i++) {
    // 提前退出冒泡循环的标志位
    let hasChange = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        hasChange = true
      }
    }
    // 如果false 说明所有元素都已到位
    if (!hasChange) break
  }
  console.log('排序后:', arr)
}

/**
 * 插入排序
 */
const insertionSort = (arr) => {
  if (arr.length <= 0) return
  // 分为两组: 左边已排序 右边未排序
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    // 查找插入的位置
    for (j; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j] // 数据移动
      } else {
        break
      }
    }
    arr[j + 1] = temp // 插入数据
  }
  console.log('插入排序后:', arr)
}

/**
 * 选择排序
 * 实现思路类似插入排序，分为已排序和未排序区间
 * 但是选择排序每次会从未排序区间中找到最小的元素 将其放到已排序区间的末尾
 */
const selectionSort = (arr) => {
  if (arr.length <= 0) return

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

  console.log('选择排序:', arr)
}

const testSort = [4, 1, 6, 3, 2, 1]
selectionSort(testSort)