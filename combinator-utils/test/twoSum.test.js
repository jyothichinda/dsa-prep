const { twoSum } = require("../src/utils/twoSum");

describe("twoSum()", () => {
  test("returns correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("returns null if no pair found", () => {
    expect(twoSum([1, 2, 3], 7)).toBeNull();
  });
});
