/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let steps = 0;
  let temNum = num;
  while (temNum !== 0) {
    temNum = temNum % 2 === 0 && temNum !== 0 ? temNum / 2 : temNum - 1;
    steps = steps + 1;
  }
  return steps;
};
