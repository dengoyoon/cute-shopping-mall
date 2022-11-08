import ProductDetailPage from './components/pages/ProductDetailPage.js';
import CartPage from './components/pages/CartPage.js';
import { Component } from './core/Component.js';
import router from './core/router.js';
import ProductListPage from './components/pages/ProductListPage.js';

export class App extends Component {
	constructor() {
		super();
		router.initRouter(ProductListPage);
		router.addRoute('/products', ProductDetailPage);
		router.addRoute('/cart', CartPage);
	}
}
