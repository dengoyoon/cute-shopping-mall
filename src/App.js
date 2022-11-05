import Component from './core/Component.js';
import { onNavigate } from './utils/navigate.js';
import HomePage from './pages/HomePage.js';
import ProductListPage from './pages/ProductListPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import CartPage from './pages/CartPage.js';

export default class App extends Component {
  setup() {}

  template() {
    return `
      <nav class="navbar">
        <a href="/">HOME</a>
        <a href="/web/">PRODUCT LIST</a>
        <a href="/web/products/:productId">PRODUCT DETAIL</a>
        <a href="/web/cart">CART</a>
      </nav>
      <main class="App"></main>
    `;
  }

  mounted() {
    const $App = this.$target.querySelector('.App');
    const $navbar = this.$target.querySelector('.navbar');
    // navbar 클릭 이벤트
    $navbar.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;
      const targetURL = e.target.pathname;
      onNavigate(targetURL);
      this.navigateRender(targetURL, $App);
    });
    // 뒤로가기
    window.onpopstate = (e) => {
      this.navigateRender(window.location.pathname, $App);
    };
  }

  // TODO: 새로고침 시 주소 접근 못함
  navigateRender(targetURL, targetElement) {
    switch (targetURL) {
      case '/web/':
        new ProductListPage(targetElement);
        break;
      // TODO: /products/[productId] 동적 파라미터 페이지
      case '/web/products/:productId':
        new ProductDetailPage(targetElement);
        break;
      case '/web/cart':
        new CartPage(targetElement);
        break;
      default:
        new HomePage(targetElement);
    }
  }
}
