function inOrder(node) {
	if (node) {
		inOrder(node.left);
		console.log(node.data);
		inOrder(node.right);
	}
}

function findOrAdd(node, newNode) {
	if (newNode.data < node.data) {
		if (node.left) {
			return findOrAdd(node.left, newNode);
		} else {
			node.left = newNode;
			return false;
		}
	} else if (newNode.data > node.data) {
		if (node.right) {
			return findOrAdd(node.right, newNode);
		} else {
			node.right = newNode;
			return false;
		}
	} else {
		return true;
	}
}

function max(node) {
	return node.right ? max(node.right) : node;
}

function min(node) {
	return node.left ? max(node.left) : node;
}