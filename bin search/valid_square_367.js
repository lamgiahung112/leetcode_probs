/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   let start = 1
   let end = Math.ceil(num/2)

   while (start <= end) {
      let mid = Math.floor((start+end)/2)
      if (mid*mid > num)
         end = mid - 1
      else if (mid*mid < num)
         start = mid + 1
      else return true
   }
   return false
};