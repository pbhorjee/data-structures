var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
	this.children.push(newTree);
};

treeMethods.contains = function(target, children) {
  children = children || this.children;

  return _.any(children, function(child) {
      if (child.value === target) {
        return true;
      } else if (child.children) {
        return treeMethods.contains(target, child.children);
      }
  });
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    this.parent.children = _.without(this.parent.children, this);
  }
  this.parent = null;

  return this;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
