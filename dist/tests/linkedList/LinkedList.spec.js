"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkedList_1 = require("../../algorithms/linkedList/linkedList");
describe("LinkedList", () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new linkedList_1.LinkedList();
    });
    test("should create en empty lined list", () => {
        expect(linkedList.toArray().length).toEqual(0);
    });
    describe("prepend", () => {
        test("should prepend a node to an empty list", () => {
            var _a, _b;
            linkedList.prepend(10);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(10);
        });
        test("should prepend a node to a non-empty list", () => {
            var _a, _b;
            linkedList.append(20);
            linkedList.prepend(10);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(20);
        });
    });
    describe("append", () => {
        test("should append a node to an empty list", () => {
            var _a, _b;
            linkedList.append(10);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(10);
        });
        test("should append a node to a non-empty list", () => {
            var _a, _b;
            linkedList.prepend(10);
            linkedList.append(20);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(20);
        });
    });
    describe("insert", () => {
        test("should insert a node at the beginning", () => {
            var _a, _b;
            linkedList.append(20);
            linkedList.insert(10, 0);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(20);
        });
        test("should insert a node in the middle", () => {
            var _a, _b, _c, _d;
            linkedList.append(10);
            linkedList.append(30);
            linkedList.insert(20, 1);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_c = (_b = linkedList.getHead()) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.val).toBe(20);
            expect((_d = linkedList.getTail()) === null || _d === void 0 ? void 0 : _d.val).toBe(30);
        });
        test("should insert a node at index 0", () => {
            var _a, _b;
            linkedList.insert(10, 0);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(10);
        });
        test("should insert a node at index greater than the list size", () => {
            var _a, _b;
            linkedList.append(10);
            linkedList.insert(20, 5);
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(10);
        });
    });
    describe("find", () => {
        it("should return null when the list is empty", () => {
            const result = linkedList.find(5);
            expect(result).toBeNull();
        });
        it("should return null when the value is not found", () => {
            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            const result = linkedList.find(5);
            expect(result).toBeNull();
        });
        it("should return the node when the value is found", () => {
            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            const result = linkedList.find(2);
            expect(result === null || result === void 0 ? void 0 : result.val).toBe(2);
        });
    });
    describe("Delete node", () => {
        test("should remove the head node from the list", () => {
            var _a, _b;
            linkedList.append(10);
            linkedList.append(20);
            linkedList.append(30);
            linkedList.deleteHead();
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(20);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(30);
        });
        test("should update the head and tail correctly when the list contains a single node", () => {
            linkedList.append(10);
            linkedList.deleteHead();
            expect(linkedList.getHead()).toBeNull();
            expect(linkedList.getTail()).toBeNull();
        });
        test("should do nothing when the list is empty", () => {
            linkedList.deleteHead();
            expect(linkedList.getHead()).toBeNull();
            expect(linkedList.getTail()).toBeNull();
        });
    });
    describe("Deletе tail", () => {
        test("should remove the tail node from the list", () => {
            var _a, _b;
            linkedList.append(10);
            linkedList.append(20);
            linkedList.append(30);
            linkedList.deleteTail();
            expect((_a = linkedList.getHead()) === null || _a === void 0 ? void 0 : _a.val).toBe(10);
            expect((_b = linkedList.getTail()) === null || _b === void 0 ? void 0 : _b.val).toBe(20);
        });
        test("should update the head and tail correctly when deleting the only node", () => {
            linkedList.append(10);
            linkedList.deleteTail();
            expect(linkedList.getHead()).toBeNull();
            expect(linkedList.getTail()).toBeNull();
        });
        test("should do nothing when the list is empty", () => {
            linkedList.deleteTail();
            expect(linkedList.getHead()).toBeNull();
            expect(linkedList.getTail()).toBeNull();
        });
    });
    describe("reverse()", () => {
        it("should reverse the order of elements in the linked list", () => {
            const linkedList = new linkedList_1.LinkedList();
            linkedList.append(1);
            linkedList.append(2);
            linkedList.append(3);
            linkedList.append(4);
            linkedList.reverse();
            expect(linkedList.toArray()).toEqual([4, 3, 2, 1]);
        });
        it("should handle an empty linked list", () => {
            const linkedList = new linkedList_1.LinkedList();
            linkedList.reverse();
            expect(linkedList.toArray()).toEqual([]);
        });
        it("should handle a linked list with a single element", () => {
            const linkedList = new linkedList_1.LinkedList();
            linkedList.append(1);
            linkedList.reverse();
            expect(linkedList.toArray()).toEqual([1]);
        });
    });
});
