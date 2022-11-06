import ProductList from './components/ProductList.js';
import ProductDetail from './components/ProductDetail.js';
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

  deleteItem(seq) {
    const items = [...this.$state.items];
    items.splice(
      items.findIndex((v) => v.seq === seq),
      1
    );
    this.setState({ items });
  }

  toggleItem(seq) {
    const items = [...this.$state.items];
    const index = items.findIndex((v) => v.seq === seq);
    items[index].active = !items[index].active;
    this.setState({ items });
  }
}
