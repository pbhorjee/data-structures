var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);

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

    do {
      if (thisNode.value === target) {
        return true;
      }

      thisNode = thisNode.next;
    } while (thisNode === list.tail)

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
