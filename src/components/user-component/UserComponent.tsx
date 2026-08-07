import type IUser from "../../models/IUser.ts";
import type {FC} from "react";
import {useNavigate} from "react-router";

type UserPropsType = {
    user: IUser
}

export const UserComponent: FC<UserPropsType> = ({user}) => {

    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }

    return (
        <div className={'my-5'}>
            {user.username}: {user.email}

            <button className={"border-2"} onClick={onButtonClickNavigate}>click me</button>
        </div>
    );
};