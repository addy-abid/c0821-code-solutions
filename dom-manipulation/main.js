var clicks = 0;

var $clickCount = document.querySelector('.click-count');

function getClicks(event) {

}
var $hotButton = document.querySelector('.hot-button');
$hotButton.addEventListener('click', getClicks);

clicks++;
$clickCount.textContent = clicks;
