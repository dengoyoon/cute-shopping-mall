import Component from '../core/Component.js';
import products from '../data/products.json' assert { type: 'json' };

export default class ProductList extends Component {
  template() {
    const filteredItems = products;
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

  setEvent() {
    this.addEvent('click', '.product', ({ target }) => {
      history.pushState({ data: 'product' }, 'hi', `${target.id}`);
      this.route();
    });
  }
}
