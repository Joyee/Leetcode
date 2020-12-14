// 方法三 二分查找思路 折半排序+遍历
// 0~n-1的数字从中间的数字m分成两部分，前面一半为0~m-1，后面一半为m~n
// 如果0～m-1的数字的数目超过m，那么这一半的区间肯定包含重复的数字；否则另一半m~n的区间里一定包含重复的数字。然后继续把包含重复数字的区间一分为二，直到找到一个重复的数字。
var findRepeatNumber = function (nums) {
    if (!nums || nums.length <= 0) return -1

    var start = 0, end = nums.length - 1

    if (start > end) return -1

    while (end >= start) {
        var middle = Math.floor((start + end) / 2)
        // var count = nums.reduce((last, val) => {
        //     return last + +(val >= start && val <= last)
        // }, 0)
        var count = countRange(nums, start, end)

        console.log(count)
        console.log(`end: ${end}, start: ${start}`)
        if (end === start) {
            // console.log(count)
            if (count > 1) {
                return start
            } else {
                break
            }
        }

        if (count > (middle - start + 1)) {
            end = middle
        } else {
            start = middle + 1
        }
    }

    return -1
}

function findDuplicate (arr) {
    // 边界检测
    if (!arr || arr.length === 0) {
        return false
    }
    function countRange (arr, start, end) {
        if (start > end) {
            return false
        } else if (start === end) {
            return start
        }
        const split = (start + end) / 2
        const count = arr.reduce((last, val) => {
            return last + +(val >= start && val <= split)
        }, 0)
        if (count > split - start + 1) {
            countRange(arr, start, split)
        } else {
            countRange(arr, split + 1, end)
        }
    }
    return countRange(arr, 0, arr.length)
}
var arr = [2, 3, 1, 0, 2, 5, 3]

console.log(findDuplicate(arr))