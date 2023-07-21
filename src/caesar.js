// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // checks if shift variable exists and is between -25 and 25 (excluding 0)
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    // creates a variable that is a string of the alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // create a string that will be our updated alphabet output
    let shiftedAlphabet = "";
    // creates a counter to keep track of spaces while looping
    let characterCounter = 0;
    // checks to see if we are encoding
    // loops through the input and matches each letter to the index of the alphabet string
    // increments the index by the shift number and changes the input string value to that
    if (encode) {
      for (i = 0; i < input.length; i++) {
        let inputLetter = input[i].toLowerCase();
        for (j = 0; j < alphabet.length; j++) {
          let alphabetLetter = alphabet[j];
          /* checks if the index value would be between 0 and 26 
          if so, makes that number the shift index
          if not, subtracts or adds 26 to circle through the alphabet 
          and sets that new value to be the shift index */
          if ((j + shift) < 26 && (j + shift) >= 0) {
            shiftedJ = j + shift;
          } else if ((j + shift) >= 26) {
            shiftedJ = (j + shift) - 26;
          } else if ((j + shift) < 0) {
            shiftedJ = (j + shift) + 26;
          } 
          // once a match is found, adds the letter at the alphebets shifted index to the return string
          // and increments the character counter so we know it was not a space or special character
          if (inputLetter === alphabetLetter) {
            shiftedAlphabet += alphabet[shiftedJ];
            characterCounter++;
          }
        }
        // if no matches were found, there is a space or other symbol, so characetCounter was not incremented 
        // adds the inputLetter and increments the counter before looping again
        if (characterCounter === i) {
          shiftedAlphabet += inputLetter;
          characterCounter++;
        }
      }
    }
    // does the same thing as above, but shifts in the opposite direction
    if (!encode) {
      for (i = 0; i < input.length; i++) {
        let inputLetter = input[i].toLowerCase();
        for (j = 0; j < alphabet.length; j++) {
          let alphabetLetter = alphabet[j];
          if ((j - shift) < 26 && (j - shift) >= 0) {
            shiftedJ = j - shift;
          } else if ((j - shift) >= 26) {
            shiftedJ = (j - shift) - 26;
          } else if ((j - shift) < 0) {
            shiftedJ = (j - shift) + 26;
          } 
          if (inputLetter === alphabetLetter) {
            shiftedAlphabet += alphabet[shiftedJ];
            characterCounter++;
          }
        }
        if (characterCounter === i) {
          shiftedAlphabet += inputLetter;
          characterCounter++;
        }
      }
    }
    return shiftedAlphabet;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
