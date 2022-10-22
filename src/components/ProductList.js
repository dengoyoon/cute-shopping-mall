import { Component } from '../core/Component.js';

export class ProductList extends Component {
	template() {
		const { data } = this.props;
		return Object.values(data)
			.map(
				(item) =>
					`<li class="Product" data-product-id="${item.id}">
					<img src="${item.imageUrl}" />
					<div class="Product__info">
						<div>${item.name}</div>
						<div>${item.price}</div>
					</div>
				</li>`,
			)
			.join('');
	}
	setEvent() {
		this.$target.addEventListener('click', ({ target }) => {
			// target.productId로 이벤트핸들링 함수 호출
		});
	}
}
