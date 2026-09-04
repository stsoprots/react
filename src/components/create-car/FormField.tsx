import type {FC} from "react";

type FormFieldProps = {
    name: string,
    register: any,
    errors: any,
}

export const FormField: FC<FormFieldProps> = ({name, register, errors}) => {

    const isNumber = name === 'price' || name === 'year';

    return (
        <div className="form-field">
            <input
                type={isNumber ? 'number' : 'text'}
                {...register(name, isNumber ? {valueAsNumber: true} : undefined)}
            />
            <div className="error-msg">
                {errors[name]?.message}
            </div>
        </div>
    );
};