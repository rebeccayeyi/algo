var addDigits = function(num) {
  let total = helper(num);
  while (total >= 10) {
    total = helper(total)
  }
  return total
}

function helper(num) {
  return num.toString().split('').reduce((a, b) => {return parseInt(a) + parseInt(b)}, 0)
}
