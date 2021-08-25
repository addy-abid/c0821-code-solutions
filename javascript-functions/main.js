function convertMinutesToSeconds(minutes) {
  var converted = minutes * 60;
  return converted;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log(convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Addy');
console.log(greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log(getAreaResult);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamoerouge' });
console.log(getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];

  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(getLastElementResult);
