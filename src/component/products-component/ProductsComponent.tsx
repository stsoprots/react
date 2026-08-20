import type IProduct from "../../models/IProduct.ts";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import type {IProductsResponse} from "../../models/IProductsResponse.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {getProducts} from "../../service/api.service.ts";

export const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [searchParams] = useSearchParams({page: '1'})

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getProducts(currentPage).then(({products}: IProductsResponse) => {
            setProducts(products);
        })
    }, [searchParams])

    return (
        <div className="products-list">
            {products.map((product) => (<ProductComponent key={product.id} product={product} />))}
        </div>
    );
};