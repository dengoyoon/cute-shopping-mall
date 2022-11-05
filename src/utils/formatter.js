// 상품 가격 표시 - 3자리 마다 콤마 찍기
export const getNumberFormat = (price) => {
  return new Intl.NumberFormat('ko-KR').format(price);
};
