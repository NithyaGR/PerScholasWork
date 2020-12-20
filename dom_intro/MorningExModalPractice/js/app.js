
$( () => {

//Grabbing Elements
const $openBtn = $('#openModal');//About game button
const $modal = $('#modal');//div
const $closeBtn = $('#close');//close link

//Event Handlers
const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

//Event Listeners
$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);

}); //
//setTimeout(openModal, 5000);
