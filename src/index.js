import "./tailwind.css";
import EventEmitter from "events";
import { ProductsPage } from "./pages/products";
import { ShoppingCartPage } from "./pages/shopping-cart";

function main() {
  const routingMap = new Map();

  routingMap.set("/#/products", ProductsPage);
  routingMap.set("/#/shopping-cart", ShoppingCartPage);

  window.eventChannel = new EventEmitter();

  const context = {
    root: "#root",
    routingMap,
    state: {
      products: [
        {
          id: 1,
          name: "오그래놀라 팝 초코 아몬드",
          imageSrc: "https://picsum.photos/seed/grenola/200/200",
          description: "맛있는 그래놀라입니다.",
          price: 6790,
        },
        {
          id: 2,
          name: "충주사과",
          imageSrc: "https://picsum.photos/seed/apple/200/200",
          description: "충주의 명물! 충주사과",
          price: 119500,
        },
      ],
      shoppingCart: [1],
    },
    setState(newState) {
      context.state = newState;
      this.render();
    },
    registerEventListeners() {
      window.eventChannel = new EventEmitter();
      window.eventChannel.on("toggle-cart", ({ productId }) => {
        if (!this.state.shoppingCart.includes(productId)) {
          this.setState({
            ...this.state,
            shoppingCart: [...this.state.shoppingCart, productId],
          });
        } else {
          this.setState({
            ...this.state,
            shoppingCart: this.state.shoppingCart.filter(
              (item) => item != productId
            ),
          });
        }
        this.render();
      });
    },
    render() {
      this.registerEventListeners();
      const root = document.querySelector(context.root);
      root.innerHTML = ``;
      console.log(routingMap)
      const page = routingMap.get("/" + window.location.hash);
      root.innerHTML += page({}, context);
    },
  };

  window.addEventListener("hashchange", () => context.render());
  window.addEventListener("load", () => context.render());
}

main();
