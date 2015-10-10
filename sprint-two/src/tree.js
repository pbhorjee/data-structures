var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
	var found = false;

	var find = function(children){
		if (found) {
			return;
		}
		
		for (var i = 0; i < children.length; i++) {
			if (children[i].value === target) {
				found = true;
				break;
			} else {
				if (children[i].children) {
					find(children[i].children);
				}
			}
		}
	}

	if (this.children) {
		find(this.children);
	}

	return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
