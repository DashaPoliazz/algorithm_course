export class SNode<T> {
  public value: T;
  public next: SNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

export class Stack<T> {
  public length: number;
  public head?: SNode<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(value: T): T | undefined {
    this.length += 1;
    const node = new SNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    const head = this.head;
    this.head = node;
    this.head.next = head;

    return this.head.value;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    if (!this.length) {
      this.head = undefined;
      return;
    }

    const head = this.head as SNode<T>;
    this.head = head.next;

    head.next = undefined;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
