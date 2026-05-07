class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    console.log(this.length);
  }

  peek() {
    if (this.isEmpty()) {
      console.log("no items to peek");
    } else {
      console.log(this.top.value);
    }
  }

  add(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length += 1;
  }

  remove() {
    if (this.isEmpty()) {
      console.log("no items to remove");
    } else {
      const temp = this.top;
      this.top = temp.next;
      this.length -= 1;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("no items to print");
    } else {
      let current = this.top;
      while (current) {
        console.log(current);
        current = current.next;
      }
    }
  }
}

const stack = new Stack();
stack.add(5);
stack.add(15);
stack.remove();
stack.add(25);
stack.print();
stack.peek();
stack.size();
