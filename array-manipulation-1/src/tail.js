/* exported tail */
/*
goal - return new array containing all elements after first
create storage for output
look at each index in array after first
push the remaining values into storage
return storage
*/

function tail(array) {
  var outPut = [];
  for (var i = 1; i < array.length; i++) {
    outPut.push(array[i]);
  }
  return outPut;
}
