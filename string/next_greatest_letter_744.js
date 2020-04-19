/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
let nextGreatestLetter = function(letters, target) {
   for (let letter of letters){
      if (letter.charCodeAt(0) > target.charCodeAt(0))
      return letter
   }
   return letters[0];
};
console.log(nextGreatestLetter(["c", "f", "j"],"a"))