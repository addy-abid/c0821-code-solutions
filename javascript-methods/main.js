var num1 = 1;
var num2 = 3;
var num3 = 8;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['spiderman', 'ironman', 'hulk', 'thor'];
var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'The timeless way of building',
    author: 'Alexander, Christopher'
  },
  {
    title: 'The art of sql',
    author: 'Faroult, Stephanie'
  }

];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Addy Abid';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
