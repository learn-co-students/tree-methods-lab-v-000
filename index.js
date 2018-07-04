function inOrder(node){
    if (node.left) {
        inOrder(node.left)
    }

    console.log(node.data)

    if (node.right){
        inOrder(node.right)
    }
}

function findOrAdd(currentNode, newNode){
    if (currentNode.data === newNode.data){
        return
    }
    else if (currentNode.data > newNode.data){
        currentNode.left ?
            findOrAdd(currentNode.left, newNode) :
            (currentNode.left = newNode)
    }
    else if (currentNode.data < newNode.data){
        currentNode.right ?
            findOrAdd(currentNode.right, newNode) : 
            (currentNode.right = newNode)
    }

    return true
}

function max(node){
    return node.right ? max(node.right) : node
}

function min(node){
    return node.left ? min(node.left) : node
}