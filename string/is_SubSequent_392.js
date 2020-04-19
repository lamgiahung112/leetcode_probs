/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    let tPointer = 0;
    while(s.length>sPointer && t.length>tPointer){
        if (s[sPointer] === t[tPointer]){
            sPointer++;
            tPointer++;
        }
        else tPointer++;
    }
    return sPointer === s.length
}
console.log(isSubsequence("","abc"))