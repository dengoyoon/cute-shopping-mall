import CCApi from '../../api/index.js';
import { Component } from '../../core/Component.js';
import ProductList from '../ProductList.js';
import { $ } from '../../utils/dom.js';

class ProductListPage extends Component {
	setup() {
		this.state = [];
	}
	async mounted() {
		const res = await CCApi.getProductList();
		this.setState(res);
	}
	updated() {
		ProductList.mount($('.ProductList'), {
			data: this.state,
			moveToDetailPage: this.moveToDetailPage.bind(this),
		});
	}
	template() {
		return `
		<div class="ProductListPage">
		<h1>상품목록</h1>
    <ul class="ProductList"></ul>
		</div>
    `;
	}
	moveToDetailPage(productId) {
		// TODO: router객체의 메서드로 빼기 url만 넘길 수 있게.
		const urlChangeEvent = new CustomEvent('urlchange', {
			detail: { url: `/products/${productId}`, productId },
		});
		window.dispatchEvent(urlChangeEvent);
	}
}

export default new ProductListPage();
