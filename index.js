function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(root, newNode){
  if (newNode.data === root.data) {
    return true
  }
  else if (newNode.data < root.data) {
    return root.left ? findOrAdd(root.left, newNode) : root.left = newNode
  }
  else {
    return root.right ? findOrAdd(root.right, newNode) : root.right = newNode
  }
}

function max(node) {
  return node.right ? max(node.right) : node
}

function min(node) {
 return node.left ? min(node.left) : node
}
