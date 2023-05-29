"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const node_1 = require("./node");
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    getHead() {
        if (!this.head) {
            return null;
        }
        return this.head;
    }
    deleteHead() {
        if (!this.head) {
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            const nextNode = this.head.next;
            this.head = null;
            this.head = nextNode;
        }
    }
    getTail() {
        if (!this.tail) {
            return null;
        }
        return this.tail;
    }
    deleteTail() {
        var _a;
        if (!this.tail) {
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            let prevNode = this.head;
            let currentNode = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            while (currentNode) {
                if (currentNode === this.tail) {
                    break;
                }
                else {
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
            prevNode.next = null;
            this.tail = prevNode;
        }
    }
    prepend(value) {
        const newNode = new node_1.Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = this.head;
        }
        const head = this.head;
        this.head = newNode;
        this.head.next = head;
    }
    append(value) {
        const newNode = new node_1.Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    find(valueToFind) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val === valueToFind) {
                return currentNode;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return null;
    }
    insert(value, rawIndex) {
        var _a;
        const index = rawIndex < 0 ? 0 : rawIndex;
        if (index === 0) {
            this.prepend(value);
        }
        else {
            let counter = 1;
            let currentNode = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            let prevNode = this.head;
            while (currentNode) {
                if (counter === index) {
                    const newNode = new node_1.Node(value);
                    prevNode.next = newNode;
                    newNode.next = currentNode;
                    break;
                }
                counter += 1;
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
    reverse() {
        if (!this.head || this.tail === this.head) {
            return;
        }
        let prevNode = null;
        let currentNode = this.head;
        let nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        const head = this.head;
        this.head = this.tail;
        this.tail = head;
    }
    toArray() {
        const res = [];
        if (!this.head) {
            res;
        }
        let current = this.head;
        while (current) {
            res.push(current.val);
            current = current.next;
        }
        return res;
    }
}
exports.LinkedList = LinkedList;
