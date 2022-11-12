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
                <div><input type="number" value=${quantity} id=${optionId} max=${optionData.stock} min="0">개</div>
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
		this.addEvent('click', '.OrderButton', orderProduct);
		this.addEvent(
			'change',
			'.ProductDetail__selectedOptions',
			handleProductQuantityUpdate,
		);
	}
}

export default new ProductOrderer();
