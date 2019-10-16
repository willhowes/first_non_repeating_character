const firstNonRepeatingLetter = word => {
  if (word.length === 1) {
    return word;
  } else {
    let letterToReturn = "";
    wordFormatterAsArray = word.toLowerCase().split("");
    wordFormatterAsArray.some((letter, index) => {
      if (
        wordFormatterAsArray.indexOf(letter) ===
        wordFormatterAsArray.lastIndexOf(letter)
      ) {
        letterToReturn = word[index];
        return true;
      }
    });
    return letterToReturn;
  }
};

module.exports = firstNonRepeatingLetter;
