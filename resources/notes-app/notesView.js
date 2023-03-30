const NotesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button')
    this.inputEl = document.querySelector('#note-input');

    this.addButtonEl.addEventListener('click', () => {
      const newNote = this.inputEl.value;
      this.addNewNote(newNote);
      this.displayNotes();
    });

  }
  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNewNote(inputEl) {
    this.model.addNote(inputEl);
  }

}

module.exports = NotesView;