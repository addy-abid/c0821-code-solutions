/* exported reverseWord */
/*
goal - take in string and output string in reverse
create storage for output
grab each letter in length of string in reverse
add string to output
return output
*/
function reverseWord(word) {
  var outPut = '';
  for (var i = word.length - 1; i >= 0; i--) {
    outPut += word[i];
  }
  return outPut;
}
