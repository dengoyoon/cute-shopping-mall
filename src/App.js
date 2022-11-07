import ProductList from './components/ProductList.js';
import ProductDetail from './components/ProductDetail.js';
import ProductCart from './components/ProductCart.js';

import Component from './core/Component.js';
export default class App extends Component {
  template() {
    return `
    <div class='App'>
        <main data-component="items"></main>
        <main data-component="detail"></main>
        <main data-component="cart"></main>
    </div>
        `;
  }

  mounted() {
    const $items = this.$target.querySelector('[data-component="items"]');
    new ProductList($items);

    const $detail = this.$target.querySelector('[data-component="detail"]');
    new ProductDetail($detail);

    const $cart = this.$target.querySelector('[data-component="cart"]');
    new ProductCart($cart);
  }
}
