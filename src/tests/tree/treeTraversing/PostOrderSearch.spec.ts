import {
  BinaryNode,
  postOrderSearch,
  walk,
} from "../../../dataStructures/trees/treeTraversing/postOrderSearch";

describe("postOrderSearch", () => {
  // Helper function to create a binary tree
  const createBinaryTree = (
    value: number,
    left: BinaryNode<number> | null,
    right: BinaryNode<number> | null
  ): BinaryNode<number> => {
    return {
      value,
      left,
      right,
    };
  };

  // Test case 1
  it("should return an empty array for an empty tree", () => {
    const result = postOrderSearch(null);
    expect(result).toEqual([]);
  });

  // Test case 2
  it("should return the correct post-order traversal path for a tree with one node", () => {
    const tree = createBinaryTree(1, null, null);
    const result = postOrderSearch(tree);
    expect(result).toEqual([1]);
  });

  // Test case 3
  it("should return the correct post-order traversal path for a tree with multiple nodes", () => {
    const tree = createBinaryTree(
      1,
      createBinaryTree(
        2,
        createBinaryTree(4, null, null),
        createBinaryTree(5, null, null)
      ),
      createBinaryTree(3, createBinaryTree(6, null, null), null)
    );
    const result = postOrderSearch(tree);
    expect(result).toEqual([4, 5, 2, 6, 3, 1]);
  });
});

describe("walk", () => {
  // Test case 1
  it("should not modify the path for a null node", () => {
    const path: number[] = [];
    walk(null, path);
    expect(path).toEqual([]);
  });

  // Test case 2
  it("should add the value of the current node to the path", () => {
    const path: number[] = [];
    const node: BinaryNode<number> = {
      value: 1,
      left: null,
      right: null,
    };
    walk(node, path);
    expect(path).toEqual([1]);
  });

  // Test case 3
  it("should add the values of nodes in the correct order (post-order traversal)", () => {
    const path: number[] = [];
    const node: BinaryNode<number> = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };
    walk(node, path);
    expect(path).toEqual([2, 3, 1]);
  });
});
