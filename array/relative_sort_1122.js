/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
   let notInArr2 = []
   let result = []
   for(let i = 0; i < arr2.length; i++) {
      for(let j = 0; j < arr1.length; j++) {
         if (arr1[j] === arr2[i]) {
            result.push(arr1[j])
         }
         else if (arr2.indexOf(arr1[j]) < 0 && i === 0) notInArr2.push(arr1[j])
      }
   }
   return result.concat(notInArr2.sort((a, b) => a - b))
};