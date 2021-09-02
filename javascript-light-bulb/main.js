var isOn = false;

function circle(event) {

  if (isOn) {
    isOn = false;
    $button.className = 'off';
    $body.className = 'body-dark';

  } else {
    isOn = true;
    $button.className = 'body-light on';
    $body.className = 'body-light';
  }
}

var $button = document.querySelector('button');
$button.addEventListener('click', circle);

var $body = document.querySelector('body');
