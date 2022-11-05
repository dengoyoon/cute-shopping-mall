import Component from '../core/Component.js';

export default class ProductList extends Component {
  template() {
    const filteredItems = this.$props;
    return `
      <div>
        <div class="title">상품 목록</div>
        <div class="product-area">
        ${filteredItems
          .map(
            (filteredItem) => `
            <div class="product" id="productId">
            <img src="${filteredItem.imageUrl}" class="product-img" id="${
              filteredItem.id
            }"/>
            <span class="product-name">${filteredItem.name}</span>
            <span class="price">${filteredItem.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원~</span>
          </div>
        `
          )
          .join('')}
          </div>
      </div>
    `;
  }

  route = () => {
    target.innerHTML = '';
    if (window.location.pathname === '/web/') {
      new ProductsListPage(target, onClick);
    }
    if (window.location.pathname.includes('product')) {
      const [, , newPathId] = window.location.pathname.split('/');
      new ProductDetailPage(target, newPathId);
    }
  };

  setEvent() {
    this.addEvent('click', '.product', ({ target }) => {
      history.pushState({ data: 'product' }, 'hi', `${target.id}`);
      this.route();
    });
  }
}
