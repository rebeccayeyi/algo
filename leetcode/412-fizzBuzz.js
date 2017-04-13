var fizzBuzz = function(n) {
  let msg = [];
  for (i = 1; i <= n; i++) {
    let f = i % 3 === 0;
    let b = i % 5 === 0;
    let fb = i % 15 === 0;
    if (fb) {
      msg.push('FizzBuzz')
    }
    else if (f) {
      msg.push('Fizz')
    }
    else if (b) {
      msg.push('Buzz')
    }
    else {
      msg.push(`${i}`)
    }
  }
  return msg
};
