function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value, this.head, null);
  if (this.head) this.head.prev = node;
  else this.tail = node;
  this.head = node;
}

LinkedList.prototype.addToTail = function(value) {
  let node = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = node;
  else this.head = node;
  this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return true;
    currentNode = currentNode.next;
  }
  return false;
}

LinkedList.prototype.indexOf = function(searchValue) {
  let index = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return index;
    index++
    currentNode = currentNode.next;
  }
  return false;
}
