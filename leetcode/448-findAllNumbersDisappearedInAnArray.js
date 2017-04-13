function HashTable(value) {
    this.table = Array(value);
}

HashTable.prototype.insert = function(value) {
    this.table[value] = value;
    return value;
}

HashTable.prototype.findMissing = function() {
    let missing = [];
    for (i = 1; i < this.table.length; i++) {
        if (!this.table[i]) missing.push(i);
    }
    return missing;
}

var findDisappearedNumbers = function(nums) {
    if (!nums.length) return [];
    let size = 0;
    let max = Math.max.apply(null, nums)
    max  > nums.length ? size = max : size = nums.length
    let table = new HashTable(size + 1);
    for (i = 0; i < nums.length; i++) {
      table.insert(nums[i])
    }
    return table.findMissing();
};

// for any array of numbers(not starting from 1)
function HashTable(size, min, max) {
    this.table = Array(size);
    this.min = min;
    this.max = max;
}

HashTable.prototype.insert = function(value) {
    this.table[value] = value;
    return value;
}

HashTable.prototype.findMissing = function() {
    let missing = [];
    for (i = this.min; i < this.max; i++) {
        if (!this.table[i]) missing.push(i);
    }
    return missing;
}

var findDisappearedNumbers = function(nums) {
    if (!nums.length) return [];
    let size = 0;
    let max = Math.max.apply(null, nums)
    let min = Math.min.apply(null, nums)
    max  > nums.length ? size = max : size = nums.length
    let table = new HashTable(size + 1, min, max);
    for (i = 0; i < nums.length; i++) {
      table.insert(nums[i])
    }
    return table.findMissing();
};
