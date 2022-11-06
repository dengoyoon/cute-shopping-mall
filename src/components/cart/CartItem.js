export default class CartItem extends Component {
  template() {
    // const { filteredItems } = this.$props;
    return `<li class="Cart__item">
    <img
      src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
    />
    <div class="Cart__itemDesription">
      <div>커피잔 100개 번들 10,000원 10개</div>
      <div>100,000원</div>
    </div>
  </li>`;
  }

  setEvent() {
    //   const { deleteItem, toggleItem } = this.$props;
    //   this.addEvent('click', '.deleteBtn', ({ target }) => {
    //     deleteItem(Number(target.closest('[data-seq]').dataset.seq));
    //   });
    //   this.addEvent('click', '.toggleBtn', ({ target }) => {
    //     toggleItem(Number(target.closest('[data-seq]').dataset.seq));
    //   });
    // }
  }
}
