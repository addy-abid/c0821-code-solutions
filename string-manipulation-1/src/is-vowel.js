/* exported isVowel */
/*
goal - return a boolean true if letter is vowel and false if letter is constanant
check letter in input
if letter is Vowel, return true
else, return false

*/

function isVowel(char) {
  if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
