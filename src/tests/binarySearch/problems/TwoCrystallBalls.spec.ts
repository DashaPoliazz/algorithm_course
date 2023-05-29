import { twoCrystallBalls } from "../../../algorithms/binarySearch/problems/twoCrystallBalls";

describe("twoCrystallBalls", () => {
  it("should return the correct spot for a small array", () => {
    const floors = [false, false, false, false, true];

    const result = twoCrystallBalls(floors);

    expect(result).toBe(4);
  });

  it("should return the correct spot for a large array", () => {
    const floors = Array(100).fill(false);
    for (let i = 63; i < floors.length; i++) {
      floors[i] = true;
    }

    const result = twoCrystallBalls(floors);

    expect(result).toBe(63);
  });

  it("should return 0 if the first floor is the breaking spot", () => {
    const floors = [true, false, false, false, false];

    const result = twoCrystallBalls(floors);

    expect(result).toBe(0);
  });

  it("should return the correct spot if the breaking spot is in the middle", () => {
    const floors = [false, false, true, false, false];

    const result = twoCrystallBalls(floors);

    expect(result).toBe(2);
  });

  it("should return the correct spot if the breaking spot is at the end", () => {
    const floors = [false, false, false, false, true];

    const result = twoCrystallBalls(floors);

    expect(result).toBe(4);
  });

  it("should return -1 if there are no breaking spots", () => {
    const floors = Array(100).fill(false);

    const result = twoCrystallBalls(floors);

    expect(result).toBe(-1);
  });
});
