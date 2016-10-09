import $ from 'jquery';

export default class AbstractDomWrapper {
    constructor(selector) {
        this._el = $(selector);
    }

    get el() {
        return this._el;
    }

    set el(value) {
        return this._el = value;
    }

    on(eventName, callback) {
        this._el.on(eventName, callback.bind(this));
    }
}
