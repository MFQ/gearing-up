/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  var product = 1;
  var sum = 0;
  while (n >= 1) {
    product = product * (n % 10);
    sum = sum + (n % 10);
    n = parseInt(n / 10);
  }
  return product - sum;
};
