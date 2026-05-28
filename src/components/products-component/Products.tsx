import {useEffect, useState} from "react";
import type {ProductModel} from "../../models/ProductResponseDummyjson.ts";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {

    const [products, setProducts] = useState<ProductModel[]>([]);
    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await loadProducts();
            setProducts(allProducts);
        }

        fetchProducts();
    })

    return (
        <div>
            <h1>Products</h1>
            <div className='products'>
            {
                products.map((product) => (<Product key={product.id} product={product}/>))
            }
            </div>
        </div>
    );
};