import CCApi from '../../api/index.js';
import { Component } from '../../core/Component.js';
import ProductList from '../ProductList.js';
import { $ } from '../../utils/dom.js';
import router from '../../core/router.js';

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
		router.push('/products', { productId });
	}
}

export default new ProductListPage();
