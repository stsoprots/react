import type {FC} from "react";
import type {ProductModel} from "../../models/ProductResponseDummyjson.ts";

type ProductPropType = {
    product: ProductModel;
}

export const Product: FC<ProductPropType> = ({product: {thumbnail, title, brand, description, category, price, rating, stock}}) => {
    return (
        <div className='card'>
            <img src={thumbnail} />
            <h2>{title}</h2>
            <h3>{brand}</h3>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <div id='price-wrapper'>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};