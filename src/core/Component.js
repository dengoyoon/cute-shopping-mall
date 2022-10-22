export class Component {
	$target;
	props;
	state;
	constructor($target, props) {
		this.$target = $target;
		this.props = props;
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
}
