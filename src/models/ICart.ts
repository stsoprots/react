import type {IProduct} from "./IProduct.ts";

export default interface ICart {
    id: number;
    products: IProduct[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}