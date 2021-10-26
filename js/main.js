/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photo-url');
var $imageTag = document.querySelector('img');
// var $save = document.querySelector('.button');
// var $title = document.querySelector('#title');
// var $notes = document.querySelector('#notes');

function handleInput(event) {
  $imageTag.setAttribute('src', event.target.value);
}
$photoUrl.addEventListener('input', handleInput);

var $formInputs = document.querySelector('#form-inputs');
function handleSubmit(event) {
  event.preventDefault();
  var formData = {
    title: $formInputs.elements.title.value,
    photoUrl: $formInputs.elements['photo-url'].value,
    notes: $formInputs.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(formData);

}

$formInputs.addEventListener('submit', handleSubmit);
