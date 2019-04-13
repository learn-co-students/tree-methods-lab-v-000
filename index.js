function inOrder(node) {
    let currentNode = node;

    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    let currentNode = rootNode; 

    if (newNode.data < currentNode.data) {
        if (currentNode.left) {
            currentNode = currentNode.left
            return findnOrAdd(currentNode, newNode)
        } else {
            return currentNode.left = newNode
        }
    } else if (newNode.data > currentNode.data) {
        if (currentNode.right) {
            currentNode = currentNode.right
            return findOrAdd(currentNode, newNode)
        } else {
            return currentNode.right = newNode
        }
    } 
    return true
}

function max(node) {
    let currentNode = node;

    if (currentNode.right) {
        currentNode = currentNode.right
        return max(currentNode)
    } else {
        return currentNode
    }
}

function min(node) {
    let currentNode = node;

    if (currentNode.left) {
        currentNode = currentNode.left
        return min(currentNode)
    } else {
        return currentNode
    }
}
