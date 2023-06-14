import { BinaryNode } from "../../../../dataStructures/trees/binaryTrees/treeTraversing/postOrderSearch";
import {
  preOrderSearch,
  walk,
} from "../../../../dataStructures/trees/binaryTrees/treeTraversing/preOrderSearch";

describe("preOrderSearch", () => {
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
    const result = preOrderSearch(null);
    expect(result).toEqual([]);
  });

  // Test case 2
  it("should return the correct pre-order traversal path for a tree with one node", () => {
    const tree = createBinaryTree(1, null, null);
    const result = preOrderSearch(tree);
    expect(result).toEqual([1]);
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
});
