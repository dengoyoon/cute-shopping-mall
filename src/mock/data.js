const products = [
    {
        id: 1,
        name: "커피 컵",
        price: 10000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
        productOptions: [
            {
                id: 1,
                name: "100개 묶음",
                price: 0,
                stock: 5,
                created_at: "2021-08-23T22:52:17.634Z",
                updated_at: "2021-08-23T22:52:17.638Z",
            },
            {
                id: 2,
                name: "200개 묶음",
                price: 8000,
                stock: 5,
                created_at: "2021-08-23T22:52:34.248Z",
                updated_at: "2021-08-23T22:52:34.252Z",
            },
            {
                id: 24,
                name: "10개 묶음",
                price: 0,
                stock: 555,
                created_at: "2021-08-23T23:03:04.873Z",
                updated_at: "2021-08-23T23:03:04.879Z",
            },
        ],
    },
    {
        id: 2,
        name: "커피컵 종이홀더",
        price: 1000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
        productOptions: [
            {
                id: 3,
                name: "100개 묶음",
                price: 0,
                stock: 50,
                created_at: "2021-08-23T22:52:55.546Z",
                updated_at: "2021-08-23T22:52:55.549Z",
            },
            {
                id: 4,
                name: "1000개 묶음",
                price: 8000,
                stock: 65,
                created_at: "2021-08-23T22:53:13.276Z",
                updated_at: "2021-08-23T23:00:19.536Z",
            },
        ],
    },
    {
        id: 3,
        name: "커피 머신",
        price: 500000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_self_service.png",
        productOptions: [
            {
                id: 5,
                name: "기본형",
                price: 0,
                stock: 0,
                created_at: "2021-08-23T22:53:27.437Z",
                updated_at: "2021-08-23T22:53:27.440Z",
            },
            {
                id: 6,
                name: "고급형",
                price: 50000,
                stock: 5,
                created_at: "2021-08-23T22:53:35.269Z",
                updated_at: "2021-08-23T23:00:26.542Z",
            },
        ],
    },
    {
        id: 4,
        name: "우유 거품기",
        price: 20000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cooking_milk_foamer.png",
        productOptions: [
            {
                id: 7,
                name: "기품기 본품",
                price: 0,
                stock: 10,
                created_at: "2021-08-23T22:54:00.263Z",
                updated_at: "2021-08-23T22:54:00.267Z",
            },
            {
                id: 8,
                name: "스페셜 거품기",
                price: 10000,
                stock: 0,
                created_at: "2021-08-23T22:54:16.572Z",
                updated_at: "2021-08-23T22:54:16.577Z",
            },
            {
                id: 9,
                name: "거품기 + 세척기 세트",
                price: 20000,
                stock: 1,
                created_at: "2021-08-23T22:54:30.134Z",
                updated_at: "2021-08-23T22:54:30.138Z",
            },
        ],
    },
    {
        id: 5,
        name: "우유용 컵",
        price: 10000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_cafe_milk_jag.png",
        productOptions: [
            {
                id: 10,
                name: "은색",
                price: 0,
                stock: 50,
                created_at: "2021-08-23T22:54:55.653Z",
                updated_at: "2021-08-23T22:55:01.373Z",
            },
            {
                id: 11,
                name: "2개 번들",
                price: 8000,
                stock: 5,
                created_at: "2021-08-23T22:55:12.299Z",
                updated_at: "2021-08-23T22:55:32.824Z",
            },
            {
                id: 12,
                name: "4개 번들",
                price: 25000,
                stock: 11,
                created_at: "2021-08-23T22:55:22.945Z",
                updated_at: "2021-08-23T22:55:22.948Z",
            },
        ],
    },
    {
        id: 6,
        name: "그렙 커피",
        price: 3000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_petbottle_coffee.png",
        productOptions: [
            {
                id: 13,
                name: "단품",
                price: 0,
                stock: 999,
                created_at: "2021-08-23T22:56:01.176Z",
                updated_at: "2021-08-23T22:56:08.136Z",
            },
            {
                id: 14,
                name: "24개 번들",
                price: 60000,
                stock: 10,
                created_at: "2021-08-23T22:56:29.975Z",
                updated_at: "2021-08-23T22:56:52.906Z",
            },
        ],
    },
    {
        id: 7,
        name: "에스프레소 메이커",
        price: 50000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker.png",
        productOptions: [
            {
                id: 71,
                name: "기본형",
                price: 0,
                stock: 5,
            },
            {
                id: 72,
                name: "한정판",
                price: 100000,
                stock: 5,
            },
        ],
    },
    {
        id: 8,
        name: "냉동 샌드위치",
        price: 10000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/food_sandwitch.png",
        productOptions: [
            {
                id: 16,
                name: "5개 번들",
                price: 0,
                stock: 0,
                created_at: "2021-08-23T22:57:55.351Z",
                updated_at: "2021-08-23T22:57:59.824Z",
            },
            {
                id: 17,
                name: "20개 번들",
                price: 25000,
                stock: 111,
                created_at: "2021-08-23T22:59:58.129Z",
                updated_at: "2021-08-23T22:59:58.132Z",
            },
        ],
    },
    {
        id: 9,
        name: "티 메이커",
        price: 35000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/press_tea_maker.png",
        productOptions: [
            {
                id: 18,
                name: "기본형",
                price: 0,
                stock: 55,
                created_at: "2021-08-23T23:00:06.005Z",
                updated_at: "2021-08-23T23:00:39.946Z",
            },
            {
                id: 19,
                name: "한정 컬러판",
                price: 50000,
                stock: 1,
                created_at: "2021-08-23T23:00:58.253Z",
                updated_at: "2021-08-23T23:00:58.258Z",
            },
            {
                id: 20,
                name: "기본 찻잎 샘플러 5종 포함",
                price: 10000,
                stock: 5,
                created_at: "2021-08-23T23:01:19.193Z",
                updated_at: "2021-08-23T23:01:19.198Z",
            },
        ],
    },
    {
        id: 10,
        name: "각설탕 묶음",
        price: 500,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sugar_kakuzatou.png",
        productOptions: [
            {
                id: 21,
                name: "10개 묶음",
                price: 0,
                stock: 60,
                created_at: "2021-08-23T23:01:34.916Z",
                updated_at: "2021-08-23T23:01:34.920Z",
            },
            {
                id: 22,
                name: "100개 묶음",
                price: 4000,
                stock: 555,
                created_at: "2021-08-23T23:01:45.757Z",
                updated_at: "2021-08-23T23:01:49.830Z",
            },
            {
                id: 23,
                name: "1000개 묶음",
                price: 45000,
                stock: 50,
                created_at: "2021-08-23T23:02:45.417Z",
                updated_at: "2021-08-23T23:02:45.420Z",
            },
        ],
    },
    {
        id: 11,
        name: "커피 시럽",
        price: 500,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sweets_milk_cream.png",
        productOptions: [
            {
                id: 111,
                name: "5개 묶음",
                price: 0,
                stock: 500,
            },
            {
                id: 112,
                name: "100개 묶음",
                price: 9000,
                stock: 888,
            },
        ],
    },
    {
        id: 12,
        name: "에스프레소 머신",
        price: 300000,
        imageUrl:
            "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker_2.png",
        productOptions: [
            {
                id: 15,
                name: "기본형",
                price: 0,
                stock: 0,
                created_at: "2021-08-23T22:57:22.367Z",
                updated_at: "2021-08-23T22:57:22.371Z",
            },
            {
                id: 25,
                name: "기본형",
                price: 0,
                stock: 555,
                created_at: "2021-08-23T23:03:21.200Z",
                updated_at: "2021-08-23T23:03:21.203Z",
            },
            {
                id: 26,
                name: "기본 도구 추가형",
                price: 100000,
                stock: 5,
                created_at: "2021-08-23T23:03:39.440Z",
                updated_at: "2021-08-23T23:03:39.444Z",
            },
        ],
    },
];

export { products };
