import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>{user.id}. {user.name}</div>
    );
};