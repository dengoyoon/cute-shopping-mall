const BASE_URL =
	'https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products';

const request = async (url) => {
	try {
		const res = await fetch(url);
		return res.json();
	} catch (e) {
		console.error(e);
	}
};

const CCApi = {
	getProductList() {
		return request(BASE_URL);
	},
	getProductDetail(productId) {
		return request(`${BASE_URL}/${productId}`);
	},
};

export default CCApi;
