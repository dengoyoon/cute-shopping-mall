import { NavigationBar } from "../components/navigation-bar";

export function ShoppingCartPage(props, context) {
  const shoppingCartProducts = context.state.products.filter((product) =>
    context.state.shoppingCart.includes(product.id)
  );
  let total = 0;
  shoppingCartProducts.forEach((p) => (total += p.price));
  return `
          ${NavigationBar(props, context)}
          <div class="p-8">
              <h1 class="text-xl mb-4">장바구니</h1>
              <div class="flex flex-col">
                  ${shoppingCartProducts
                    .map((product) => ProductOrderItem({ product }, context))
                    .join("")}
              </div>
              <h3 class="text-lg text-right">총액 ${total}원</h3>
          </div>
    `;
}

function ProductOrderItem(props, context) {
  return `
          <div class="p-2 rounded-xl border mr-2 mb-2 flex flex-row w-full">
              <img class="w-20 h-20 rounded-xl mr-4" src="${props.product.imageSrc}">
              <div class="flex flex-col w-full">
                  <div class="font-bold">${props.product.name}</div>
                  <div class="text-sm mb-4">${props.product.price}원</div>
                  <div class="flex flex-col items-end">
                      <button class="bg-black text-white rounded px-2 py-1 text-sm" onclick="eventChannel.emit('toggle-cart', {'productId': ${props.product.id}})">
                          제거
                      </button>
                  </div>
              </div>
          </div>
      `;
}
