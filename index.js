function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(root, newNode){
    if(root.data === newNode.data){ return true }
    if(root.data > newNode.data){
        if(root.left === null){
            root.left = newNode
        }else{
            return findOrAdd(root.left, newNode)
        }
    }else if(root.data < newNode.data){
        if(root.right === null){
            root.right = newNode
        }else{
            return findOrAdd(root.right, newNode)
        }
    }
}

function max(root){
    return root.right === null ? root : max(root.right)
}

function min(root){
    return root.left === null ? root : min(root.left)
}