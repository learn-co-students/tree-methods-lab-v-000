function inOrder(node){
  if (node.left) {
    inOrder(node.left)
  } 
  console.log(node.data)
  if (node.right){
    inOrder(node.right)
  }
}

function findOrAdd(rootNode, node) {
  if ( node.data < rootNode.data) {
    if ( rootNode.left ) {
      findOrAdd(rootNode.left, node)
    } else {
      rootNode.left = node;
    }
  }
  if ( node.data > rootNode.data) {
    if ( rootNode.right ) {
      findOrAdd(rootNode.right, node)
    } else {
      rootNode.right = node;
    }
  }
  return true;
}

function max(node){
  if (!node.right) {
    return node;
  } else {
    return max(node.right);
  }
}

function min(node){
  if (!node.left) {
    return node;
  } else {
    return min(node.left);
  }
}