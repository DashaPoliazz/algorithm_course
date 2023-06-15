// class Node<T> {
//   public value: T;
//   public next?: Node<T>;
//   public prev?: Node<T>;

//   constructor(value: T) {
//     this.value = value;
//     this.next = undefined;
//     this.prev = undefined;
//   }
// }

// export default class LRU<K, V> {
//   private length: number;
//   private head?: Node<V>;
//   private tail?: Node<V>;

//   private capacity: number;
//   private lookup: Map<K, Node<V>>;
//   private reversedLookup: Map<Node<V>, K>;

//   constructor() {
//     this.length = 0;
//     this.head = this.tail = undefined;

//     this.capacity = 10;
//     this.lookup = new Map();
//     this.reversedLookup = new Map();
//   }

//   update(key: K, value: V): void {
//     let node = this.lookup.get(key);

//     if (!node) {
//       node = new Node(value);
//       this.length += 1;
//       this.prepend(node);
//       this.trimCashe();

//       this.lookup.set(key, node);
//       this.reversedLookup.set(node, key);
//     } else {
//       this.detach(node);
//       this.prepend(node);

//       node.value = value;
//     }
//     // if it doesn't we need to insert
//     //  - check capacity and evict if over
//     // if it does, we need to update to the front to the list and update the value
//   }

//   get(key: K): V | undefined {
//     const node = this.lookup.get(key);

//     if (!node) {
//       return undefined;
//     }

//     // Update the value we found and move it to the front
//     this.detach(node);
//     this.prepend(node);

//     // return out the value found or undefined if not exist
//     return node.value;
//   }

//   private detach(node: Node<V>) {
//     if (node.prev) {
//       node.prev.next = node.next;
//     }

//     if (node.next) {
//       node.next.prev = node.prev;
//     }

//     if (this.length === 1) {
//       this.tail = this.tail = undefined;
//     }

//     if (node === this.head) {
//       this.head = this.head.next;
//     }

//     if (node === this.tail) {
//       this.tail = this.tail.prev;
//     }

//     node.next = undefined;
//     node.prev = undefined;
//   }

//   private prepend(node: Node<V>) {
//     if (!this.head) {
//       this.head = this.tail = node;
//       return;
//     }

//     node.next = this.head;
//     this.head.prev = node;
//     this.head = node;
//   }

//   private trimCashe(): void {
//     if (this.length <= this.capacity) {
//       return;
//     }

//     const tail = this.tail as Node<V>;
//     this.detach(this.tail as Node<V>);

//     const key = this.reversedLookup.get(tail) as K;
//     this.lookup.delete(key);
//     this.reversedLookup.delete(tail);
//     this.length -= 1;
//   }
// }

class Node<T> {
  public value: T;
  public next?: Node<T>;
  public prev?: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

export class LRU<K, V> {
  private length: number;
  private head?: Node<V>;
  private tail?: Node<V>;

  private lookup: Map<K, Node<V>>;
  private reverseLookup: Map<Node<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;

    this.lookup = new Map();
    this.reverseLookup = new Map();
  }

  get(key: K): V | undefined {
    const node = this.lookup.get(key);

    if (!node) {
      return undefined;
    }

    this.detach(node);
    this.prepend(node);

    return node.value;
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key);

    if (!node) {
      node = new Node(value);
      this.prepend(node);
      this.length += 1;
      this.trimCashe();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);

      node.value = value;
    }
  }

  private detach(node: Node<V>): void {
    if (!node) {
      return;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.length === 1) {
      this.tail = this.tail = undefined;
    }

    if (node === this.head) {
      this.head = this.head.next;
    }

    if (node === this.tail) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: Node<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  private trimCashe(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail as Node<V>;
    this.detach(this.tail as Node<V>);

    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length -= 1;
  }
}
