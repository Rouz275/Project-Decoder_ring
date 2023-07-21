// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // creates an array to hold the standard alphabet letters that we can loop through later
  const standardAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  // creates a helper function that checks if our alphabet parameter has any duplicate letters
  function includesDuplicates(alphabet) {
    // creates a new variable to use for a check
    let newAlphabet = "";
    for (i = 0; i < alphabet.length; i++) {
      let letter = alphabet[i];
      // checks if the new variable already as the incoming letter, returns true if it does
      if (newAlphabet.includes(letter)) return true;
      // if it does not, it adds the letter to the new variable and continues looping
      newAlphabet += letter;
    }
    // if it finishes looping without returning true, it will return false
    return false;
  }

  function substitution(input, alphabet, encode = true) {
    // checks if alphabet parameter exists and is that is it exactly 26 characters
    if (!alphabet || alphabet.length != 26) return false;
    // checks if alphabet has duplicate letters
    if (includesDuplicates(alphabet)) return false;

    // creates a new variable to be added to and returned
    let newMessage = "";
    // creates a counter to keep track of spaces
    let characterCounter = 0;
    if (encode) {
      // if encoding, loops through the input string
      for (i = 0; i < input.length; i++) {
        // creates a lowercase variable to avoid capitalization issues
        let inputLetter = input[i].toLowerCase();
        // takes each individual input letter and loops it through the standard alphabet
        standardAlphabet.forEach ((letter) =>  {
          /* if the input letter matches any letter in the standard alphabet, it stores in a new variable
          the substitution alphabets character from the index of the standard alphabet letter
          that matches the input letter */
          let newLetter = alphabet[standardAlphabet.indexOf(letter)];
          if (letter === inputLetter) {
            newMessage += newLetter;
            characterCounter++;
          }
        });
        // if no matches were found, adds a space and increments the counter
        if (i === characterCounter) {
          newMessage += " ";
          characterCounter++;
        }
      }
    }

    // does a similar process if decoding, but with slight alterations
    if (!encode) {
      for (i = 0; i < input.length; i++) {
        let inputLetter = input[i].toLowerCase();
        // after looping through the input, loops through the substitution alphabet this time
        // instead of looping through the standard alphabet
        for (j = 0; j < alphabet.length; j++) {
          // creates 2 variables that hold the sub alphabet and standard alphabet characters at the same index
          let newLetter = alphabet[j];
          let standardLetter = standardAlphabet[j];
          // if the input letter matches the sub alphabet's letter
          // it adds to the output message the STANDARD alphabets character and increments the space counter
          if (newLetter === inputLetter) {
            newMessage += standardLetter;
            characterCounter++;
          }
        }
        // if no matches were found, adds a space and increments the counter
        if (i === characterCounter) {
          newMessage += " ";
          characterCounter++;
        }
      }
    }
    return newMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
