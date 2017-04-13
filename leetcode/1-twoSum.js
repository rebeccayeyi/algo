var twoSum = function(arr, target) {
  let combos = {};
  let difference = 0;
  for (i = 0; i < arr.length; i++) {
    difference = target - arr[i]
    if (difference in combos) {
      return [combos[difference], i]
    }
    combos[arr[i]] = i
  }
}

// using a while loop
function twoSum(arr, target) {
  let combos = {};
  let diff;
  let i = 0;
  while (i < arr.length) {
    diff = target - arr[i]
    if (diff in combos) {
      return [combos[diff], i]
    }
    combos[arr[i]] = i
    i++
  }
}
