class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.count = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    this.count += 1;

    if (this.count === 1) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    this.front = this.front.next;
    this.count -= 1;
  }

  print() {
    let current = this.front;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  getFront() {
    return this.front;
  }
  getBack() {
    return this.back;
  }
  getCount() {
    return this.count;
  }
}

const q = new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
q.dequeue();
q.enqueue(8);

q.print();
console.log(q.getCount());
console.log(q.getFront());
console.log(q.getBack());
