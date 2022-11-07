export const calculateTotalPrice = (currentTotalPrice, arr) => {
	const sum = arr.reduce((acc, cur) => {
		return (acc += cur.optionData.price * cur.quantity);
	}, currentTotalPrice);

	return sum;
};
