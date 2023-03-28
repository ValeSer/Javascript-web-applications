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
})