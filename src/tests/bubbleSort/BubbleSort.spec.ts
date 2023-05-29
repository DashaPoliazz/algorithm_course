import { bubbleSort } from "../../algorithms/bubbleSort/bubbleSort";

describe("bubbleSort", () => {
  it("should return an empty array when given an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should return the sorted array when given an unsorted array", () => {
    expect(bubbleSort([4, 2, 8, 5, 1])).toEqual([1, 2, 4, 5, 8]);
  });

  it("should return the same array when given a sorted array", () => {
    expect(bubbleSort([1, 2, 4, 5, 8])).toEqual([1, 2, 4, 5, 8]);
  });

  it("should return the same array when given an array with one element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });
});
