import CCApi from '../../api/index.js';
import router from '../../core/router.js';
import localStorage from '../../utils/localStorage.js';
import { Component } from '../../core/Component.js';
import ProductList from '../ProductList.js';
import { $ } from '../../utils/dom.js';
import { LOCAL_STORAGE_KEY_PRODUCTS } from '../../core/constants.js';

class ProductListPage extends Component {
	setup() {
		this.state = [];
	}
	async mounted() {
		const res = await CCApi.getProductList();
		this.setState(res);
		localStorage.set(LOCAL_STORAGE_KEY_PRODUCTS, res);
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
