import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";

export const CreateCar = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const createHandler = (data: ICar) => {
        addCar(data)
    }


    return (
        <div>
            <form className="car-form" onSubmit={handleSubmit(createHandler)}>
                <div className="form-field">
                    <input type="text" {...register('brand')}/>
                    <div className="error-msg" >{errors.brand?.message}</div>
                </div>
                <div className="form-field">
                    <input type="number" {...register('price', {valueAsNumber: true})}/>
                    <div className="error-msg" >{errors.price?.message}</div>
                </div>
                <div className="form-field">
                    <input type="number" {...register('year', {valueAsNumber: true})}/>
                    <div className="error-msg">{errors.year?.message}</div>
                </div>
                <button type="submit" disabled={!isValid}>save car</button>
            </form>
        </div>
    );
};