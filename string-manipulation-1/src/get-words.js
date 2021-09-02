/* exported getWords */
/*
goal - return array with each word in parameter
create storage for output
create storage for each word in string
look at each char in string
if space, add current word to list of word
otherwise, add current char to word.
return list of words
*/

function getWords(string) {
  var outPut = [];
  var word = '';
  var lastSpace = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ' || i === string.length - 1) {
      for (var j = lastSpace; j <= i; j++) {
        if (string[j] !== ' ') {
          word += string[j];
        }
      }
      outPut.push(word);
      word = '';
      lastSpace = i;
    }

  }

  return outPut;
}
