import { $ } from '../utils/dom.js';

class Router {
	routes;
	currentPath;

	initRouter(initialRoute) {
		this.setEvent();
		this.routes = {
			'/': initialRoute,
		};
		this.mountRequestedPath('/');
	}

	useParams() {
		return history.state;
	}

	mountRequestedPath(path) {
		this.currentPath = path;
		this.routes[this.currentPath].mount($('.App'));
	}

	unmountCurrentPath() {
		this.routes[this.currentPath].willUnmount();
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
		this.unmountCurrentPath();
		this.mountRequestedPath(pathname);
	}

	goBack(e) {
		if (e.state) {
			this.routes['/products'].mount($('.App'));
			return;
		}
		this.unmountCurrentPath();
		this.mountRequestedPath(window.location.pathname);
	}

	setEvent() {
		window.addEventListener('popstate', (e) => {
			this.goBack(e);
		});
	}
}

const router = new Router();
export default router;
