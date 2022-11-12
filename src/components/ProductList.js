import { Component } from '../core/Component.js';

class ProductList extends Component {
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
		const { moveToDetailPage } = this.props;
		this.addEvent('click', '.Product', moveToDetailPage);
	}
}

export default new ProductList();
