/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  var sum = nums[0];
  var sumArray = [sum];
  for (var i = 1; i < nums.length; i++) {
    sum = sum + nums[i];
    sumArray.push(sum);
  }
  return sumArray;
};
