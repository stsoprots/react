import type IUserJsonPl from "../../model/JsonPlaceholder/IUserJsonPl.ts";
import type {FC} from "react";


type UserJsonPlPropType = {
    user: IUserJsonPl;
}

export const JsonUser: FC<UserJsonPlPropType> = ({user}) => {
    return (
        <div>
            <p>{user.id}. {user.name} {user.username}</p>
            <p>email: {user.email}</p>
        </div>
    );
};