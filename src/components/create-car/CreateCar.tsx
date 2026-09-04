import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator.ts";
import {FormField} from "./FormField.tsx";

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
                <FormField name="brand" register={register} errors={errors} />
                <FormField name="price" register={register} errors={errors} />
                <FormField name="year" register={register} errors={errors} />
                <button type="submit" disabled={!isValid}>save car</button>
            </form>
        </div>
    );
};
