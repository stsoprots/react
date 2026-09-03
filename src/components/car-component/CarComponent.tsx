import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";

type PostPropType = {
    car: ICar;
}

export const CarComponent: FC<PostPropType> = ({car}) => {
    return (
        <div className="car-card">
            <h3>{car.brand}</h3>
            <p>Price: {car.price} $</p>
            <p>Year: {car.year}</p>
        </div>
    );
};