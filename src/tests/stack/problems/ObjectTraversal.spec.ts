import {
  ObjectToTraverse,
  objectTraversal,
} from "../../../algorithms/stack/problems/objectTraversal";

describe("objectTraversal", () => {
  it("should log all numbers in the object", () => {
    const data: ObjectToTraverse = {
      a: {
        b: 1,
        c: {
          d: 2,
        },
      },
      e: {
        f: {
          g: 3,
        },
      },
    };

    const consoleSpy = jest.spyOn(console, "log");

    objectTraversal(data);

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);

    consoleSpy.mockRestore();
  });

  it("should not log non-number values in the object", () => {
    const data: ObjectToTraverse = {
      a: {
        b: 1,
        c: {
          d: {
            e: 4,
          },
        },
      },
      f: "not a number",
    };

    const consoleSpy = jest.spyOn(console, "log");

    objectTraversal(data);

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(4);
    expect(consoleSpy).not.toHaveBeenCalledWith("not a number");

    consoleSpy.mockRestore();
  });
});
