export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export function walk(current: BinaryNode<number> | null, path: number[]): void {
  // Base cases:
  // 1. There is no next node.
  if (!current) {
    return;
  }

  // pre
  path.push(current.value);

  // recursive
  walk(current.left, path);
  walk(current.right, path);

  // post
}

export function inOrderSearch(head: BinaryNode<number> | null): number[] {
  const path: number[] = [];

  walk(head, path);

  return path;
}
