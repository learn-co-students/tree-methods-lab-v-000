function inOrder(currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right);
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode;

  if (newNode.data < rootNode.data) {
    currentNode = rootNode.left
    if (rootNode.left) {
      return findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right;
    if (currentNode) {
      return findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  } else if (newNode.data === rootNode.data) {
    return true;
  }
}

function max(node) {
  if (node.right == null) {
    return node.data;
  }

  return Math.max(max(node.right), node.data);
}

function min(node) {
  if (node.left == null) {
    return node.data;
  }

  return Math.min(min(node.left), node.data);
}