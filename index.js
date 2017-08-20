function inOrder(rootNode) {
  if(rootNode.left){
    inOrder(rootNode.left);
  }
  console.log(rootNode.data);
  if(rootNode.right){
    inOrder(rootNode.right);
  }
}

function findOrAdd(rootNode, newNode){
  console.log(rootNode.data +" "+ newNode.data)
  if(rootNode.data === newNode.data){
    console.log("wtf")
    return true;
  }

  if(newNode.data < rootNode.data){
    if(rootNode.left){
      return findOrAdd(rootNode.left, newNode);
    }
    else {
      rootNode.left = newNode;
    }
  }
  else {
    if(rootNode.right){
      return findOrAdd(rootNode.right, newNode);
    }
    else {
      rootNode.right = newNode;
    }
  }
}

function max(rootNode) {
  if(rootNode.right){
    return max(rootNode.right);
  }
  else {
    return rootNode;
  }
}

function min(rootNode) {
  if(rootNode.left){
    return min(rootNode.left);
  }
  else {
    return rootNode;
  }
}
