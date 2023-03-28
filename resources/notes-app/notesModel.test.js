const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty list', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })
})