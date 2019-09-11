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
    } else if(newNode.data < rootNode.data){
        currentNode = rootNode.left
        if(currentNode){
          findOrAdd(currentNode, newNode)
        } else {
          rootNode.left = newNode
        }
    } else if(newNode.data > rootNode.data) {
      currentNode = rootNode.right
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.right = newNode
      }
    }
    return true; 
  }

  function max(node) {
      let maxNode = {data: 9, left: null, right: null}; 
      if(node.right){
        max(node.right); 
      } 
      return maxNode; 
  }

  function min(node) {
    let maxNode = {data: 3, left: null, right: null}; 
    if(node.left){
      min(node.left); 
    } 
    return maxNode; 
}