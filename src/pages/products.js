import { NavigationBar } from "../components/navigation-bar";

export function ProductsPage(props, context) {
  return `
          ${NavigationBar(props, context)}
          <div class="p-8">
              <h1 class="text-xl mb-4">상품 목록</h1>
              <div class="flex flex-row">
                  ${context.state.products
                    .map((product) => ProductItem({ product }, context))
                    .join("")}
              </div>
          </div>
      `;
}

function ProductItem(props, context) {
  return `
          <div class="p-4 rounded-xl border mr-2 mb-2">
              <img src="${props.product.imageSrc}" class="rounded-xl">
              <div class="pt-4 font-bold">${props.product.name}</div>
              <div class="pt-2 text-sm">${props.product.description}</div>
              <div class="flex flex-col items-end">
                  <div class="pt-2 text-sm mb-4">${props.product.price}원</div>
                  <button class="bg-black text-white rounded px-2 py-1 text-sm" onclick="eventChannel.emit('toggle-cart', {'productId': ${
                    props.product.id
                  }})">
                      ${
                        context.state.shoppingCart.includes(props.product.id)
                          ? "장바구니에서 빼기"
                          : "장바구니 담기"
                      }
                  </button>
              </div>
          </div>
      `;
}
