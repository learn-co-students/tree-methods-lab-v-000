function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }

  console.log(currentNode.data);

  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}

function findOrAdd(currentNode, newNode) {
  let nextNode;
  if (newNode.data < currentNode.data) {
    nextNode = currentNode.left;
    if (nextNode) {
      return findOrAdd(nextNode, newNode);
    } else {
      currentNode.left = newNode;
      return currentNode;
    }
  } else if (newNode.data > currentNode.data) {
    nextNode = currentNode.right;
    if (nextNode) {
      return findOrAdd(nextNode, newNode);
    } else {
      currentNode.right = newNode;
      return currentNode;
    }
  } else {
    return true;
  }
}

function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right)
  } else {
    return currentNode;
  }
}

function min(currentNode) {
  if (currentNode.left) {
    return max(currentNode.left)
  } else {
    return currentNode;
  }
}
