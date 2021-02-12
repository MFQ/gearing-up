/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = "";
  for (var i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      result = result + "G";
    } else if (command[i] === "(" && command[i + 1] === ")") {
      result = result + "o";
      i = i + 1;
    } else {
      result = result + "al";
      i = i + 3;
    }
  }
  return result;
};
