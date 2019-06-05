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
  let currentNode = rootNode.data;
  if (newNode.data > rootNode.data) {
      currentNode = rootNode.right;
    if (currentNode) {
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.right = newNode
    }
  } else if (newNode.data < rootNode.data) {
    currentNode = rootNode.left;
    if (currentNode) {
      findOrAdd(currentNode, newNode)
    } else {
      rootNode.left = newNode
    }
  }
  return true;
}


function max(currentNode) {
	let val;
  if (currentNode.right){
    val = currentNode.right;
    max(currentNode.right);
  } else {
	   val = currentNode;
  }
	return val.right;
}

function min(currentNode) {
	let val;
  if (currentNode.left){
    val = currentNode.left;
    min(currentNode.left)
  } else {
	   val = currentNode;
  }
	return val;
}
