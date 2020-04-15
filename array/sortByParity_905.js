var sortArrayByParity = function(A) {
    let div = A.filter((x) => x%2==0);
    let nondiv = A.filter((x) => x%2!=0);
    return div.concat(nondiv);
};