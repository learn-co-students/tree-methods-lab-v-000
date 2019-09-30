function inOrder(currentNode) {
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(tree, newNode) {
  if (tree.data === newNode.data) {
    return true
  }
  if (newNode.data < tree.data) {
    if (tree.left) {
      return findOrAdd(tree.left, newNode)
    } else {
      tree.left = newNode
    }
  }
  if (newNode.data > tree.data) {
    if (tree.right) {
      return findOrAdd(tree.right, newNode)
    } else {
      tree.right = newNode
    }
  }
}

function max(node) {
  return node.right ? max(node.right) : node
}

function min(node) {
  return node.left ? min(node.left) : node
}
