class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.counter = 0;
  }

  append(val) {
    const newNode = new Node(val);

    if (this.counter === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.counter++;
  }

  prepend(val) {
    const newNode = new Node(val);

    if (this.counter === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.counter++;
  }

  delete(val) {
    if (this.counter === 0) return;

    if (this.head.value === val) {
      this.head = this.head.next;
      this.counter--;
      return;
    }

    let previous = this.head;
    let current = this.head.next;

    while (current !== null) {
      if (current.value === val) {
        previous.next = current.next;
        current.next = null;
        this.counter--;
      }

      previous = current;
      current = current.next;
    }
  }

  search(val) {
    let current = this.head;

    while (current !== null) {
      if (current.value === val) {
        console.log(current.value);
      }

      current = current.next;
    }
  }

  reverse() {
    this.tail = this.head;

    let previous = null;
    let current = this.head;

    while (current !== null) {
      const nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }

    this.head = previous;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }

  size() {
    console.log(this.head, this.tail);
    return this.counter;
  }
}

const sLL = new SinglyLinkedList();

sLL.prepend(4);
sLL.prepend(2);
sLL.append(6);
sLL.append(8);
// sLL.delete(6);
// sLL.search(8);

sLL.reverse();
sLL.print();
console.log(sLL.size());
