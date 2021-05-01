/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (s === " ") return 0;
  const options = s.split(" ").filter(f => f !== "");
  return options.length === 0 ? 0 : options[options.length - 1].length;
};
