function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }

  if (currentNode.right) {
    inOrder(currentNode.right);
  }
  console.log(currentNode.data);
}

function insertHelper() {}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode;
  if (newNode.data < rootNode.data) {
    currentNode = rootNode.left;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right;
    if (currentNode) {
      findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  }
  return true;
}

function max(node) {
  let currentNode = node;
  if (node.right) {
    currentNode = node.right;
    return max(currentNode);
  } else {
    currentNode = node;
  }
  return currentNode;
}

function min(node) {
  let currentNode = node;
  if (node.left) {
    currentNode = node.left;
    return min(currentNode);
  } else {
    currentNode = node;
  }
  return node;
}
