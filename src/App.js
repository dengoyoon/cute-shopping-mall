import Component from './core/Component.js';
import ProductListPage from './pages/ProductListPage.js';
import HomePage from './pages/HomePage.js';
import CartPage from './pages/CartPage.js';
import { onNavigate } from './utils/navigate.js';

export default class App extends Component {
  setup() {}

  template() {
    // TODO: navbar component로 따로 빼기
    return `
      <nav class="navbar">
        <a href="/">HOME</a>
        <a href="/web/">PRODUCT LIST</a>
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
      case '/web/cart':
        new CartPage(targetElement);
        break;
      default:
        new HomePage(targetElement);
    }
  }
}
