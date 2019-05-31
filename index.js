function inOrder(node) {
  if (node.left) inOrder(node.left);

  console.log(node.data);

  if (node.right) inOrder(node.right);
}

function findOrAdd(node, newNode) {
  if (newNode.data == node.data) return true;

  if (newNode.data < node.data) {
    if (node.left) return findOrAdd(node.left, newNode);
    else return node.left = newNode;
  } else {
    if (node.right) return findOrAdd(node.right, newNode);
    else return node.right = newNode;
  }
}

function max(node) {
  if (node.right) return max(node.right);

  return node;
}

function min(node) {
  if (node.left) return min(node.left);

  return node;
}
