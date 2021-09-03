/* exported compact */
/*
goal - omit any false value from array
create storage for output
create variable for all false values
look at each value in array
if value is equal to true push to output
return storage
*/

function compact(array) {
  var truthy = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);

    }
  }
  return truthy;
}
