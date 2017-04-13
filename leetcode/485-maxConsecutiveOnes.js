var findMaxConsecutiveOnes = function(nums) {
  if (!nums.includes(0)) {
    return nums.length
  }
  let i = 0;
  let count = 0;
  let secondCount = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      secondCount++
      secondCount > count ? count = secondCount : count = count
    }
    else {
      secondCount = 0
    }
    i++
  }
  return count
};
