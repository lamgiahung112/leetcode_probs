/**
 * @param {number[]} A
 * @return {number}
 */
let peakIndexInMountainArray = function(A) {
    for(let i = A.length-1; i >= 1; i--){
        let isPeak = true;
        for(let j = 0; j < i; j++){
            if (A[i] <= A[j]) isPeak = false;
        }
        if (isPeak == true) return i;
    }
}
