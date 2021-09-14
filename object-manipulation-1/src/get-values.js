/* exported getValues */
/*
goal - return values of key in object
created storage for output
iterate over keys in object
push value of keys of object to output
return output
*/

function getValues(object) {
  var output = [];
  for (var keys in object) {

    output.push(object[keys]);
  }
  return output;
}
