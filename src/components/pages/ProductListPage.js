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
	setEvent() {
		// 이벤트리스너 등록 및 이벤트 받기는 하위 컴포넌트에서 할거고, 여기선 setEvent 대신 이벤트 처리 로직 함수 만들어야 함
	}
}
