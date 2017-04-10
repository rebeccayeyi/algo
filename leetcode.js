// 1. two sum
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

// 7. reverse integer
var reverse = function(x) {
    let y = x.toString().split('').reverse().join('');
    if (parseInt(y) > 2147483647) return 0;
    return  x < 0 ? -Math.abs(parseInt(y)) : parseInt(y);
};

// 9. palindrome number
var isPalindrome = function(x) {
    let y = x.toString();
    let reversed = y.split('').reverse().join('');
    let i = 0;
    while(i < y.length) {
        if (y[i] !== reversed[i]) return false;
        i++
    }
    return true;
};

// 461. hamming distance
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

// 412. FizzBuzz
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

// 476. number complement
var findComplement = function(num) {
  let com = ''
  num = num.toString(2)
  for (i = 0; i < num.length; i++) {
    num[i] === '0' ? com += '1' : com += '0'
  }
  return parseInt(com, 2)
};

// 344. reverse string
var reverseString = function(s) {
    return s.split('').reverse().join('')
};

// 292. nim game
var canWinNim = function(n) {
    return (n % 4 !== 0)
};

// 136. single number (not fast enough, but works)
var singleNumber = function(nums) {
    let index = nums.find((e) => {return nums.indexOf(e) === nums.lastIndexOf(e)})
    return parseInt(index)
};
// accepted (fast) solution - using bitwise XOR operator
var singleNumber = function(nums) {
    return nums.reduce((a, b) => a^b)
};

// 389. find the difference
var findTheDifference = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    let i = 0;
    while (s[i] === t[i]) {
        i++
    }
    return t[i]
};

// 258. add digits
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

// 283. move zeroes
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

// 485. Max Consecutive Ones
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

// 520. detect capital
var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;
    let sub = word.substr(1, word.length-1);
    if (word[0] === word[0].toUpperCase() && sub === sub.toLowerCase()) return true;
    return false;
};
