class Node{
    constructor(value){
        this.value = value;
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const val = this.head.value
        this.head = this.head.next
        this.head.prev = null
        this.size--;
        return val
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }

        else{
            const val = this.tail.value
            if(this.size === 1){
                this.head = null
                this.tail = null
            }else{
                this.tail = this.tail.prev
                this.tail.next = null;
            }
            this.size--;
            return val;
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty')
        }else{
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue)
        }
    }
}

module.exports = LinkedList;

const list = new LinkedList;

list.append(10);
list.append(20);
list.append(30);
list.prepend(40);
list.print()
console.log(list.getSize())
console.log(list.removeFromEnd())
list.print()
console.log(list.removeFromFront())
list.print()