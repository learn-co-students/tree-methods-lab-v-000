function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }

  console.log(node.data)

  if (node.right) {
    inOrder(node.right)
  }
}

function findOrAdd(root, nodeToAdd) {

  if (nodeToAdd.data === root.data) {
    return true
  }

  if (nodeToAdd.data < root.data) {
    return root.left === null ? root.left = nodeToAdd : findOrAdd(root.left, nodeToAdd)
  } else if (nodeToAdd.data > root.data) {
    return root.right === null ? root.right = nodeToAdd : findOrAdd(root.right, nodeToAdd)
  }
}

function max(root) {
  return root.right ? max(root.right) : root
}

function min(root) {
  return root.left ? min(root.left) : root
}
