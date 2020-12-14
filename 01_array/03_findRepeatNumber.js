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
// var findRepeatNumber = function (nums) {
//     const hash = new Set()
//     for (var i = 0; i < nums.length; i++) {
//         if (hash.has(nums[i])) {
//             return nums[i]
//         } else {
//             hash.add(nums[i])
//         }
//     }

//     return -1
// }

// 方法二 时间复杂度O(n)，空间复杂度O(1)
var findRepeatNumber = function (nums) {
    if (!nums || nums.length === 0) return false
    // 遍历数组中每个数组，当遍历到下标为i的数字时，首先比较这个数字m(下标为i对应的数组)是不是等于i
    // 如果等于i，则接着扫描下一个；如果不等于i，则再将i与第m个数字进行比较，如果i和第m个数字相等说明找到了一个重复的数组(该数字在下标为i和m的位置都出现了)；如果i和第m个数字不相等，把第i个数字和第m个数字交换。接着再重复这个比较。
    for (var i = 0; i < nums.length; i++) {
        while (nums[i] !== i) {
            if (nums[i] === nums[nums[i]]) {
                return nums[i]
            }
            var temp = nums[i]
            nums[i] = nums[temp]
            nums[temp] = temp
        }
    }

    return -1
}

var arr = [2, 3, 1, 0, 2, 5, 3]

console.log(findRepeatNumber(arr))