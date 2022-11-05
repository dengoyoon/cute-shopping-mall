import { rest } from "msw";
import { products } from "./data.js";

export const handlers = [
    // 할일 목록
    rest.get("/product-list", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(products));
    }),

    rest.get("/product-list/:productId", (req, res, ctx) => {
        const { productId } = req.params;
        return res(ctx.status(200), ctx.json(products[productId - 1]));
    }),
];
