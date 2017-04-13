function createHash(words) {
  let hash = {};
  for (i = 0; i < words.length; i++) {
    if (hash[words[i]]) hash[words[i]]++
    else hash[words[i]] = 1
  }
  return hash;
}

var canConstruct = function(ransomNote, magazine) {
  if (!ransomNote || ransomNote === magazine) return true;
  let r = createHash(ransomNote);
  let m = createHash(magazine);
  let count = Object.keys(r).filter((k) => {
    return r[k] <= m[k]
  })
  return Object.keys(r).length === count.length ? true : false
};
