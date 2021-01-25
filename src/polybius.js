// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybius_square = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', '(i/j)', 'k'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
  ];

  function polybius_encode(input) {
    let cyphertext = "";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === " ") {
        cyphertext += char;
      } else {
        for (let row = 0; row < polybius_square.length; row ++) {
          for (let col = 0; col < polybius_square[row].length; col++) {
            if (polybius_square[row][col].includes(char)) {
              let char_encoded = `${col + 1}${row + 1}`;
              cyphertext += char_encoded;
            }
          }
        }
      }
    }

    return cyphertext;
  }

  function improperCyphertext(input) {
    let words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i].length % 2 == 1) {
        return true;
      }
    }

    return false;
  }

  function polybius_decode(input) {
    if (improperCyphertext(input)) {
      return false;
    }

    let plaintext = "";
    for (let i = 0; i < input.length; i++) {
      const col = input[i];
      // If the column value is actually a space, just add it to the plaintext and continue with the next char
      if (col == " ") {
        plaintext += col;
        continue;
      }
      const row = input[++i];
      const char_decoded = polybius_square[row - 1][col - 1];

      plaintext += char_decoded;
    }

    return plaintext;
  }

  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase();

    if (encode) {
      return polybius_encode(input);
    } else {
      return polybius_decode(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
