import type {FC} from "react";
import type ICart from "../../models/ICart.ts";

type CartPropsType = {
    cart: ICart
}

export const CartComponent: FC<CartPropsType> = ({cart}) => {
    return (
        <div>
            <h2>Корзина №{cart.id}</h2>

            <p>Користувач: {cart.userId}</p>
            <p>Загальна сума: {cart.total} UAH</p>
            <p>Сума зі знижкою: {cart.discountedTotal} UAH</p>
            <p>Кількість товарів: {cart.totalProducts}</p>
            <p>Загальна кількість одиниць: {cart.totalQuantity}</p>
        </div>
    );
};