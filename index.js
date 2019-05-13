let inOrder = (currentNode) => {
  if(currentNode.left) {
    inOrder(currentNode.left)
  }

  console.log(currentNode.data)

  if(currentNode.right) {
    inOrder(currentNode.right)
  }
}

let findOrAdd = (rootNode, newNode) => {
  if (newNode.data == rootNode.data) {
    return true
  }

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
}

let max = (node) => {
  if (node.right) {
    max(node.right)
  } else {
    return node
  }
}

let min = (node) => {
  if (node.left) {
    min(node.left)
  } else {
    return node
  }
}
