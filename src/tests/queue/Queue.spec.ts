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
});
