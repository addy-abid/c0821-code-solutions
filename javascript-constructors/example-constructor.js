function ExampleConstructor() {

}
console.log('value of prototype: ', ExampleConstructor.prototype);
console.log('type of prototype: ', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('value of newConstructor: ', newConstructor);
console.log('instance of: ', newConstructor instanceof ExampleConstructor);
