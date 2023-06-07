import DoublyLinkedList from "../../dataStructures/doublyLinkedList";
import { Node } from "../../dataStructures/doublyLinkedList";

describe("DoublyLinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  it("should prepend items to the list", () => {
    list.prepend(1);
    expect(list.length).toBe(1);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);

    list.prepend(2);
    expect(list.length).toBe(2);
    expect(list.head?.value).toBe(2);
    expect(list.head?.next?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
  });

  it("should append items to the list", () => {
    list.append(1);
    expect(list.length).toBe(1);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);

    list.append(2);
    expect(list.length).toBe(2);
    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
    expect(list.tail?.prev?.value).toBe(1);
  });

  it("should insert items at a specific index", () => {
    list.append(1);
    list.append(2);
    list.append(4);

    list.insertAt(3, 2);
    expect(list.length).toBe(4);
    expect(list.get(2)).toBe(3);
    expect(list.get(3)).toBe(4);

    // Inserting at index 0 should prepend the item
    list.insertAt(0, 0);
    expect(list.length).toBe(5);
    expect(list.get(0)).toBe(0);
    expect(list.get(1)).toBe(1);

    // Inserting at an invalid index should do nothing
    list.insertAt(5, 10);
    expect(list.length).toBe(5);
  });

  it("should remove items from the list", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);

    const removed = list.remove(2);
    expect(list.length).toBe(3);
    expect(removed).toBe(2);
    expect(list.get(1)).toBe(3);

    // Removing an item that doesn't exist should return undefined
    const notFound = list.remove(10);
    expect(list.length).toBe(3);
    expect(notFound).toBeUndefined();
  });

  it("should get items at a specific index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);

    // Getting an item at an invalid index should return undefined
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(3)).toBeUndefined();
  });

  it("should remove items at a specific index", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    const removed = list.removeAt(1);
    expect(list.length).toBe(2);
    expect(removed).toBe(2);
    expect(list.get(1)).toBe(3);

    // Removing an item at an invalid index should return undefined
    const notFound = list.removeAt(5);
    expect(list.length).toBe(2);
    expect(notFound).toBeUndefined();
  });
});
