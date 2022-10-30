class Observer {
    _state;
    _subscribers;
    constructor(initialState) {
        this._state = { ...initialState };
        this._subscribers = new Set();
    }

    get() {
        return this._state;
    }

    _notify() {
        this._subscribers.forEach((callback) => {
            callback();
        });
    }

    update(newState) {
        this._state = { ...newState };
        this._notify();
    }

    updateWithKey(key, newState) {
        this._state[key] = { ...newState };
        this._notify();
    }

    subscribe(callback) {
        this._subscribers.add(callback);
    }

    clearSubscribe() {
        this._subscribers = new Set();
    }
}
