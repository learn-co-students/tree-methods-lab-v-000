function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode.data;
  if (newNode.data === currentNode) {
    return true
  } else if (newNode.data < currentNode) {
    if (!rootNode.left) {
      return rootNode.left = newNode
    } else {
      return findOrAdd(rootNode.left, newNode)
    }
  } else if (newNode.data > currentNode) {
    if (!rootNode.right) {
      return rootNode.right = newNode
    } else {
      return findOrAdd(rootNode.right, newNode)
    }
  }
}

function max(node) {
  if (node.right){
    return max(node.right)
  } else {
    return node
  }
}

function min(node) {
  if (node.left){
    return min(node.left)
  } else {
    return node
  }
}
