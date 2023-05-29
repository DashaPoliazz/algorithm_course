export class Node<T> {
  public val: T | null;
  public next: Node<T> | null;

  constructor(val: T | null = null, next: Node<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}
