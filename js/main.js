/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photo-url');
var $imageTag = document.querySelector('img');
var $formInputs = document.querySelector('#form-inputs');
// var $newEntryButton = document.querySelector('.new-entry-button');

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

function renderEntries(entry) {
  var $entry = document.createElement('li');
  $entry.className = 'view';
  $allEntries.appendChild($entry);

  var $row = document.createElement('div');
  $row.className = 'row';
  $entry.appendChild($row);

  var $column1 = document.createElement('div');
  $column1.className = 'column-half';
  $row.appendChild($column1);

  var $photo = document.createElement('img');
  $photo.setAttribute('src', entry.photoUrl);
  $column1.appendChild($photo);

  var $column2 = document.createElement('div');
  $column2.className = 'column-half';
  $row.appendChild($column2);

  var $title = document.createElement('h3');
  $title.textContent = entry.title;
  $column2.appendChild($title);

  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $column2.appendChild($notes);

  return $entry;
}
var $allEntries = document.querySelector('ul');

function handleDomContent(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newEntry = renderEntries(data.entries[i]);
    $allEntries.append(newEntry);
  }
}
window.addEventListener('DOMContentLoaded', handleDomContent);

// var $tabs = document.querySelectorAll('.viewTab');
// var $tabView = document.querySelectorAll('[data-view]');
// var $formContainer = document.querySelector('#form-inputs');

// function activeView(event) {
//   if (event.target.matches('.viewTab')) {
//     for (var i = 0; i < $tabs.length; i++) {
//       if (event.target === $tabs[i]) {
//         $tabs[i].className = 'viewTab';
//       } else {
//         $tabs[i].className = 'viewTab hidden';
//       }
//     }
//   }
// }
// if (event.target.matches('.viewTab')) {
//   var viewContent = event.target.getAttribute('data-view');
//   for (var vi = 0; vi < $tabView.length; vi++);
//   if ($tabView[vi].getAttribute('data-view') === viewContent) {
//     $tabView[vi].className = 'viewTab';
//   } else {
//     $tabView[vi].className = 'viewTab hidden';
//   }
// }
// $formContainer.addEventListener('click', activeView);
