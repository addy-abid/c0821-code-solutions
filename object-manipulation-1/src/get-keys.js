/* exported getKeys */
/*
 goal - return an array of objects property keys
create storage for output
iterate over keys in object using for in
push key values to output
return output
 */

function getKeys(object) {
  var output = [];
  for (var keys in object) {
    output.push(keys);
  }
  return output;
}
