export default class State {
    _state;

    constructor(newState) {
        this._state = { ...newState };
    }

    getState() {
        return this._state;
    }

    setState(newState) {
        this._state = { ...this._state, ...newState };
    }

    get(key) {
        return this._state[key];
    }
}
