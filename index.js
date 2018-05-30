function inOrder(currentNode){
    if (currentNode.left){
      inOrder(currentNode.left);
    }
    console.log(currentNode.data)
    if (currentNode.right){
      inOrder(currentNode.right);
    }
  }
  
  function findOrAdd(rootNode, newNode) {
    let currentNode = rootNode;
    if (newNode.data < rootNode.data) { 
      currentNode = rootNode.left;
      if (currentNode) {
        findOrAdd(currentNode, newNode);
      }
      else { 
        rootNode.left = newNode;
      }
    } else if (newNode.data > rootNode.data) {
      currentNode = rootNode.right;
      if(currentNode) {
        findOrAdd(currentNode, newNode);
      }
      else{
        rootNode.right = newNode;
      }
    }
    return true;
  }
  
  function min(tree) { 
    let newNode = tree.left;
    if (!!newNode) {
      return min(newNode);
    }
    return tree;
  }
  
  function max(tree) {
    let newNode = tree.right;
    if (!!newNode) {
      return max(newNode);
    }
    return tree;
  }