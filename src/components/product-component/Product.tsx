import type {FC} from "react";
import type {ProductModel} from "../../models/ProductResponseDummyjson.ts";

type ProductPropType = {
    product: ProductModel;
}

export const Product: FC<ProductPropType> = ({product}) => {
    return (
        <div className='card'>
            <h2>{product.title}</h2>
            <h3>{product.brand}</h3>

            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Rating:</strong> {product.rating} ⭐</p>
            <p><strong>Stock:</strong> {product.stock} pcs</p>

            {product.discountPercentage && (
                <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            )}

            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Weight:</strong> {product.weight}g</p>

            {product.dimensions && (
                <p>
                    <strong>Dimensions:</strong> {product.dimensions.width}×
                    {product.dimensions.height}×
                    {product.dimensions.depth} cm
                </p>
            )}

            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            <p><strong>Min Order:</strong> {product.minimumOrderQuantity}</p>

            {product.tags.length > 0 && (
                <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
            )}
            <div id='price-wrapper'>
                <p>Price: ${product.price}</p>
            </div>
        </div>
    );
};