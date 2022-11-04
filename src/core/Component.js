import { observable, observe } from './observer.js';

export default class Component {
  $target;
  $props;
  $state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    // -- basic --
    // this.setEvent();
    // this.render();
  }
  setup() {
    this.$state = observable(this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }
  mounted() {}
  initState() {
    return {};
  }
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    // -- basic --
    // this.mounted();
  }
  setEvent() {}

  // -- basic --
  // setState(newState) {
  //   this.$state = { ...this.$state, ...newState };
  //   this.render();
  // }
  // addEvent(eventType, selector, callback) {
  //   this.$target.addEventListener(eventType, (event) => {
  //     if (!event.target.closest(selector)) return false;
  //     callback(event);
  //   });
  // }
}
