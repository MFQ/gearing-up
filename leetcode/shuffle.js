/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  const shuffleArray = [];
  for (var i = 0; i < n; i++) {
    shuffleArray.push(nums[i]);
    shuffleArray.push(nums[n + i]);
  }
  return shuffleArray;
};
