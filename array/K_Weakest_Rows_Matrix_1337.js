// ones = soldiers
// zeros = civilians
let kWeakestRows = function(matrix, k) {
    return matrix
                .map((row,index) => [index, row.filter(n => n ===1).length]) // [index, soldier count]
                .sort(([i1,c1],[i2,c2]) => c1-c2 || i1-i2) // sort by soldier count first
                .map(([index]) => index)    // remove soldier count
                .slice(0,k);    // slice
};