import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

export const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all'
    })

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('username', {
                    required: {value: true, message: "ім'я обовʼязкове"},
                    // pattern: {
                    //     value: /\w+/,
                    //     message: 'wrong name'
                    // }
                    minLength: {value: 4, message: 'помилка в імені'}
                })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label><input type={'text'} {...register('password', {
                    required: true,
                    minLength: {value: 3, message: 'пароль за короткий'},
                    maxLength: {value: 6, message: 'пароль за довгий'}
                })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label><input type={'number'} {...register('age', {
                    required: true,
                    valueAsNumber: true,
                    min: {value: 6, message: 'за малий вік'},
                    max: {value: 117, message: 'за великий вік'}
                })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>

                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};