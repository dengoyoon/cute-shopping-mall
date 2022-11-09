import ProductDetailPage from './components/pages/ProductDetailPage.js';
import ProductListPage from './components/pages/ProductListPage.js';
import { Component } from './core/Component.js';
import { useRouter } from './core/router.js';

export class App extends Component {
	constructor() {
		super();
		const router = new useRouter(ProductListPage);
		router.addRoutes('/products', ProductDetailPage);
	}
}
