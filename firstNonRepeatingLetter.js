const firstNonRepeatingLetter = word => {
  if (word.length === 1) {
    return word;
  } else {
    let letterToReturn = "";
    wordAsArray = word.toLowerCase().split("");
    wordAsArray.some((letter, index) => {
      if (wordAsArray.indexOf(letter) === wordAsArray.lastIndexOf(letter)) {
        letterToReturn = word[index];
        return true;
      }
    });
    return letterToReturn;
  }
};

module.exports = firstNonRepeatingLetter;
