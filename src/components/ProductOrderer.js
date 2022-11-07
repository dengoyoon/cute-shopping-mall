import { Component } from '../core/Component.js';

class ProductOrderer extends Component {
	template() {
		const { data, totalPrice } = this.props;
		return `
            <h3>선택된 상품</h3>
            <ul>
            ${data
							.map(
								({ optionId, optionData, quantity }) =>
									`                
              <li>
                ${optionData.name} ${optionData.price}원
                <div><input type="number" value=${quantity} id=${optionId}/>개</div>
              </li>
              `,
							)
							.join('')}
            </ul>
            <div class="ProductDetail__totalPrice">${totalPrice}</div>
            <button class="OrderButton">주문하기</button>
          `;
	}

	setEvent() {
		const { orderProduct, handleProductQuantityUpdate } = this.props;

		this.$target.addEventListener('click', ({ target }) => {
			if (target.classList.contains('OrderButton')) {
				orderProduct();
			}
		});
		this.$target.addEventListener('change', (e) => {
			e.stopPropagation();
			handleProductQuantityUpdate(e);
		});
	}
}

export default new ProductOrderer();
