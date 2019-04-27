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
  let currentNode = rootNode
  if(rootNode.data === newNode.data){
    return true
  }
  if(newNode.data<rootNode.data){
    currentNode = rootNode.left
    if (currentNode){
      return findOrAdd(currentNode, newNode)
    } else{
      rootNode.left = newNode
    }
  }else if(newNode.data > rootNode.data){
    currentNode = rootNode.right
    if(currentNode){
      return findOrAdd(currentNode, newNode)
    }else {
      rootNode.right = newNode
    }
  }
}

function min(rootNode){
  let lowestNode = rootNode
  if(rootNode.left){
    lowestNode = rootNode.left
    return min(lowestNode)
  }
  else{
    return lowestNode
  }
}

function max(rootNode){
  let maxNode = rootNode
  if(rootNode.right){
    maxNode = rootNode.right
    return max(maxNode)
  }else{
    return maxNode
  }
}
