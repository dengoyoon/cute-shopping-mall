import Component from '../../core/Component.js';
import ProductDetailInfo from './ProductDetailInfo.js';

export default class ProductDetail extends Component {
  id;
  name;
  price;
  imageUrl;
  productOptions;

  setup() {
    const { id, name, price, imageUrl, productOptions } = this.$props;
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.productOptions = productOptions;
  }

  template() {
    return `
      <h1>${this.name} 상품 정보</h1>
      <div class="ProductDetail"></div>
    `;
  }

  mounted() {
    const $ProductDetail = this.$target.querySelector('.ProductDetail');
    new ProductDetailInfo($ProductDetail, {
      id: this.id,
      name: this.name,
      price: this.price,
      imageUrl: this.imageUrl,
      productOptions: this.productOptions,
    });
  }
}
