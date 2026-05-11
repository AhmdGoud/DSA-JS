class Queue {
  constructor(length) {
    this.items = new Array(length);
    this.count = 0;
    this.length = length;

    this.front = 0;
    this.back = length - 1;
  }

  isFull() {
    return this.count === this.length;
  }

  isEmpty() {
    return this.count === 0;
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log("no space to add");
      return;
    }

    this.back = (this.back + 1) % this.length;
    this.items[this.back] = val;
    this.count += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("no items to remove");
      return;
    }

    this.items[this.front] = null;
    this.front = (this.front + 1) % this.length;
    this.count--;
  }

  getFront() {
    return `index is ${this.front}, value is ${this.items[this.front]}`;
  }

  getBack() {
    return `index is ${this.back}, value is ${this.items[this.back]}`;
  }

  getItems() {
    return this.items;
  }

  print() {
    if (this.isEmpty()) {
      console.log("no item to loop on");
      return;
    }

    let counter = this.count;
    let index = this.front;

    while (counter > 0) {
      const theItem = this.items[index];
      index = (index + 1) % this.length;
      counter--;

      console.log(theItem);
    }
  }
}

const q1 = new Queue(5);
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.dequeue();
q1.enqueue(5);
q1.enqueue(6);
console.log(q1.getItems());
console.log(q1.getFront());
console.log(q1.getBack());
q1.print();
