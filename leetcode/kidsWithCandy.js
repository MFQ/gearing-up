/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  var max = candies[0];
  for (var i = 1; i < candies.length; i++) {
    if (max < candies[i]) {
      max = candies[i];
    }
  }

  const output = [];
  candies.forEach(candy => output.push(max <= candy + extraCandies));
  return output;
};
