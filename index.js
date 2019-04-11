function inOrder(n){
  if (n.left){
    inOrder(n.left)
  }
  console.log(n.data)
  if (n.right){
    inOrder(n.right)
  }
}

function findOrAdd(cN, nN){
    let curr
    if (nN.data === cN.data){
      return true
    }
    if (nN.data < cN.data){
      curr = cN.left
      if (curr){
        return findOrAdd(curr, nN)
      }
      else{
        cN.left = nN
      }
    }
    else if (nN.data > cN.data){
      curr = cN.right
      if (curr){
        return findOrAdd(curr, nN)
      }
      else{
        cN.right = nN
      }
    }
}

function max(rN){
  if (rN.right){
    return max(rN.right)
  }
  else{
    return rN
  }
}

function min(rN){
  if (rN.left){
    return min(rN.left)
  }
  else{
    return rN
  }
}
