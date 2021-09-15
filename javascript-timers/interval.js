var $h1 = document.querySelector('h1');
var number = 4;
$h1.textContent = number;
function countDown() {
  if (number > 0) {
    $h1.textContent = number--;
  } else if (number < 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval();
  }
}

setInterval(countDown, 1000);
