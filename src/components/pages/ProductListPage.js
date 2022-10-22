import CCApi from '../../api/index.js';
import { Component } from '../../core/Component.js';
import { ProductList } from '../ProductList.js';
import { $ } from '../../utils/dom.js';

export class ProductListPage extends Component {
	setup() {
		this.state = [];
	}
	async mounted() {
		const res = await CCApi.getProductList();
		this.setState(res);
	}
	updated() {
		new ProductList($('.ProductList'), {
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
		console.log(`clicked happend on ${productId}`);
	}
}
