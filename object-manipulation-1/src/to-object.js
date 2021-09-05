/* exported toObject */
/*
create empty object literal for output
iterate over the array to look at each index
assign the array at current index to object
reutn output
*/

function toObject(keyValuePair) {
  var outPut = {};

  for (var i = 0; i < keyValuePair.length; i++) {
    outPut[keyValuePair[i].keyValuePair] = keyValuePair[i];

  }
  return outPut;
}
