/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  return nums.map(i => {
    var lessers = 0;
    nums.forEach(n => (lessers = lessers + (i == n || i < n ? 0 : 1)));
    return lessers;
  });
};
