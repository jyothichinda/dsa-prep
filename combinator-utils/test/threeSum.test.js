const { threeSum } = require("../src/utils/threeSum");

describe("threeSum()", () => {
  test("finds triplets that sum to 0", () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toEqual(
      expect.arrayContaining([
        [-1, -1, 2],
        [-1, 0, 1],
      ])
    );
  });

  test("returns empty if no valid triplet", () => {
    expect(threeSum([1, 2, 3], 0)).toEqual([]);
  });
});
