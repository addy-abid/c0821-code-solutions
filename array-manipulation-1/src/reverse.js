/* exported reverse */
/*
goal - return the array in reverse
create storage for output
look at each value in array starting at last
push values into storage
return storage
*/

function reverse(array) {
  var outPut = [];
  for (var i = array.length - 1; i >= 0; i--) {
    outPut.push(array[i]);
  }
  return outPut;
}
