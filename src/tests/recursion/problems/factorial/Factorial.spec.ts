import { factorial } from "../../../../recursion/problems/factorial/factorial";

describe("factorial", () => {
  it("should return 1 for input 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 for input 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return the correct factorial for positive numbers", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
    expect(factorial(10)).toBe(3628800);
  });
});
