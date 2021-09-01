function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);

}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}
function handleInput(event) {
  console.log('value of name:', event.target.name, event.target.value);
}

var $textArea = document.querySelector('textarea');
var $inputFirst = document.querySelector('#user-name');
var $inputSecond = document.querySelector('#user-email');
$inputFirst.addEventListener('focus', handleFocus);
$inputFirst.addEventListener('blur', handleBlur);
$inputFirst.addEventListener('input', handleInput);
$inputSecond.addEventListener('blur', handleBlur);
$inputSecond.addEventListener('focus', handleFocus);
$inputSecond.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('input', handleInput);
$textArea.addEventListener('blur', handleBlur);
