let arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let result = 0;
    for(let i =0; i< nums.length; i+=2){
        result += Math.min(nums[i],nums[i+1]);
    }
    return result;
};