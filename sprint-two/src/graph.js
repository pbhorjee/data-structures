

// ###Graph Solution

// Instantiate a new graph
var Graph = function() {
	this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var node = new Node(node);

	this.nodes[node.value] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.nodes[node] !== undefined;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return typeof this.nodes[fromNode].nodeEdges[toNode] === 'object';
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.nodes[toNode].nodeEdges[fromNode] = this.nodes[fromNode];
	this.nodes[fromNode].nodeEdges[toNode] = this.nodes[toNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[toNode].nodeEdges[fromNode];
  delete this.nodes[fromNode].nodeEdges[toNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this.nodes) {
    cb(this.nodes[k].value);
  }
}

var Node = function(value) {
	this.value = value;
  this.nodeEdges = {};
  this.nodesEdgedToMe = {};
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



