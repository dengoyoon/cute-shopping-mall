export class Component {
	$target;
	props;
	state;
	registeredEvents;

	mount($target, props) {
		this.$target = $target;
		this.props = props;
		this.registeredEvents = [];

		this.setup();
		this.render();
		this.setEvent();
		this.mounted();
	}
	setup() {}
	mounted() {}
	updated() {}
	template() {
		return '';
	}
	render() {
		this.$target.innerHTML = this.template();
		this.updated();
	}
	setEvent() {}
	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	addEvent(type, selector, callback) {
		const children = [...this.$target.querySelectorAll(selector)];
		const isTarget = (target) =>
			children.includes(target) || target.closest(selector);
		this.registeredEvents = this.registeredEvents.concat({
			type: type,
			eventListener: (e) => {
				if (!isTarget(e.target)) return;
				callback(e);
			},
		});

		const recentlyAddedEvent =
			this.registeredEvents[this.registeredEvents.length - 1];

		this.$target.addEventListener(type, recentlyAddedEvent.eventListener);
	}

	willUnmount() {
		this.registeredEvents.forEach(({ type, eventListener }) => {
			this.$target.removeEventListener(type, eventListener);
		});
	}
}
