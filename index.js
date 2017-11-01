function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function inOrder2(currentNode, numberArray){
  if(currentNode.left){
    inOrder2(currentNode.left, numberArray)
  }
  numberArray.push(currentNode)
  if(currentNode.right){
    inOrder2(currentNode.right, numberArray)
  }
  return numberArray
}

function findOrAdd(rootNode, newNode){
  if(rootNode.data < newNode.data){
    if(rootNode.right == null) {
      rootNode.right = newNode
    } else {
      findOrAdd(rootNode.right, newNode)
    }
  } else if (rootNode.data == newNode.data) {
    return true
  } else {
    if(rootNode.left == null) {
      rootNode.left = newNode
    } else {
      findOrAdd(rootNode.left, newNode)
    }
  }
  return true
}

function max(node){
  return inOrder2(node, []).pop()
}

function min(node){
  return inOrder2(node, [])[0]
}
