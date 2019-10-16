const firstNonRepeatingLetter = require("./firstNonRepeatingLetter");

describe("firstNonRepeatingLetter", () => {
  it("Returns the only letter when the length of the string is 1", () => {
    expect(firstNonRepeatingLetter("a")).toEqual("a");
  });

  it("Returns the first non-repeating letter when there is only one non-repeating letter", () => {
    expect(firstNonRepeatingLetter("aab")).toEqual("b");
  });

  it("Returns the first non-repeating letter when there are more than one non-repeating letters", () => {
    expect(firstNonRepeatingLetter("aadee")).toEqual("d");
    expect(firstNonRepeatingLetter("moonmen")).toEqual("e");
  });

  it("returns the first non-repeating letter when there is more than one of these", () => {
    expect(firstNonRepeatingLetter("stress")).toEqual("t");
  });

  xit("Returns an empty string if all the letters are repeated", () => {
    expect(firstNonRepeatingLetter("abba")).toEqual("");
  });
});
