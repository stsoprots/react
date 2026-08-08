import {useEffect, useState} from "react";
import type ICart from "../../models/ICart.ts";
import {useParams} from "react-router";
import {cartService} from "../../service/api.service.ts";
import type ICartResponseModel from "../../models/ICartResponseModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";

export const CartsComponent = () => {

    const {userId} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if(userId) {
            cartService.getCartsOfUser(userId)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                })
        }

    }, [userId]);

    return (
        <div>
            {
                carts.map((cart: ICart) => (<CartComponent key={cart.id} cart={cart} />))
            }
        </div>
    );
};