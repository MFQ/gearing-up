/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxSubArray = function(nums) {
  var maxCS = (maxGS = nums[0]);
  for (var i = 1; i < nums.length; i++) {
    var tempSum = maxCS + nums[i];
    maxCS = tempSum < nums[i] ? nums[i] : tempSum;
    if (maxGS < maxCS) {
      maxGS = maxCS;
    }
  }
  return maxGS;
};
