var findComplement = function(num) {
  let com = ''
  num = num.toString(2)
  for (i = 0; i < num.length; i++) {
    num[i] === '0' ? com += '1' : com += '0'
  }
  return parseInt(com, 2)
};
