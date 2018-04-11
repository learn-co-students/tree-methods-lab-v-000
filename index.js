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
  // conditions: newNode < currentRoot -> left, else newNode > currentRoot -> right
  if(rootNode.data > newNode.data){
    currentNode = rootNode.left
    //if current node is present then call findOrAdd node again
    if(currentNode) {
      findOrAdd(currentNode, newNode)
    } else {
      // add new node here (represents left of the tree)
      rootNode.left = newNode 
    }
  } else if(rootNode.data < newNode.data){
    currentNode = rootNode.right
    if(currentNode) {
      findOrAdd(currentNode, newNode)
    } else {
      // add newNode (represents right of the tree)
      rootNode.right = newNode
    }
  } 
  return true
}

// right contains all the values greater than root. So check the right node till we reach the last node.
// the last node will be the highest value
function max(node) {
   if(node.right){
    return max(node.right)
  } else {
    return node;
  }
}

// left contains all the smaller values. So the smallest value will be in the leftmost position of the tree
function min(node){
  if(node.left){
    return min(node.left)
  } else {
    return node
  }
}