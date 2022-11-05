import ProductDetail from "./components/product-detail/ProductDetail.js";
import ProductList from "./components/product-list/ProductList.js";
import ShoppingBasket from "./components/shopping-basket/ShoppingBasket.js";
import Component from "./core/Component.js";

export default class App extends Component {
    constructor(selector, props) {
        super(selector, props);
        this.render();
    }

    template() {
        return `
            <div class='App'>
                <div class='container__product-list'></div>
                <div class='container__product-detail'></div>
                <div class='container__shopping-basket'></div>
            </div>
        `;
    }

    mounted() {
        new ProductList(".container__product-list");
        new ProductDetail(".container__product-detail");
        new ShoppingBasket(".container__shopping-basket");
    }
}
