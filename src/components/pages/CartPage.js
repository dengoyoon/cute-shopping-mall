import { Component } from '../../core/Component.js';
import localStorage from '../../utils/localStorage.js';
import {
	LOCAL_STORAGE_KEY_CART,
	LOCAL_STORAGE_KEY_PRODUCTS,
} from '../../core/constants.js';

const generateCartItems = (cart, products) => {
	const cartItems = cart.map(({ productId, optionData, quantity }) => {
		const product = products.filter((item) => item.id === productId)[0];
		return {
			img: product.imageUrl,
			name: `${product.name} ${optionData.name}`,
			price: optionData.price,
			quantity,
			totalPrice: quantity * optionData.price,
		};
	});

	return cartItems;
};
class CartPage extends Component {
	setup() {
		const cart = localStorage.get(LOCAL_STORAGE_KEY_CART);
		const products = localStorage.get(LOCAL_STORAGE_KEY_PRODUCTS);
		const cartItems = generateCartItems(cart, products);
		const totalPrice = cartItems.reduce((acc, cur) => {
			return (acc += cur.totalPrice);
		}, 0);

		this.state = {
			cartItems,
			totalPrice,
		};
	}

	template() {
		const { cartItems, totalPrice } = this.state;
		return `
		<div class="CartPage">
        <h1>장바구니</h1>
        <div class="Cart">
          <ul>
					${cartItems
						.map(
							({ img, name, price, quantity, totalPrice }) => `
            <li class="Cart__item">
              <img
                src="${img}"
              />
              <div class="Cart__itemDesription">
                <div>${name} ${price}원 ${quantity}개</div>
                <div>${totalPrice}원</div>
              </div>
            </li>
					`,
						)
						.join('')}
          </ul>
          <div class="Cart__totalPrice">총 상품가격 ${totalPrice}원</div>
          <button class="OrderButton">주문하기</button>
        </div>
      </div>
			`;
	}
}

export default new CartPage();
