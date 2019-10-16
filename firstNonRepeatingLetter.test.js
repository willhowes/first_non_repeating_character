const firstNonRepeatingLetter = require("./firstNonRepeatingLetter");

describe("firstNonRepeatingLetter", () => {
  it("Returns the only letter when the length of the string is 1", () => {
    expect(firstNonRepeatingLetter("a")).toEqual("a");
  });
});
