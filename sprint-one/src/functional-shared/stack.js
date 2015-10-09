var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {}; 
  someInstance.length = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
    this.storage[this.length] = value;
    this.length += 1;
  };

stackMethods.pop = function(){
  if(this.length){
   this.length -= 1;
  }
  return this.storage[this.length]
};

stackMethods.size = function(){
  return this.length;
};