const Daily = require("./daily");

describe("Daily zinc", () => {
  test("should recommend 1, 30mg zinc when value<3", () => {
    expect(Daily.recommendationZinc(2, 1)).toEqual(
      "you should take 1, 30mg zinc daily"
    );
  });
  test("sould recommend 2, 30mg zinc when value%3 === 0", () => {
    expect(Daily.recommendationZinc(6, 1)).toEqual(
      "you should take 2, 30mg zinc daily"
    );
  });
  test("sould recommend 3, 50mg zinc when value%5 === 0", () => {
    expect(Daily.recommendationZinc(15, 1)).toEqual(
      "you should take 3, 50mg zinc daily"
    );
  });
});
