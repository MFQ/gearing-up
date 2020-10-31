/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const stack = [];
  for (var i = 0; i < s.length; i++) {
    if ("({[".includes(s[i])) {
      stack.push(s[i]);
    } else {
      var p = stack.pop() + s[i];
      if (p.includes(")") && p != "()") return false;
      else if (p.includes("}") && p != "{}") return false;
      else if (p.includes("]") && p != "[]") return false;
      else {
      }
    }
  }
  return stack.length === 0;
};
