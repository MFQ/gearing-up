/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] == 9) {
    let i = digits.length - 1;
    let sum = digits[i] + 1;
    digits[i] = sum % 10;
    let carry = parseInt(sum / 10);
    i--;
    while (i > -1 && carry !== 0) {
      sum = digits[i] + carry;
      carry = parseInt(sum / 10);
      digits[i] = sum % 10;
      i--;
    }
    if (carry == 1) {
      return [1, ...digits];
    }
    return digits;
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
  }
  return digits;
};
