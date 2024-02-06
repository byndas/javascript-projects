const test = require("../RPS.js");

describe("test", function () {
  test('returns "Player 1 invalid choice"', function () {
    let output = test.whoWon("umbrella", "rock");
    expect(output.toBe("Player 1 invalid choice"));
  });
  test('returns "Player 2 invalid choice"', function () {
    let output = test.whoWon("rock", "umbrella");
    expect(output.toBe("Player 2 invalid choice"));
  });
  test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = test.whoWon("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });

  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = test.whoWon("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });
});
