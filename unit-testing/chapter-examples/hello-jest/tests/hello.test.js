const { describe } = require("node:test");
const hello = require("../hello.js");

// two cases to test:
// 1. anon func with string argument that returns a customized greeting
// 2. anon func with no argument that returns a general greeting

// describe("hello", () => {}); // jest test bundler
describe("hello", function () {
  test("should return custom message when name is specified", function () {
    // we expect hello("Jest") to return "Hello, Jest!"
    expect(hello("Jest")).toBe("Hello, Jest!");
  });

  test("should return general greeting when name is not specified", function () {
    // we expect hello() to return "Hello, World!"
    expect(hello()).toBe("Hello, World!");
  });
});
