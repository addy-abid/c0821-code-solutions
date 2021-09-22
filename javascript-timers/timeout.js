var $h1 = document.querySelector('h1');

function updateHeader() {
  $h1.textContent = 'Hello There';
}

setTimeout(updateHeader, 2000)
;
