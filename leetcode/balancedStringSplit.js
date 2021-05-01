var balancedStringSplit = function(s) {
  let r = 0;
  let i = 0;
  let c = 0;
  while (i < s.length) {
    r = r + (s[i] === "L" ? 1 : -1);
    if (r == 0) {
      c++;
    }
    i++;
  }
  return c;
};
