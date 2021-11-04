/* global data */
/* exported data */
var $photoUrl = document.querySelector('#photo-url');
var $imageTag = document.querySelector('img');
var $formInputs = document.querySelector('#form-inputs');

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
  var newEntry = renderEntries(formData);
  if (data.editing !== null) {
    formData.entryId = data.editing.entryId;
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing.entryId === data.entries[i].entryId) {
        data.entries[i] = formData;
        $allEntries.children[i].replaceWith(newEntry);
        data.editing = null;
        break;
      }
    }
  } else {
    data.nextEntryId++;
    data.entries.unshift(formData);
    $allEntries.prepend(newEntry);
  }
  $imageTag.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formInputs.reset();
  changeView('entries');

}

$formInputs.addEventListener('submit', handleSubmit);

function renderEntries(entry) {
  var $entry = document.createElement('li');
  $entry.className = 'view';
  $entry.setAttribute('data-entry-id', entry.entryId);
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

  var $row2 = document.createElement('div');
  $row2.className = 'row space-between';
  $column2.appendChild($row2);

  var $title = document.createElement('h3');
  $title.textContent = entry.title;
  $row2.appendChild($title);

  var $editIcon = document.createElement('i');
  $editIcon.className = 'fas fa-pen';
  $row2.appendChild($editIcon);

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

var $buttons = document.querySelectorAll('[data-link]');
var $tabView = document.querySelectorAll('[data-view]');

function activeView(event) {
  var viewContent = event.target.getAttribute('data-link');
  changeView(viewContent);

}
function changeView(viewContent) {
  for (var vi = 0; vi < $tabView.length; vi++) {
    if ($tabView[vi].getAttribute('data-view') === viewContent) {
      $tabView[vi].className = 'viewTab';
    } else {
      $tabView[vi].className = 'viewTab hidden';
    }
  }
}

for (var i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener('click', activeView);
}

var $titleInput = document.querySelector('#title');
var $notes = document.querySelector('#notes');

function clickEditIcon(event) {
  if (event.target && event.target.tagName === 'I') {
    var $viewClosestEntry = event.target.closest('.view');
    changeView('entry-form');
    var entryIdNumber = $viewClosestEntry.getAttribute('data-entry-id');

    for (var ei = 0; ei < data.entries.length; ei++) {
      if (Number(entryIdNumber) === data.entries[ei].entryId) {
        data.editing = data.entries[ei];
      }
      $titleInput.value = data.editing.title;
      $photoUrl.value = data.editing.photoUrl;
      $notes.value = data.editing.notes;
    }
  }
}
$allEntries.addEventListener('click', clickEditIcon);
var $deleteLink = document.querySelector('#delete');
var $confirmDeleteButton = document.querySelector('#confirm');
var $cancelDeleteButton = document.querySelector('#cancel');
var $modalOuter = document.querySelector('.modal-outer');

function openDeleteLink(event) {
  $modalOuter.className = 'modal-outer';
}
function closeDeleteLink(event) {
  $modalOuter.className = 'modal-outer hidden';
}
function deleteEntry(event) {
  $allEntries.remove(data.entries[i]);
}
$deleteLink.addEventListener('click', openDeleteLink);
$cancelDeleteButton.addEventListener('click', closeDeleteLink);
$confirmDeleteButton.addEventListener('click', deleteEntry);
