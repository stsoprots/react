import userValidator from "../validators/user.validator.ts";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

interface IFormProps {
    username: string,
    password: string,
    age: number,
}

export const FormComponent = () => {

    const {handleSubmit, register, formState: {errors, isValid}} =
        useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label htmlFor='username'>Твоє ім'я:
                    <input type="text" id="username" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label htmlFor='password'>Пароль:
                    <input type="text" id="password" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label htmlFor='age'>Вік:
                    <input type="text" id="age" {...register('age')}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};