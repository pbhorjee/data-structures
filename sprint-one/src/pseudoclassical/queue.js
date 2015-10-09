var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

var queueMethods = {};

Queue.prototype.enqueue = function(value){
  this.length += 1;
  this.storage[this.length] = value;
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.length;
};



