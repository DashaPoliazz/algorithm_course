type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk(current: BinaryNode<number> | null, needle: number): boolean {
  //   Base cases:
  // 1. There is no current node at all.
  if (!current) {
    return false;
  }

  //   2. Needle has been founded.
  if (current.value === needle) {
    return true;
  }

  // 3. Currentnode is less than needle. This means that we need to go right on tree
  if (current.value < needle) {
    return walk(current.right, needle);
  }

  // 4. If currentvalue is greater than needle - we should go to left node.
  return walk(current.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return walk(head, needle);
}
