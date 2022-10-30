import State from "./State.js";

export default class Component {
    _target;
    _state;
    _props;
    _registedEvents;

    constructor(selector, props) {
        this._target = document.querySelector(selector);
        this._props = props;
        this._registedEvents = [];
    }

    get state() {
        return this._state.getState();
    }

    template() {}

    mounted() {}

    render() {
        // this.clearEvents()
        this._target.innerHTML = this.template();
        this.mounted();
    }

    setState(newState) {
        this._state.setState(newState);
        this.render();
    }

    addEvent(type, selector, callback) {
        const children = [...this._target.querySelectorAll(selector)];
        const isTarget = (target) => children.includes(target) || target.closest(selector);

        this._registedEvents = this._registedEvents.concat({
            type: type,
            eventListener: (event) => {
                if (!isTarget(event.target)) return false;
                callback(event);
            },
        });

        this._target.addEventListener(type, this._getRegistedEventTop().eventListener);
    }

    clearEvents() {
        this._registedEvents.length = 0;
    }

    setEvents() {}
}
