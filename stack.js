class Stack {
  constructor() {
    this.stack = [];
    this.arrLength = -1;
  }

  isEmpty() {
    return this.arrLength === -1;
  }

  getStack() {
    return this.stack;
  }

  push(el) {
    this.stack[this.arrLength+1] = el;
    this.arrLength += 1;
  }

  pop() {
    let popped = this.stack[this.arrLength];
    if (!this.isEmpty()) this.arrLength -= 1;
    return popped;
  }

}

let stack = new Stack();

console.log(stack.pop())
stack.push(1)
console.log(stack.getStack());
stack.push(2);
console.log(stack.getStack());
stack.pop();
console.log(stack.getStack());
stack.push(1)
console.log(stack.getStack());



// start
// [{1,2,3}] // arrLength = 2

// pop 3
// [{1,2},3] // arrLenght = 1 

// push 4
// [{1,2,4}] // arrLength = 2









