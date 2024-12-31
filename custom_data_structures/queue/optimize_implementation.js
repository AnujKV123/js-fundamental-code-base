

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        return this.items
    }

    size(){
        return this.rear - this.front
    }
    printFrontRear(){
        return `${typeof this.front}${this.front} - ${this.rear}`
    }
}

const queue = new Queue();

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(30)
queue.enqueue(30)

console.log(queue.print())

queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.print())
console.log(queue.printFrontRear())