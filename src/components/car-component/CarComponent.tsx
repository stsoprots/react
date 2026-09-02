import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";

type PostPropType = {
    car: ICar;
}

export const CarComponent: FC<PostPropType> = ({car}) => {
    return (
        <div>
            <p>{car.id} - {car.brand}</p>
            <hr/>
        </div>
    );
};