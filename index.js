function inOrder(currentNode){
	if(currentNode.left){
		inOrder(currentNode.left)
	}
	console.log(currentNode.data)
	if(currentNode.right){
		inOrder(currentNode.right)
	}
}

function findOrAdd(rootNode, newNode){
	let currentNode = rootNode
	if (currentNode === newNode) {
		return true
	}
	if (newNode.data < rootNode.data) {
		currentNode = rootNode.left
		if (currentNode) {
			return findOrAdd(currentNode, newNode)
		} else {
			rootNode.left = newNode
		}
	} else if (newNode.data > rootNode.data) {
		currentNode = rootNode.right
		if (currentNode) {
			return findOrAdd(currentNode, newNode)
		} else {
			rootNode.right = newNode
		}
	}
}

function max(rootNode){
	if (rootNode.right) {
		return max(rootNode.right)
	} else {
		return rootNode
	}
}

function min(rootNode){
	if (rootNode.left) {
		return max(rootNode.left)
	} else {
		return rootNode
	}
}