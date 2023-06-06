import { partition, quickSort } from "../../algorithms/quickSort/quickSort";

describe("Quick Sort", () => {
  describe("quickSort", () => {
    it("should correctly sort the array in ascending order", () => {
      const arr = [4, 2, 6, 1, 5, 3];
      quickSort(arr);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should not modify an already sorted array", () => {
      const arr = [1, 2, 3, 4, 5, 6];
      quickSort(arr);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should correctly sort an array with duplicate values", () => {
      const arr = [4, 2, 6, 1, 5, 3, 1, 2];
      quickSort(arr);
      expect(arr).toEqual([1, 1, 2, 2, 3, 4, 5, 6]);
    });

    it("should correctly sort an empty array", () => {
      const arr: number[] = [];
      quickSort(arr);
      expect(arr).toEqual([]);
    });

    it("should correctly sort an array with a single element", () => {
      const arr = [1];
      quickSort(arr);
      expect(arr).toEqual([1]);
    });
  });
});
