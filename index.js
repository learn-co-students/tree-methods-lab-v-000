function inOrder(node){
  if(node.left){
    inOrder(node.left)
  }
  console.log(node.data)
  if(node.right){
    inOrder(node.right)
  }
}

function findOrAdd(rootNode, newNode){
  if(newNode.data < rootNode.data){
    if(rootNode.left){
      return findOrAdd(rootNode.left, newNode)
    }else{
      return rootNode.left = newNode
    }
  }else if (newNode.data > rootNode.data) {
    if(rootNode.right){
      return findOrAdd(rootNode.right, newNode)
    }else{
      return rootNode.right = newNode
    }
  }else{
    return true
  }
}

function max(node){
  if(node.right){
    return max(node.right)
  }
  return node
}

function min(node){
  if(node.left){
    return min(node.left)
  }
  return node
}
