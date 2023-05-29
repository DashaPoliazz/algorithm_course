"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
const binarySearch = (arr, n) => {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        const middle = Math.floor((min + max) / 2);
        if (arr[middle] === n) {
            return true;
        }
        else if (arr[middle] > n) {
            max = middle - 1;
        }
        else {
            min = middle + 1;
        }
    }
    return false;
};
exports.binarySearch = binarySearch;
