const firstNonRepeatingLetter = word => {
  if (word.length === 1) {
    return word;
  } else {
    let letterToReturn = "";
    word.split("").some(letter => {
      if (word.indexOf(letter) === word.lastIndexOf(letter)) {
        letterToReturn = letter;
        return true;
      }
    });
    return letterToReturn;
  }
};

module.exports = firstNonRepeatingLetter;
