/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('NotesView', () => {
  
  it('display 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel
    const notesView = new NotesView(notesModel);

    notesModel.addNote('note1');
    notesModel.addNote('note2');
    
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('displays input and buttons in the browser', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const buttonEl = document.querySelector('#add-note-button');

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'First Note';

    buttonEl.click();
    notesView.addNewNote(inputEl.value);

    setTimeout(() => {
      (expect(document.querySelector('div.note').length).toEqual(1));
    }, 5000);
  });
  
  it('display 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel
    const notesView = new NotesView(notesModel);

    notesModel.addNote('note1');
    notesView.displayNotes();
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
  });
})
