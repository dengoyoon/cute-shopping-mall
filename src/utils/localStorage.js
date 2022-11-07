const localStorage = {
	get(key) {
		return JSON.parse(window.localStorage.getItem(key));
	},
	set(key, value) {
		window.localStorage.setItem(key, JSON.stringify(value));
	},
	setWithExistingData(key, value) {
		const existingData = this.get(key);
		if (existingData == undefined) {
			this.set(key, value);
			return;
		}
		this.set(key, [...existingData, ...value]);
	},
};

export default localStorage;
