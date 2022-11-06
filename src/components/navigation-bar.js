export function NavigationBar(props, context) {
  return `
          <nav>
              <ul class="flex flex-row space-x-2 p-8">
                  <li class="p-2 text-sm text-slate-600 rounded-xl hover:bg-slate-200 transition"><a href="/#/products">상품 목록 페이지</a></li>
                  <li class="p-2 text-sm text-slate-600 rounded-xl hover:bg-slate-200 transition"><a href="/#/shopping-cart">장바구니 페이지</a></li>
              </ul>
          </nav>
      `;
}
