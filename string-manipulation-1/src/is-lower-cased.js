/* exported isLowerCased */
/*
goal - return true if word is all lowercase
-else return false
check each character in word
if all lowercase return true
if 1 or more is Uppercase, return false

*/

function isLowerCased(word) {

  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }

}
