
var BinarySearchTree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  newTree.insert = binarySearchTreeMethods.insert;
  newTree.contains = binarySearchTreeMethods.contains;
  newTree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;

  return newTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);

  var traverseDown = function(node) {
    if (node.value > value) {
      if (node.left) {
        traverseDown(node.left);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        traverseDown(node.right);
      } else {
        node.right = newNode;
      }
    }
  };

  traverseDown(this);
};

binarySearchTreeMethods.contains = function(value) {
  var found = false;

  var traverseDown = function(node) {
    if (node.value > value) {
      if (node.left) {
        traverseDown(node.left);
      } 
    } else if (node.value < value) {
      if (node.right) {
        traverseDown(node.right);
      } 
    } else if (node.value === value) {
      found = true;
    }
  };

  traverseDown(this);

  return found;
};

binarySearchTreeMethods.depthFirstLog = function(func) { 
 var traverseDown = function(node) {
    node.value = func(node.value);

    if (node.left) {
      traverseDown(node.left);
    } 
    if (node.right) {
      traverseDown(node.right);
    } 
  };

  traverseDown(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

