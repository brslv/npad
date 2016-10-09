import AbstractDomWrapper from './AbstractDomWrapper';

export default class AbstractInputWrapper extends AbstractDomWrapper {
    getVal() {
        return this._el.val();
    }

    setVal(val) {
        return this._el.val(val);
    }
}
