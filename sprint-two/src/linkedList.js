var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new LLNode(value);

    if (!list.head) {
      list.head = node;
    }
    if (list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var oldHead = list.head;

    list.head = oldHead.next;
    delete list[oldHead.value];

    return oldHead.value;
  };

  list.contains = function(target) {
    thisNode = list.head;

    while (thisNode) {
      if (thisNode.value === target) {
        return true;
      }
      thisNode = thisNode.next;
    }

    return false;
  };

  list.getNodeByValue = function(target) {
    thisNode = list.head;

    while (thisNode) {
      if (thisNode.value === target) {
        return thisNode;
      }
      thisNode = thisNode.next;
    }
  };

  list.insertAfter = function(thisNode, value) {
    var newNode = new LLNode(value);

    if (thisNode.next) {
      newNode.next = thisNode.next;
    }
    thisNode.next = newNode;

    return newNode;
  };

  return list;
};

var LLNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
