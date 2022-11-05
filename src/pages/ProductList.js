import Component from '../core/Component.js';
// import { setA, setB, store } from './store/store.js';

// const InputA = () =>
//   `<input id="stateA" value="${store.getState().a}" size="5" />`;
// const InputB = () =>
//   `<input id="stateB" value="${store.getState().b}" size="5" />`;
// const Calculator = () =>
//   `<p>a + b = ${store.getState().a + store.getState().b}</p>`;

export default class ProductListPage extends Component {
  setup() {
    // -- basic --
    // this.$state = {
    //   isFilter: 0,
    //   items: [
    //     {
    //       seq: 1,
    //       contents: 'item1',
    //       active: false,
    //     },
    //     {
    //       seq: 2,
    //       contents: 'item2',
    //       active: true,
    //     },
    //   ],
    // };
  }

  mounted() {
    // -- basic --
    // const {} = this;
    // const $itemAppender = this.$target.querySelector(
    //   '[data-component="item-appender"]'
    // );
    // new ItemAppender($itemAppender, {
    //   addItem: addItem.bind(this),
    // });
  }

  template() {
    // return `
    //   ${InputA()}
    //   ${InputB()}
    //   ${Calculator()}
    // `;
    // ---------------------------------------------------
    // -- basic --
    //   return `
    //   <header data-component="item-appender"></header>
    //   <main data-component="items"></main>
    //   <footer data-component="item-filter"></footer>
    // `;
  }

  setEvent() {
    // const { $target } = this;
    // $el.querySelector('#stateA').addEventListener('change', ({ target }) => {
    //   store.dispatch(setA(Number(target.value)));
    // });
    // $el.querySelector('#stateB').addEventListener('change', ({ target }) => {
    //   store.dispatch(setB(Number(target.value)));
    // });
  }
}
