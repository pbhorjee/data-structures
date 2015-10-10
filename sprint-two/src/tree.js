var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;

	this.children.push(Tree(value));
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
