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

	handleUrlChangeByClick({ url, productId }) {
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
		window.addEventListener('urlchange', (e) =>
			this.handleUrlChangeByClick(e.detail),
		);
	}
}
