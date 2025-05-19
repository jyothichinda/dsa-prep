const { findKSum } = require("../src/utils/kSum");

describe("findKSum()", () => {
  test("finds 4-sum combinations", () => {
    const result = findKSum([1, 0, -1, 0, -2, 2], 4, 0);
    expect(result).toEqual(
      expect.arrayContaining([
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ])
    );
  });

  test("returns empty for no solution", () => {
    expect(findKSum([1, 2, 3], 3, 99)).toEqual([]);
  });
});
