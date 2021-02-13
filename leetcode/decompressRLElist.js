/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  var result = [];
  var i = 0;
  while (i < nums.length) {
    for (var j = 0; j < nums[i]; j++) {
      result.push(nums[i + 1]);
    }
    i = i + 2;
  }
  return result;
};
