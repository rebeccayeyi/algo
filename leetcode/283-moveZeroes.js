var moveZeroes = function(nums) {
  let counter = 0;
  while (nums.includes(0)) {
    nums.splice(nums.indexOf(0), 1)
    counter++
  }
  while (counter > 0) {
    nums.push(0)
    counter--
  }
};
