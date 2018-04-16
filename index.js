
function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}
//adds code if doesnt exist, returns true if does
function findOrAdd(currentNode, node) {

  if(currentNode === node){
    return true
  }
  if(node.data < currentNode.data){
    if(currentNode.left){
      return findOrAdd(currentNode.left, node)
    } else {
      return currentNode.left = node
    }
  }


  if(node.data > currentNode.data){
    if(currentNode.right){
      return findOrAdd(currentNode.right, node)
    } else {
      return currentNode.right = node
    }
  }
}
//max element
function max(currentNode) {
  if(currentNode.right){
    return max(currentNode.right)
  }
  return currentNode;
}
//min element
function min(currentNode) {
  if(currentNode.left){
    return max(currentNode.left)
  }
  return currentNode;
}
