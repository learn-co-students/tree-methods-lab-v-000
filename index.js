function inOrder(node) {
  if(node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right) {
    inOrder(node.right)
  }
}

function findOrAdd(rootNode, newNode){
  let currentNode = rootNode
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.left = newNode
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode){
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  }
  return true
}


function max(node) {
  if (node.right) {
    return max(node.right)
  } else {
    return node
  }
}

function min(node) {
  if (node.left) {
    return min(node.left)
  } else {
    return node
  }
}