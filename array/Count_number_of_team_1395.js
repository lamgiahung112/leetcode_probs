let numTeams = function(ratings) {
    let count = 0;
    for (let i = 0; i + 2 < rating.length; i++) {
        for (let j = i + 1; j + 1 < rating.length; j++) {
            for (let k = j + 1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]) count++;
                if (rating[i] > rating[j] && rating[j] > rating[k]) count++;
            }
        }
    }
    return count;
};
console.log(numTeams([3,6,7,5,1]));