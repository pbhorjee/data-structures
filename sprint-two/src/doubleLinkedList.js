var DoubleLinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new DLLNode(value);

    if (!list.head) {
      list.head = node;
    }
    if (list.tail) {
      list.tail.next = node;
      node.previous = list.tail;
    }

    list.tail = node;
  };

  list.removeHead = function() {
    var oldHead = list.head;

    list.head = oldHead.next;
    oldHead.previous = null;
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
    var newNode = new DLLNode(value);

    newNode.previous = thisNode;
    if (thisNode.next) {
      newNode.next = thisNode.next;
    }
    thisNode.next = newNode;
  };

  list.insertBefore = function(thisNode, value) {
    var newNode = new DLLNode(value);

    newNode.previous = thisNode;
    if (thisNode.next) {
      newNode.next = thisNode.next;
    }
    thisNode.next = newNode;

    return newNode;
  };

  return list;
};

var DLLNode = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
