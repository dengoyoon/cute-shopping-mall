import Component from "../../core/Component.js";

const convertPriceFormat = (price) => `${price.toLocaleString()}원~`;

export default class ProductItem extends Component {
    constructor(selector, props) {
        super(selector, props);
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
