
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }
    
    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    // add the new node at the begining of the linked list
    // Time Complexity: O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    // add the new node at the end of the linked list
    // Time Complexity: O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++;
    }

    // add the new node at the specific position of the linked list
    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++;
        }
    }

    // remove the node from the linked list
    removeFrom(index) {
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i<index - 1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    // remove value from the linked list
    removeValue(value){
        if(this.isEmpty()){
            return null;
        }

        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value != value){
                prev = prev.next;
            }
            if(prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value;
            }
            return null
        }
    }

    // search element in the linked list
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1;
    }

    // reversing the linked list
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    
    // Time Complexity: O(n)
    print() {
        if(this.isEmpty()){
            return 'List is empty'
        }else{
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }

            return listValue
        }
    }
}

const list = new LinkedList()
console.log("List is Empty? ", list.isEmpty())
console.log("List size ", list.getSize())

console.log(list.print())
list.prepend(10)
console.log(list.print())
list.prepend(20)
list.prepend(30)
console.log(list.print())
list.append(40)
list.append(50)
console.log(list.print())
list.insert(5, 0)
list.insert(15, 4)
console.log(list.print())
console.log(list.removeFrom(20))
console.log(list.removeFrom(5))
console.log(list.print())
console.log(list.removeValue(50))
console.log(list.removeValue(15))
console.log(list.print())
console.log(list.search(20))
list.reverse()
console.log(list.print())