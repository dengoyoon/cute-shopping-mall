import Items from './components/ProductList.js';
import Component from './core/Component.js';
import products from './data/products.json' assert { type: 'json' };
export default class App extends Component {
  setup() {
    this.$state = {
      isFilter: 0,
      items: products,
    };
  }

  this.route = () => {
    target.innerHTML = '';
    if(window.location.pathname === '/web/') {
        new ProductsListPage(target, onClick);
    }
    if(window.location.pathname.includes('product')) {
        const [, , newPathId] = window.location.pathname.split('/')
        new ProductDetailPage(target, newPathId);
    }
}

  template() {
    return `
        <main data-component="items"></main>
        <main data-component="detail"></main>
        `;
  }

  mounted() {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
    const $items = this.$target.querySelector('[data-component="items"]');
    console.log(this.$state.items);
    new Items($items, this.$state.items);

    const $detail = this.$target.querySelector('[data-component="detail"]');
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
