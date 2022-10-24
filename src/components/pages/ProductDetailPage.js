import { Component } from '../../core/Component.js';

class ProductDetailPage extends Component {
	template() {
		return `<div>Detail Page of ${this.props.productId}</div>`;
	}
}

export default new ProductDetailPage();
