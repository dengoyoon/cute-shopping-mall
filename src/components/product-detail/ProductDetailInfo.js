import Component from '../../core/Component.js';
import CartPage from '../../pages/CartPage.js';
import { onNavigate } from '../../utils/navigate.js';
import { getNumberFormat } from '../../utils/formatter.js';

export default class ProductDetailInfo extends Component {
  id;
  name;
  price;
  imageUrl;
  productOptions;

  constructor($target, $props) {
    super($target, $props);
    this.setup();
  }

  setup() {
    const { id, name, price, imageUrl, productOptions } = this.$props;
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.productOptions = productOptions;
    this.$state = {
      selectedOptions: [],
      totalPrice: 0,
    };
  }

  // TODO: option 선택 렌더링
  template() {
    return `
      <img src=${this.imageUrl} />
      <div class="ProductDetail__info">
        <h2>${this.name}</h2>
        <div class="ProductDetail__price">${getNumberFormat(
          this.price
        )}원~</div>
        <select name="productOption">
          <option>선택하세요.</option>
          ${this.productOptions
            .map((productOption) => {
              if (productOption.stock === 0) {
                return `<option value='${JSON.stringify(
                  productOption
                )}' disabled>(품절) ${this.name} ${
                  productOption.name
                }</option>`;
              } else if (productOption.price === 0) {
                return `<option value='${JSON.stringify(productOption)}'>${
                  this.name
                } ${productOption.name}</option>`;
              } else if (productOption.price > 0) {
                return `<option value='${JSON.stringify(productOption)}'>${
                  this.name
                } ${productOption.name} (+${getNumberFormat(
                  productOption.price
                )}원)</option>`;
              }
            })
            .join('')}
        </select>
        <div class="ProductDetail__selectedOptions">
          <h3>선택된 상품</h3>
          <ul>
            ${this.$state.selectedOptions
              .map(
                (selectedOption) => `
              <li>
                ${selectedOption.name} ${getNumberFormat(
                  this.price + selectedOption.price
                )}원
                <div>
                  <input id="${selectedOption.id}" data-stock="${
                  selectedOption.stock
                }" name="selectedOptionQuantity" type="number" value="${
                  selectedOption.quantity
                }" min="1" max="${selectedOption.stock}" />개
                </div>
              </li>
            `
              )
              .join('')}
          </ul>
          <div class="ProductDetail__totalPrice">${getNumberFormat(
            this.$state.totalPrice
          )}원</div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div>
    `;
  }

  mounted() {}

  setEvent() {
    this.addEvent('change', `[name="productOption"]`, (e) => {
      const selectedProduct = JSON.parse(
        e.target.options[e.target.selectedIndex].value
      );
      if (
        this.$state.selectedOptions.findIndex(
          (selectOption) => selectOption.id === selectedProduct.id
        ) === -1
      ) {
        const newSelectedOptions = this.$state.selectedOptions.concat({
          ...selectedProduct,
          quantity: 1,
        });
        this.setState({
          selectedOptions: newSelectedOptions,
          totalPrice: newSelectedOptions.reduce(
            (acc, cur) => acc + (this.price + cur.price) * cur.quantity,
            0
          ),
        });
      } else {
        return;
      }
    });
    this.addEvent('change', `[name="selectedOptionQuantity"]`, (e) => {
      let { id, value } = e.target;
      if (Number(e.target.getAttribute('data-stock')) < Number(value)) {
        alert('올바른 수량을 입력해주세요!');
        value = 1;
      }
      const newSelectedOptions = this.$state.selectedOptions.map(
        (selectedOption) =>
          selectedOption.id === Number(id)
            ? {
                ...selectedOption,
                quantity: Number(value),
              }
            : selectedOption
      );
      this.setState({
        selectedOptions: newSelectedOptions,
        totalPrice: newSelectedOptions.reduce(
          (acc, cur) => acc + (this.price + cur.price) * cur.quantity,
          0
        ),
      });
    });
    // TODO: prevData 유지 필요
    this.addEvent('click', `.OrderButton`, (e) => {
      localStorage.setItem(
        'products_cart',
        JSON.stringify(
          this.$state.selectedOptions.map((selectedOption) => ({
            productId: this.id.toString(),
            optionId: selectedOption.id.toString(),
            quantity: selectedOption.quantity.toString(),
          }))
        )
      );
      onNavigate(`/web/cart`);
      new CartPage(document.querySelector('.App'));
    });
  }
}
