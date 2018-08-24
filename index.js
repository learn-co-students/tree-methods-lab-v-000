function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

// I did it, just about perfect! Huzzah!
function findOrAdd(parentNode, newNode) {
  if (parentNode.data === newNode.data) {
    return true
  } else if (parentNode.data > newNode.data) {
    if (parentNode.left) {
      return findOrAdd(parentNode.left, newNode)
    } else {
      return parentNode.left = newNode
    }
  } else if (parentNode.data < newNode.data) {
    if (parentNode.right) {
      return findOrAdd(parentNode.right, newNode)
    } else {
      return parentNode.right = newNode
    }
  }
}

// function max(node) {
//   // let list = inOrder(node)
//   // list
//   if (node.right) {
//
//   }
// }

// doesn't this just assume higher numbers are always on the right?  Couldn't a number higher than the parent be buied somwhere on the left?
function max(currentNode){
  if(currentNode.right){
    return max(currentNode.right)
  } else {
    return currentNode;
  }
}


function min(currentNode){
  if(currentNode.left){
    return min(currentNode.left)
  } else {
    return currentNode;
  }
}
