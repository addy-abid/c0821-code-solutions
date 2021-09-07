/* exported initial */
/*
goal - return array minus last index
create storage for output
look at each index in array minus the last
push each value into storage
return storage
*/

function initial(array) {
  var outPut = [];
  for (var i = 0; i < array.length - 1; i++) {
    outPut.push(array[i]);
  }
  return outPut;
}
