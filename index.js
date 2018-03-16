const inOrder = currentNode => {
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

const findOrAdd = (rootNode, newNode) => {
    if (newNode.data < rootNode.data){
        rootNode.left ? findOrAdd(rootNode.left, newNode) : rootNode.left = newNode;
    } else {
        rootNode.right ? findOrAdd(rootNode.right, newNode) : rootNode.right = newNode;
    }

    return true;
}

const max = node => {
    let maxNode = node;
    let currentNode = node;

    while (currentNode.right) {
        maxNode = maxSearch( currentNode.right , maxNode );
        currentNode = currentNode.right ? currentNode.right : currentNode;
    }

    return maxNode;
}

const maxSearch = (rightChild, maxNode) => {
    return rightChild.data > maxNode.data ? rightChild : maxNode;
};

const min = node => {
    let minNode = node;
    let currentNode = node;

    while (currentNode.left) {
        minNode = minSearch(currentNode.left, minNode);
        currentNode = currentNode.left ? currentNode.left : currentNode;
    }

    return minNode;
}

const minSearch = (leftChild, minNode) => {
    return leftChild.data < minNode.data ? leftChild : minNode;
};