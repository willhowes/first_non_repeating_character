const firstNonRepeatingLetter = word => {
  if (word.length === 1) {
    return word;
  } else {
    let letterToReturn = "";
    word.split("").forEach(letter => {
      if (word.indexOf(letter) === word.lastIndexOf(letter)) {
        letterToReturn = letter;
      }
    });
    return letterToReturn;
  }
};

module.exports = firstNonRepeatingLetter;
