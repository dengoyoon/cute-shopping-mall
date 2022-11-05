import Component from "../../core/Component.js";
import { getProductList } from "../../../api.js";
import ProductItem from "../product-detail/ProductItem.js";

const makeProductList = (productList) =>
    productList.forEach((productItem) =>
        new ProductItem(".ProductListPage__list", { ...productItem }).template()
    );

export default class ProductList extends Component {
    _productList;
    constructor(selector, props) {
        super(selector, props);
        getProductList().then((productList) => {
            this._productList = [...productList];
            this.render();
            this.setEvents();
        });
    }

    template() {
        return `
            <div class="ProductListPage">
                <h1>상품목록</h1>
                <ul class="ProductListPage__list"></ul>
            </div>
        `;
    }

    onClickProductItem(event) {
        console.log(event.target);
    }

    mounted() {
        makeProductList(this._productList);
    }

    setEvents() {
        this.addEvent("click", ".Product", this.onClickProductItem.bind(this));
    }
}
