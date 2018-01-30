function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  if (newNode.data < rootNode.data){
    if (rootNode.left){
      const currentNode = rootNode.left
      findOrAdd(currentNode, newNode)
    }
    else{
      rootNode.left = newNode
      return false
    }
  }
  else if (newNode.data > rootNode.data){
    if (rootNode.right){
      const currentNode = rootNode.right
      findOrAdd(currentNode, newNode)
    }
    else{
      rootNode.right = newNode
      return false
    }
  }
  return true
}

function min(rootNode){
  let minNode = rootNode
  if (rootNode.left){
    const currentNode = rootNode.left
    minNode = min(currentNode)
  }
  return minNode
}

function max(rootNode){
  let maxNode = rootNode
  if (rootNode.right){
    const currentNode = rootNode.right
    maxNode = max(currentNode)
  }
  return maxNode
  debugger
}
