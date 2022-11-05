import Component from '../../core/Component.js';
import Product from './Product.js';

export default class ProductList extends Component {
  template() {
    return `
      <h1>상품목록</h1>
      <ul data-component="product-list"></ul>
    `;
  }

  mounted() {
    const { productItems } = this.$props;
    const $productList = this.$target.querySelector(
      '[data-component="product-list"]'
    );
    productItems.forEach(
      ({ id, name, imageUrl, price }) =>
        new Product($productList, {
          id,
          name,
          imageUrl,
          price,
        })
    );
  }
}
