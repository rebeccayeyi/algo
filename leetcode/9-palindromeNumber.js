var isPalindrome = function(x) {
    let y = x.toString();
    let reversed = y.split('').reverse().join('');
    let i = 0;
    while(i < y.length) {
        if (y[i] !== reversed[i]) return false;
        i++
    }
    return true;
};
