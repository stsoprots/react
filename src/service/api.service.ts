import type {ProductResponseDummyjson, ProductModel} from "../models/ProductResponseDummyjson.ts";

const endpointProducts = import.meta.env.VITE_API_URL + "/products";

const loadProducts = async (): Promise<ProductModel[]> => {
    const response: ProductResponseDummyjson = await fetch(endpointProducts)
        .then(value => value.json())

    return response.products
}

export {loadProducts}