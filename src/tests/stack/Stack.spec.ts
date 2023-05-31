import { Stack } from "../../algorithms/stack/stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("should push values onto the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
  });

  it("should pop values from the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.peek()).toBe(2);

    stack.pop();
    expect(stack.peek()).toBe(1);

    stack.pop();
    expect(stack.peek()).toBeUndefined();
  });

  it("should return undefined when peeking an empty stack", () => {
    expect(stack.peek()).toBeUndefined();
  });

  it("should update the length of the stack", () => {
    expect(stack.length).toBe(0);

    stack.push(1);
    expect(stack.length).toBe(1);

    stack.push(2);
    expect(stack.length).toBe(2);

    stack.pop();
    expect(stack.length).toBe(1);

    stack.pop();
    expect(stack.length).toBe(0);
  });
});
