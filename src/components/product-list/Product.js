import Component from '../../core/Component.js';
import { getNumberFormat } from '../../utils/formatter.js';

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
      <li class="Product" key=${this.id}>
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
}
