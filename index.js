function inOrder(node) {
    if (node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right) {
        inOrder(node.right)
    }
}

function findOrAdd(rootNode, newNode) {
    if (rootNode.data === newNode.data) {
        return true
    } else if (newNode.data < rootNode.data) {
        if (rootNode.left) {
            let root = rootNode.left;
            return findOrAdd(root, newNode);    
        } else {
            return rootNode.left = newNode
        }
    } else {
        if (rootNode.right) {
            let root = rootNode.right;
            return findOrAdd(root, newNode);    
        } else {
            return rootNode.right = newNode
        }
    }
}

function max(node) {
    if (node.right) {
        return max(node.right)
    } else {
        return node
    }
}

function min(node) {
    if (node.left) {
        return min(node.left)
    } else {
        return node
    }
}