import Component from '../core/Component.js';
import { productAPI } from '../api/Product.js';
import ProductList from '../components/product-list/ProductList.js';

export default class ProductListPage extends Component {
  template() {
    return `
      <div class="ProductListPage"></div>
    `;
  }

  async mounted() {
    const $ProductListPage = this.$target.querySelector('.ProductListPage');
    const productItems = await this.getProductItems();
    new ProductList($ProductListPage, {
      productItems,
    });
  }

  async getProductItems() {
    const res = await productAPI.getProductList();
    return res;
  }
}
