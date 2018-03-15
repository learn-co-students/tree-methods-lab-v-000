const inOrder = rootNode => {
	if(rootNode.left){
		inOrder(rootNode.left)
	}
	
	console.log(rootNode.data);

	if(rootNode.right){
        inOrder(rootNode.right)
	}
}

const findOrAdd = (currentNode, newNode) => {
    if(newNode.data == currentNode.data){
    	return true;
    }

    if(newNode.data < currentNode.data){
    	if(currentNode.left){
    		return findOrAdd(currentNode.left, newNode)
    	} else {
    		return currentNode.left = newNode
        }
    }

    if(newNode.data > currentNode.data){
    	if(currentNode.right){
    		return findOrAdd(currentNode.right, newNode)
    	} else {
            return currentNode.right = newNode
    	}	
    }
}

const max = rootNode => {
    if(rootNode.right){
    	return max(rootNode.right)
    } else {
    	return rootNode
    }
}

const min = rootNode => {
	if(rootNode.left){
		return min(rootNode.left)
	} else {
		return rootNode
	}
}















