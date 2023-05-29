"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = require("../algorithms/binarySearch/binarySearch");
describe("binarySearch", () => {
    it("should return true for an element present in the array", () => {
        const arr = [1, 3, 5, 7, 9, 11];
        const target = 7;
        const result = (0, binarySearch_1.binarySearch)(arr, target);
        expect(result).toBe(true);
    });
    it("should return false for an element not present in the array", () => {
        const arr = [2, 4, 6, 8, 10];
        const target = 5;
        const result = (0, binarySearch_1.binarySearch)(arr, target);
        expect(result).toBe(false);
    });
    it("should return false for an empty array", () => {
        const arr = [];
        const target = 10;
        const result = (0, binarySearch_1.binarySearch)(arr, target);
        expect(result).toBe(false);
    });
    it("should return true for the first element in the array", () => {
        const arr = [5, 10, 15, 20];
        const target = 5;
        const result = (0, binarySearch_1.binarySearch)(arr, target);
        expect(result).toBe(true);
    });
    it("should return true for the last element in the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 5;
        const result = (0, binarySearch_1.binarySearch)(arr, target);
        expect(result).toBe(true);
    });
});
