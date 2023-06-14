export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export function walk(current: BinaryNode<number> | null, path: number[]): void {
  // Base cases
  // 1. There is no current node.
  if (!current) {
    return;
  }

  // pre

  // recursive
  walk(current.left, path);
  path.push(current.value);
  walk(current.right, path);

  // past
}

export function preOrderSearch(head: BinaryNode<number> | null): number[] {
  const path: number[] = [];

  walk(head, path);

  return path;
}
