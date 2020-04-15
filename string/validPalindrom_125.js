let isPalindrome = ((s) => {
    const result = s.split('')
                    .filter(x => 
                        ('a' <= x && x <= 'z') || ('A' <= x && x <= 'Z') || ('0' <= x && x <= '9'))
                    .map(x => x.toLowerCase());
    return result.join('') === result.reverse().join('');
})