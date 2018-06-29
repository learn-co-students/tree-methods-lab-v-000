function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }

  console.log(currentNode.data)

  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}

function findOrAdd(rootNode, node) {
  let currentNode;

  // if node's data is greater than root node's data, look to right
  if (node.data > rootNode.data) {

    currentNode = rootNode.right;

    // no node there
    if (!currentNode) {
      rootNode.right = node;
    }
    // node with data is already present
    else if (node.data === currentNode.data) {
      return true;
    }
    // node is there with data that is different than new node's
    else {
      return findOrAdd(currentNode, node);
    }

  // if node's data is smaller than root node's data, look to left
  } else if (node.data < rootNode.data) {
    currentNode = rootNode.left;

    if (!currentNode) {
      rootNode.left = node;
      return;
    }
    // node with data is already present
    else if (node.data === currentNode.data) {
      return true;
    }
    // node is there with data that is different than new node's
    else {
      return findOrAdd(currentNode, node);
    }
  }

  return false;
}

function max(tree) {

  // if there are no children
  if (!tree.left && !tree.right) {
    return tree;
  }
  else {
    return max(tree.right);
  }
}

function min(tree) {
  // if there are no children
  if (!tree.left && !tree.right) {
    return tree;
  }
  else {
    return min(tree.left);
  }
}
