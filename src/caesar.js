// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar_encode(input, shift) {
    input = input.toLowerCase();
    let encoded_text = "";
    
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const letter_idx = alphabet.indexOf(char);
      if (letter_idx != -1) {
        let cypher_idx = (letter_idx + shift) % 26;
        if (cypher_idx < 0) {
          console.log(cypher_idx);
          cypher_idx = 26 + cypher_idx;
        }
        encoded_text += alphabet[cypher_idx];
      } else {
        encoded_text += input[i];
      }

      console.log(encoded_text);
    }

    return encoded_text;
  }

  function caesar_decode(input, shift) {
    return caesar_encode(input, -shift);
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift == 0 || shift > 25 || shift < -25) {
      return false;
    }

    if (encode) {
      return caesar_encode(input, shift);
    } else {
      return caesar_decode(input, shift);
    }
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
