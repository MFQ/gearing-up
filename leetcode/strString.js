/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == haystack || needle == "") return 0;
  var i = 0;
  var foundIndexs = -1;
  var j = 0;
  while (i < haystack.length) {
    if (haystack[i] == needle[j]) {
      foundIndexs = i;
      while (j < needle.length) {
        if (haystack[i + j] != needle[j]) {
          foundIndexs = -1;
          j = 0;
          break;
        }
        j = j + 1;
      }
      if (foundIndexs !== -1) {
        return foundIndexs;
      }
    }
    i = i + 1;
  }
  return foundIndexs;
};
