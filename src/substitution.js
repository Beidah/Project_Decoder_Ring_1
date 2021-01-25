// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const plaintext_alphabet = "abcdefghijklmnopqrstuvwxyz";

  function invalidSubstitutionAlphabet(alphabet) {
    if (alphabet.length != 26) {
      return true;
    }

    const chars = alphabet.split("");
    return chars.some(function(v,i,a){
      return a.lastIndexOf(v)!=i;
    });
  }

  function substitution_encode(input, alphabet) {
    let cyphertext = "";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const charIdx = plaintext_alphabet.indexOf(char);
      if (charIdx != -1) {
        cyphertext += alphabet[charIdx];
      } else {
        cyphertext += char;
      }
    }

    return cyphertext;
  }

  function substitution_decode(input, alphabet) {
    let plaintext = "";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const charIdx = alphabet.indexOf(char);
      console.log(`${char}: ${charIdx}`);
      if (charIdx != -1) {
        plaintext += plaintext_alphabet[charIdx];
      } else {
        plaintext += char;
      }
    }

    return plaintext;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase();

    if (!alphabet || invalidSubstitutionAlphabet(alphabet)) {
      return false;
    }

    if (encode) {
      return substitution_encode(input, alphabet);
    } else {
      return substitution_decode(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
