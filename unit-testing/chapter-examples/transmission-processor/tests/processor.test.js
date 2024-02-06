/*  transmission example: "1410::<932829840830053761>";
    expected result: { id: 1410, dataTrim: 932829840830053761 }

REQUIREMENTS:
    1. takes in a transmission string & returns an object
    2. returns -1 if transmission does NOT contain "::"
    3. returns an object containing an 'id' key
    4. 'id' key value is the transmission portion preceeding "::"
    5. typeof(idKey) should be 'number'
    6. returned object should contain a 'dataTrim' key
    7. 'dataTrim' key value is the transmission portion following "::"
    8. 'dataTrim' key value returns -1 if transmission 'dataTrim' portion is NOT between < & >

EXTRAS:
    9.  trims leading & trailing transmission whitespace
    10. returns -1 if transmission 'id' portion cannot be converted to a number
    11. returns -1 if transmissoin has multiple "::"
    12. does not include < > symbols in 'dataTrim' value
    13. returns -1 for 'dataTrim' value if non-numbers between < > symbols
*/
const processor = require("../processor.js");

describe("transmission processor", function () {
  // 1.takes in a transmission string & returns an object
  test("takes a string returns an object", function () {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });
  // 2. returns -1 if transmission does NOT contain "::"
  test("returns -1 if '::' not found", function () {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });
  // 3. returns an object containing an 'id' key
  test("returns id in object", function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });
  // 4. 'id' key value is transmission portion preceeding "::"
  test("obj.id is transmission portion preceeding ::", function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });
  // 5. typeof result.id should be 'number'
  test("converts id to a number", function () {
    let result = processor("9701::<489584872710>");
    expect(typeof result.id).toBe("number");
  });
  // 6. returned object should contain a 'dataTrim' key
  test("returns dataTrim in object", () => {
    let result = processor("9701::<487297403495720912>");
    expect(result.dataTrim).not.toBeUndefined();
  });
  // 7. 'dataTrim' key value is transmission portion following "::", excluding < & >
  test("obj.dataTrim is transmission portion following ::, excluding < & >", function () {
    let result = processor("9701::<489584872710>");
    expect(result.dataTrim).toBe(489584872710);
  });
  // 8. 'dataTrim' key value returns -1 if transmission 'dataTrim' portion is NOT between < & >
  test("returns -1 for dataTrim if missing < at index [0]", function () {
    let result = processor("9701::487297403495720912>");
    expect(result).toBe(-1);
  });
  test("returns -1 for dataTrim if missing > at index [string.length - 1]", function () {
    let result = processor("9701::<487297403495720912");
    expect(result).toBe(-1);
  });
  // EXTRAS:
  // 9.  trims leading & trailing transmission whitespace
  // 10. returns -1 if transmission 'id' portion cannot be converted to a number
  // 11. returns -1 if transmissoin has multiple "::"
  // 12. does not include < > symbols in 'dataTrim' value
  // 13. returns -1 for 'dataTrim' value if non-numbers between < > symbols
  // 14. typeof dataTrim is 'number'
});
