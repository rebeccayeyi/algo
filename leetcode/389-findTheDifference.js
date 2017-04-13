var findTheDifference = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    let i = 0;
    while (s[i] === t[i]) {
        i++
    }
    return t[i]
};
