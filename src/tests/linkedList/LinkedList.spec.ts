import { LinkedList } from "../../algorithms/linkedList/linkedList";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  test("should create en empty lined list", () => {
    expect(linkedList.toArray().length).toEqual(0);
  });

  describe("prepend", () => {
    test("should prepend a node to an empty list", () => {
      linkedList.prepend(10);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(10);
    });

    test("should prepend a node to a non-empty list", () => {
      linkedList.append(20);
      linkedList.prepend(10);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(20);
    });
  });

  describe("append", () => {
    test("should append a node to an empty list", () => {
      linkedList.append(10);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(10);
    });

    test("should append a node to a non-empty list", () => {
      linkedList.prepend(10);
      linkedList.append(20);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(20);
    });
  });

  describe("insert", () => {
    test("should insert a node at the beginning", () => {
      linkedList.append(20);
      linkedList.insert(10, 0);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(20);
    });

    test("should insert a node in the middle", () => {
      linkedList.append(10);
      linkedList.append(30);
      linkedList.insert(20, 1);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getHead()?.next?.val).toBe(20);
      expect(linkedList.getTail()?.val).toBe(30);
    });

    test("should insert a node at index 0", () => {
      linkedList.insert(10, 0);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(10);
    });

    test("should insert a node at index greater than the list size", () => {
      linkedList.append(10);
      linkedList.insert(20, 5);
      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(10);
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
      expect(result?.val).toBe(2);
    });
  });

  describe("Delete node", () => {
    test("should remove the head node from the list", () => {
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);

      linkedList.deleteHead();

      expect(linkedList.getHead()?.val).toBe(20);
      expect(linkedList.getTail()?.val).toBe(30);
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
      linkedList.append(10);
      linkedList.append(20);
      linkedList.append(30);

      linkedList.deleteTail();

      expect(linkedList.getHead()?.val).toBe(10);
      expect(linkedList.getTail()?.val).toBe(20);
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
      const linkedList = new LinkedList<number>();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(4);

      linkedList.reverse();

      expect(linkedList.toArray()).toEqual([4, 3, 2, 1]);
    });

    it("should handle an empty linked list", () => {
      const linkedList = new LinkedList<number>();

      linkedList.reverse();

      expect(linkedList.toArray()).toEqual([]);
    });

    it("should handle a linked list with a single element", () => {
      const linkedList = new LinkedList<number>();
      linkedList.append(1);

      linkedList.reverse();

      expect(linkedList.toArray()).toEqual([1]);
    });
  });
});
