import type {FC} from "react";
import type IProduct from "../../models/IProduct.ts";

type PostTypeProps = {
    product: IProduct
}

export const ProductComponent: FC<PostTypeProps> = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title} width={120} />
            <h3>{product.title}</h3>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <p>⭐ {product.rating}</p>
        </div>
    );
};