

class Queue {
    constructor(){
        this.items = [];
    }

    // enqueue or push
    enqueue(element){
        return this.items.push(element)
    }

    // dequeue or pop : queue worked on FIFO principle so, in dequeue you need to delete element from front
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        else{
            return this.items.shift()
        }
    }

    peek(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        else{
            return this.items[0];
        }
    }

    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length
    }

    print(){
        return this.items.toString();
    }
}

const queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.print())

queue.dequeue()
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.print())