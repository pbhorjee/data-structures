var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var nodeObj = this._storage.get(i) || {};

  nodeObj[k] = v;
  this._storage.set(i, nodeObj);
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(i)[k];
};

HashTable.prototype.remove = function(k) {
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
