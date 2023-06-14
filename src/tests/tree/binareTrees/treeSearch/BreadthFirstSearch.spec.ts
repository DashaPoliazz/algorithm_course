import bfs from "../../../../dataStructures/trees/binaryTrees/treeSearch/BreadthFirstSearch";
import { BinaryNode } from "../../../../dataStructures/trees/binaryTrees/treeTraversing/inOrderSearch";

export const tree: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: {
      value: 100,
      right: null,
      left: null,
    },
    left: {
      value: 30,
      right: {
        value: 45,
        right: null,
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: null,
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    },
  },
};

export const tree2: BinaryNode<number> = {
  value: 20,
  right: {
    value: 50,
    right: null,
    left: {
      value: 30,
      right: {
        value: 45,
        right: {
          value: 49,
          left: null,
          right: null,
        },
        left: null,
      },
      left: {
        value: 29,
        right: null,
        left: {
          value: 21,
          right: null,
          left: null,
        },
      },
    },
  },
  left: {
    value: 10,
    right: {
      value: 15,
      right: null,
      left: null,
    },
    left: {
      value: 5,
      right: {
        value: 7,
        right: null,
        left: null,
      },
      left: null,
    },
  },
};

test("bt bfs", function () {
  expect(bfs(tree, 45)).toEqual(true);
  expect(bfs(tree, 7)).toEqual(true);
  expect(bfs(tree, 69)).toEqual(false);
});
