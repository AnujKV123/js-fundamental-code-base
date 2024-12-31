

class Node{
    constructor(value){
        this.value = value;
        this.next = null
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

    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++;
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        const val = this.head.value
        this.head = this.head.next
        this.size--;
        return val
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.head.value;
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

const list = new LinkedList;

console.log(list.isEmpty())
list.push(10)
list.push(20)
list.push(30)
console.log(list.getSize())
console.log(list.pop())
console.log(list.peek())
list.print()
console.log(list.getSize())


console.log("--------------------------------------------------------")
// **************************************************************** or

// const LinkedList = require("./linked_list_with_head_and_tail_ptr");

// class LinkedListStack {
//   constructor() {
//     this.list = new LinkedList();
//   }

//   push(value) {
//     this.list.prepend(value);
//   }

//   pop() {
//     return this.list.removeFromFront();
//   }

//   peek() {
//     return this.list.head.value;
//   }

//   isEmpty() {
//     return this.list.isEmpty();
//   }

//   getSize() {
//     return this.list.getSize();
//   }

//   print() {
//     return this.list.print();
//   }
// }

// const stack = new LinkedListStack();
// console.log(stack.isEmpty());
// stack.push(20);
// stack.push(10);
// stack.push(30);
// console.log(stack.getSize());
// stack.print();
// console.log(stack.pop());
// stack.print();
// console.log(stack.peek());