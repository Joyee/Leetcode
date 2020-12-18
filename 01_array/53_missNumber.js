var missingNumber = function (nums) {
  if (!nums || nums.length <= 0) return -1
  var l = 0, r = nums.length - 1
  while (l <= r) {
    var mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] !== mid) {
      if (mid === 0 || nums[mid - 1] === mid - 1) {
        return mid
      } else {
        r = mid - 1
      }
    } else {
      l = mid + 1
    }
  }

  if (l === nums.length) {
    return nums.length
  }

  return -1
}

var nums = [0, 1, 2]

console.log(missingNumber(nums))