import Node from "./node";

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    let newHead = new Node(data);
    let currentHead = this.head;
    if (!currentHead) {
      newHead.setnextNode(null);
    } else {
      newHead.setnextNode(currentHead);
    }
    this.head = newHead;
  }
}
