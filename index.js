function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(root, node) {
  if (node.data < root.data) {
    if (root.left) {
      findOrAdd(root.left, node)
    } else {
      root.left = node;
    }
  } else if (node.data > root.data) {
    if (root.right) {
      findOrAdd(root.right, node);
    } else {
      root.right = node;
    }
  }
  return true;
}

function order(node) {
  let ordered = [];
  function traverse(currentNode) {
    if (currentNode.left) {
      traverse(currentNode.left);
    }
    ordered.push(currentNode);
    if (currentNode.right) {
      traverse(currentNode.right);
    }
  }
  traverse(node);
  return ordered;
}

function max(node) {
  const ordered = order(node);
  return ordered[ordered.length - 1];
}

function min(node) {
  const ordered = order(node);
  return ordered[0];
}