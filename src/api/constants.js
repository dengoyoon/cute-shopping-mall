export const BASE_API_URL =
  'https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev';

export const INITIAL_PRODUCT_LIST = [
  {
    id: -1,
    name: '',
    imageUrl: '',
    price: 0,
  },
];

export const INITIAL_PRODUCT_DETAIL = {
  id: -1,
  name: '',
  price: 0,
  imageUrl: '',
  productOptions: [
    {
      id: -1,
      name: '',
      price: 0,
      stock: 0,
      created_at: '',
      updated_at: '',
    },
  ],
};
