var reverse = function(x) {
    let y = x.toString().split('').reverse().join('');
    if (parseInt(y) > 2147483647) return 0;
    return  x < 0 ? -Math.abs(parseInt(y)) : parseInt(y);
};
