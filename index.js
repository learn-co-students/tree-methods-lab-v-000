function inOrder(node) {
  if (node.left) {
      inOrder(node.left)
  }

  console.log(node.data)

  if (node.right) {
    inOrder(node.right)
  }
}


function findOrAdd(rootNode, node) {
  if (node.data < rootNode.data) {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, node)
    }
    else {
      rootNode.left = node
    }
  }

  else if (node.data > rootNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, node)
    }
    else {
      rootNode.right = node
    }
  }

  else {
    return true
  }
}


function max(currentNode) {
  if (currentNode.right) {
    debugger
    currentNode = currentNode.right
    return max(currentNode)
  }
  else {
    return currentNode
  }
}

function min(currentNode) {
  if (currentNode.left) {
    currentNode = currentNode.left
    return min(currentNode)
  }
  else {
    return currentNode
  }
}
