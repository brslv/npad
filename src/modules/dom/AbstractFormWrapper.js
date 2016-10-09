import AbstractDomWrapper from './AbstractDomWrapper';

export default class AbstractFormWrapper extends AbstractDomWrapper {
    submit() {
        return this._el.submit();
    }
}
