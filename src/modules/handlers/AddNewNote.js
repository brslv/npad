import $ from 'jquery';

export default class AddNewNote {
    constructor(noteInput) {
        let note = noteInput.getVal();

        noteInput.setVal('');

        $('.NotesList').append(`<li>${note}</l>`);
    }
}
