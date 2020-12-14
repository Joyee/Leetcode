// 方法二 时间复杂度O(n)，空间复杂度O(1)
// 遍历数组中每个数组，当遍历到下标为i的数字时，首先比较这个数字m(下标为i对应的数组)是不是等于i
// 如果等于i，则接着扫描下一个；如果不等于i，则再将i与第m个数字进行比较，如果i和第m个数字相等说明找到了一个重复的数组(该数字在下标为i和m的位置都出现了)；如果i和第m个数字不相等，把第i个数字和第m个数字交换。接着再重复这个比较。
var findRepeatNumber = function (nums) {
    if (!nums || nums.length <= 0) return -1

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