//recurses to the left most node, logs node, the center, then right
function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)

  if(currentNode.right){
    inOrder(currentNode.right)
  }
}


//If currentNode = newNode, return true. If newNode smaller than current, recurse to see if currentNode's left is equal to newNode or assign newNode to cN.left if null.  If nN > cN, same on right.
function findOrAdd(currentNode, newNode) {
  if(currentNode.data == newNode.data) {
    return true;
  }

  if(newNode.data < currentNode.data) {
    if(currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    } else {
      return currentNode.left = newNode;
    }
  }

  if(newNode.data > currentNode.data) {
    if(currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    } else {
      return currentNode.right = newNode;
    }
  }
}

//recurse to find right most node, then return
function max(node) {
  if(node.right) {
    return max(node.right);
  } else {
    return node;
  }
}

//recurse to find left most node, then return
function min(node) {
  if(node.left) {
    return min(node.left);
  } else {
    return node;
  }
}
