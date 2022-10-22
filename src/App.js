import { ProductListPage } from './components/pages/ProductListPage.js';
import { Component } from './core/Component.js';
import { $ } from './utils/dom.js';

export class App extends Component {
	mounted() {
		new ProductListPage($('.App'));
	}
}
