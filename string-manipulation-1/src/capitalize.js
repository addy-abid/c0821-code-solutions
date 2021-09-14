/* exported capitalize */
/*
goal - reutn string (original word) with first character Uppercase and the rest lowercase
create storage for output;
storage to hold total value
storage to hold uppercase value
storage to hold lower case value
convert the first index to uppercase and store in storage
convert every other letter to lowercase and store value
combine the lower and uppercase values in storage output
return output with first index capitalized
*/

function capitalize(word) {
  var upper = '';
  var lower = '';

  upper = word[0].toUpperCase();
  lower = word.substring(1).toLowerCase();

  var output = upper + lower;
  return output;
}
