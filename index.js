function inOrder(currentNode) {
  const { left, data, right } = currentNode;
  if (left) inOrder(left);
  console.log(data);
  if (right) inOrder(right);
}

function findOrAdd(rootNode, someNode) {
  if (someNode.data < rootNode.data) {
    if (rootNode.left) {
      findOrAdd(rootNode.left, someNode);
    } else {
      rootNode.left = someNode;
      return;
    }
  }

  if (someNode.data > rootNode.data) {
    if (rootNode.right) {
      findOrAdd(rootNode.right, someNode);
    } else {
      rootNode.right = someNode;
      return;
    }
  }

  return true;
}

function max(currentNode) {
  return currentNode.right ? max(currentNode.right) : currentNode;
}

function min(currentNode) {
  return currentNode.left ? min(currentNode.left) : currentNode;
}

