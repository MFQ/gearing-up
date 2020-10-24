// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.
//
//
//
// Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
//
// Constraints:
//
// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      var sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// OPTIMIZE: Solution from leet code

var twoSumOptimze = function(nums, target) {
  const length = nums.length;
  const cacheNumbToIndex = {};
  let index;

  for (index = 0; index < length; index++) {
    const gotNum = nums[index];
    const wantedNum = target - gotNum;

    if (cacheNumbToIndex[wantedNum] !== undefined) {
      return [index, cacheNumbToIndex[wantedNum]].sort();
    }

    cacheNumbToIndex[gotNum] = index;
  }
};
