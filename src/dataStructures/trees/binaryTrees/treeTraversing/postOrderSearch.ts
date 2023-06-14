export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

export function walk(current: BinaryNode<number> | null, path: number[]): void {
  if (!current) {
    return;
  }

  // pre

  // recursion
  walk(current.left, path);
  walk(current.right, path);

  // post
  path.push(current.value);
}

export function postOrderSearch(head: BinaryNode<number> | null): number[] {
  const path: number[] = [];

  walk(head, path);

  return path;
}
