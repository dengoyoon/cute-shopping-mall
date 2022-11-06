import Component from '../../core/Component.js';
import ProductDetailPage from '../../pages/ProductDetailPage.js';
import { getNumberFormat } from '../../utils/formatter.js';
import { getTopParentNode } from '../../utils/findNode.js';
import { onNavigate } from '../../utils/navigate.js';

export default class Product extends Component {
  id;
  name;
  imageUrl;
  price;

  setup() {
    const { id, name, imageUrl, price } = this.$props;
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
    this.mounted();
  }

  template() {
    return `
      <li class="Product" key="${this.id}">
        <img
          src=${this.imageUrl}
        />
        <div class="Product__info">
          <div>${this.name}</div>
          <div>${getNumberFormat(this.price)}원~</div>
        </div>
      </li>
    `;
  }

  // TODO: more clean
  setEvent() {
    this.addEvent('click', `.Product[key="${this.id}"]`, (e) => {
      const topParentNode = getTopParentNode(e.target, 'Product');
      onNavigate(`/web/products/${topParentNode.getAttribute('key')}`);
      new ProductDetailPage(document.querySelector('.App'));
    });
  }
}
