import './styles/ProductList.css';

export default class ProductList extends Component {
  template() {
    // const { filteredItems } = this.$props;
    return `    <ul>
    <li class="Product">
      <img
        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
      />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img
        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
      />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img
        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
      />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img
        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
      />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img
        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
      />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img
        src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
      />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
  </ul>`;
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
