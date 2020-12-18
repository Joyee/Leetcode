var getNumberSameAsIndex = (nums) => {
  if (!nums || nums.length <= 0) return -1
  var l = 0, r = nums.length - 1
  while (l <= r) {
    var mid = Math.floor(l + (r - l) / 2)
    if (nums[mid] === mid) {
      return mid
    }
    if (nums[mid] > mid) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return -1
}

var nums = [-3, -1, 1, 3, 5]
console.log(getNumberSameAsIndex(nums))