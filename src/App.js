import Items from './components/ProductList.js';
import Component from './core/Component.js';
import products from './data/products.json' assert { type: 'json' };
export default class App extends Component {
  setup() {
    this.$state = {
      isFilter: 0,
      items: products, //api.getProductList().data,
    };
  }

  template() {
    return `
         
        <main data-component="items"></main>
        <main data-component=""></main>
        `;
  }

  mounted() {
    const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this;
    const $items = this.$target.querySelector('[data-component="items"]');
    console.log(this.$state.items);
    new Items($items, this.$state.items);
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
