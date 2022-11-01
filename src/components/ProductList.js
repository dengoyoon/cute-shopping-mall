import Component from '../core/Component.js';

export default class ProductList extends Component {
  template() {
    const filteredItems = this.$props;
    console.log(filteredItems);
    return `
      <ul>
        ${filteredItems
          .map(
            (filteredItem) => `
          <li data-seq="${filteredItem.id}}">
            ${filteredItem.name}
           
          </li>
        `
          )
          .join('')}
      </ul>
    `;
  }

  //   setEvent() {
  //     const { deleteItem, toggleItem } = this.$props;

  //     this.addEvent('click', '.deleteBtn', ({ target }) => {
  //       deleteItem(Number(target.closest('[data-seq]').dataset.seq));
  //     });

  //     this.addEvent('click', '.toggleBtn', ({ target }) => {
  //       toggleItem(Number(target.closest('[data-seq]').dataset.seq));
  //     });
  //   }
}
