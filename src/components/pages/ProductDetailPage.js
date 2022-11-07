import CCApi from '../../api/index.js';
import { Component } from '../../core/Component.js';
import ProductOrderer from '../ProductOrderer.js';
import { $ } from '../../utils/dom.js';
import { calculateTotalPrice } from '../../utils/index.js';

class ProductDetailPage extends Component {
	setup() {
		this.state = {
			productCart: [],
			productData: null,
			totalPrice: 0,
		};
	}

	async mounted() {
		const res = await CCApi.getProductDetail(this.props.productId);
		this.setState({ ...this.state, productData: res });
	}

	updated() {
		if (this.state.productData != null) {
			ProductOrderer.mount($('.ProductDetail__selectedOptions'), {
				data: this.state.productCart,
				totalPrice: this.state.totalPrice,
				orderProduct: this.orderProduct.bind(this),
				handleProductQuantityUpdate:
					this.handleProductQuantityUpdate.bind(this),
			});
		}
	}

	template() {
		if (this.state.productData != null) {
			const { name, price, imageUrl, productOptions } = this.state.productData;
			return `
			<div class="ProductDetailPage">
					<h1>${name} 상품 정보</h1>
					<div class="ProductDetail">
						<img
							src=${imageUrl}
						/>
						<div class="ProductDetail__info">
							<h2>${name}</h2>
							<div class="ProductDetail__price">${price}~</div>
							<select>
								<option>선택하세요.</option>
								${productOptions.map((option) => {
									if (option.stock === 0) {
										return `<option value="${option.id}" disabled >(품절) ${name} ${option.name}</option>`;
									} else if (option.price > 0) {
										return `<option value="${option.id}">${name} ${option.name} (+${option.price}원)</option>`;
									} else {
										return `<option value="${option.id}">${name} ${option.name}</option>`;
									}
								})}
							</select>
							<div class="ProductDetail__selectedOptions">
							</div>
						</div>
					</div>
				</div>`;
		}
	}

	orderProduct() {
		// TODO: 주문한다.
	}

	handleProductQuantityUpdate(e) {
		// TODO: 수량을 업데이트 한다.
	}

	handleProductClick(e) {
		const selectedOptionId = e.target.value;
		if (parseInt(selectedOptionId) == NaN) {
			return;
		}

		const isAlreadyExist = this.state.productCart.find(
			(item) => item.optionId === selectedOptionId,
		);
		if (isAlreadyExist) {
			return;
		}

		const clickedOptionData = this.state.productData.productOptions.find(
			(item) => item.id === Number(selectedOptionId),
		);

		const updatedProductCart = [
			...this.state.productCart,
			{
				optionId: selectedOptionId,
				optionData: {
					...clickedOptionData,
					price: this.state.productData.price + clickedOptionData.price,
				},
				quantity: 1,
			},
		];

		const updatedTotalPrice = calculateTotalPrice(
			this.state.totalPrice,
			updatedProductCart,
		);

		this.setState({
			...this.state,
			productCart: updatedProductCart,
			totalPrice: updatedTotalPrice,
		});
	}

	setEvent() {
		this.$target.addEventListener('change', (e) => {
			this.handleProductClick(e);
		});
	}
}

export default new ProductDetailPage();
