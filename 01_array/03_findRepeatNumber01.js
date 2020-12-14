/**
 * 数组中重复的数字
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重
 * 的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字
 * @param {number[]} nums
 * @returns {number}
 */

// 方法一 使用ES6内建的数据结构 空间复杂度O(n) 时间复杂度O(n)
var findRepeatNumber = function (nums) {
    const hash = new Set()
    for (var i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return nums[i]
        } else {
            hash.add(nums[i])
        }
    }

    return -1
}

var arr = [2, 3, 1, 0, 2, 5, 3]

console.log(findRepeatNumber(arr))