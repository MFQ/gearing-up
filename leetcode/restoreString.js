/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  var result = "";
  for (var i = 0; i < indices.length; i++) {
    var tempIndex = indices.indexOf(i);
    result = result + s[tempIndex];
  }
  return result;
};
