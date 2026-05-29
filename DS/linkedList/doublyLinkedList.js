class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.counter = 0;
  }

  append(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.counter++;
  }

  prepend(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.counter++;
  }

  delete(val) {
    if (!this.head) return;

    if (this.head.value === val) {
      this.head = this.head.next;
      this.head.prev = null;
      this.counter--;
      return;
    }

    let previous = this.head;
    let current = this.head.next;

    do {
      if (current.value === val) {
        const comingCurrent = current.next;
        previous.next = comingCurrent;
        comingCurrent.prev = previous;
        current.next = null;
        this.counter--;
        return;
      }

      previous = current;
      current = current.next;
    } while (current !== null);
  }

  search(val) {
    let current = this.head;
    let position = 0;

    do {
      if (current.value === val) {
        console.log("value is " + current.value, "and position is " + position);
        return;
      }

      position += 1;
      current = current.next;
    } while (current !== null);
  }

  reverse() {
    this.tail = this.head;

    let previous = null;
    let current = this.head;

    do {
      const nextNode = current.next;
      current.next = previous;
      current.prev = nextNode;
      previous = current;
      current = nextNode;
    } while (current !== null);

    this.head = previous;
  }

  print() {
    let current = this.head;
    const arr = [];

    do {
      arr.push(current.value);
      current = current.next;
    } while (current !== null);

    console.log(arr);
  }

  size() {
    console.log(this.head, this.tail);
  }
}

const dLL = new DoublyLinkedList();

dLL.prepend(4);
dLL.prepend(2);
dLL.append(6);
dLL.append(8);

dLL.reverse();
dLL.search(6);
dLL.delete(4);
dLL.print();
dLL.size();
