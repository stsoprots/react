import type ICart from "./ICart.ts";

export default interface ICartResponseModel {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}