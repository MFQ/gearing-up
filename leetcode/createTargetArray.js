* @param {number[]} nums
* @param {number[]} index
* @return {number[]}
*/
var createTargetArray = function(nums, index) {
   const visited = {}
   let result = []
   index.forEach(item => {
       var key = `key--${nums[item]}--${item}`
       if(visited[key]) {
            for(var k=item; k<nums.length; k++){
                key = `key--${nums[k]}--${k}`
                if (!visited[key]) {
                    visited[key] = true;
                    result = insertAt(result, item, nums[k])
                    break;
                }
            }
       } else {
           visited[key] = true;
           result = insertAt(result, item, nums[item])
       }
       console.log(result)
   });
   return result;
};

var insertAt = function(array, index, value) {
   if (index === 0) {
       return [value].concat(array);
   } else if(index === (array.length)) {
       return [...array, value];
   } else if( index > 0 && index < array.length) {
       let remaining = array.splice(index);
       return [...array, value, ...remaining]
   } else {
       return array;
   }
}
