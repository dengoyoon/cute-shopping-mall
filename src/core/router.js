import { $ } from '../utils/dom.js';

class Router {
	routes;

	initRouter(initialRoute) {
		this.setEvent();
		this.routes = {
			'/': initialRoute,
		};

		this.routes['/'].mount($('.App'));
	}

	useParams() {
		return history.state;
	}

	addRoute(path, component) {
		this.routes[path] = component;
	}

	push(pathname, params) {
		history.pushState(
			params,
			null,
			params ? `${pathname}/${Object.values(params)[0]}` : pathname,
		);

		this.routes[pathname].mount($('.App'));
	}

	goBack(e) {
		if (e.state) {
			this.routes['/products'].mount($('.App'));
			return;
		}
		this.routes[window.location.pathname].mount($('.App'));
	}

	setEvent() {
		window.addEventListener('popstate', (e) => {
			this.goBack(e);
		});
	}
}

const router = new Router();
export default router;
