const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
 
const notesModel = new NotesModel();
console.log('The notes app is running');
console.log(notesModel.getNotes());

notesModel.addNote('This is an example note');
const notesView = new NotesView(notesModel);

notesView.displayNotes();