const launchcode = require("../index.js");

// Write a test checking for specific outcome & run to ensure it fails
// Write a code snippet that passes the test
// Repeat for remaining program features & refactor, Don’t Repeat Yourself
describe("Testing launchcode", function () {
  test("launchcode.organization is nonprofit", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("launchcode.executiveDirector is Jeff", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("launchcode.percentageCoolEmployees is 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("launchcode.programsOffered array values are Web Development, Data Analysis, Liftoff", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
  });

  test("num % 2 === 0", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });
  test("num % 3 === 0", () => {
    expect(launchcode.launchOutput(9)).toBe("Code");
  });
  test("num % 5 === 0", () => {
    expect(launchcode.launchOutput(25)).toBe("Rocks");
  });
  test("num % 2 === 0 && num % 3 === 0", () => {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks");
  });
  test("!output", () => {
    expect(launchcode.launchOutput()).toBe("Rutabags! That doesn't work.");
  });
  test("output === Launch Rocks", () => {
    expect(launchcode.launchOutput()).toBe(`${output}! Smack!`);
  });
  test("", () => {
    expect(launchcode.launchOutput()).toBe(`${output}!`);
  });
});
