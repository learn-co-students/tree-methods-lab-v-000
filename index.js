const inOrder = node => {
  if(node.left) inOrder(node.left);
  console.log(node.data);
  if(node.right) inOrder(node.right);
}

const findOrAdd = (rootNode, node) => {
  if (rootNode.data == node.data) {
    return true;
  }
  if(node.data < rootNode.data){
      if(rootNode.left){
        findOrAdd(rootNode.left, node)
      } else {
        rootNode.left = node
      }
  } else if(node.data > rootNode.data) {
    if(rootNode.right){
      findOrAdd(rootNode.right, node)
    } else {
      rootNode.right = node
    }
  }
}

const max = node => {
  let maxLeft,
      maxLeftValue = node.data,
      maxRight,
      maxRightValue = node.data;

  if (node.left) {
    maxLeft= max(node.left);
    maxLeftValue = maxLeft.data;
  }
  if (node.right) {
    maxRight = max(node.right);
    maxRightValue = maxRight.data;
  }

  if(maxLeftValue > node.data && maxLeftValue > maxRightValue) {
    return maxLeft;
  } else if (maxRightValue > node.data && maxRightValue > maxLeftValue) {
    return maxRight;
  } else return node;

}

const min = node => {
  let minLeft,
      minLeftValue = node.data,
      minRight,
      minRightValue = node.data;

  if (node.left) {
    minLeft= max(node.left);
    minLeftValue = minLeft.data;
  }
  if (node.right) {
    minRight = max(node.right);
    minRightValue = minRight.data;
  }

  if(minLeftValue < node.data && minLeftValue < minRightValue) {
    return minLeft;
  } else if (minRightValue < node.data && minRightValue < minLeftValue) {
    return minRight;
  } else return node;

}