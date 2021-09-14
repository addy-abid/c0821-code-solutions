/* exported isUpperCased */

/*
goal - return true if all chars in string are uppercase, else return false
check each char in string
if word is Upper
return true
if word lower
return false

*/

function isUpperCased(word) {

  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }

}
