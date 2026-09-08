import type {IProduct} from "./IProduct.ts";

export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]

}