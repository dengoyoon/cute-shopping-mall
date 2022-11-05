import Component from "../../core/Component.js";

const convertPriceFormat = (price) => `${price.toLocaleString()}원~`;

export default class ProductItem extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
        this.setEvents();
    }

    render() {
        this._target.insertAdjacentHTML("beforeend", this.template());
        this.mounted();
    }

    template() {
        return `
            <li class="Product">
                <img src="${this._props.imageUrl}">
                <div class="Product__info">
                    <div>${this._props.name}</div>
                    <div>${convertPriceFormat(this._props.price)}</div>
                </div>
            </li>
        `;
    }
}

/*
컴포넌트의 이벤트 관리는 버블링을 통해서 구현함
하지만 프로덕트 아이템에 이벤트 리스너를 달아주면 버블링 컨셉을 무시하고 하나하나 등록을 해주기 때문에
클릭 중복이 일어나는것 같다.

즉, 리스트에서 클릭 이벤트를 달아주어야 할듯.....
더 좋은 방법 없나?

*/
