import dfs from "../../../../dataStructures/trees/binaryTrees/treeSearch/DFS";
import { tree, tree2 } from "./BreadthFirstSearch.spec";

test("DFS on BST", function () {
  expect(dfs(tree, 45)).toEqual(true);
  expect(dfs(tree, 7)).toEqual(true);
  expect(dfs(tree, 69)).toEqual(false);
});
