function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd(currentNode, newNode) {
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      findOrAdd(currentNode.left, newNode)
    } else {
      currentNode.left = newNode;
    }
  } else if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      findOrAdd(currentNode.right, newNode)
  } else {
      currentNode.right = newNode;
    }
  }
  return true;
}

function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right)
  }
  return currentNode;
}

function min(currentNode) {
  if (currentNode.left) {
    return min(currentNode.left);
  }
  return currentNode;
}
