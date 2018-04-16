function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode
  if(newNode.data < rootNode.data) { //if value of new Node  goes left
    currentNode = rootNode.left //goes into the left position of rootNode
    if(currentNode) {//if there is already a node in the left position
      findOrAdd(currentNode, newNode)
    }else{ //if no node in left position, node is added here
      rootNode.left = newNode
    }
  }else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode) {
      findOrAdd(currentNode, newNode)
    }else{
      rootNode.right = newNode
    }
  }
  return true
}

function min(tree) { //finds min value in tree
  let newNode = tree.left
  if(!!newNode) { //if there is a left side of the node
    return min(newNode)
  } //else return original node
  return tree
}

function max(tree) {
  let newNode = tree.right
  if(!!newNode) { //if there is a left side of the node
    return max(newNode)
  } //else return original node
  return tree
}
