import {FormEvent, useState} from "react";

interface IFormProps {
    username: string,
    password: string
}

export const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'foobardddd',
        password: '1111',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            username: formState.username,
            password: formState.password,
        };
        console.log(user);
    }

    // 1 спосіб
    // const handleUsernameChange= (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({ ...formState, username: input.value });
    // }
    //
    // const handlePasswordChange= (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({ ...formState, password: input.value });
    // }

    // 2 спосіб універсальний
    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
            </form>
            <button>send</button>
        </div>
    );
};