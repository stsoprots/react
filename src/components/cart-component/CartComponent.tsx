import type {FC} from "react";
import type ICart from "../../models/ICart.ts";

type CartPropsType = {
    cart: ICart
}

export const CartComponent:FC<CartPropsType> = ({cart}) => {
    return (
        <div>
            {cart.total} UAH
        </div>
    );
};