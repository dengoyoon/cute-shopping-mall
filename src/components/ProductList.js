import Component from '../core/Component.js';

export default class ProductList extends Component {
  template() {
    const filteredItems = this.$props;
    console.log(filteredItems[0].imageUrl);
    return `
      <div>
        <div class="title">상품 목록</div>
        <div class="product-area">
        ${filteredItems
          .map(
            (filteredItem) => `
            <div class="product">
            <img src="${filteredItem.imageUrl}" class="product-img"/>
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
      history.pushState({}, null, '/id');
    });
    console.log(this);
  }
}
