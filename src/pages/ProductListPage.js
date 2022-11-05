import Component from '../core/Component.js';
import { productAPI, ProductAPI } from '../api/Product.js';

export default class ProductListPage extends Component {
  setup() {
    this.$state = {
      items: [],
    };
  }

  template() {
    return `
      <div class="ProductListPage">
        <h1>상품목록</h1>
      </div>
    `;
  }

  mounted() {
    const { getItems } = this;
  }

  getItems() {
    const res = ProductAPI.getProductList();
    // this.setState({ items: [...res] });
  }
}
