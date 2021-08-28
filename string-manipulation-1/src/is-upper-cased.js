/* exported isUpperCased */
/*
goal - return a boolean indicating whether all characters in word are uppercase
look at each character in word
if all characters in word are upper
  - return true
otherwise
  -return false

*/

function isUpperCased(word) {
  var outPut = '';
  for (var i = 0; i < word; i++) {
    if (word === word.toUpperCase()) {
      outPut = true;
    } else {
      outPut = false;
    }
    outPut = word;
  }
  return outPut;
}
