import Component from '../core/Component.js';
import ProductDetail from '../components/product-detail/ProductDetail.js';
import { productAPI } from '../api/Product.js';

export default class ProductDetailPage extends Component {
  id;

  setup() {
    const path = window.location.pathname;
    this.id = parseInt(path.split('/').slice(-1)[0]);
  }

  template() {
    return `
      <div class="ProductDetailPage"></div>
    `;
  }

  async mounted() {
    const $ProductDetailPage = this.$target.querySelector('.ProductDetailPage');
    const item = await this.getProductItem();
    new ProductDetail($ProductDetailPage, item);
  }

  async getProductItem() {
    const res = await productAPI.getProductDetail(this.id);
    return res;
  }
}
