
var i = -1;

document.addEventListener('keydown', function (event) {

  var $span = document.querySelectorAll('span');

  i++;
  if (event.key === $span[i].textContent) {
    $span[i].className = 'green';
    $span[i].classList.add('underline');
    $span[i - 1].classList.remove('underline');

  } else if (event.key !== $span[i].textContent) {
    $span[i].className = 'red';
    $span[i].classList.add('error');
    $span[i - 1].classList.remove('underline');
    i--;
  }

});
