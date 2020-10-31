/**
 * @param {string} s
 * @return {number}
 */

var rooman = {
  I: 1,
  V: 5,
  IV: 4,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

var romanToInt = function(s) {
  var sum = 0;
  var i = 0;
  while (i < s.length) {
    var s1 = s[i];
    var s2 = s[i + 1];

    if (s1 && s2 && rooman[s1 + s2]) {
      sum = sum + rooman[s1 + s2];
      i = i + 2;
    } else if (s1 && rooman[s1]) {
      sum = sum + rooman[s1];
      i = i + 1;
    } else {
    }
  }
  return sum;
};
