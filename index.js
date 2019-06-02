function inOrder (currentNode) {
  if(currentNode.left) {
    inOrder(currentNode.left)
  }

  console.log(currentNode.data)

  if(currentNode.right) {
    inOrder(currentNode.right)
  }
}

function findOrAdd (rootNode, newNode) {
  let currentNode = rootNode

  if (newNode.data < rootNode.data) {
    currentNode = rootNode.left

    if (currentNode) {
      return findOrAdd(currentNode, newNode)
    } else {
      return rootNode.left = newNode
    }

  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right

    if (currentNode) {
      return findOrAdd(currentNode, newNode)
    } else {
      return rootNode.right = newNode
    }

  } else if (currentNode.data === newNode.data) {
    return true
  }
}

function max (node) {
  let currentNode = node.right

  if (currentNode) {
    return max(currentNode)
  } else {
    return node
  }
}

function min (node) {
  let currentNode = node.left

  if (currentNode) {
    return min(currentNode)
  } else {
    return node
  }
}
