import type {IProductsResponse} from "../models/IProductsResponse.ts";

const url = 'https://dummyjson.com'

export const getProducts = async (page: string): Promise<IProductsResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = await fetch(url + '/products' + '?skip=' + skip)
        .then(value => value.json())

    return response
}