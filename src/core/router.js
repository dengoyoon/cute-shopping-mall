import ProductDetailPage from '../components/pages/ProductDetailPage.js';
import ProductListPage from '../components/pages/ProductListPage.js';
import { $ } from '../utils/dom.js';

export class useRouter {
	routes;
	constructor() {
		this.routes = {
			'/': ProductListPage,
			'/products': ProductDetailPage,
		};
		this.setEvent();
		ProductListPage.mount($('.App'));
	}

	handleUrlChange({ url, productId }) {
		history.pushState(null, null, `${url}`);

		const reg = /\/products\/[0-9]{1}/g;
		if (url.match(reg)) {
			this.routes['/products'].mount($('.App'), {
				productId,
			});
		} else {
			this.routes[window.location.pathname].mount($('.App'));
		}
	}

	setEvent() {
		window.addEventListener('urlchange', (e) => this.handleUrlChange(e.detail));
		window.addEventListener('popstate', () => {
			const path = window.location.pathname;
			const productId = path.split('/').slice(-1)[0];
			this.handleUrlChange({ url: path, productId });
		});
	}
}
