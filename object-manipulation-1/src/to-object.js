/* exported toObject */
/*
create empty object literal for output
iterate over the array to look at each index
assign the array at current index to object
reutn output
*/

function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  obj[key] = value;
  return obj;
}
