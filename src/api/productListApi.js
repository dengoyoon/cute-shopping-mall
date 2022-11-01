//cors 에러 나서 일단 목데이터 끌어쓰겠습니다... ㅜ

const request = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (e) {
    throw {
      message: e.message,
      status: e.status,
    };
  }
};

const api = {
  getProductList: async () => {
    try {
      const products = await request(
        'https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products'
      );
      return {
        isError: false,
        data: products?.data,
      };
    } catch (e) {
      return {
        isError: true,
        data: e,
      };
    }
  },
};

export { api };
