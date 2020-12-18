/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, k) {
  var l = 0, r = nums.length - 1
  while (l <= r) {
    var mid = Math.floor((l + (r - l) / 2))
    if (nums[mid] === k) {
      return mid
    } else if (nums[mid] < k) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return -1
}

var search = function (nums, k) {
  if (!nums || nums.length <= 0) return 0
  var firstK = findK(nums, k, true)
  var lastK = findK(nums, k, false)
  if (firstK != -1 && lastK != -1) return lastK - firstK + 1
  return 0
}

var findK = function (nums, k, isFisrt) {
  var l = 0, r = nums.length - 1
  while (l <= r) {
    var mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] === k) {
      if (isFisrt) {
        if (mid > 0 && nums[mid - 1] === k) {
          r = mid - 1
        } else {
          return mid
        }
      } else {
        if (mid < nums.length - 1 && nums[mid + 1] === k) {
          l = mid + 1
        } else {
          return mid
        }
      }
    } else if (nums[mid] > k) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}

var nums = [2, 2], target = 2
console.log(search(nums, target))