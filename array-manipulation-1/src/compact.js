/* exported compact */
/*
goal - omit any false value from array
create storage for output
create variable for all false values
if false store in separate storage
look at each value in array
if value is equal to true push to output
return storage
*/

function compact(array) {
  var truthy = [];
  var falsy = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === 0 || array[i] === null || isNaN(array[i]) || array[i] === undefined) {
      falsy.push(array[i]);
    } else {
      truthy.push(array[i]);
    }

  }
  return truthy;
}
