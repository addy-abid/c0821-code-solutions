
function showModal(event) {

  $overlay.classList.remove('hidden');

}
function hideModal(event) {
  $overlay.classList.add('hidden');
}

var $openModal = document.querySelector('.open-modal');
$openModal.addEventListener('click', showModal);

var $buttonNo = document.querySelector('.button-no');
$buttonNo.addEventListener('click', hideModal);

var $overlay = document.querySelector('.overlay');
