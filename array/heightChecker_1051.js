let heightChecker = function(heights) {
    let unsorted = Array.from(heights);
    heights.sort((a,b) => a-b);
    let count = 0;
    for (let i = 0; i < heights.length; i++){
        if (heights[i] != unsorted[i]) count++;
    }
    return count;
};
