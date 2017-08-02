const inOrder = node => {
  if(node.left) inOrder(node.left);
  console.log(node.data);
  if(node.right) inOrder(node.right);
}

const findOrAdd = (rootNode, node) => {
  if (rootNode.data == node.data) {
    return true;
  }
  if(node.data < rootNode.data){
      if(rootNode.left){
        return findOrAdd(rootNode.left, node)
      } else {
        return rootNode.left = node
      }
  } else if(node.data > rootNode.data) {
    if(rootNode.right){
      return findOrAdd(rootNode.right, node)
    } else {
      return rootNode.right = node
    }
  }
}

const max = node => {
  if (node.right) {
    return max(node.right);
  }
  return node;
}

const min = node => {
  if(node.left) {
    return min(node.left);
  }
  return node;
}