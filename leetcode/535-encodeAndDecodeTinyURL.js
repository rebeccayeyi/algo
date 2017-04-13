function HashTable() {
  this.table = {};
}

HashTable.prototype.hash = function(url) {
  let codeAt = 0;
  for (i = 0; i < url.length; i++) {
    codeAt += url[i].charCodeAt()
  }
  return codeAt % 7000000;
}

HashTable.prototype.insert = function(url) {
  let encoded = this.hash(url);
  this.table[encoded] = url;
  return encoded;
}

HashTable.prototype.get = function(code) {
  let decode = this.table[code];
  return decode;
}

var table = new HashTable();

var encode = function(longUrl) {
  return table.insert(longUrl)
};

var decode = function(shortUrl) {
  return table.get(shortUrl)
};
