function inOrder(node) {
  if(node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if(node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(root, newNode) {
  if (root.data == newNode.data) { return true };

  if (newNode.data < root.data) {
    if(root.left) {
      return findOrAdd(root.left, newNode)
    } else {
      return root.left = newNode;
    }
  } else if (newNode.data > root.data) {
    if(root.right) {
      return findOrAdd(root.right, newNode);
    } else {
      return root.right = newNode;
    }
  }
}

function max(root) {
  if (root.right) {
    return max(root.right)
  }

  return root;
}

function min(root) {
  if (root.left) {
    return min(root.left)
  }

  return root;
}
