// prime number?
function isPrime(n) {
  if(n < 0 || n === 1 || n !== 2 && n % 2 === 0) {
    return false
  }
  let i = 3
  while (i < n/2){
    if (n % i === 0){
      return false
    }
    i+=2
  }
  return true
}

// all prime factors
function allPrime(n) {
  let factors = [];
  let primes = [];
  let i = 2
  while (n > 2) {
    if (n % i === 0) {
      factors.push(i)
      n = n/i
    }
    i++
  }
  for (i = 0; i < factors.length; i++){
    // uses the isPrime function
    if (isPrime(factors[i])) {
      primes.push(factors[i])
    }
  }
  return primes
}

// fibonacci
function fibo(n) {
  let seq = [1, 1];
  if (n <= 2){
    return 1
  }
  for (i = 2; i < n; i++) {
    seq.push(seq[i-1] + seq[i-2])
  }
  return seq.pop()
}
// recursive fibonacci
function fibo(n) {
  if (n < 2) return 1;
  else {
    return fibo(n-2) + fibo(n-1);
  }
}

// greatest common divisor
function greatestCommonDivisor(x,y) {
  let divisor;
  x < y ? divisor = x : divisor = y
  while (divisor > 0) {
    if (x % divisor === 0 && y % divisor === 0) {
      return divisor
    }
    divisor--
  }
}

// remove duplicates in an array
function removeDupes(array) {
  let originals = [];
  for (i = 0; i < array.length; i++) {
    if (!originals.includes(array[i])) {
      originals.push(array[i])
    }
  }
  return originals
}

// merge arrays
function mergeArray(one, two) {
  if (one.length === 0) {
    return two
  }
  if (two.length === 0) {
    return one
  }
  let merged = [];
  while (one.length > 0 || two.length > 0) {
    if (one[0] < two[0]) {
      merged.push(one.shift())
    }
    else {
      merged.push(two.shift())
    }
  }
  return merged.concat(one).concat(two)
}

// switch without temp
function temp(a, b) {
  console.log('before: ', a, b)
  b = b - a
  a = a + b
  b = a - b
  console.log('after: ', a, b)
}

// reverse string
function reverseString(s) {
  let reversed = '';
  for (i = s.length-1; i >= 0; i--) {
    reversed += s[i]
  }
  return reversed
}
// with built in methods
function reverseString(s) {
  return s.split('').reverse().join('')
}

// reverse words
function reverseWords(sentence) {
  return sentence.match(/\S+/g).reverse().join(' ')
}
// or
function reverseWords(str){
  return str.split(' ').reverse();
}

// reverse in place
function reverseInPlace(sentence) {
  let words = '';
  sentence.match(/\S+/g).forEach(function(word){
    let i = word.length-1
    while (i >= 0){
      words += word[i]
      i--
    }
    words += ' '
  })
  return words
}
// without using regex
function reverseInPlace(s) {
  let reversed = ''
  s = s.split(' ')
  s.forEach((word) => {
    reversed += word.split('').reverse().join('')
    reversed += ' '
  })
  return reversed.substr(0, reversed.length-1)
}

// clock angle
function clockAngle(h, m) {
  if (h < 0 || h > 12 || m < 0 || m >= 60) {
    throw new Error ('invalid time')
  }
  if (h === 12) {
    h = 0;
  }
  // 360 degrees / 60 min = 6 degrees per min
  let minute = m*6;
  // in relation to min
  // 360 degrees / 12 hours = 30 degrees per hour
  // 30 degrees / 60 min = .5 degrees per min
  let hour = (h*60 + m)*0.5;
  return Math.abs(hour - minute)
}

// encode
function encode(input) {
  let output = '';
  let counter = 1;
  for (i = 0; i < input.length; i++) {
    if (input[i - 1] !== input[i] && input[i] !== input[i + 1]) {
      output += input[i]
    }
    else if (input[i] === input[i + 1]) {
      counter++
    }
    else {
      output += counter + input[i]
      counter = 1
    }
  }
  return output
}

// missing number in an unsorted array of range (1..x)
function missingNum(arr) {
  let i = 0;
  arr = arr.sort((a, b) => {return a-b})
  while(arr[i] + 1 === arr[i + 1]) {
    i++
  }
  return arr[i] + 1
}

// largest sum
function largestSum(arr) {
  arr.sort(function(a, b) {
    return a - b
  })
  return arr[arr.length - 1] + arr[arr.length - 2]
}

// no duplicates
function noDupes(s) {
  let duped = s.split('').filter((letter) => s.indexOf(letter) === s.lastIndexOf(letter))
  return duped.join('')
}

// first non repeat char
function firstNonChar(s) {
  return s.split('').find((letter) => {
    return s.indexOf(letter) === s.lastIndexOf(letter)
  })
}

// Length of the largest subarray with contiguous elements
function largestCont(arr) {
  let combos = [];
  let counter = 1;
  let i = 0;
  arr = arr.sort((a, b) => {return a - b})
  while (i < arr.length) {
    if (arr[i] + 1 === arr[i + 1]) {
      counter++
    }
    else {
      combos.push(counter)
      counter = 1
    }
    i++
  }
  return Math.max.apply(null, combos)
}

// longest palindrome
function isPalindrome(s) {
  return s === s.split('').reverse().join('')
}

function longestPalindrome(s) {
  let palin = ''
  if(isPalindrome(s)) {
    return s
  }
  for(i = 0; i < s.length; i++) {
    let sub = s.substr(i, s.length)
    for(j = sub.length - 1; j >=0; j--) {
      let secondSub = sub.substr(0, j)
      if(isPalindrome(secondSub) && palin.length < secondSub.length) {
        palin = secondSub
      }
    }
  }
  return palin
}

// max diff (index of higher number must be higher)
function maxDiff(arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  if (arr.indexOf(max) > arr.indexOf(min)) {
    return max - min
  }
  if (arr.indexOf(max) === 0) {
    arr.splice(0, 1)
    max = Math.max.apply(null, arr)
  }
  for (i = 0; i < arr.indexOf(max); i++) {
    let diff = 0;
    if (max - arr[i] > diff) {
      diff = max - arr[i]
    }
    return diff
  }
}

function palindrome(s) {
  let max = ''
  for (i = 0; i < s.length; i++) {
    let sub = s.substr(i, s.length)
    for (j = sub.length-1; j >= 0; j--) {
      let secondSub = sub.substr(0, j)
      if (isPalindrome(secondSub) && secondSub.length > max.length) {
        max = secondSub
      }
    }
  }
  return max
}

function isPalindrome(s) {
  return s === s.split('').reverse().join('')
}

function maxDiff(arr) {
  let max = Math.max.apply(null, arr)
  if (arr.indexOf(max) === 0) {
    arr.splice(0, 1)
    max = Math.max.apply(null, arr)
  }
  for (i = 0; i < arr.indexOf(max); i++) {
    let diff = 0;
    if (max - arr[i] > diff) {
      diff = max - arr[i]
    }
    return diff
  }
}

function largestSubstring(s) {
  let max = ''
  let sub = ''
  for (i = 0; i < s.length; i++) {
    if (sub.includes(s[i])) {
      if (sub.length > max.length) {

      }
      sub = ''
      // max = sub
    }
    sub += s[i]
  }
  return max
}


// Given an array of numbers arr and a number S, find 4 different numbers in arr that sum up to S. Write a function that gets arr and S and returns an array with 4 indices of such numbers in arr, or null if no such combination exists.
// function sumOfFour(arr, s) {
//
// }
