var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(value) {
    this.storage[this.length] = value;
    this.length += 1;
  };

Stack.prototype.pop = function(){
  if(this.length){
   this.length -= 1;
  }
  return this.storage[this.length]
};

Stack.prototype.size = function(){
  return this.length;
};