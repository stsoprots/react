import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.ts";
import type {ICar} from "../../models/ICar.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
        getCars().then((cars) => {
            setCars(cars);
        })
    }, []);


    return (
        <div className="cars-list">
            {
                cars.map((car) => (<CarComponent key={car.id} car={car} />))
            }
        </div>
    );
};