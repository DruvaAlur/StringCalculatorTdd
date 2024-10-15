const { add } = require("../src/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test('returns 1 for "1"', () => {
  expect(add("1")).toBe(1);
});

test('returns 6 for "1,5"', () => {
  expect(add("1,5")).toBe(6);
});
