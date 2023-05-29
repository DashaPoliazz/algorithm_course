import { Queue } from "../../algorithms/queue/queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("should enqueue elements correctly", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.length).toBe(3);
  });

  it("should dequeue elements in the correct order", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.length).toBe(0);
  });

  it("should return undefined when dequeueing from an empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  it("should return undefined when the queue is empty", () => {
    expect(queue.peek()).toBeUndefined();
  });

  it("should return the first element without removing it", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it("should return the correct element after dequeue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
  });

  it("should return the same element after multiple peeks", () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
  });
});
