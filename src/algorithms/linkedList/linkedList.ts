import { Node } from "./node";

export class LinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead(): Node<T> | null {
    if (!this.head) {
      return null;
    }

    return this.head;
  }

  deleteHead(): void {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const nextNode = this.head.next;
      this.head = null;
      this.head = nextNode;
    }
  }

  getTail(): Node<T> | null {
    if (!this.tail) {
      return null;
    }

    return this.tail;
  }

  deleteTail(): void {
    if (!this.tail) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = this.head;
      let currentNode = this.head?.next;

      while (currentNode) {
        if (currentNode === this.tail) {
          break;
        } else {
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
      }

      prevNode!.next = null;
      this.tail = prevNode;
    }
  }

  prepend(value: T): void {
    const newNode = new Node<T>(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    }

    const head = this.head;
    this.head = newNode;
    this.head.next = head;
  }

  append(value: T): void {
    const newNode = new Node<T>(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  find(valueToFind: T): Node<T> | null {
    if (!this.head) {
      return null;
    }

    let currentNode: Node<T> | null = this.head;

    while (currentNode) {
      if (currentNode.val === valueToFind) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return null;
  }

  insert(value: T, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex;

    if (index === 0) {
      this.prepend(value);
    } else {
      let counter = 1;
      let currentNode = this.head?.next;
      let prevNode = this.head;

      while (currentNode) {
        if (counter === index) {
          const newNode = new Node<T>(value);

          prevNode!.next = newNode;
          newNode.next = currentNode;

          break;
        }

        counter += 1;
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  reverse(): void {
    if (!this.head || this.tail === this.head) {
      return;
    }

    let prevNode: Node<T> | null = null;
    let currentNode: Node<T> | null = this.head;
    let nextNode: Node<T> | null = null;

    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    const head = this.head;
    this.head = this.tail;
    this.tail = head;
  }

  toArray(): Array<T | null> {
    const res: Array<T | null> = [];

    if (!this.head) {
      res;
    }

    let current = this.head;

    while (current) {
      res.push(current.val);

      current = current.next;
    }

    return res;
  }
}
