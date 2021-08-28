/* exported getLastChar */
/*
goal - return the last character of each word
- need storage to hold character
- find length of each word
-subtract 1 from length to get the index
- store value in storage
-return storage
*/

function getLastChar(string) {
  var outPut = '';
  outPut = string[string.length - 1];
  return outPut;
}
