function twoSum(arr, target) {
  let combos = {};
  let i = 0;
  while(i < arr.length) {
    let diff = target - arr[i];
    if (diff in combos) return [combos[diff], i];
    combos[diff] = i;
    i++
  }
}
