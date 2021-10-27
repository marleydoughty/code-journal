/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photo-url');
var $imageTag = document.querySelector('img');
var $formInputs = document.querySelector('#form-inputs');

// var $save = document.querySelector('.button');
// var $title = document.querySelector('#title');
// var $notes = document.querySelector('#notes');

function handleInput(event) {
  $imageTag.setAttribute('src', event.target.value);
}
$photoUrl.addEventListener('input', handleInput);

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
  $imageTag.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formInputs.reset();
}

$formInputs.addEventListener('submit', handleSubmit);

// function journalEntry(event) {
//   var $allEntries = document.createElement('ul');
//   $allEntries.setAttribute('id', 'view-entries');
//   var $entry = document.createElement('li');
//   $entry.className = 'view';
//   $allEntries.appendChild($entry);
//   var $row = document.createElement('div');
//   $row.className = 'row';
//   $entry.appendChild($row);
//   var $column1 = document.createElement('div');
//   $column1.className = 'column-half';
//   $row.appendChild($column1);
//   var $photo = document.createElement('img');
//   $photo.setAttribute('src', $formInputs.elements['photo-url'].value);
//   $column1.appendChild($photo);
//   var $column2 = document.createElement('div');
//   $column2.className = 'column-half';
//   $row.appendChild($column2);
//   var $title = document.createElement('h4');
//   $title.textContent = $formInputs.elements.title.value;
//   $column2.appendChild($title);
//   var $notes = document.createElement('p');
//   $notes.textContent = $formInputs.elements.notes.value;
//   $column2.appendChild($notes);
//   return $allEntries;
// }
