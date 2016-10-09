import $ from 'jquery';
import AddNewNote from '../handlers/AddNewNote';

export default class EventsEngine {
    constructor(config) {
        this.config = config;
    }

    registerEvents() {
        this.triggerFormSubmitOnEnter();
        this.addNewNote();
    }

    triggerFormSubmitOnEnter() {
        this.config.di.noteInput.on('keypress', (e) => {
            if (e.which === 13) {
                this.config.di.noteForm.submit();

                return false;
            }
        });
    }

    addNewNote() {
        this.config.di.noteForm.on('submit', (e) => {
            e.preventDefault();
            new AddNewNote(this.config.di.noteInput);
        });
    }
}
