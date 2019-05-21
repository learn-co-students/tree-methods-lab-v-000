function findOrAdd(rootNode, newNode){
  let currentNode = rootNode.data
  if(newNode.data < rootNode.data){
      currentNode = rootNode.left
      if(currentNode){
        // do something
      } else {
        currentNode.left = newNode
      }
  } else if(newNode.data > rootNode.data) {
    currentNode = rootNode.right
    if(currentNode){
      // do something
    } else {
      currentNode.right = newNode
    }
  }
}