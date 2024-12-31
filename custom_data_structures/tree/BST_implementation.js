
class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
       return this.root === null
    }

    insert(value){
        const newNode =  new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }
            else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(root === null){
            return false
        }else{
            if(value === root.value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left, value)
            }
            else{
                return this.search(root.right, value)
            }
        }
    }

    // traversing the tree --------> depth first search

    // preOrder: read the data of the node ---> visit the left subtree ---> visit the right subtree
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    // inOrder: visit the left subtree ---> read the data of the node ---> visit the right subtree
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    // postOrder: visit the left subtree ---> visit the right subtree ---> read the data of the node
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    // traversing the tree --------> depth first search: Explore all the node at the present depth prior to 
    //                                  moving on to the nodes at the next depth level.
    levelOrder(){
        // use the optimised queue implementation for optimised result

        const queue = []

        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    // find the minimum element of the tree
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    // find the maximum element of the tree
    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }

    // delete the node from the tree
    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value){
        if(root === null){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }
        else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }
            else if(!root.right){
                return root.left;
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }
}

const bst = new BinarySearchTree()

console.log(bst.isEmpty())
bst.insert(6)
bst.insert(10)
bst.insert(5)
bst.insert(3)
bst.insert(7)
console.log(bst.isEmpty())
console.log(bst.search(bst.root, 6))
console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 20))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
bst.levelOrder()
console.log("-------------------")
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
console.log("-------------------")
bst.delete(3)
bst.delete(6)
bst.levelOrder()