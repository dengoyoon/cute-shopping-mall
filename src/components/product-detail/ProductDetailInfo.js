import Component from '../../core/Component.js';
import { getNumberFormat } from '../../utils/formatter.js';

export default class ProductDetailInfo extends Component {
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
      <img src=${this.imageUrl} />
      <div class="ProductDetail__info">
        <h2>${this.name}</h2>
        <div class="ProductDetail__price">${getNumberFormat(
          this.price
        )}원~</div>
        <select>
          <option>선택하세요.</option>
          <option>100개 번들</option>
          <option>1000개 번들(+5,000)</option>
        </select>
        <div class="ProductDetail__selectedOptions">
          <h3>선택된 상품</h3>
          <ul>
            <li>
              커피잔 100개 번들 10,000원
              <div><input type="number" value="10" />개</div>
            </li>
            <li>
              커피잔 1000개 번들 15,000원
              <div><input type="number" value="5" />개</div>
            </li>
          </ul>
          <div class="ProductDetail__totalPrice">175,000원</div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div>
    `;
  }

  mounted() {}
}
