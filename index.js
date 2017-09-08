function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if (node.right) {
    inOrder(node.right)
  }
}

function findOrAdd(rootNode, nextNode) {
  let currentNode = rootNode
  if (nextNode.data < rootNode.data) {
    currentNode = rootNode.left
    if (currentNode) {
      findOrAdd(currentNode, nextNode)
    } else {
      rootNode.left = nextNode
    }
  } else if (nextNode.data > rootNode.data) {
    currentNode = rootNode.right
    if (currentNode) {
      findOrAdd(currentNode, nextNode)
    } else {
      rootNode.right = nextNode
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
  if (node.left) {
    return min(node.left)
  }
  return node
}
