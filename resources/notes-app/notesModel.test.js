const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty list', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it('adds a note', () => {
    const model = new NotesModel();
    model.addNote('Note1');
    expect(model.getNotes()).toEqual(['Note1']);
  });
  it('resets the notes', () => {
    const model = new NotesModel();
    model.addNote('Note1');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })
})