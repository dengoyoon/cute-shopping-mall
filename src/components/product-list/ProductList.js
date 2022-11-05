import Component from "../../core/Component.js";
import { getProductList } from "../../../api.js";
import ProductItem from "../product-detail/ProductItem.js";

const makeProductList = (productList) =>
    productList
        .map((productItem) =>
            new ProductItem(".ProductListPage__list", { ...productItem }).template()
        )
        .join("");

export default class ProductList extends Component {
    _productList;
    constructor(selector, props) {
        super(selector, props);
        getProductList().then((productList) => {
            this._productList = [...productList];
            this.render();
        });
    }

    template() {
        return `
            <div class="ProductListPage">
                <h1>상품목록</h1>
                <ul class="ProductListPage__list">
                  ${makeProductList(this._productList)}
                </ul>
            </div>
        `;
    }
}
