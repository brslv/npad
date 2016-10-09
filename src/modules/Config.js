import $ from 'jquery';
import NoteFormDomWrapper from './dom/NoteFormDomWrapper';
import NoteInputDomWrapper from './dom/NoteInputDomWrapper';

export const config = () => {
    let config = {
        selectors: {},
        di: {},
    };

    // Selectors definitions.
    config.selectors.noteForm = '[data-np-note-form]';
    config.selectors.noteInput = '[data-np-note-input]';
    
    // DI definitions.
    config.di.noteForm = new NoteFormDomWrapper(config.selectors.noteForm);
    config.di.noteInput = new NoteInputDomWrapper(config.selectors.noteInput);

    return config;
}
