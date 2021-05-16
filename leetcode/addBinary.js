/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let first = null;
  let second = null;

  if (a.length < b.length) {
    first = a;
    second = b;
  } else {
    first = b;
    second = a;
  }

  let sum = "";
  let i = 0;
  let carry = 0;
  let findex = first.length - 1;
  let sindex = second.length - 1;
  let tempSum;

  while (i < first.length) {
    tempSum = carry + parseInt(first[findex]) + parseInt(second[sindex]);
    sum = `${parseInt(tempSum % 2)}${sum}`;
    carry = parseInt(tempSum / 2);
    i++;
    findex--;
    sindex--;
  }

  while (i < second.length) {
    tempSum = carry + parseInt(second[sindex]);
    sum = `${parseInt(tempSum % 2)}${sum}`;
    carry = parseInt(tempSum / 2);
    i++;
    sindex--;
  }

  return carry === 1 ? `1${sum}` : sum;
};
