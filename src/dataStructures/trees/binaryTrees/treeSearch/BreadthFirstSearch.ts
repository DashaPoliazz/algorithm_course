import { Queue } from "../../../../algorithms/queue/queue";

declare type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q = [head];

  while (q.length) {
    const current = q.shift();

    if (current?.value === needle) {
      return true;
    }

    if (current?.left) {
      q.push(current.left);
    }

    if (current?.right) {
      q.push(current.right);
    }
  }

  return false;
}
