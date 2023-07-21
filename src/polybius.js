// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  /* creates a cipher array which is an array of objects holding a letter and its corresponding
   polybius number match. i and j hold the same number value */
  let cipher = [
    { 
    letter: "a",
    number: "11"
  },
  { 
    letter: "b",
    number: "21"
  },
  { 
    letter: "c",
    number: "31"
  },
  { 
    letter: "d",
    number: "41"
  },
  { 
    letter: "e",
    number: "51"
  },
  { 
    letter: "f",
    number: "12"
  },
  { 
    letter: "g",
    number: "22"
  },
  { 
    letter: "h",
    number: "32"
  },
  { 
    letter: "i",
    number: "42"
  },
  { 
    letter: "j",
    number: "42"
  },
  { 
    letter: "k",
    number: "52"
  },
  { 
    letter: "l",
    number: "13"
  },
  { 
    letter: "m",
    number: "23"
  },
  { 
    letter: "n",
    number: "33"
  },
  { 
    letter: "o",
    number: "43"
  },
  { 
    letter: "p",
    number: "53"
  },
  { 
    letter: "q",
    number: "14"
  },
  { 
    letter: "r",
    number: "24"
  },
  { 
    letter: "s",
    number: "34"
  },
  { 
    letter: "t",
    number: "44"
  },
  { 
    letter: "u",
    number: "54"
  },
  { 
    letter: "v",
    number: "15"
  },
  { 
    letter: "w",
    number: "25"
  },
  { 
    letter: "x",
    number: "35"
  },
  { 
    letter: "y",
    number: "45"
  },
  { 
    letter: "z",
    number: "55"
  }
  ];


  function polybius(input, encode = true) {
    // creates a variable that holds the input with no spaces
    let characterLengthTest = input.split(" ").join("");
    // creates a variable that tests if the consolidated variables length is even or odd
    let evenNumber = Number.isInteger(characterLengthTest.length / 2);
    // returns false if encoding is false or if the input length is odd
    if (!encode && !evenNumber) return false;

    // creates an output string variable that we will add to
    let returnMessage = "";
    // creates a counter to check for spaces
    let characterCounter = 0;
    // checks to see if encoding or not
    if (encode) {
      // creates a variable to ignore capitalization and loops through it
      lowercaseInput = input.toLowerCase();
      for (i = 0; i < lowercaseInput.length; i++) {
        let letter = lowercaseInput[i];
        // at each letter, loops through the cipher array and sees if each item's letter matches the input letter
        cipher.forEach((item) => {
          // if a match is found, adds the number of that item to the return message string and increments the counter
          if (item.letter === letter) {
            returnMessage += item.number; 
            characterCounter++;
          }
        });
        // if no match is found, there must be a space. adds the space and increments the counter before looping again 
        if (i === characterCounter) {
          returnMessage += " "; 
          characterCounter++;
        }
      }
    }

    // does the same looping process with slight aterations when not encoding
    if (!encode) {
      for (i = 0; i < input.length; i++) {
        // creates a variable that will be the double digit input representing a single letter
        let numb = input[i] + input[i+1];
        // takes the number and loops through the cipher array with it
        cipher.forEach((item) => {
          // if that number matches a specific array items number, adds the items letter to the return message
          // increments the counter by 2 and increments the loop by an 1 extra to account for the double digit number
          if (item.number === numb) {
            returnMessage += item.letter; 
            characterCounter += 2;
            i++;
          }
        });
        // if no match was found, increments the counter and add a space to the return message
        if (i === characterCounter) {
          returnMessage += " "; 
          characterCounter++;
        }
      }
    }

    return returnMessage;
  }
    

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
