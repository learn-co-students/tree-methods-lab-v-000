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
  let currentNode = rootNode;
  if(newNode.data == rootNode.data){
    return true;
  }
  if(newNode.data < rootNode.data){
    currentNode = rootNode.left;
    if(currentNode){
      return findOrAdd(currentNode, newNode);
    }else{
      return rootNode.left = newNode
    }
  }else if (newNode.data > rootNode.data){
    currentNode = rootNode.right;
    if(currentNode){
      return findOrAdd(currentNode, newNode);
    }else{
      return rootNode.right = newNode
    }
  }
}

function max(node){
  // dig to the bottom/most right point of tree
  if(node.right){
    return max(node.right)
  }else{
    return node
  }
}

function min(node){
  // dig to the bottom/most left point of tree
  if(node.left){
    return max(node.left)
  }else{
    return node
  }
}