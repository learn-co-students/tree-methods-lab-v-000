function inOrder(node) {
    if (node.left) {
        inOrder(node.left)
    }

    console.log(node.data)

    if (node.right) {
        inOrder(node.right)
    }
}

function findOrAdd(node, newNode) {
    let currentNode = node

    if (newNode.data < node.data) {
        currentNode = node.left
        if (currentNode) {
            findOrAdd(currentNode, newNode)
            return true
        } else {
            node.left = newNode
        }
    } else {
        currentNode = node.right
        if (currentNode) {
            findOrAdd(currentNode, newNode)
            return true
        } else {
            node.right = newNode
        }
    }
}

let node = {
    data: 5,
    left: {
        data: 3,
        left: null,
        right: null
    },
    right: {
        data: 7,
        left: null,
        right: {
            data: 9,
            left: null,
            right: null
        }
    }
}

function max(node) {
    if (!node.right) {
        return node
    }

    if (node.right.data > node.data) {
        return max(node.right)
    }
}

function min(node) {
    if (!node.left) {
        return node
    }

    if (node.left.data < node.data) {
        return min(node.left)
    }
}