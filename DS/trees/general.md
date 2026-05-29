general info:

- internal nodes: nodes that have parent and children
- ancestors : node that leads to the root including root
- depth : how many nodes to the root counting root
- height : how many node to reach the last leave
- outdegree : how many branches from the node
- indegree : how many branhces the node from

binary tree every node has three values
[left, value, right]

// ------------ //
binary tree types:

- full :
  every node has 2 childs or 0 not 1

- complete :
  1- all levels is full except the last one
  2- all nodes as left as possible at last level

- perfect :
  1- every node has 2 children
  2- all leaves are in the same level

- balanced
  1- the height of the tree = o(log n)
  2- h(left sub-tree) - h(right sub-tree) <= 1 , on of those values [-1, 0, 1]

- Degenerate
  every node has just 1 child left or right , such trees are performance-wise
  like linked lists

// ------------- //

max number of nodes in level = 2 ** L
2 ** 0 = 1 , this is root ,then the 2 nodes from root ... etc

max number of nodes in tree = 2 \*\* (h+1) - 1
