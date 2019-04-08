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
  if (newNode.data < rootNode.data) {
    if (rootNode.left) {
      findOrAdd(rootNode.left, newNode)
    } else {
      rootNode.left = newNode
    }
  } else if (newNode.data > rootNode.data) {
    if (rootNode.right) {
      findOrAdd(rootNode.right, newNode)
    } else {
      rootNode.right = newNode
    } 
  }
  return true
}

function max(node) {
  if (node.right) {
    return max(node.right)
  }
  return node
}

function min(node) {
  if (node.left !== null) {
    return min(node.left);
  } else {
  return node
  }
}