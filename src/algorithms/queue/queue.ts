export class QNode<T> {
  val: T;
  next: QNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Queue<T> {
  public length: number;
  private head: QNode<T> | null;
  private tail: QNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  enqueue(val: T): void {
    const newNode = new QNode(val);
    this.length += 1;

    if (!this.tail) {
      this.head = this.tail = newNode;

      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue(): T | void {
    if (!this.head) {
      return;
    }

    this.length -= 1;

    // Store head.
    const head = this.head;

    // Moving head.
    this.head = this.head.next;

    return head.val;
  }
}
