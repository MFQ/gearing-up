const nextStep = s => {
  var result = "";
  var count = 0;
  var sArray = s.split("");
  var key = sArray[0];
  var i = 0;
  while (i < sArray.length) {
    if (sArray[i] === key) {
      count = count + 1;
      i = i + 1;
    } else {
      result = result + count + "" + key;
      count = 0;
      key = sArray[i];
    }
  }
  result = result + count + "" + key;

  return result;
};

var countAndSay = function(n) {
  var j = 0;
  var r = "1";
  while (j < n) {
    r = nextStep(r);
    j++;
  }
  return r;
};
