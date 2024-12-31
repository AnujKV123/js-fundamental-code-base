// reference docs: https://betterprogramming.pub/stacks-in-javascript-d2f0e4404eac


// class Stack {
//     constructor(){
//         this.items = []
//     }

//     // push operation
//     Push(element){
//         return this.items.push(element)
//     }

//     // pop operation
//     Pop(){
//         return this.items.pop()
//     }

//     // peek operation : in peek operation we can get the top element of the stack.
//     Peek(){
//         return this.items[this.items.length-1]
//     }

//     isEmpty(){
//         return this.items.length===0;
//     }

//     Print(){
//         return this.items.toString()
//     }

//     Size(){
//         return this.items.length;
//     }
// }

// const stack = new Stack();
// stack.Push(10)
// stack.Push(20)

// stack.Pop()

// stack.Push(30)

// console.log(stack.Peek())
// console.log(stack.Print())
// console.log(stack.isEmpty())
// console.log(stack.Size())


// ********************************************************

// Basic Stack Implementation

class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is Empty. Can't perform pop.";
      }
  
      return this.stack.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is Empty. Can't perform peek.";
      }
  
      return this.stack[this.size() - 1];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    size() {
      return this.stack.length;
    }
  
    printStack() {}
  }
  
  const stack = new Stack();
  
  stack.push(10);
  stack.push(69);
  stack.push(420);
  
  console.log(stack.size());
  
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  
  console.log(stack.peek());
  
  console.log(stack.isEmpty());
  
  console.log(stack.size());