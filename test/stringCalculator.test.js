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

test('returns 6 for "1\\n2,3"', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('returns 3 for "//;\\n1;2"', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error for negative numbers", () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});

test('returns 2 for "2,1001"', () => {
  expect(add("2,1001")).toBe(2);
});
