export class Node<T> {
  public value: T | undefined;
  public next: Node<T> | undefined;
  public prev: Node<T> | undefined;

  constructor(
    value: T | undefined,
    prev?: Node<T>,
    next?: Node<T> | undefined
  ) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export default class DoublyLinkedList<T> {
  public length: number;
  public head: Node<T> | undefined;
  public tail: Node<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    this.length += 1;
    const node = new Node(item);

    if (!this.head) {
      this.head = this.tail = node;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  append(item: T): void {
    this.length += 1;

    const node = new Node(item);

    if (!this.tail) {
      this.head = this.tail = node;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      return;
    } else if (idx < 0) {
      return;
    }

    if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length += 1;

    const node = new Node(item);
    let current = this.getAt(idx);

    if (!current) {
      return;
    }

    node.next = current;
    node.prev = current?.prev;
    current!.prev = node;

    if (node.prev) {
      node.prev.next = node;
    }
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return;
    }

    let current: Node<T> | undefined = this.head;

    while (current) {
      if (current.value === item) {
        return this.removeNode(current);
      }

      current = current.next;
    }

    return;
  }

  get(idx: number): T | undefined {
    const node = this.getAt(idx);
    return node?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    return node ? this.removeNode(node) : undefined;
  }

  private getAt(idx: number): Node<T> | undefined {
    if (idx < 0 || idx > this.length) {
      return;
    }

    let current = this.head;
    let counter = 0;

    while (current) {
      if (counter === idx) {
        return current;
      }

      current = current.next;
      counter += 1;
    }

    return current;
  }

  private removeNode(nodeToRemove: Node<T>): T | undefined {
    this.length -= 1;

    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    if (nodeToRemove === this.head) {
      this.head = nodeToRemove.next;
    }

    if (nodeToRemove === this.tail) {
      this.tail = nodeToRemove.prev;
    }

    if (nodeToRemove?.prev) {
      nodeToRemove.prev.next = nodeToRemove.next;
    } else if (nodeToRemove?.next) {
      nodeToRemove.next.prev = nodeToRemove.prev;
    }

    return nodeToRemove?.value;
  }
}
