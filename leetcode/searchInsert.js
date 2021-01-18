/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) {
      return i;
    }
    i = i + 1;
  }
  return i;
};
