/**
 * @param {number} x
 * @return {number}
 */

var removeTheTrailingZeros = (ar) => {
    ar.forEach( (v,i) => {
     if(v !== 0) {
         return i
     }
    })
}


var reverse = function(x) {

  var min = (-1) * (Math.pow(2, 31))
  var max = Math.pow(2, 31) - 1

  var str = (x + "").split("")
  var xArry = str.filter(i => i !== '-')
  xArry = xArry.reverse();

  if (str[0] == '-') {
      var n = (-1) * parseInt(xArry.join(''))
      if (min <  n) {
        return n
      } else {
          return 0
      }

  }

  var j = parseInt(xArry.join(''));
  if(j < max) {
      return j
  } else {
      return 0
  }
