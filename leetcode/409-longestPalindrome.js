function createHash(s) {
  let hashed = {};
  for(i = 0; i < s.length; i++) {
    if (hashed[s[i]]) hashed[s[i]]++
    else hashed[s[i]] = 1
  }
  return hashed
}

var longestPalindrome = function(s) {
  let counter = 0;
  let oddOneOut = 0;
  let hashed = createHash(s);
  Object.keys(hashed).filter((k) => {
    if (hashed[k] % 2 === 0) counter += hashed[k]
    else {
        counter += hashed[k] - 1
        oddOneOut = 1
    }
  })
  return counter + oddOneOut
};
