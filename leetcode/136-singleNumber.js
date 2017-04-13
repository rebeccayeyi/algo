// not fast enough, but works
var singleNumber = function(nums) {
    let index = nums.find((e) => {return nums.indexOf(e) === nums.lastIndexOf(e)})
    return parseInt(index)
};

// accepted (fast) solution - using bitwise XOR operator
var singleNumber = function(nums) {
    return nums.reduce((a, b) => a^b)
};
