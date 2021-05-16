/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n >= 0 && n <= 2) return n;
  let oneStep = 2;
  let twoStep = 1;
  let allway = 0;
  for (var i = 2; i < n; i++) {
    allway = oneStep + twoStep;
    twoStep = oneStep;
    oneStep = allway;
  }
  return allway;
};
