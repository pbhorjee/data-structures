var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.length = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.length += 1;
  this.storage[this.length] = value;
};

queueMethods.dequeue = function(){
  if (this.length === 0) {
    return;
  }

  var result = this.storage[1]

  for (var k = 1; k < this.length; k++) {
    this.storage[k] = this.storage[k+1];
  }

  delete this.storage[this.length]
  this.length -= 1

  return result
};

queueMethods.size = function(){
  return this.length;
};