/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var repeacting = "";
  if (strs[0] && strs.length > 1) {
    var i = 0;
    while (i < strs[0].length) {
      var flag = false;
      for (var j = 1; j < strs.length; j++) {
        if (strs[0][i] === strs[j][i]) {
          flag = true;
        } else {
          flag = false;
          break;
        }
      }
      if (flag) {
        repeacting = repeacting + strs[0][i];
      } else {
        return repeacting;
      }
      i = i + 1;
    }
    return repeacting;
  } else {
    if (strs.length === 1) {
      return strs[0];
    } else {
      return repeacting;
    }
  }
};
