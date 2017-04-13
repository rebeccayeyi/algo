var hammingDistance = function(x, y) {
  let counter = 0;
  let longer;
  x = x.toString(2)
  y = y.toString(2)
  x.length > y.length ? longer = x.length : longer = y.length
  x = '0'.repeat(longer - x.length) + x
  y = '0'.repeat(longer - y.length) + y
  for (i = 0; i < longer; i++) {
    if (x[i] !== y[i]) {
      counter++
    }
  }
  return counter
};
