class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
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
      newNode.next = this.head;
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
    if (!this.head) return;

    if (this.head.value === val) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        return;
      } else {
        this.head = this.head.next;
        return;
      }
    }

    let previous = this.head;
    let current = this.head.next;

    do {
      if (current.value === val) {
        previous.next = current.next;
        current.next = null;
        this.counter--;
        return; // we should returned here as we assined current.next = null
      }

      previous = current;
      current = current.next; // so here current = null, and in check current.value = error
    } while (current !== this.head);
  }

  search(val) {
    if (!this.head) return;

    let current = this.head;
    let position = 0;

    do {
      if (current.value === val) {
        console.log("value is " + current.value, "and position is " + position);
        return;
      }

      position += 1;
      current = current.next;
    } while (current !== this.head);
  }

  reverse() {
    if (!this.head || this.head === this.tail) return;

    this.tail = this.head;

    let previous = null;
    let current = this.head;

    do {
      const nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    } while (current !== this.tail);

    this.head = previous;
    this.tail.next = this.head;
  }

  print() {
    if (!this.head) {
      console.log([]);
      return;
    }

    let current = this.head;
    const arr = [];

    // while (current !== this.tail) {
    // // -- starts with while here wont print the last element
    // // -- as it checks if current = tail it stops, so we will use do while
    // arr.push(current.value);
    // current = current.next;
    // }

    do {
      // do will work first then checks so when it returns to head it will stop
      // as do runs the code for the first time and checks if true still running
      arr.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(arr);
  }

  size() {
    console.log(this.head);
    console.log(this.tail);
  }
}

const cLL = new CircularLinkedList();

cLL.prepend(4);
cLL.prepend(2);
cLL.append(6);
cLL.append(8);

cLL.reverse();
cLL.delete(6);
cLL.search(2);
cLL.print();
cLL.size();
