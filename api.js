const getProductList = async () => {
    const response = await fetch("/product-list");
    return response.json();
};

const getProductDetail = async (productId) => {
    const response = await fetch(`/product-list/${productId}`);
    return response.json();
};

export { getProductList, getProductDetail };
