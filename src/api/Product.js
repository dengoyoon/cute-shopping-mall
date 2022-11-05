import { BASE_API_URL } from './constants.js';

export class ProductAPI {
  baseAPIUrl = BASE_API_URL;

  constructor() {}

  // 상품 목록 조회
  // response (Array<object> type)
  // -- id  (상품 id)
  // -- name  (상품 이름)
  // -- imageUrl  (상품 이미지 주소)
  // -- price (상품 가격)
  getProductList() {
    const res = fetch(`${this.baseAPIUrl}/products`).then((res) => res.json());
    return res;
  }

  // 상품 옵션 및 수량 조회 (상품 상세 조회)
  // @param - productId (상품 id)
  // @response (object type)
  // -- id  (상품 id)
  // -- name  (상품 이름)
  // -- price (상품 가격)
  // -- imageUrl  (상품 이미지 주소)
  // -- productOptions  (Array<object> type)
  // -- -- id (옵션 id)
  // -- -- name (옵션 이름)
  // -- -- price  (옵션 가격)
  // -- -- stock  (재고)
  // -- -- created_at  (생성일)
  // -- -- updated_at (수정일)
  getProductDetail(productId) {
    const res = fetch(`${this.baseAPIUrl}/products/${productId}`).then((res) =>
      res.json()
    );
    return res;
  }
}

export const productAPI = new ProductAPI();
