// import isPalindrome from "../palindrome";
const isPalindrome = require("../palindrome.js");

// WRITE TESTS BEFORE CODE
describe("isPalindrome", function () {
  // POSITIVE CASES
  test("should return true for a single letter", function () {
    expect(isPalindrome("a")).toBe(true);
  });

  test("should return true for a single letter repeated", function () {
    expect(isPalindrome("aaa")).toBe(true);
  });

  test("should return true for a simple palindrome", function () {
    expect(isPalindrome("aba")).toBe(true);
  });

  test("should return true for a longer palindrome", function () {
    expect(isPalindrome("racecar")).toBe(true);
  });

  // NEGATIVE CASES
  test("should return false for a longer non-palindrome", function () {
    expect(isPalindrome("launchcode")).toBe(false);
  });

  test("should return false for a simple non-palindrome", function () {
    expect(isPalindrome("ab")).toBe(false);
  });

  test("should be case-sensitive", function () {
    expect(isPalindrome("abA")).toBe(false);
  });

  test("should consider whitespace", function () {
    expect(isPalindrome("so many dynamos")).toBe(false);
  });

  // EDGE CASE
  test("should consider the empty string a palindrome", function () {
    expect(isPalindrome("")).toBe(true);
  });
});
