'use strict';

const color = document.querySelector('#color');
const createBtn = document.querySelector('#createBtn');
const list = document.querySelector('.list');

let data = [];

/* -------- Load data from LocalStorage -------- */

const savedData = localStorage.getItem('PROJECTDATA');

if (savedData) {
  data = JSON.parse(savedData);
  renderAllNotes();
}

/* -------- Create Note -------- */

createBtn.addEventListener('click', function () {
  const noteData = {
    id: Date.now(),
    text: '',
    color: color.value,
  };

  data.push(noteData);

  localStorage.setItem('PROJECTDATA', JSON.stringify(data));

  renderNote(noteData);
});

/* -------- Render Single Note -------- */

function renderNote(note) {
  let noteHTML = `
    <div class="note" data-id="${note.id}" style="border-color:${note.color}">
        <textarea class ="text"placeholder="Write note...">${note.text}</textarea>
        <i class="bi bi-x-lg close-icon close"></i>
    </div>
  `;

  list.insertAdjacentHTML('beforeend', noteHTML);

  const newNote = list.lastElementChild;

  if (note.x !== undefined && note.y !== undefined) {
    newNote.style.left = note.x + 'px';
    newNote.style.top = note.y + 'px';
  }
}

/* -------- Render All Notes (Page Reload) -------- */

function renderAllNotes() {
  data.forEach((note) => {
    renderNote(note);
  });
}

document.addEventListener('input', function (e) {
  if (!e.target.matches('textarea')) return;

  const textarea = e.target;

  const noteElement = textarea.closest('.note');

  const noteId = +noteElement.dataset.id;

  const noteObject = data.find((note) => note.id === noteId);
  if (!noteObject) return;

  noteObject.text = textarea.value;

  localStorage.setItem('PROJECTDATA', JSON.stringify(data));
});

/* -------- Delete Note -------- */

document.addEventListener('click', function (e) {
  if (!e.target.classList.contains('close')) return;

  const noteElement = e.target.closest('.note');

  const noteId = +noteElement.dataset.id;

  const index = data.findIndex((note) => note.id === noteId);

  if (index !== -1) {
    data.splice(index, 1);
  }

  noteElement.remove();

  localStorage.setItem('PROJECTDATA', JSON.stringify(data));
});

/* -------- Drag And Drop -------- */

let dragItem = null;
let shiftX = 0;
let shiftY = 0;

document.addEventListener('mousedown', function (e) {
  const note = e.target.closest('.note');

  if (!note) return;

  dragItem = note;

  const userReact = dragItem.getBoundingClientRect();

  shiftX = e.clientX - userReact.left;
  shiftY = e.clientY - userReact.top;

  dragItem.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function (e) {
  if (!dragItem) return;

  dragItem.style.left = e.clientX - shiftX + 'px';
  dragItem.style.top = e.clientY - shiftY + 'px';
});

document.addEventListener('mouseup', function () {
  if (!dragItem) return;

  const noteId = +dragItem.dataset.id;

  const noteObject = data.find((note) => note.id === noteId);

  if (!noteObject) return;

  noteObject.x = dragItem.offsetLeft;
  noteObject.y = dragItem.offsetTop;

  console.log(data);

  localStorage.setItem('PROJECTDATA', JSON.stringify(data));

  dragItem.style.cursor = 'grab';

  dragItem = null;
});

/*-------working start---------*/

// const createItem = () => {
//   let selectedColor = color.value;

//   let noteHTML = `
//      <div class="note">
//           <textarea placeholder="Write note..."></textarea>
//           <i class="bi bi-x-lg close-icon close"></i>
//      </div>
//   `;

//   list.insertAdjacentHTML('beforeend', noteHTML);

//   list.lastElementChild.style.borderColor = selectedColor;
//   list.lastElementChild.style.cursor = 'grab';
// };

// createBtn.addEventListener('click', createItem);

// document.addEventListener('click', function (e) {
//   if (!e.target.classList.contains('close-icon')) return;

//   const note = e.target.closest('.note');
//   note.remove();
// });

// let dragItem = null;
// let shiftX = 0;
// let shiftY = 0;

// document.addEventListener('mousedown', function (e) {
//   const note = e.target.closest('.note');

//   if (!note) return;

//   dragItem = note;

//   const react = dragItem.getBoundingClientRect();
//   shiftX = e.clientX - react.left;
//   shiftY = e.clientY - react.top;

//   dragItem.style.cursor = 'grabbing';
// });

// document.addEventListener('mousemove', function (e) {
//   if (!dragItem) return;

//   dragItem.style.left = e.clientX - shiftX + 'px';
//   dragItem.style.top = e.clientY - shiftY + 'px';
// });

// document.addEventListener('mouseup', function () {
//   if (dragItem) {
//     dragItem.style.cursor = 'grab';
//   }

//   dragItem = null;
// });
