class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length > 0;
  }

  add(ele) {
    this.items.push(ele);
  }

  remove() {
    this.isEmpty()
      ? this.items.pop()
      : console.log("can't remove stack is empty");
  }

  peek() {
    this.isEmpty()
      ? console.log(this.items[this.items.length - 1])
      : console.log("stack is empty to peek");
  }

  print() {
    if (!this.isEmpty()) console.log("no items to loop");

    for (let i = this.items.length - 1; i >= 0; i--) {
      console.log(this.items[i]);
    }
  }
}

const stack = new Stack();
stack.add(1);
stack.remove();
stack.add(3);
stack.add(5);
stack.peek();
stack.print();
console.log("##");

// ----------- //
// another way //
class TheStack {
  constructor() {
    this.items = [];
    this.last = -1;
  }

  isEmpty() {
    return this.last >= 0;
  }

  add(ele) {
    this.last += 1;
    this.items[this.last] = ele;
  }

  remove() {
    if (this.isEmpty()) {
      this.items[this.last] = "";
      this.last -= 1;
    } else {
      console.log("can't remove stack is empty");
    }
  }

  peek() {
    this.isEmpty()
      ? console.log(this.items[this.last])
      : console.log("stack is empty to peek");
  }

  print() {
    if (!this.isEmpty()) console.log("no items to loop");

    for (let i = this.last; i >= 0; i--) {
      console.log(this.items[i]);
    }
  }
}

const thestack = new TheStack();
thestack.add(1);
thestack.remove();
thestack.add(3);
thestack.add(5);
thestack.peek();
thestack.print();
console.log("##");
