/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const result = [first];
  let xor = first;
  encoded.forEach(i => {
    xor = i ^ xor;
    result.push(xor);
  });
  return result;
};
