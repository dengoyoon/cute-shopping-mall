class Cart {
  KEY_PRODUCTS_CART = 'products_cart';
  productsCart = JSON.parse(localStorage.getItem(this.KEY_PRODUCTS_CART)) || [];

  getProductsCart() {
    return JSON.parse(localStorage.getItem(this.KEY_PRODUCTS_CART)) || [];
  }

  setProductsCart(productsCart) {
    this.productsCart = productsCart;
    localStorage.setItem(this.KEY_PRODUCTS_CART, JSON.stringify(productsCart));
  }

  resetProductsCart() {
    localStorage.setItem(this.KEY_PRODUCTS_CART, []);
  }
}

export const cart = new Cart();
