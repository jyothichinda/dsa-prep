const { subsets } = require("../src/utils/subsets");

describe("subsets()", () => {
  test("generates all subsets", () => {
    const result = subsets([1, 2]);
    expect(result).toEqual(expect.arrayContaining([[], [1], [2], [1, 2]]));
  });

  test("works with empty input", () => {
    expect(subsets([])).toEqual([[]]);
  });
});
