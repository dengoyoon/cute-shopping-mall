export const calculateTotalPrice = (arr) => {
	const sum = arr.reduce((acc, cur) => {
		return (acc += cur.optionData.price * cur.quantity);
	}, 0);

	return sum;
};
