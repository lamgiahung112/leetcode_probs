let findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for (let i = 0; i< arr1.length; i++){
        count++;
        for(let j = 0; j < arr2.length; j++){
            if (Math.abs(arr1[i]-arr2[j]) <= d){
                count--;
                break;
            }
        }
    }
    return count;
};
console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2));