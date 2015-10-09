var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    length += 1;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    if (length === 0) {
      return;
    }

    var result = storage[1]

    for (var k = 1; k < length; k++) {
      storage[k] = storage[k+1];
    }

    delete storage[length]
    length -= 1

    return result
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
